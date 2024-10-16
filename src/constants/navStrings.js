const navConstants = {
  HOME: "/",
  CATEGORIES: "/categories",
  CATEGORY: "/category",
  get CATEGORY_NAME() {
    return `${this.CATEGORIES}/:category`;
  },
  SOURCES: "/sources",
  get NAVLINKS() {
    return [
      { label: "Home", path: this.HOME },
      { label: "Categories", path: this.CATEGORIES },
      { label: "Sources", path: this.SOURCES },
      //   { label: "Resources", path: this.RESOURCES },
    ];
  },
};

export default navConstants;
