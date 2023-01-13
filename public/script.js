// TODO: Wire up the app's behavior here.

/**  Make UVU ID visible only after course selection has been made **/
// Get references to the form elements
var courseSelect = document.getElementById('course');
var studentIdInput = document.getElementById('uvuId');

// Hide the student ID input field by default
studentIdInput.style.display = 'none';

// Add an event listener to the course select form
courseSelect.addEventListener('change', function () {
  // Check if a course has been selected
  if (courseSelect.value !== '') {
    // Show the student ID input field
    studentIdInput.style.display = 'block';
  } else {
    // Hide the student ID input field
    studentIdInput.style.display = 'none';
  }
});

// Dynamically display data within form>select element
const select = document.getElementById('course');

fetch(
  'https://jsonservere5wv4m-jam2--3000.local-credentialless.webcontainer.io/api/v1/courses'
)
  .then((response) => response.json())
  .then((data) => {
    // Create an option element for each course
    data.forEach((course) => {
      const option = document.createElement('option');
      option.value = course.id;
      option.textContent = course.display;
      select.appendChild(option);
    });
    select.options[0].selected = false;
  })
  .catch((error) => {
    console.error('Error fetching courses:', error);
  });

// NOTE: The TODOs are listed in index.html
