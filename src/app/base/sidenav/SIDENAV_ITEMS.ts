import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'products',
    labels: {
      en: "Products",
      fr: "Produits"
    },
    link: 'products',
    icon: 'shopping-cart'

  },
  {
    id: 'Admin',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: 'ff',
    icon: 'users'

  }

];