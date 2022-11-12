// drag scroll

const slider = document.getElementById("carousel");

//set pre sets
let width = screen.width;

// slider.scrollLeft = 450;

//main stuff for drag scroll
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX);
  //   slider.style["scrollSnapType"] = "none";
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  //   slider.style["scrollSnapType"] = "x mandatory";
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
