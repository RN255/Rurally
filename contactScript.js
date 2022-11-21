// mobile menu stuffs

// get icons to be pressed
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

//get divs that icons are nested in
const hamburgerIconDiv = document.getElementById("hamburgerIconDiv");
const closeIconDiv = document.getElementById("closeIconDiv");

// get elements to be manipulated
const navBar = document.getElementById("navBar");
const navBarUl = document.getElementById("navBarUl");
const navBarLiItem = document.querySelectorAll(".navBarLiItem");

// const navBarPrivacy = document.getElementById("navBarPrivacy");
// const navBarSocialMediaIcons = document.getElementById("navBarSocialMediaIcons");
// const navBarContact = document.getElementById("navBarContact");

// reveal menu
hamburgerIcon.onclick = function () {
  // hide hamburger and reveal cross
  hamburgerIconDiv.style.display = "none";
  closeIconDiv.style.display = "inline";

  // change #navBar
  navBar.style["backgroundColor"] = "#35c1be";
  navBar.style.width = "100vw";
  navBar.style.height = "100vh";

  // change #navBarUl
  navBarUl.style.position = "fixed";
  navBarUl.style.margin = "0";
  navBarUl.style.padding = "0";
  navBarUl.style.width = "100vw";
  navBarUl.style.top = "15vh";
  navBarUl.style.cursor = "default";
  navBarUl.style.display = "unset";

  // change #navBarLiItem
  navBarLiItem.forEach((navBarLiItem) => {
    navBarLiItem.style.display = "block";
    navBarLiItem.style.margin = "20px 0";
    navBarLiItem.style["fontSize"] = "20px";
    navBarLiItem.style["textAlign"] = "center";
  });
};

// hide menu

closeIcon.onclick = function () {
  // hide cross and reveal hamburger
  hamburgerIconDiv.style.display = "inline";
  closeIconDiv.style.display = "none";

  // change #navBar
  navBar.style["backgroundColor"] = "white";
  navBar.style.width = "100%";
  navBar.style.height = "50px";

  //change #navBarUl
  navBarUl.style.position = "relative";
  navBarUl.style.margin = "15px 5% 0 0";
  navBarUl.style.padding = "unset";
  navBarUl.style.width = "unset";
  navBarUl.style.top = "unset";
  navBarUl.style.cursor = "pointer";
  navBarUl.style.display = "none";

  //change #navBarLiItem
  navBarLiItem.forEach((navBarLiItem) => {
    navBarLiItem.style.display = "inline-block";
    navBarLiItem.style.margin = "0 20px";
    navBarLiItem.style["fontSize"] = "unset";
    navBarLiItem.style["textAlign"] = "unset";
  });

  // hide additonal items
  // navBarPrivacy.style.display = "none";
  // navBarSocialMediaIcons.style.display = "none";
  // navBarContact.display = "none";
};
