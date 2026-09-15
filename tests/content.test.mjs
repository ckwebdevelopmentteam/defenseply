import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { siteNavigation, siteActions, footerGroups } from "../src/data/site.ts";
const read = (name) =>
  JSON.parse(readFileSync(resolve("src/data", `${name}.json`), "utf8"));
function walk(value, check) {
  if (Array.isArray(value)) value.forEach((item) => walk(item, check));
  else if (value && typeof value === "object")
    Object.entries(value).forEach(([key, item]) => {
      check(key, item);
      walk(item, check);
    });
}
const homeSections = readdirSync("src/components/sections")
  .filter((name) => name.endsWith(".tsx"))
  .map((name) => readFileSync(resolve("src/components/sections", name), "utf8"))
  .join("\n");
function localDestination(href) {
  assert.ok(
    href.startsWith("#") || (href.startsWith("/") && !href.startsWith("//")),
    `Nonlocal link: ${href}`,
  );
  const [path, anchor] = href.split("#");
  if (path?.startsWith("/products/")) {
    assert.ok(
      read("products").some((product) => `/products/${product.slug}` === path),
      `Missing product: ${path}`,
    );
  } else if (path && path !== "/")
    assert.ok(
      existsSync(resolve("src/app", path.slice(1), "page.tsx")),
      `Missing route: ${path}`,
    );
  if (anchor)
    assert.ok(
      homeSections.includes(`id="${anchor}"`),
      `Missing homepage anchor: ${anchor}`,
    );
}
test("homepage content has existing local assets and valid local destinations", () => {
  for (const name of ["about", "brands", "products", "colors", "gallery"])
    walk(read(name), (key, value) => {
      if (key === "href") localDestination(value);
      if (
        ["image", "hoverImage", "src", "fullImage", "logo"].includes(key) &&
        value
      ) {
        assert.ok(
          value.startsWith("/assets/"),
          `${name}: nonlocal asset ${value}`,
        );
        assert.ok(
          existsSync(resolve("public", value.slice(1))),
          `${name}: missing ${value}`,
        );
      }
    });
});
test("shared navbar, actions and footer link to implemented destinations", () => {
  for (const item of [
    ...siteNavigation,
    ...siteActions,
    ...footerGroups.flatMap((group) => group.links),
  ])
    localDestination(item.href);
  assert.equal(
    new Set(siteNavigation.map((item) => item.name)).size,
    siteNavigation.length,
  );
});
test("homepage section anchors are unique", () => {
  const anchors = [...homeSections.matchAll(/<[a-z][^>]*\bid="([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert.equal(new Set(anchors).size, anchors.length);
});

test("catalog entries have unique slugs and complete card/gallery data", () => {
  const products = read("products");
  assert.equal(new Set(products.map((p) => p.slug)).size, products.length);
  for (const product of products) {
    assert.ok(
      product.title && product.card.image && product.gallery.length,
      product.slug,
    );
    assert.ok(product.specs && product.applications.length, product.slug);
  }
});

// Future application images are optional; the server resolves absent files to placeholders.
test("application content maps complete galleries to valid catalog products", () => {
  const applications = read("applications");
  const slugs = new Set(read("products").map((p) => p.slug));
  assert.equal(applications.length, 6);
  assert.equal(
    new Set(applications.map((a) => a.slug)).size,
    applications.length,
  );
  for (const application of applications) {
    assert.ok(application.gallery.length > 3, application.slug);
    assert.equal(
      new Set(application.gallery.map((image) => image.id)).size,
      application.gallery.length,
    );
    for (const slug of application.products) assert.ok(slugs.has(slug), slug);
    assert.ok(
      existsSync(resolve("public/assets/applications", application.slug)),
    );
    for (const image of application.gallery) {
      assert.ok(image.alt && image.caption && image.title);
      assert.equal(
        image.image,
        `/assets/applications/${application.slug}/${image.id}.webp`,
      );
    }
  }
});
