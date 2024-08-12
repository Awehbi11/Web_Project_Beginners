function login() {
    // Get the username/email input value
    var emailInput = document.querySelector('input[type="text"]');
    var email = emailInput.value;

    // Extract the first 5 letters from the email
    var firstFiveLetters = email.substring(0, 6);

    // Display the welcome message
    alert("Welcome back! We missed you, " + firstFiveLetters + "!");

    // Clear the input fields
    emailInput.value = '';
    document.querySelector('input[type="password"]').value = '';
  }