// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  console.log('js file')
  $(document).on("click" ,".save-btn", function(event) {
    console.log('submit hit')
    event.preventDefault();
    // var id = $(this).data("id");
    var newBurger = {burger_name: $('#createBurger').val().trim()}

    // var newSleepState = {
    //   sleepy: newSleep
    // };

    // Send the PUT request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    )

  

//   $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
  })

  $(document).on("click",".devour-burger", function(event) {
    // Make sure to preventDefault on a submit event.
    // event.preventDefault();

    var id = $(this).data("id");
    var devoured = $(this).data("newdevour");
    var newBurgerState = { devoured: true}
    console.log("about to update", id)
    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log(devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})
