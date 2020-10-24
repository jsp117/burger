$(function () {
  // eat burger function
  $(".eatBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("burgerid");
    // eat ajax call
    $.ajax("/api/eat/" + id, {
      type: "PUT"
    }).then(
      function () {
        // console.log("Moved ", id);
        location.reload();
      }
    );
  });
  // trash burger function
  $(".trashBurger").on("click", function (event) {
    event.preventDefault();
    // console.log("WORKING");
    var id = $(this).data("eatenid");
    // trash ajax call
    $.ajax("/api/trash/" + id, {
      type: "DELETE"
    }).then(
      function () {
        // console.log("Deleted ", id);
        location.reload();
      }
    );
  });
  // add burger function
  $("#addBurger").on("submit", function (event) {
    event.preventDefault();
    var burger = {
      name: $("#add-burger").val().trim()
    };
    // add ajax call
    $.ajax("/api/add/", {
      type: "POST",
      data: burger
    }).then(
      function () {
        // console.log("Added burger ", burger.name);
        location.reload();
      }
    );
  });
});