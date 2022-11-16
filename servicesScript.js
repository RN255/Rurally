
//main stuff for drag scroll
let isDown = false;
let startX;
let scrollLeft;

// drag scroll for works sections

const sliderTwo = document.getElementById("carousel2");


//pre-set item
sliderTwo.scrollLeft = 1300;

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
  sliderTwo.scrollLeft += 350;
};

const buttonLeftTwo = document.getElementById("buttonLeftTwo");
buttonLeftTwo.onclick = function () {
  sliderTwo.scrollLeft -= 350;
};
