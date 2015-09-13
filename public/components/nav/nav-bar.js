NavBar = Polymer({
  is: "nav-bar",

  properties: {
    navOptions: {
      type: Object,
      value: function() { return {"Home": "/", "Projects": "/projects",
       "Travel": "/travel","Passions": "/passions", "Blogs": "/blogs"}; }
    }
  },

  navigate(e) {
    var navPage = Polymer.dom(e.srcElement).textContent;
    if (navPage !== undefined) {
      window.location.href = this.navOptions[navPage];
    }
  },

  navigateHome(e) {
    window.location.href = "/";
  },

  getMenuItems(options) {
    return Object.keys(options);
  }
});

new NavBar();
