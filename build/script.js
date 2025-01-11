const swatchGroups = document.querySelectorAll(".swatch-group");
const main_background = document.querySelector(".main-background");
const defaultButton = document.querySelector(".default-button");
const body = document.body;
let activecolor1 = "#000000";
let activecolor2 = "#000000";
let activeswatch = null;

defaultButton.addEventListener("click", () => {
  document.querySelector(".main-container").style.opacity = 0;
  body.style.background = "black";
  main_background.style.opacity = 0;
  setTimeout(() => {
    location.reload();
  }, 300);
});
for (let i = 0; i < swatchGroups.length; i++) {
  const inputfield1 = swatchGroups[i].querySelector(".swatch-text-1");
  const inputfield2 = swatchGroups[i].querySelector(".swatch-text-2");
  const swatch = swatchGroups[i].querySelector(".swatch");
  const colorpicker1 = swatchGroups[i].querySelector(".colorpicker1");
  const colorpicker2 = swatchGroups[i].querySelector(".colorpicker2");
  let color1 = inputfield1.value;
  let color2 = inputfield2.value;
  const parentelement = swatchGroups[i];
  colorpicker1.value = color1;
  colorpicker2.value = color2;
  function fade_animation(function_caller, active_color_flag = false) {
    if (function_caller != activeswatch || activeswatch == null) {
      main_background.style.animation = "none";
      body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
      setTimeout(() => {
        main_background.style.animation = "gradientchange 0.25s linear";
      }, 5);
      setTimeout(() => {
        if (active_color_flag) {
          main_background.style.backgroundImage = `linear-gradient(to right, ${activecolor1}, ${activecolor2})`;
        } else {
          main_background.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
        }
        if (animatecheck.checked) {
          main_background.style.animation =
            "animateGradient 2s linear infinite alternate";
        }
      }, 125);
    }
  }

  inputfield1.addEventListener("input", (e) => {
    color1 = inputfield1.value;
    colorpicker1.value = color1;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });
  inputfield2.addEventListener("input", () => {
    color2 = inputfield2.value;
    colorpicker2.value = color2;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });
  colorpicker1.addEventListener("input", () => {
    color1 = colorpicker1.value;
    inputfield1.value = color1;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });

  colorpicker2.addEventListener("input", () => {
    color2 = colorpicker2.value;
    inputfield2.value = color2;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    if (parentelement.classList.contains("active_group")) {
      body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    }
  });
  swatch.addEventListener("click", (e) => {
    if (activeswatch != null) {
      activeswatch.classList.remove("active");
      parentelement.classList.remove("active_group");
    }
    e.target.classList.add("active");
    parentelement.classList.add("active_group");
    activeswatch = e.target;

    activecolor1 = color1;
    activecolor2 = color2;
    fade_animation(e.target, true);
  });
  swatch.addEventListener("mouseover", (e) => {
    fade_animation(e.target);
  });
  swatch.addEventListener("mouseout", (e) => {
    fade_animation(e.target, true);
  });
}
const animatecheck = document.querySelector("#animatecheckbox");
animatecheck.addEventListener("change", () => {
  if (animatecheck.checked) {
    main_background.style.animation =
      "animateGradient 2s linear infinite alternate";
    // background-size: 200%;
    main_background.style.backgroundSize = "200%";
  } else {
    main_background.style.animation = "none";
    main_background.style.backgroundSize = "100%";
  }
});
