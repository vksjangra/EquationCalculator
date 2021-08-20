from enum import unique
from re import UNICODE
from flask import Flask
from flask import render_template
from flask import request
from werkzeug.utils import redirect
from fractions import Fraction
import decimal

# numpy library for mathematical operations
from numpy import cbrt, arccos, pi
from numpy import cos, sqrt

app = Flask(__name__)

# Simple static homepage
@app.route("/")
def home():
    return render_template("index.html")

# Quadratic Equation
@app.route('/quadratic', methods=["GET","POST"])
def quadratic():

    inputs = {}

    # Initialize empty dict inputs
    for i in range(ord('a'), ord('h') + 1):
        inputs[chr(i)] = 0

    if request.method == "GET":
        # HTML content hidden with display="none" when the page is visited.
        return render_template("quadratic.html",inputs=inputs, display = "none")

    else:

        # Get inputs from user
        for i in range(ord('a'), ord('h') + 1):
            if request.form.get("input_" + chr(i)):
                inputs[chr(i)] = float(request.form.get("input_" + chr(i)))
            elif i < ord('e'):
                inputs[chr(i)] = 0
            else:
                inputs[chr(i)] = 1
        
        # Assign the dict containing solution strings of inputs to solutions
        solutions = quad_solver(inputs)

        # Check if Constant terms have fractional coefficients
        if (inputs['d'] != 0) and ((inputs['h'] != 1) or (inputs['g'] != 1)):

            c = inputs['c']
            d = inputs['d']
            g = inputs['g']
            h = inputs['h']

            frac = (Fraction(c) / Fraction(g)) - (Fraction(d) / Fraction(h))

            inputs['c'] = Fraction(frac).numerator
            inputs['g'] = Fraction(frac).denominator

        # If non fractional coefficeints
        else:
            inputs['c'] = inputs['c'] - inputs['d']
        
        # Makes the denominators of cofficients non negative
        if inputs['e'] < 0:
            inputs['a'] = -inputs['a']
            inputs['e'] = -inputs['e']
        if inputs['f'] < 0:
            inputs['b'] = -inputs['b']
            inputs['f'] = -inputs['f']
        if inputs['g'] < 0:
            inputs['c'] = -inputs['c']
            inputs['g'] = -inputs['g']
        if inputs['h'] < 0:
            inputs['d'] = -inputs['d']
            inputs['h'] = -inputs['h']

        # Removes decimal digits from inputs if it is an integer
        for key in inputs:
            inputs[key] = inttoint(inputs[key])            

        # Render the page with input equation and its solutions
        return render_template("quadratic.html",inputs=inputs, solutions=solutions, display = "block")


# Cubic Equations
@app.route('/cubic', methods=["GET", "POST"])
def cubic():

    inputs = {}
    inputs_cpy = {}
    solutions = {}

    # Initialize mpty dict inputs
    for i in range(ord('a'), ord('j') + 1):
        inputs[chr(i)] = 0

    # Render cubic equation page without inputs
    if request.method == 'GET':
        return render_template('cubic.html', inputs=inputs, display='none')

    else:
        
        # Gets inputs from user
        for i in range(ord('a'), ord('j') + 1):
            if request.form.get("input_" + chr(i)):
                inputs[chr(i)] = float(request.form.get("input_" + chr(i)))
            elif i < ord('f'):
                inputs[chr(i)] = 0
            else:
                inputs[chr(i)] = 1

        # Make copy of inputs to display on page rendering
        inputs_cpy = inputs.copy()

        # Check if equation is cubic or not
        if inputs['a'] != 0:
            solutions = cube_solver(inputs)

        # If not cubic then modify the equation in quadratic equation
        else:
            for i in range(ord('b'), ord('e') + 1):
                inputs[chr(i - 1)] = inputs[chr(i)]
            for i in range(ord('g'), ord('j') + 1):
                inputs[chr(i - 2)] = inputs[chr(i)]
            # Use the quadratic equation solver if not cubic
            solutions = quad_solver(inputs)

        # Check if coefficients of constant terms are fractional
        if (inputs_cpy['e'] != 0) and ((inputs_cpy['i'] != 1) or (inputs_cpy['j'] != 1)):

            d = inputs_cpy['d']
            e = inputs_cpy['e']
            i = inputs_cpy['i']
            j = inputs_cpy['j']

            frac = (Fraction(d) / Fraction(i)) - (Fraction(e) / Fraction(j))

            inputs_cpy['d'] = Fraction(frac).numerator
            inputs_cpy['i'] = Fraction(frac).denominator

        # If not fractional
        else:
            inputs_cpy['d'] = inputs_cpy['d'] - inputs_cpy['e']

        # Make the denominators of the coefficients non negative
        if inputs_cpy['f'] < 0:
            inputs['a'] = -inputs['a']
            inputs['f'] = -inputs['f']
        if inputs_cpy['g'] < 0:
            inputs['b'] = -inputs['b']
            inputs['g'] = -inputs['g']
        if inputs_cpy['h'] < 0:
            inputs['c'] = -inputs['c']
            inputs['h'] = -inputs['h']
        if inputs_cpy['i'] < 0:
            inputs['d'] = -inputs['d']
            inputs['i'] = -inputs['i']

        # Removes the decimals from integers
        for key in inputs_cpy:
            inputs_cpy[key] = inttoint(inputs_cpy[key])

        # Render the page with input equation and its solutions
        return render_template('cubic.html', solutions=solutions, display='block', inputs=inputs_cpy)



# Function to solve quadratic equation
def quad_solver(inputs):
    
    # Convert cofficients into decimal from fractional
    a = inputs['a'] / inputs['e']
    b = inputs['b'] / inputs['f']
    c = inputs['c'] / inputs['g']
    d = inputs['d'] / inputs['h']

    # If equation is not quadratic
    if a == 0:
        x = ((d - c) / b)
        x = inttoint(x)
        # Return dict with solution string
        return {'x' : f_to_str(x)}


    # Calculation of solutions
    c = c - d

    factor = (b ** 2) - (4 * a * c)

    # Imaginary roots
    if factor < 0:
        factor = -factor
        x = (-b) / (2 * a)
        factor = (sqrt(factor) / (2 * a))

        if factor < 0:
            factor = -factor
        x = inttoint(x)
        factor = inttoint(factor)

        # Return dict with solution strings
        return {'x_1' : f_to_str(x) + ' + ' + f_to_str(factor) + 'iota' , 'x_2' : f_to_str(x) + ' - ' + f_to_str(factor) + 'ι'}

    # Real roots
    x1 = (((-b) + sqrt(factor)) / (2 * a))
    x2 = (((-b) - sqrt(factor)) / (2 * a))

    x1 = inttoint(x1)
    x2 = inttoint(x2)

    # Return dict with solution strings
    return {'x_1' : f_to_str(x1), 'x_2' : f_to_str(x2)}



# Function to solve cubic equations
def cube_solver(inputs):

    # Calculates as per algorith
    a2 = (inputs['b'] / inputs['g']) / inputs['a']
    a1 = (inputs['c'] / inputs['h']) / inputs['a']
    a0 = ((inputs['d'] / inputs['i']) - (inputs['e'] / inputs['j'])) / inputs['a']

    q = (a1 / 3) - ((a2 ** 2) / 9)
    r = (((a1 * a2) - (3 * a0)) / 6) - ((a2 ** 3) / 27)

    # Real plus imaginary roots
    if ((r ** 2) + (q ** 3)) > 0:
        u = cbrt(r + sqrt((r ** 2) + (q ** 3)))
        v = cbrt(r - sqrt((r ** 2) + (q ** 3)))

        z1 = round((u + v - (a2 / 3)), 10)

        x2 = round((-((u + v) / 2) - (a2 / 3)), 10)

        y2 = round(((sqrt(3) / 2) * (u - v)), 10)

        z1 = inttoint(z1)
        x2 = inttoint(x2)
        y2 = inttoint(y2)

        return {'x_1' : f_to_str(z1), 'x_2' : f_to_str(x2) + ' + ' + f_to_str(y2) + 'iota', 'x_3' : f_to_str(x2) + ' - ' + f_to_str(y2) + 'iota'}

    # Real roots
    else:
        if q == 0:
            theta = 0
        elif q < 0:
            theta = arccos(r / ((-q) ** 1.5))

        phi1 = theta / 3
        phi2 = phi1 - ((2 * pi) / 3)
        phi3 = phi1 + ((2 * pi) / 3)

        z1 = round(((2 * sqrt(-q) * cos(phi1)) - (a2 / 3)), 10)
        z2 = round(((2 * sqrt(-q) * cos(phi2)) - (a2 / 3)), 10)
        z3 = round(((2 * sqrt(-q) * cos(phi3)) - (a2 / 3)), 10)

        z1 = inttoint(z1)
        z2 = inttoint(z2)
        z3 = inttoint(z3)

        return {'x_1' : f_to_str(z1), 'x_2' : f_to_str(z2), 'x_3' : f_to_str(z3)}



def inttoint(x):
    """
    Convert the given float to integer
    , if it is an integer
    """
    if x == int(x):
        x = int(x)
    return x


# create a new context for float to string
ctx = decimal.Context()

# 10 digits precision
ctx.prec = 10

def f_to_str(f):
    """
    Convert the given float to a string,
    without resorting to scientific notation
    """
    d1 = ctx.create_decimal(repr(f))
    return format(d1, 'f')


