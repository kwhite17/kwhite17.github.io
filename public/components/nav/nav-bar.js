NavBar = Polymer({
  is: "nav-bar",

  properties: {
    navOptions: {
      type: Object,
      value: function() { return ["Home", "Projects", "Travel",
       "Passions", "Blogs"];}
    },

    route: {
      type: String,
      observer: "_routeChanged"
    }
  },

  attached: function() {
    this.route = this.route ? this.route : "Home";
  },

  _routeChanged(newValue, oldValue) {
    this.$$('.pageTitle').innerHTML = newValue;
    this.$$('paper-drawer-panel').closeDrawer();
  },

  computeLink(route) {
    return "#".concat(route);
  }
});

new NavBar();
