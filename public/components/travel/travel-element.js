TravelElement = Polymer({
  is: "travel-element",

  properties: {
    links: {
      type: Object,
      value: {"Tokyo": "https://plus.google.com/108019425902173465024/stories/9b801892-3890-319e-a86d-2e10eae89a2f14722f9a261",
       "Europe": "https://www.facebook.com/media/set/?set=a.1922525863718.2118876.1259235021&type=1&l=c44fa05643"}
    }
  },

  attached: function() {
    var nav = document.querySelector('nav-bar');
    var title = nav.querySelector('.pageTitle');
    title.innerHTML = "Travel";
  },

  navigate(event) {
    var source = Polymer.dom(event).localTarget;
    window.location.href = this.links[source.getAttribute('name')];
  }
});

new TravelElement();
