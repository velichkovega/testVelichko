//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/typed.js/lib/typed.min.js

window.onload = function() {
    var typed = new Typed(".element", {
        // Waits 1000ms after typing "First"
        strings: ["BE SURE YOU PUT YOUR FEET"],
        showCursor: false,
        onComplete: function (self) {
            new Typed(".in-the", {
                // Waits 1000ms after typing "First"
                strings: ["in the right place."],
                showCursor: false
              });
        }
      });
}


  