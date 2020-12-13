document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  document.addEventListener("DOMContentLoaded", function(){
      idTarget = document.querySelector("#text")
      idTarget.textContent = "This is really cool!"

  })