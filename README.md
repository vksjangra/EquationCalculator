# Equation Calculator

## A simple web-app to calculte the roots of quadratic and cubic equations.

#### Video Demo: https://youtu.be/ri2w3KE1_ng

Equation calculator is a simple web app with flask that lets you calculate the quadratic and cubic equtions with sufficient accuracy. It is designed to handle euqations with real as well as imaginary roots.
It handles the inputs considering the base cases like zero in the denominator or no inputs for x terms or all the x term coefficients are zero.

The input equation is displayed in the proper mathematical format with its solutions. Here are some implementation details about the files which are used in the project:

##### MathJax 2.7
MathJax is a JavaScript display engine for mathematics that works in all browsers. It is used to display the input equation in the proper mathematical form. It works with ASCII math and is very easy to use. Version 3 doesn't support ASCII maths inputs yet and hence version 2.7 is used instead.

##### Numpy
Numpy is a library which provides mathemical operations with great accuracy which is more than sufficient for this project. Basic oprations sqrt and cbrt, basic functions cos and arccos and constant pi are used from Numpy in this project.
