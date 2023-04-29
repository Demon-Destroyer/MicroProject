------------Student Enrollment Form--------------

This is a simple HTML form for enrolling students, which allows the user to enter a student's roll number, name, class, birth date, address and enrollment date if the roll number is not already present and if the roll number is already present it retrieve their details from a database. The retrieved data is displayed in the form, and the user can then update or resent the data.

-----------Getting Started---------------------

To use this form, you need to have an internet connection and a web browser. The form requires jQuery and Bootstrap libraries.

-------------Usage-------------------------------

To use the form, follow these steps:

Enter the student's roll number in the "Roll-No" field.
The student's details will automatically populate in the form fields if the data is available in the database.
The form includes the following fields:
Student Name,
Class,
Birth-Date,
Address,
Enrollment-Date.

To save the data, click the "Save" button. To update the data, click the "Update" button.
To reset the form, click the "Reset" button.


-------------Customization----------------

If you want to modify the form or add new features, you can edit the HTML code directly. You can also modify the included JavaScript code to change the form behavior.


-------------Dependencies-------------------
This form requires the following dependencies:

jQuery v3.5.1
Bootstrap v3.4.1
These libraries are included via CDN links, so you don't need to install them separately.


------------Data Source---------------------

The form retrieves data from a remote database using the following API:

http://api.login2explore.com:5577/api/irl
The data is stored in the following database and table:

Database: SCHOOL-DB
Table: STUDENT-TABLE
