HomeElement = Polymer({
  is: "home-element",

  attached: function() {
    var nav = document.querySelector('nav-bar');
    var title = nav.querySelector('.pageTitle');
    title.innerHTML = "Welcome!";
  }
});

new HomeElement();
