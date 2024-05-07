import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Menu-item-products',
    labels: {
      en: "Products",
      fr: "Produits"
    },
    link: 'products',
    icon: 'shopping-cart'

  },
  {
    id: 'Menu-item-admin',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: 'ff',
    icon: 'users'

  }

];