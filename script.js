const mainbackground = document.querySelector(".maincontainer");
const temp_background = document.querySelector(".background");
const swatchGroups = document.querySelectorAll(".swatch_group");
const defaultbutton = document.querySelector(".default");
let activecolor1 = "#000000";
let activecolor2 = "#000000";
let activeswatch = null;

defaultbutton.addEventListener("click", () => {
  document.querySelector(".mainwrapper").style.opacity = 0;
  temp_background.style.opacity = 0;
  mainbackground.style.opacity = 0;
  setTimeout(() => {
    location.reload();
  }, 300);
});

for (let i = 0; i < swatchGroups.length; i++) {
  const inputfield1 = swatchGroups[i].querySelector(".swatch_text_1");
  const inputfield2 = swatchGroups[i].querySelector(".swatch_text_2");
  const swatch = swatchGroups[i].querySelector(".swatch");
  const colorpicker1 = swatchGroups[i].querySelector(".colorpicker1");
  const colorpicker2 = swatchGroups[i].querySelector(".colorpicker2");
  let color1 = inputfield1.value;
  let color2 = inputfield2.value;
  const parentelement = swatchGroups[i];
  colorpicker1.value = color1;
  colorpicker2.value = color2;

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
    if (activeswatch != null) {
      activeswatch.classList.remove("active");
      parentelement.classList.remove("active_group");
    }
    activeswatch = e.target;
    e.target.classList.add("active");
    parentelement.classList.add("active_group");
    activecolor1 = color1;
    activecolor2 = color2;
    fade_animation(e.target);

    // mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });
  // Handle mouseover
  swatch.addEventListener("mouseover", (e) => {
    fade_animation(e.target);
    // if (e.target != activeswatch || activeswatch == null) {
    //   mainbackground.style.animation = "none";
    //   temp_background.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    //   setTimeout(() => {
    //     mainbackground.style.animation = "gradientchange 0.25s linear";
    //   }, 5);
    //   setTimeout(() => {
    //     mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    //     if (animatecheck.checked) {
    //       mainbackground.style.animation =
    //         "animateGradient 2s linear infinite alternate";
    //     }
    //   }, 125);
    // }
  });

  function fade_animation(function_caller, active_color_flag = false) {
    if (function_caller != activeswatch || activeswatch == null) {
      mainbackground.style.animation = "none";
      temp_background.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
      setTimeout(() => {
        mainbackground.style.animation = "gradientchange 0.25s linear";
      }, 5);
      setTimeout(() => {
        if (active_color_flag) {
          mainbackground.style.backgroundImage = `linear-gradient(to right, ${activecolor1}, ${activecolor2})`;
        } else {
          mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
        }
        if (animatecheck.checked) {
          mainbackground.style.animation =
            "animateGradient 2s linear infinite alternate";
        }
      }, 125);
    }
  }

  swatch.addEventListener("mouseout", (e) => {
    fade_animation(e.target, true);
    // if (e.target != activeswatch || activeswatch == null) {
    //   mainbackground.style.animation = "none";
    //   temp_background.style.backgroundImage = `linear-gradient(to right, ${activecolor1}, ${activecolor2})`;

    //   setTimeout(() => {
    //     mainbackground.style.animation = "gradientchange 0.25s linear";
    //   }, 5);

    //   setTimeout(() => {
    //     mainbackground.style.backgroundImage = `linear-gradient(to right, ${activecolor1}, ${activecolor2})`;
    //     if (animatecheck.checked) {
    //       mainbackground.style.animation =
    //         "animateGradient 2s linear infinite alternate";
    //     }
    //   }, 125);
    // }
  });
}
let text_animation = false;
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
