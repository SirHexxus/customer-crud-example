/** @format */

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $('.change-active').on('click', function (e) {
    const id = $(this).data('id');
    const newActive = $(this).data('newactive');
    //  FOR DEBUGGING
    console.log('clientSide.js change-active', { id });
    console.log('clientSide.js change-active', { newActive });
    const newActiveState = {
      active_customer: newActive
    };
    console.log('clientSide.js change-active', { newActiveState });
    // Send the PUT request.
    $.ajax(`/api/customers/${id}`, {
      type: 'PUT',
      data: newActiveState
    }).then(() => {
      console.info(`changed active_customer to ${newActive}`);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.delete-customer').on('click', function (e) {
    const id = $(this).data('id');
    //  FOR DEBUGGING
    // console.log('clientSide.js delete-burger', {id});

    // Send the DELETE request.
    $.ajax(`/api/customers/${id}`, { type: 'DELETE' }).then(() => {
      console.info(`Deleted ${id}`);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.create-form').on('submit', (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newCustomer = {
      name: $('#customerName').val().trim(),
      busAddress: $('#businessAddress').val().trim(),
      billAddress: $('#billingAddress').val().trim(),
      contact: $('#contactName').val().trim(),
      rate: $('#serviceRate').val().trim()
    };

    //  FOR DEBUGGING
    console.log({ newCustomer });

    // Send the POST request.
    $.ajax('/api/customers', {
      type: 'POST',
      data: newCustomer
    }).then(() => {
      console.info('created new customer');
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
