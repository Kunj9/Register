# Membership Registration Form
This is a simple membership registration form implemented using HTML and JavaScript. The form collects user information and membership preferences, allowing users to submit their details. 

## Usage
1. Open the HTML page in a web browser.
2. Fill out the registration form as follows:
   - Enter your email address.
   - Set a password (at least 6 characters).
   - Select your membership type (individual or corporate).
   - If you select "corporate," provide the company name.
3. Click the "Submit" button to send your registration.

## Features
- **User-Friendly Form**: The registration form provides a user-friendly interface for users to enter their information.
- **Membership Type**: Users can choose between "individual" and "corporate" membership types. If the "corporate" option is selected, the company name input field becomes enabled.
- **Validation**: The form includes validation for required fields and password length (at least 6 characters).

## Form Flow
- The form initializes with the email field focused.
- If "corporate" is selected, the company name field becomes enabled.
- Upon submission, the form performs validation on the email, password, and, if applicable, the company name. If any validation fails, an error message is displayed, and the form submission is prevented.

## Additional Information
This code uses jQuery, a fast, small, and feature-rich JavaScript library. You can find the jQuery library included in the HTML page for simplifying DOM manipulation and event handling.
