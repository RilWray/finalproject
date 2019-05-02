//beginning of jquery functions
$(function() {
  //starts by appending use instructions to the console box
  $("#console-box").append("Select a term and year, then press submit.");
  $("li").click(function() {
    $(this)
      .toggleClass("selected")
      .siblings()
      .removeClass("selected");
    //the above function will toggle the "selected" class on any list item
  });
  //the below function is called when the action class is used, in this case it is the submit button.
  $(".action").click(function() {
    var yearThousand = parseInt(
      $(".year-thousands-box")
        .filter(".selected")
        .text()
    );
    var yearOne = parseInt(
      $(".year-ones-box")
        .filter(".selected")
        .text()
    );
    var year = yearThousand + yearOne;
    //above the variables yearThousand, yearOne, and year are declared and given values. yearThousand and yearOne parse the corresponding year box with the "selected" class. Finally both values are added and passed to year.
    $("#console-box").append(
      "<br> You have selected " +
        $(".term-box")
          .filter(".selected")
          .text()
    );
    $("#console-box").append(" " + year + ".");
  });
  //above appends the selection statement and the selected term, as well as the new variable year.
});