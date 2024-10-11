const navConstants = {
  HOME: "/",
  CONTACT: "/contact",
  //   PROJECTS: "/projects",
  //   RESOURCES: "/resources",
  getNavlinks: function () {
    return [
      { label: "Home", path: this.HOME },
      { label: "Contact", path: this.CONTACT },
      //   { label: "Projects", path: this.PROJECTS },
      //   { label: "Resources", path: this.RESOURCES },
    ];
  },
};

export default navConstants;
