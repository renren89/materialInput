"use strict";

var input = document.querySelectorAll(".input-container");
for (var i = 0; i < input.length; i++) {
  (function(i) {
    let el = input[i].querySelector(".input-label").classList;
    let e = input[i].querySelector(".input-textarea");
  e.addEventListener("click", function() {
    el.add("float-up");
  });
  e.addEventListener("blur", function() {
    if(e.value == "") {
    el.remove("float-up");
  } else {
    return null;
  }
  });
  })(i);
  }
