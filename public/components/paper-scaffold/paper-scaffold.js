PaperScaffold = Polymer({
  is: "paper-scaffold",

  properties: {
    navOptions: {
      type: Object,
      value: function() {
        return ["Home", "Projects", "Travel",
          "Passions", "Blogs"
        ];
      }
    },

    route: {
      type: String,
      observer: "_routeChanged"
    }
  },

  attached: function() {
    this.route = this.route ? this.route : "Home";
  },

  _routeChanged: function(newValue, oldValue) {
    this.$$('.pageTitle').innerHTML = newValue;
    this.$$('paper-drawer-panel').closeDrawer();
  },

  computeLink: function(route) {
    return "#".concat(route);
  }
});

new PaperScaffold();
