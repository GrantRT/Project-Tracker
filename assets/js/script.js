// TODO (Task 2.2): Select and save references to every DOM element we will interact with

// handle displaying the time
function displayTime() {
  // TODO (Task 1.1): Calculate and output the time to the appropriate element
  setInterval(function () {
    $('#current-time').html(moment().format('MMM, DD, YYYY, h:mm:ss'));
  }, 1000);
}

displayTime();

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  // TODO (Task 3.2): Create a new row
  // TODO (Task 3.3 & 3.4): Create a table detail (<td>) element for each of the table columns created in Task 1.
  // TODO (Task 3.6): Append the new columns to the new row, then append the row to the DOM
  // TODO (Task 3.7): Close the modal
}

function calculateTotalEarnings(rate, days) {
  // TODO (Task 3.5): Implement
}

function handleDeleteProject(event) {
  // TODO (Task 4.3): Implement
}

// handle project form submission
function handleProjectFormSubmit(event) {
  // TODO (Task 2.4): Invoke the function for displaying the new project, using the values from the form
}

// TODO (Task 2.3): Attach a submit event listener to the <form> element using jQuery

// TODO (Task 4.3): Use jQuery event delegation to attach an event listener to each delete button
