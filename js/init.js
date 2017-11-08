(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('select').material_select();
    $('.datepicker').pickadate({
    selectMonths: false, // Creates a dropdown to control month
    selectYears: false, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
    $('.call-action').pushpin({
    top: 0
  });

    var themeColor ;

// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    themeColor = localStorage.getItem("themeColor");
   if(themeColor == undefined)
   {localStorage.setItem("themeColor", "blue");
    themeColor = 'blue';
    } 
  
} else {
  Materialize.toast("Sorry, your browser does not support Web Storage...", 4000) 
}

      $(".nav-wrapper").css("background-color", themeColor);
      $(".secondary-content>.material-icons").css("color", themeColor);
      $(".btn").css("background-color", themeColor);
      $(".page-footer").css("background-color",themeColor);
      $(".input-field").css("color", themeColor);
      $(".input-field>.material-icons").css("color", themeColor);
      $(".input-field>label").css("color",themeColor);
      $(".dropdown-content>li>a").css("color", themeColor);
      $(".range-field>.thumb").css("background-color", themeColor)


            var themeColor = '#ef6c00';
      $(".nav-wrapper").css("background-color", themeColor);
      $(".secondary-content>.material-icons").css("color", themeColor);
      $(".btn").css("background-color", themeColor);
      $(".page-footer").css("background-color", themeColor);
      $(".input-field").css("color", themeColor);
      $(".input-field>.material-icons").css("color", themeColor);
      $(".input-field>label").css("color", themeColor);
      $(".btn-floating").css("background-color", themeColor);
      $(".dropdown-content>li>a").css("color", themeColor);
      $(".range-field>.thumb").css("background-color", themeColor)

      // Update Theme Color
       if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("themeColor", themeColor);

       } else {
      Materialize.toast("Sorry, your browser does not support Web Storage...", 4000) 
       }

  }); // end of document ready
})(jQuery); // end of jQuery name space