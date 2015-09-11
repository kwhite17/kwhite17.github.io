BlogsElement = Polymer({
  is: "blogs-element",

  attached: function() {
    var nav = document.querySelector('nav-bar');
    var title = nav.querySelector('.pageTitle');
    title.innerHTML = "Blogs";
  },

  navigate() {
    window.location.href="http://katanakdubs.tumblr.com";
  }
});

new BlogsElement();
