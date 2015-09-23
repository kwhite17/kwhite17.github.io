NavBar = Polymer({
  is: "nav-bar",

  properties: {
    navOptions: {
      type: Object,
      value: function() { return {"Home": 0, "Projects": 1,
       "Travel": 2,"Passions": 3, "Blogs": 4}; }
    },

    selected: {
      type: Number,
      value: 0
    }
  },

  navigate(e) {
    var navPage = Polymer.dom(e.srcElement).textContent;
    if (navPage !== undefined) {
      this.$$('.pageTitle').innerHTML = navPage;
      this.selected = this.navOptions[navPage];
    }
  },

  navigateHome(e) {
    this.$$('#controller').selected = this.navOptions[navPage];
  },

  getMenuItems(options) {
    return Object.keys(options);
  }
});

new NavBar();
