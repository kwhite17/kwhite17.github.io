PassionsElement = Polymer({
  is: "passions-element",

  properties: {
    links: {
      type: Object,
      value: function() { return {"iv": {"Home Page": "http://www.intervarsity.org/",
      "Donate": "https://donate.intervarsity.org/donate" },
      "323": {"Home Page": "http://323fortheking.wix.com/323fortheking",
      "Donate": "http://323fortheking.wix.com/323fortheking#!give/c125g"}}; }
    }
  },

  attached: function() {
    var nav = document.querySelector('nav-bar');
    var title = nav.querySelector('.pageTitle');
    title.innerHTML = "Passions";
  },

  navigate(event) {
    var source = Polymer.dom(event).localTarget;
    var text = source.querySelector('paper-material').innerHTML.trim();
    window.location.href = this.links[source.getAttribute('name')][text];
  }
});

new PassionsElement();
