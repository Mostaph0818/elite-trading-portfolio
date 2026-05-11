import siteData from "@/content/site.json";
import servicesData from "@/content/services.json";
import statsData from "@/content/stats.json";
import imagesData from "@/content/images.json";

export const SITE = siteData;
export const SERVICES = servicesData.items;
export const STATS = statsData.items;
export const IMAGES = imagesData;

export const NAV_ITEMS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "خدماتنا", href: "#services" },
  { label: "تواصل", href: "#contact" },
] as const;

export type Service = (typeof SERVICES)[number];
