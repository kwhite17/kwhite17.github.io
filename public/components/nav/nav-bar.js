NavBar = Polymer({
  is: "nav-bar",

  properties: {
    navOptions: {
      type: Object,
      value: [{"pageName": "Home", "pageLink": "/"},
                    {"pageName": "Projects", "pageLink": "/projects"},
                    {"pageName": "Travel", "pageLink": "/travel"},
                    {"pageName": "Passions", "pageLink": "/passions"},
                    {"pageName": "Blogs", "pageLink": "/blogs"}]
    }
  },

  navigate(e) {
    var model = e.model;
    if (model !== undefined){
      var item = model.item;
      if (item !== undefined) {
        window.location.href = item.pageLink;
      }
    }
  },

  navigateHome(e) {
    window.location.href = "/";
  }
});

new NavBar();
