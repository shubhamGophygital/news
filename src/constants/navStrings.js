const navConstants = {
  HOME: "/",
  SOURCES: "/sources",
  //   PROJECTS: "/projects",
  //   RESOURCES: "/resources",
  getNavlinks: function () {
    return [
      { label: "Home", path: this.HOME },
      { label: "Sources", path: this.SOURCES },
      //   { label: "Projects", path: this.PROJECTS },
      //   { label: "Resources", path: this.RESOURCES },
    ];
  },
};

export default navConstants;
