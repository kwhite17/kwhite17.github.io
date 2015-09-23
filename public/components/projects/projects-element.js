ProjectsElement = Polymer({
  is: "projects-element",

  properties: {
    links: {
      type: Object,
      value: function() { return {"appLink": "https://play.google.com/store/apps/details?id=com.ksp.nudge",
       "sourceLink": "https://github.com/kwhite17/Nudge"}; }
    }
  },

  navigate(event) {
    var source = Polymer.dom(event).localTarget;
    window.location.href = this.links[source.getAttribute('name')];
  }
});

new ProjectsElement();
