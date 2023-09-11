var cornerInputs = document.getElementById("corner-inputs");
var leftTopInput = document.getElementById("left-top-input");
var rightTopInput = document.getElementById("right-top-input");
var rightBottomInput = document.getElementById("right-bottom-input");
var leftBottomInput = document.getElementById("left-bottom-input");
var inputText = document.getElementById("input-text");
var randomizeButton = document.getElementById("random-button-text");
var randomStyleButton = document.getElementById("random-style-button");
var buttons = document.querySelectorAll(
  "button:not(#random-button-text):not(#random-style-button)"
);
var iconSideToggle = document.getElementById("toggle-icon-side");
var roundButtonToggle = document.getElementById("toggle-round-button");

var iconSideToggle = document.getElementById("toggle-icon-side");
var iconSideOptions = document.getElementById("icon-side-options");
var leftOptionButton = document.getElementById("left-option");
var rightOptionButton = document.getElementById("right-option");

window.addEventListener("load", function () {
  toggleButtonsVisibility();
  updateIconPositions();
});

iconSideToggle.addEventListener("change", function () {
  toggleButtonsVisibility();
  updateIconPositions();
});

leftOptionButton.addEventListener("click", function () {
  updateIconPositions("before");
});

rightOptionButton.addEventListener("click", function () {
  updateIconPositions("after");
});

leftTopInput.addEventListener("input", function () {
  updateButtonStyles();
});

rightTopInput.addEventListener("input", function () {
  updateButtonStyles();
});

rightBottomInput.addEventListener("input", function () {
  updateButtonStyles();
});

leftBottomInput.addEventListener("input", function () {
  updateButtonStyles();
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    copyButtonStyles(button);
  });
});

function toggleButtonsVisibility() {
  if (iconSideToggle.checked) {
    iconSideOptions.style.display = "flex";
  } else {
    iconSideOptions.style.display = "none";
  }
}

function updateIconPositions(position) {
  var buttons = document.querySelectorAll(
    ".button-container button:not(.exclude-random)"
  );
  buttons.forEach((button) => {
    var donutIcon = button.querySelector(".donut-icon");
    if (iconSideToggle.checked) {
      if (!donutIcon) {
        donutIcon = document.createElement("div");
        donutIcon.classList.add("donut-icon");
        button.insertBefore(donutIcon, button.firstChild);
      }
      donutIcon.style.display = "block";
      if (position === "before") {
        button.insertBefore(donutIcon, button.querySelector("p"));
      } else {
        button.appendChild(donutIcon);
      }
    } else {
      if (donutIcon) {
        donutIcon.style.display = "none";
      }
    }
  });
}

function updateButtonStyles() {
  var leftTopValue = leftTopInput.value || "0";
  var rightTopValue = rightTopInput.value || "0";
  var rightBottomValue = rightBottomInput.value || "0";
  var leftBottomValue = leftBottomInput.value || "0";

  buttons.forEach((button) => {
    if (roundButtonToggle.checked) {
      button.style.borderRadius = `${leftTopValue}px ${rightTopValue}px ${rightBottomValue}px ${leftBottomValue}px`;
    } else {
      button.style.borderRadius = "4px";
    }
  });

  if (roundButtonToggle.checked) {
    cornerInputs.style.display = "flex";
  } else {
    cornerInputs.style.display = "none";
  }
}

function showCopyNotification() {
  // Create a notification element
  const notification = document.createElement("div");
  notification.textContent = "Button HTML and CSS styles have been copied!";
  notification.classList.add("copy-notification");

  // Find the section element
  const section = document.querySelector(".section");

  // Append the notification to the section
  section.appendChild(notification);

  // Remove the notification after 3 seconds
  setTimeout(() => {
    section.removeChild(notification);
  }, 3000);
}

function copyButtonStyles(button) {
  // Exclude panel buttons from copying styles
  if (button.closest(".panel")) {
    return;
  }

  // Create a new textarea element
  const textarea = document.createElement("textarea");

  // Get the button's HTML content
  const buttonHTML = button.outerHTML.trim();

  // Get the button's existing inline style
  const buttonInlineStyle = button.getAttribute("style") || "";

  // Create the combined styles for the button, button text, and donut icon
  const buttonStyles = `
                        @import url("https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata:wght@300&display=swap");

button {
            display: inline-flex;
            padding: 20px 40px;
            justify-content: center;
            align-items: center;
            background-color: #ffffff00;

            border: none;
            gap: 6px;
            font-family: "Bungee";

            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        button p {
            font-family: 'Bungee';
            color: var(--text-white, #fff);
            /* Caption - Heavy */
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;

            margin: 0;
        }

        .donut-icon {
            width: 4px;
            height: 4px;
            border: 3px solid white;
            border-radius: 50%;
            background: transparent;
            position: relative;
        }
    `;

  // Set the value of the textarea to the combined button HTML and CSS styles
  textarea.value = `${buttonHTML}\n\n<style>\n${buttonStyles}\n</style>`;

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the contents of the textarea
  textarea.select();

  // Copy the selected content to the clipboard
  document.execCommand("copy");

  // Remove the textarea from the body
  document.body.removeChild(textarea);

  // Show the copy notification
  showCopyNotification();
}

function getRandomColor() {
  var r1 = Math.floor(Math.random() * 256);
  var g1 = Math.floor(Math.random() * 256);
  var b1 = Math.floor(Math.random() * 256);
  var r2 = Math.floor(Math.random() * 256);
  var g2 = Math.floor(Math.random() * 256);
  var b2 = Math.floor(Math.random() * 256);
  return {
    c1: { r: r1, g: g1, b: b1, rgb: "rgb(" + r1 + "," + g1 + "," + b1 + ")" },
    c2: { r: r2, g: g2, b: b2, rgb: "rgb(" + r2 + "," + g2 + "," + b2 + ")" }
  };
}

function getRandomBorderStyle() {
  var styles = [
    "none",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset"
  ];
  var index = Math.floor(Math.random() * styles.length);
  return styles[index];
}

function getRandomAngle() {
  var angles = [
    "to right",
    "to bottom",
    "to left",
    "to top",
    "to bottom right",
    "to bottom left",
    "to top left",
    "to top right"
  ];
  var index = Math.floor(Math.random() * angles.length);
  return angles[index];
}

function getContrast(rgb) {
  // Calculating the perceptive luminance - human eye favors green color
  var luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? "black" : "white";
}

function applyRandomStyles() {
  var buttons = document.querySelectorAll(
    ".button-container button:not(#random-button-text):not(#random-style-button)"
  );
  buttons.forEach((button) => {
    var colors = getRandomColor();
    var color1 = colors.c1;
    var color2 = colors.c2;
    var textColor = getContrast(color1);

    var donutIcon = button.querySelector(".donut-icon");
    if (iconSideToggle.checked) {
      if (!donutIcon) {
        donutIcon = document.createElement("div");
        donutIcon.classList.add("donut-icon");
        button.insertBefore(donutIcon, button.firstChild);
      }
      donutIcon.style.stroke = textColor;
    } else {
      if (donutIcon) {
        donutIcon.remove();
      }
    }

    var pTag = button.querySelector("p");
    if (pTag) {
      pTag.style.color = textColor;
    }

    button.style.backgroundImage = `linear-gradient(${getRandomAngle()}, ${
      color1.rgb
    }, ${color2.rgb})`;
    button.style.borderColor = Math.random() > 0.1 ? color1.rgb : "transparent"; // 10% chance of no border
    button.style.borderStyle = getRandomBorderStyle();

    if (roundButtonToggle.checked) {
      button.style.borderRadius = `${leftTopInput.value}px ${rightTopInput.value}px ${rightBottomInput.value}px ${leftBottomInput.value}px`;
    } else {
      button.style.borderRadius = "0px";
    }
  });

  if (roundButtonToggle.checked) {
    cornerInputs.style.display = "flex";
  } else {
    cornerInputs.style.display = "none";
  }
}

inputText.addEventListener("input", function () {
  buttons.forEach((button) => {
    var pTag = button.querySelector("p");
    if (pTag) {
      pTag.innerText = inputText.value;
    }
  });
});

randomizeButton.addEventListener("click", function () {
  var randomText = Math.random().toString(36).substring(7);
  buttons.forEach((button) => {
    var pTag = button.querySelector("p");
    if (pTag) {
      pTag.innerText = randomText;
    }
  });
  inputText.value = randomText;
});

randomStyleButton.addEventListener("click", function () {
  applyRandomStyles();
});

// Handle toggle switch events
iconSideToggle.addEventListener("change", function () {
  updateIconPositions();
});

roundButtonToggle.addEventListener("change", function () {
  updateButtonStyles();
});

// Initialize with random styles on page load
window.addEventListener("load", function () {
  applyRandomStyles();
});
