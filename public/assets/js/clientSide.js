// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $('.change-eaten').on('click', function (event) {
    const id = $(this).data('id');
    const newEaten = $(this).data('neweaten');
    //  FOR DEBUGGING
    // console.log('clientSide.js change-eaten', {id});
    // console.log('clientSide.js change-eaten', {newEaten});
    const newEatenState = {
      eaten: newEaten
    };
    // console.log('clientSide.js change-eaten', {newEatenState});
    // Send the PUT request.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newEatenState
    }).then(() => {
      console.info(`changed devoured to ${newEaten}`);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.delete-burger').on('click', function (event) {
    const id = $(this).data('id');
    //  FOR DEBUGGING
    // console.log('clientSide.js delete-burger', {id});

    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, { type: 'DELETE' }).then(() => {
      console.info(`Deleted ${id}`);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.create-form').on('submit', (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $('#burgName').val().trim()
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
      console.info('created new burger');
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
