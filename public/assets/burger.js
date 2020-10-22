$(".eatBurger").on("click", function(event) {
    event.preventDefault();
    console.log("WORKING");
    var id = $(this).data("burgerid");


    $.ajax("/api/eat/" + id, {
      type: "POST"
    }).then(
      function() {
        console.log("Moved ", id);
        location.reload();
      }
    );
  });