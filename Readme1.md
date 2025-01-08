 
 
 MerryMystery is a festive and interactive Secret Santa website, designed to make holiday gift exchanges effortless and fun. Built using HTML, CSS, and JavaScript, this platform automates the process of organizing a Secret Santa event while offering a user-friendly and visually appealing interface.

 ________________________________________________________________________________________________________
 ________________________________________________________________________________________________________

Website Structure

The website consists of multiple pages, each serving a specific purpose:

_________________________________________________________________________________________________________

Home Page:

Features a vibrant red-themed header (#B22222) with the MerryMystery logo and holiday-themed decorations.
Includes a brief welcome message and instructions for using the platform.
A button that leads users to start organizing their Secret Santa event.

    How It Works:

    Explains the steps for using MerryMystery in detail:

    -Users enter their own email, along with the names and emails of their friends.
    -Specify the number of players using an input field.
    -Submit the form, triggering the random assignment of recipients.
    -Emails are sent to all participants with their assigned gift recipient.

_________________________________________________________________________________________________________

Setup Page:

Contains a dynamic form for entering participant information (name and email) and specifying the number of players.
Validates email input using the validateEmails() function to ensure all entries are correct.
A submission button that activates the backend JavaScript functions for assignments and email sending.

_________________________________________________________________________________________________________

Confirmation Page:

Displays a "Thank You" message after successful email dispatch.
Option to return to the home page or start a new game.
Color Palette


_________________________________________________________________________________________________________
_________________________________________________________________________________________________________

The website's holiday-inspired design includes the following colors:


Primary Red: #B22222 (Firebrick) – Used for headers, buttons, and other key elements.

Accent Green: #228B22 (Forest Green) – Used for decorative accents and icons.

Background: #FFFAF0 (Floral White) – Creates a warm and welcoming atmosphere.

Text: #000000 (Black) – For high readability.

_________________________________________________________________________________________________________
_________________________________________________________________________________________________________

JavaScript Functionality

The JavaScript code is well-documented and enables the key features of the website:


validateEmails(): Ensures that all email inputs follow the correct format.

assignSecretSanta(): Implements a randomization algorithm to assign each participant a recipient without duplicates.

sendAssignments(): Automates the email dispatch process using predefined templates to notify participants of their assigned recipient.

clearForm(): Resets the input fields after submission.

_________________________________________________________________________________________________________
_________________________________________________________________________________________________________

Development Highlights


Responsiveness: The website is designed to adapt to various screen sizes, ensuring accessibility on both desktop and mobile devices.

User Experience: Clear navigation, concise instructions, and festive design elements create an enjoyable and intuitive experience for users.

Automation: The backend logic streamlines the organization process, reducing manual work for participants.
