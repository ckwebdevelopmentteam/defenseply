export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
  children?: NavSubItem[];
}

export const siteNavigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/#products",
    children: [
      { title: "PVC Foam Boards", href: "/products/pvc-foam-boards", description: "Lightweight, moisture-immune & durable" },
      { title: "PVC Colour Boards", href: "/products/pvc-colour-boards", description: "Vibrant solid color polymer boards" },
      { title: "WPC Boards", href: "/products/wpc-boards", description: "High-density wood-polymer composites" },
      { title: "PVC Doors & Frames", href: "/products/pvc-doors-and-door-frames", description: "100% waterproof residential doors" },
      { title: "All Products", href: "/#products", description: "Explore the complete Defenseply collection" },
    ],
  },
  {
    name: "Applications",
    href: "/#applications",
    children: [
      { title: "Interiors & Modular Kitchens", href: "/applications/interiors", description: "Kitchens, wardrobes & living partitions" },
      { title: "Commercial Spaces", href: "/applications/commercial", description: "High-traffic & hospitality environments" },
      { title: "Creative & Signage", href: "/applications/creative", description: "CNC routing, 3D cutting & displays" },
      { title: "All Applications", href: "/#applications", description: "Explore all application spaces" },
    ],
  },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/contact-us" },
];

export const footerGroups = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Products", href: "/#products" },
      { name: "Projects", href: "/#gallery" },
      { name: "Contact us", href: "/contact-us" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Customer support", href: "/contact-us" },
      { name: "Delivery details", href: "/contact-us" },
      { name: "Terms & conditions", href: "/contact-us" },
      { name: "Privacy policy", href: "/contact-us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Material guide", href: "/#products" },
      { name: "Project inspiration", href: "/#gallery" },
      { name: "Design journal", href: "/#gallery" },
      { name: "Visit our showroom", href: "/contact-us" },
    ],
  },
];

export const socialLinks = [
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Twitter", icon: "twitter" },
  { name: "YouTube", icon: "youtube" },
];
