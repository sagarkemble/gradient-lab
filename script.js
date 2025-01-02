const defaultcolor1 = ["#ff0f7b", "#f89b29"];
const defaultcolor2 = ["#0061ff", "#60efff"];
const defaultcolor3 = ["#ff930f", "#fff95b"];
const defaultcolor4 = ["#57ebde", "#aefb2a"];
const mainbackground = document.querySelector(".maincontainer");
const swatchGroups = document.querySelectorAll(".swatch_group");
const defaultbutton = document.querySelector(".default");
const background = document.querySelector(".background");
let activecolor1 = "#000000";
let activecolor2 = "#000000";
let activeswatch = null;
defaultbutton.addEventListener("click", () => {
  mainbackground.style.animation = "none";
  background.style.backgroundImage = `linear-gradient(to right, black, black)`;
  setTimeout(() => {
    mainbackground.style.animation = "gradientchange 0.25s linear";
  }, 5);
  setTimeout(() => {
    mainbackground.style.backgroundImage = `linear-gradient(to right, black, black)`;
  }, 125);
  document.querySelector(".wrapper").style.opacity = 0;
  setTimeout(() => {
    location.reload();
  }, 250);
});

for (let i = 0; i < swatchGroups.length; i++) {
  const inputfield1 = swatchGroups[i].querySelector(".swatch_text_1");
  const inputfield2 = swatchGroups[i].querySelector(".swatch_text_2");
  const swatch = swatchGroups[i].querySelector(".swatch");
  const colorpicker1 = swatchGroups[i].querySelector(".colorpicker1");
  const colorpicker2 = swatchGroups[i].querySelector(".colorpicker2");
  let color1 = inputfield1.value;
  let color2 = inputfield2.value;
  colorpicker1.value = color1;
  colorpicker2.value = color2;
  const parentelement = swatchGroups[i];
  let currenttargerobject = null;

  inputfield1.addEventListener("input", (e) => {
    color1 = inputfield1.value;
    colorpicker1.value = color1;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });
  inputfield2.addEventListener("input", () => {
    color2 = inputfield2.value;
    colorpicker2.value = color2;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });
  colorpicker1.addEventListener("input", () => {
    color1 = colorpicker1.value;
    inputfield1.value = color1;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });

  colorpicker2.addEventListener("input", () => {
    color2 = colorpicker2.value;
    inputfield2.value = color2;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });

  swatch.addEventListener("click", (e) => {
    if (activeswatch !== null) {
      activeswatch.classList.remove("active");
      parentelement.classList.remove("active_group");
    }
    currenttargerobject = e.target;
    activeswatch = e.target;
    e.target.classList.add("active");
    parentelement.classList.add("active_group");
    activecolor1 = color1;
    activecolor2 = color2;
    mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });
  // Handle mouseover
  swatch.addEventListener("mouseover", (e) => {
    if (e.target != currenttargerobject || currenttargerobject == null) {
      mainbackground.style.animation = "none";
      background.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
      setTimeout(() => {
        mainbackground.style.animation = "gradientchange 0.25s linear";
      }, 5);
      setTimeout(() => {
        mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
        if (animatecheck.checked) {
          mainbackground.style.animation =
            "animateGradient 2s linear infinite alternate";
        }
      }, 125);
    }
  });

  swatch.addEventListener("mouseout", (e) => {
    if (e.target != currenttargerobject || currenttargerobject == null) {
      mainbackground.style.animation = "none";
      background.style.backgroundImage = `linear-gradient(to right, ${activecolor1}, ${activecolor2})`;

      setTimeout(() => {
        mainbackground.style.animation = "gradientchange 0.25s linear";
      }, 5);

      setTimeout(() => {
        mainbackground.style.backgroundImage = `linear-gradient(to right, ${activecolor1}, ${activecolor2})`;
        if (animatecheck.checked) {
          mainbackground.style.animation =
            "animateGradient 2s linear infinite alternate";
        }
      }, 125);
    }
  });
}

const animatecheck = document.querySelector("#animatecheckbox");
animatecheck.addEventListener("change", () => {
  if (animatecheck.checked) {
    mainbackground.style.animation =
      "animateGradient 2s linear infinite alternate";
    // background-size: 200%;
    mainbackground.style.backgroundSize = "200%";
  } else {
    mainbackground.style.animation = "none";
    mainbackground.style.backgroundSize = "100%";
  }
});
