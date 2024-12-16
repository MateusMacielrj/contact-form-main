document.getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

   
    var form = document.getElementById("contact-form");

  
    form.reset();

  
    var toast = document.getElementById("toast");
    toast.className = "toast show";

  
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  });
