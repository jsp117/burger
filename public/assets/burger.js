$(function () {
  $(".eatBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("burgerid");


    $.ajax("/api/eat/" + id, {
      type: "PUT"
    }).then(
      function () {
        console.log("Moved ", id);
        location.reload();
      }
    );
  });

  $(".trashBurger").on("click", function (event) {
    event.preventDefault();
    console.log("WORKING");
    var id = $(this).data("eatenid");


    $.ajax("/api/trash/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("Deleted ", id);
        location.reload();
      }
    );
  });

  $("#addBurger").on("submit", function (event) {
    event.preventDefault();

    var burger = {
      name: $("#add-burger").val()
    };

    $.ajax("/api/add/", {
      type: "POST",
      data: burger
    }).then(
      function () {
        console.log("Added burger ", burger.name);
        location.reload();
      }
    );
  });
});