function getContent(fragmentId) {
    var pages = {
        // Input form for quadratic without fractional cofficients
        quad1: `
                <form class="form-inline" method="POST" id="form1">
                    <h3>
                        <input type="number" step=any id="quad_a1" name="input_a" class="form-control mx-2 col-1" placeholder="a">
                        <b>x&#178; +</b>
                        <input type="number" step=any id="quad_b1" name="input_b" class="form-control mx-2 col-1" placeholder="b">
                        <b>x +</b>
                        <input type="number" step=any name="input_c" class="form-control mx-2 col-1" placeholder="c">
                        <b>=</b>
                        <input type="number" step=any name="input_d" class="form-control mx-2 col-2" placeholder="Default(0)">
                        <button type="submit" class="btn btn-primary float-right mr-5" onclick="return empty_quad1()">Solve</button>
                    </h3>
                </form>
                `,
        
        // Input form for quadratic with fractional cofficients
        quad2:  `
                <p class="lead">Denominators are 1 by default.</p>
                <form method="POST" id="form2">
                    <h3>
                        <table class="tw50 p-0">
                            <tbody>
                                <tr>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any id="quad_a2" name="input_a" class="form-control"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="e2" name="input_e" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><b>x&#178 +</b></td>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any id="quad_b2" name="input_b" class="form-control"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="f2" name="input_f" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><b>x +</b></td>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any name="input_c" class="form-control"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="g2" name="input_g" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><b>=</b></td>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any name="input_d" class="form-control" placeholder="(0)"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="h2" name="input_h" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style="width: 50%;">
                                        <button type="submit" class="btn btn-primary float-right mx-5" onclick="return empty_quad2()">Solve</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </h3>
                </form>
                `,
        
        // Input form for cubic without fractional cofficients
        cube1:  `
                <form class="form-inline" method="POST" id="form1">
                    <h3>
                        <input type="number" step=any id="cube_a1" name="input_a" class="form-control mx-2 col-1" placeholder="a">
                        <b>x&#179; +</b>
                        <input type="number" step=any id="cube_b1" name="input_b" class="form-control mx-2 col-1" placeholder="b">
                        <b>x&#178; +</b>
                        <input type="number" step=any id="cube_c1" name="input_c" class="form-control mx-2 col-1" placeholder="c">
                        <b>x +</b>
                        <input type="number" step=any name="input_d" class="form-control mx-2 col-1" placeholder="d">
                        <b>=</b>
                        <input type="number" step=any name="input_e" class="form-control mx-2 col-2" placeholder="Default(0)">
                        <button type="submit" class="btn btn-primary float-right mr-5" onclick="return empty_cube1()">Solve</button>
                    </h3>
                </form>
                `,
        
        // Input form for cubic with fractional cofficients
        cube2:  `
                <p class="lead">Denominators are 1 by default.</p>
                <form method="POST" id="form2">
                    <h3>
                        <table class="tw50 p-0">
                            <tbody>
                                <tr>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any id="cube_a2" name="input_a" class="form-control"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="f2" name="input_f" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><b>x&#179 +</b></td>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any id="cube_b2" name="input_b" class="form-control"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="g2" name="input_g" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><b>x&#178 +</b></td>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any id="cube_c2" name="input_c" class="form-control"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="h2" name="input_h" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><b>x +</b></td>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any name="input_d" class="form-control"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="i2" name="input_i" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><b>=</b></td>
                                    <td style="width: 10%;">
                                        <table class="mx-2">
                                            <tbody>
                                                <td>
                                                    <tr style="border-bottom: 3px solid black;">
                                                        <td><input type="number" step=any name="input_e" class="form-control" placeholder="(0)"></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="number" step=any id="j2" name="input_j" class="form-control"></td>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style="width: 40%;">
                                        <button type="submit" class="btn btn-primary float-right mx-5" onclick="return empty_cube2()">Solve</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </h3>
                </form>
                `
                    };

    // Return the content for given fragment id
    return pages[fragmentId];
};

// Function to check for invalic quadratic equation
function empty_quad1() {
    var a1 = document.getElementById("quad_a1").value;
    var b1 = document.getElementById("quad_b1").value;

    var contentDiv = document.getElementById("app");
    var sol = document.getElementById("quad_sol");
    // If all x term cofficients are 0 or not entered
    if (a1 == "" && b1 == "" || a1 == 0 && b1 == 0) {
        var alert = document.getElementById("alert_quad");
        var contentDiv = document.getElementById("app");
        var newElement = document.createElement("div");
        newElement.innerHTML = "<div id='alert_quad' class='alert alert-warning mt-5' style='text-align:center;' role='alert'><h3>Invalid Equation!</h3></div>";
        // Alert the user with Invalid Equation! if no alert is present on page
        if (!(alert)) {
            contentDiv.appendChild(newElement);
        };
        // Hide the block containg solutions and inputs
        sol.style.display = "none";
        return false;
    }
};

// Function to check for invalic quadratic equation with fractions
function empty_quad2() {
    var a2 = document.getElementById("quad_a2").value;
    var b2 = document.getElementById("quad_b2").value;
    var e2 = document.getElementById("e2").value;
    var f2 = document.getElementById("f2").value;
    var g2 = document.getElementById("g2").value;
    var h2 = document.getElementById("h2").value;

    // If denominators are not entered, assigned 1 by default
    if (!e2) {
        e2 = 1;
    };
    if (!f2) {
        f2 = 1;
    };
    if (!g2) {
        g2 = 1;
    };
    if (!h2) {
        h2 = 1;
    };
    
    var contentDiv = document.getElementById("app");
    var sol = document.getElementById("quad_sol");

    // Check if all x terms coefficients are zero or any denominator is zero
    if ((a2 == "" && b2 == "" || a2 == 0 && b2 == 0) || (((e2 == 0) || (f2 == 0)) || ((g2 == 0) || (h2 == 0)))) {
        var alert = document.getElementById("alert_quad");
        var contentDiv = document.getElementById("app");
        var newElement = document.createElement("div");
        newElement.innerHTML = "<div id='alert_quad' class='alert alert-warning mt-5' style='text-align:center;' role='alert'><h3>Invalid Equation!</h3></div>";
        // Alert the user with Invalid Equation! if no alert is present on page
        if (!(alert)) {
            contentDiv.appendChild(newElement);
        };
        
        // Hide the block containing equation and solutions
        sol.style.display = "none";
        return false;
    }
};

// Function to check for invalic cubic equation
function empty_cube1() {
    var a1 = document.getElementById("cube_a1").value;
    var b1 = document.getElementById("cube_b1").value;
    var c1 = document.getElementById("cube_c1").value;

    var contentDiv = document.getElementById("app");
    var sol = document.getElementById("cube_sol");

    // If all x term cofficients are 0 or not entered
    if ((a1 == "" && b1 == "" && c1 == "") || (a1 == 0 && b1 == 0 && c1 == 0)) {
        var alert = document.getElementById("alert_cube");
        var contentDiv = document.getElementById("app");
        var newElement = document.createElement("div");
        newElement.innerHTML = "<div id='alert_cube' class='alert alert-warning mt-5' style='text-align:center;' role='alert'><h3>Invalid Equation!</h3></div>";
        // Alert the user with Invalid Equation! if no alert is present on page
        if (!(alert)) {
            contentDiv.appendChild(newElement);
        };

        // Hide the block containg solutions and inputs
        sol.style.display = "none";
        return false;
    }
};


// Function to check for invalic cubic equation with fractions
function empty_cube2() {
    var a2 = document.getElementById("cube_a2").value;
    var b2 = document.getElementById("cube_b2").value;
    var c2 = document.getElementById("cube_c2").value;
    var f2 = document.getElementById("f2").value;
    var g2 = document.getElementById("g2").value;
    var h2 = document.getElementById("h2").value;
    var i2 = document.getElementById("i2").value;
    var j2 = document.getElementById("j2").value;


    // If denominators are not entered, assigned 1 by default
    if (!f2) {
        f2 = 1;
    };
    if (!g2) {
        g2 = 1;
    };
    if (!h2) {
        h2 = 1;
    };
    if (!i2) {
        i2 = 1;
    };
    if (!j2) {
        j2 = 1;
    };
    
    var contentDiv = document.getElementById("app");
    var sol = document.getElementById("cube_sol");

    // Check if all x terms coefficients are zero or any denominator is zero
    if (((a2 == "" && b2 == "" && c2 == "") || (a2 == 0 && b2 == 0 && c2 == 0)) || (((f2 == 0) || (g2 == 0)) || ((h2 == 0) || ((i2 == 0) || (j2 == 0))))) {
        var alert = document.getElementById("alert_cube");
        var contentDiv = document.getElementById("app");
        var newElement = document.createElement("div");
        newElement.innerHTML = "<div id='alert_cube' class='alert alert-warning mt-5' style='text-align:center;' role='alert'><h3>Invalid Equation!</h3></div>";
        
        // Alert the user with Invalid Equation! if no alert is present on page
        if (!(alert)) {
            contentDiv.appendChild(newElement);
        };

        // Hide the block containg solutions and inputs
        sol.style.display = "none";
        return false;
    }
};

// When the DOM content is loaded calls the function load
document.addEventListener('DOMContentLoaded', load);

// Load the content based on fragmentID of hash change
function loadContent() {
    var contentDiv = document.getElementById("app");
    // Substarcts # from the string
    fragmentId = location.hash.substr(1);
    // Generate form by fragmentID
    if (fragmentId) {
        contentDiv.innerHTML = getContent(fragmentId);
    };
}

// Function to check for # change and call function on # change
function load()
{
    
    window.addEventListener("hashchange", loadContent);
    loadContent();

}

