import geome7ricLogo from "./extensions/images/geome7ric.png";

const config = {
  locales: ["es"],
  defaultLocale: "es",
  translations: {
    es: {
      "app.components.LeftMenu.navbrand.title": "Panel de control",
    },
  },
  auth: {
    logo: geome7ricLogo,
  },
  menu: {
    logo: geome7ricLogo,
  },
  head: {
    favicon: geome7ricLogo,
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
