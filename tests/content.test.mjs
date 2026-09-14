import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
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
test("editable content uses existing local assets and inert destinations", () => {
  for (const name of [
    "brands",
    "collections",
    "colors",
    "spaces",
    "gallery",
    "navigation",
    "menu-panels",
  ]) {
    walk(read(name), (key, value) => {
      if (key === "href")
        assert.equal(value, "#", `${name}: outbound destination`);
      if (["image", "fullImage", "logo"].includes(key) && value) {
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
  }
});
test("every submenu reference resolves and every panel has content", () => {
  const panels = read("menu-panels");
  for (const cards of Object.values(read("navigation"))) {
    for (const card of cards)
      if (card.submenu) assert.ok(panels[card.submenu], card.submenu);
  }
  for (const [id, panel] of Object.entries(panels)) {
    assert.ok(panel.columns.length, id);
    for (const column of panel.columns)
      for (const group of column.groups)
        assert.ok(group.items.length, `${id}: empty group`);
  }
});
test("footer groups have unique identifiers and links", () => {
  const groups = read("footer");
  assert.equal(new Set(groups.map((group) => group.id)).size, groups.length);
  for (const group of groups) assert.ok(group.title && group.links.length);
});
