import { servicesData, ServiceCategory, ServiceItem, ServiceSubgroup } from "./services";

export interface FlatServiceItem extends ServiceItem {
  categoryTitle: string;
  categorySlug: string;
  categoryNumber: string;
  subgroupName?: string;
}

export function getAllServiceItems(): FlatServiceItem[] {
  const result: FlatServiceItem[] = [];

  servicesData.forEach((cat) => {
    if (cat.subgroups) {
      cat.subgroups.forEach((sub) => {
        sub.items.forEach((item) => {
          result.push({
            ...item,
            categoryTitle: cat.title,
            categorySlug: cat.slug,
            categoryNumber: cat.number,
            subgroupName: sub.name,
          });
        });
      });
    }

    if (cat.items) {
      cat.items.forEach((item) => {
        result.push({
          ...item,
          categoryTitle: cat.title,
          categorySlug: cat.slug,
          categoryNumber: cat.number,
        });
      });
    }

    if (cat.additionalItems) {
      cat.additionalItems.forEach((item) => {
        result.push({
          ...item,
          categoryTitle: cat.title,
          categorySlug: cat.slug,
          categoryNumber: cat.number,
          subgroupName: "Power Platform & Automation",
        });
      });
    }
  });

  return result;
}

export function getServiceItemBySlug(slug: string): FlatServiceItem | undefined {
  const all = getAllServiceItems();
  return all.find((item) => item.id === slug);
}
