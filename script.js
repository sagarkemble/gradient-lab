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
  location.reload();
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

  inputfield1.addEventListener("input", () => {
    color1 = inputfield1.value;
    colorpicker1.value = color1;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });
  inputfield2.addEventListener("input", () => {
    color2 = inputfield2.value;
    colorpicker2.value = color2;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });
  colorpicker1.addEventListener("input", () => {
    color1 = colorpicker1.value;
    inputfield1.value = color1;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });

  colorpicker2.addEventListener("input", () => {
    color2 = colorpicker2.value;
    inputfield2.value = color2;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });

  swatch.addEventListener("click", (e) => {
    if (activeswatch !== null) {
      activeswatch.classList.remove("active");
    }
    activeswatch = e.target;
    e.target.classList.add("active");
    activecolor1 = color1;
    activecolor2 = color2;
    mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });
  swatch.addEventListener("mouseover", () => {
    mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    // mainbackground.style.animation = "gradientchange 0.5s linear";
    // setTimeout(() => {
    //   mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    // }, 250);
    // background.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });

  swatch.addEventListener("mouseout", () => {
    // Start the opacity animation on mainbackground
    mainbackground.style.animation = "gradientchange 2s linear";
    background.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;

    // Change the background after 1 second (half of 2s)
    setTimeout(() => {
      // Once halfway through, change the background color to active colors
      mainbackground.style.backgroundImage = `linear-gradient(to right, ${activecolor1}, ${activecolor2})`;
    }, 1000); // 1000 ms = 1 second, which is halfway of the 2s animation duration
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
