

export const routes = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "My Account",
    link: "/my-account",

    subRoutes: [
      {
        name: "My Meal Plan",
        link: "/my-account/meal-plan",
      },

      {
        name: "My subscription",
        link: "/my-account/subscription",
      },
    ],
  },
  {
    name: "Blog",
    link: "/blog",
  },

  {
    name: "About Us",
    link: "/about",
  },

  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "Review",
    link: "/review",
  },
  {
    name: "Terms & Policies",
    link: "/policy",

    subRoutes: [
      {
        name: "Refund policy",
        link: "/policy/refund-policy",
      },

      {
        name: "Privacy Policy",
        link: "/policy/privacy",
      },
      {
        name: "Terms of service",
        link: "/policy/service",
      },
      {
        name: "Cookie policy",
        link: "/policy/cookies",
      },
    ],
  },
];
