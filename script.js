const defaultcolor1 = ["#ff0f7b", "#f89b29"];
const defaultcolor2 = ["#0061ff", "#60efff"];
const defaultcolor3 = ["#ff930f", "#fff95b"];
const defaultcolor4 = ["#57ebde", "#aefb2a"];
const mainbackground = document.querySelector(".maincontainer");
const swatchGroups = document.querySelectorAll(".swatch_group");
const defaultbutton = document.querySelector(".default");
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

  inputfield1.addEventListener("input", () => {
    color1 = inputfield1.value;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });
  inputfield2.addEventListener("input", () => {
    color2 = inputfield2.value;
    swatch.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });
  swatch.addEventListener("click", (e) => {
    if (activeswatch !== null) {
      activeswatch.classList.remove("active");
    }
    activeswatch = e.target;
    e.target.classList.add("active");
    mainbackground.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
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
