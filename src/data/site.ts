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
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  // { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

export const footerGroups = [
  {
    title: "Corporate",
    links: [
      { name: "Corporate Governance", href: "/about" },
      { name: "Board of Directors", href: "/about" },
      { name: "Sustainability & ESG", href: "/about" },
      { name: "Careers & Human Capital", href: "/contact-us" },
    ],
  },
  {
    title: "Divisions & Media",
    links: [
      { name: "Advanced Polymers SBU", href: "/products" },
      { name: "Building Materials SBU", href: "/products" },
      { name: "Global Supply Chain & Trade", href: "/contact-us" },
      { name: "Media Center & Press Releases", href: "/#news" },
    ],
  },
  {
    title: "Infrastructure",
    links: [
      { name: "KINFRA Industrial Park Plant", href: "/about" },
      { name: "Global Port Logistics Network", href: "/#infrastructure" },
      { name: "Center of Excellence R&D", href: "/#innovation" },
      { name: "Contact Corporate Headquarters", href: "/contact-us" },
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
