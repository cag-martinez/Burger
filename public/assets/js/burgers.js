// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("click", function(event) {
    event.preventDefault();
    // var id = $(this).data("id");
    var newBurger = {burger_name: $('#createBurger').val().trim()}

    // var newSleepState = {
    //   sleepy: newSleep
    // };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id,{
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        console.log("added a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    )

  $(".devour-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $(this).data("id");
    var devour = $(this).data("newdevour")
    var newState = { devoured: true}

    // Send the POST request.
    $.ajax("/api/burgers" + id, {
      type: "POST",
      data: newState
    }).then(
      function() {
        console.log(devour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
})
