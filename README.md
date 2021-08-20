# Equation Calculator
#### Description: A simple web-app to calculte the roots of quadratic and cubic equations.
#### Video Demo: https://youtu.be/ri2w3KE1_ng

Equation calculator is a simple web app with flask that lets you calculate the quadratic and cubic equtions with sufficient accuracy. It is designed to handle euqations with real as well as imaginary roots.
It handles the inputs considering the base cases like zero in the denominator or no inputs for x terms or all the x term coefficients are zero.

The input equation is displayed in the proper mathematical format with its solutions. Here are some implementation details about the files which are used in the project:

##### MathJax 2.7
MathJax is a JavaScript display engine for mathematics that works in all browsers. It is used to display the input equation in the proper mathematical form. It works with ASCII math and is very easy to use. Version 3 doesn't support ASCII maths inputs yet and hence version 2.7 is used instead.

##### Numpy
Numpy is a library which provides mathemical operations and oprations with great accuracy which is more than sufficient for this project. Basic oprations sqrt and cbrt, basic functions cos and arccos and constant pi are used from Numpy. 

##### script.js
The javascript file contains the forms which are dynamically displayed based on the type of equation user selected. It checks for the input.
If any of the denominator contains zero, the form is prevented from submition and the user is made aware that the equation is invalid. Likewise, if all the x term coefficients are zero or not entered, the alert is displayed and the form submission is cancelled.

##### layout.html
The HTML file contains the nav-bar, head, body and footer tags of the page. All the other pages are built upon this simple layout. It includes all the scripts and the bootstrap library.

##### index.html
Simple homepage to choose between quadratic or cubic equations.

##### quadratic.html
It contains a dropdown menu to choose between the two equation types an ddynamically displays the form according to the selection made by the user.
After the form is submitted, if the equation is not invalid as checked by the script.js, the equation and its solutions are displayed in the mathematical form.

##### cubic.html
It is more or less the same as the quadratic.html expect it handles the cubic equtaions.

##### app.py
It is the python file where all the algorithms to solve the equations are implemented. Flask is used to make this web-app. Based on the page, it gets the inputs from the HTML page and call the functions which return the solutions to those inputs.
Quadratic equation solver can handle the linear equation without x^2 terms and similarily Cubic equation solver can handle the linear as well as quadratic equations without x^3, x^2 terms and without x^3 term respectively.
