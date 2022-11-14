// drag scroll

const slider = document.getElementById("carousel");

//set pre sets
// let width = screen.width;

// slider.scrollLeft = 600;

//main stuff for drag scroll
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX);
  // slider.style["scrollSnapType"] = "none";
  // slider.style["scrollBehavior"] = "auto";

});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  // slider.style["scrollSnapType"] = "x mandatory";
  // slider.style["scrollBehavior"] = "smooth";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

// move buttons

const ele1 = document.getElementById("buttonRight");
ele1.onclick = function () {
  slider.scrollLeft += 300;
};

const ele2 = document.getElementById("buttonLeft");
ele2.onclick = function () {
  slider.scrollLeft -= 300;
};


// drag scroll for works sections

const sliderTwo = document.getElementById("carousel2");

//set pre sets
// let width = screen.width;

// slider.scrollLeft = 600;

//main stuff for drag scroll
// couldn't we just leave this?
// let isDown = false;
// let startX;
// let scroll;

sliderTwo.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - sliderTwo.offsetLeft;
  scrollLeft = sliderTwo.scrollLeft;
  // console.log(startX);
    // sliderTwo.style["scrollSnapType"] = "none";
    // sliderTwo.style["scrollBehavior"] = "none";
});

sliderTwo.addEventListener("mouseleave", () => {
  isDown = false;
});

sliderTwo.addEventListener("mouseup", () => {
  isDown = false;
    // sliderTwo.style["scrollSnapType"] = "x mandatory";
    // sliderTwo.style["scrollBehavior"] = "smooth";
});

sliderTwo.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderTwo.offsetLeft;
  const walk = (x - startX) * 3;
  sliderTwo.scrollLeft = scrollLeft - walk;
});

// move buttons

const buttonRightTwo = document.getElementById("buttonRightTwo");
buttonRightTwo.onclick = function () {
  sliderTwo.scrollLeft += 600;
};

const buttonLeftTwo = document.getElementById("buttonLeftTwo");
buttonLeftTwo.onclick = function () {
  sliderTwo.scrollLeft -= 600;
};