// Get the form element
const form = document.getElementById('translitForm');

// Attach a submit event listener to the form
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting
  // Get the value of the clicked button
  const buttonValue = event.submitter.value;
  const text = document.getElementById('text').value
  console.log(text)
  // Modify the action URL based on the button value
  form.action = '/translit/' + buttonValue + '/' + text;


  // Submit the form
  form.submit();
});