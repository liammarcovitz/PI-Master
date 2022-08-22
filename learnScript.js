let pi1 = document.getElementById("pi1");
let pi2 = document.getElementById("pi2");
let pi3 = document.getElementById("pi3");
let pi4 = document.getElementById("pi4");
let pi5 = document.getElementById("pi5");
let pi6 = document.getElementById("pi6");
let pi7 = document.getElementById("pi7");
let pi8 = document.getElementById("pi8");
let pi9 = document.getElementById("pi9");
let pi10 = document.getElementById("pi10");

let launchButton = document.getElementById("launchButton");

let clickedEl;

var digits;

var continueButton = 0;

var inputValid = false;

let input;
let startInput = document.getElementById("yourOwn");

function checkValue() {
    var char = startInput.value.charAt(startInput.value.length - 1);
    if (isNaN(char)) {
        startInput.value = startInput.value.replace(char, "");
    }
    
    if (clickedEl != null {
            clickedEl.style.backgroundColor = "#30c758";
        }

    if (startInput.value.length == 10) {
        clickedEl = null;
        inputValid = true;
        launchButton.style.backgroundColor = "#349e3f";
    }
    else if (startInput.value.length > 0) {
        inputValid = false;
        launchButton.style.backgroundColor = "#9aad9c";
    }
}

startInput.addEventListener('input', checkValue);

pi1.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi1) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi1;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi1.addEventListener("mouseover", function() {
    if (clickedEl != pi1) {
        pi1.style.backgroundColor = "#43ff75";
    }
});
pi1.addEventListener("mouseout", function() {
    if (clickedEl != pi1) {
        pi1.style.backgroundColor = "#30c758";
    }
})

pi2.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi2) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi2;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi2.addEventListener("mouseover", function() {
    if (clickedEl != pi2) {
        pi2.style.backgroundColor = "#43ff75";
    }
});
pi2.addEventListener("mouseout", function() {
    if (clickedEl != pi2) {
        pi2.style.backgroundColor = "#30c758";
    }
})

pi3.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi3) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi3;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi3.addEventListener("mouseover", function() {
    if (clickedEl != pi3) {
        pi3.style.backgroundColor = "#43ff75";
    }
});
pi3.addEventListener("mouseout", function() {
    if (clickedEl != pi3) {
        pi3.style.backgroundColor = "#30c758";
    }
})

pi4.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi4) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi4;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi4.addEventListener("mouseover", function() {
    if (clickedEl != pi4) {
        pi4.style.backgroundColor = "#43ff75";
    }
});
pi4.addEventListener("mouseout", function() {
    if (clickedEl != pi4) {
        pi4.style.backgroundColor = "#30c758";
    }
})

pi5.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi5) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi5;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi5.addEventListener("mouseover", function() {
    if (clickedEl != pi5) {
        pi5.style.backgroundColor = "#43ff75";
    }
});
pi5.addEventListener("mouseout", function() {
    if (clickedEl != pi5) {
        pi5.style.backgroundColor = "#30c758";
    }
})

pi6.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi6) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi6;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi6.addEventListener("mouseover", function() {
    if (clickedEl != pi6) {
        pi6.style.backgroundColor = "#43ff75";
    }
});
pi6.addEventListener("mouseout", function() {
    if (clickedEl != pi6) {
        pi6.style.backgroundColor = "#30c758";
    }
})

pi7.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi7) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi7;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi7.addEventListener("mouseover", function() {
    if (clickedEl != pi7) {
        pi7.style.backgroundColor = "#43ff75";
    }
});
pi7.addEventListener("mouseout", function() {
    if (clickedEl != pi7) {
        pi7.style.backgroundColor = "#30c758";
    }
})

pi8.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi8) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi8;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi8.addEventListener("mouseover", function() {
    if (clickedEl != pi8) {
        pi8.style.backgroundColor = "#43ff75";
    }
});
pi8.addEventListener("mouseout", function() {
    if (clickedEl != pi8) {
        pi8.style.backgroundColor = "#30c758";
    }
})

pi9.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi9) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi9;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi9.addEventListener("mouseover", function() {
    if (clickedEl != pi9) {
        pi9.style.backgroundColor = "#43ff75";
    }
});
pi9.addEventListener("mouseout", function() {
    if (clickedEl != pi9) {
        pi9.style.backgroundColor = "#30c758";
    }
})

pi10.onclick = function() {
    if (clickedEl != null) {
        if (clickedEl == pi10) {
            clickedEl.style.backgroundColor = "#30c758";
            clickedEl = null;
            launchButton.style.backgroundColor = "#9aad9c";
        }

        clickedEl.style.backgroundColor = "#30c758";
        launchButton.style.backgroundColor = "#349e3f";
    }

    startInput.value = "";
    inputValid = false;
    clickedEl = pi10;
    clickedEl.style.backgroundColor = "#1d6e32";
    launchButton.style.backgroundColor = "#349e3f";
}
pi10.addEventListener("mouseover", function() {
    if (clickedEl != pi10) {
        pi10.style.backgroundColor = "#43ff75";
    }
});
pi10.addEventListener("mouseout", function() {
    if (clickedEl != pi10) {
        pi10.style.backgroundColor = "#30c758";
    }
})

function launchButtonClick() {

    if (continueButton == 0) {
        if (clickedEl == null && !inputValid) return;

        if (clickedEl == null && inputValid) {
            digits = startInput.value;
        }
        else {
            digits = clickedEl.innerHTML;
        }
        
        document.getElementById("secondText").style.display = "none";
        startInput.style.display = "none";

        document.getElementById("learnTitle").style.fontSize = "40px";
        document.getElementById("learnTitle").innerHTML = "You have selected the following digits:";

        document.getElementById("selectText").innerHTML = digits;

        document.getElementById("learnPi").innerHTML = "They have been seperated into 3 groups:<br><br>" +
        digits[0] + digits[1] + digits[2] + digits[3] + " + " + digits[4] + digits[5] + digits[6] + " + "
        + digits[7] + digits[8]+ digits[9];
        launchButton.innerHTML = "Continue";
        continueButton = 1;
    }
    else if (continueButton == 1) {
        document.getElementById("learnTitle").innerHTML = "Try to remember each group as best as you can.";
        document.getElementById("learnPi").innerHTML = "" + digits[0] + digits[1] + digits[2] + digits[3] + " + " +
         digits[4] + digits[5] + digits[6] + " + "
        + digits[7] + digits[8]+ digits[9];

        document.getElementById("selectText").innerHTML = "Follow the method.";

        continueButton = 2;
    }
    else if (continueButton == 2) {
        input = document.createElement("input");
        input.setAttribute("type", "text");
        let jsEl = document.getElementById("jsEl");
        jsEl.appendChild(input);

        document.getElementById("learnTitle").innerHTML = "Enter group 1:";
        document.getElementById("selectText").remove();
        document.getElementById("learnPi").style.visibility = "hidden";

        input.style.marginBottom = "100px";
        input.style.width = "400px";
        input.style.height = "50px";
        input.style.fontFamily = "Cambria, Cochin, Georgia, Times, Times New Roman, serif";
        input.style.fontSize = "45px";
        input.style.borderRadius = "10px";
        input.style.textAlign = "center";
        input.setAttribute("maxlength", "4");

        launchButton.innerHTML = "Submit";

        continueButton = 3;
    }
    else if (continueButton == 3) {
        if (input.value != "" + digits[0] + digits[1] + digits[2] + digits[3]) {
            document.getElementById("learnPi").style.visibility = "visible";
            document.getElementById("learnPi").style.color = "red";
            document.getElementById("learnPi").style.fontWeight = "bold";
            document.getElementById("learnPi").innerHTML = "Wrong!"

            setTimeout(function () {
                document.getElementById("learnPi").style.visibility = "hidden";
            }, 1000);
        }
        else {
            document.getElementById("learnTitle").innerHTML = "Enter group 2:";
            input.value = "";
            input.setAttribute("maxlength", "3");
            continueButton = 4;
        }
    }
    else if (continueButton == 4) {
        if (input.value != "" + digits[4] + digits[5] + digits[6]) {
            document.getElementById("learnPi").style.visibility = "visible";
            document.getElementById("learnPi").style.color = "red";
            document.getElementById("learnPi").style.fontWeight = "bold";
            document.getElementById("learnPi").innerHTML = "Wrong!"

            setTimeout(function () {
                document.getElementById("learnPi").style.visibility = "hidden";
            }, 1000);
        }
        else {
            document.getElementById("learnTitle").innerHTML = "Enter group 3:";
            input.value = "";
            input.setAttribute("maxlength", "3");
            continueButton = 5;
        }
    }
    else if (continueButton == 5) {
        if (input.value != "" + digits[7] + digits[8] + digits[9]) {
            document.getElementById("learnPi").style.visibility = "visible";
            document.getElementById("learnPi").style.color = "red";
            document.getElementById("learnPi").style.fontWeight = "bold";
            document.getElementById("learnPi").innerHTML = "Wrong!"

            setTimeout(function () {
                document.getElementById("learnPi").style.visibility = "hidden";
            }, 1000);
        }
        else {
            document.getElementById("learnTitle").innerHTML = "Enter the set altogether:";
            input.value = "";
            input.setAttribute("maxlength", "10");
            continueButton = 6;
        }
    }
    else if (continueButton == 6) {
        if (input.value != "" + digits[0] + digits[1] + digits[2] + digits[3]
         + digits[4] + digits[5] + digits[6]
          + digits[7] + digits[8]+ digits[9]) {
            document.getElementById("learnPi").style.visibility = "visible";
            document.getElementById("learnPi").style.color = "red";
            document.getElementById("learnPi").style.fontWeight = "bold";
            document.getElementById("learnPi").innerHTML = "Wrong!"

            setTimeout(function () {
                document.getElementById("learnPi").style.visibility = "hidden";
            }, 1000);
        }
        else {
            input.remove();

            document.getElementById("learnTitle").innerHTML = "Congratulations!";
            document.getElementById("learnPi").style.color = "white";
            document.getElementById("learnPi").innerHTML = "You successfully learned the digits <strong>"
             + digits[0] + digits[1] + digits[2] + digits[3]
            + digits[4] + digits[5] + digits[6]
             + digits[7] + digits[8]+ digits[9] + "</strong> of π.<br><br>"
              + "Don't forget to practice consistently so you don't forget!"
            document.getElementById("learnPi").style.visibility = "visible";


            launchButton.innerHTML = "End"
            launchButton.style.backgroundColor = "red";

            continueButton = 7;
        }
    }
    else if (continueButton == 7) {
        location.reload();
    }
}
