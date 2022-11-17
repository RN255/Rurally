document.getElementById("showAll").onclick = function () {
  document.getElementById("newsItemOne").style.display = "inline";
  document.getElementById("newsItemTwo").style.display = "inline";
  document.getElementById("newsItemThree").style.display = "inline";
  document.getElementById("newsItemFour").style.display = "inline";
};

document.getElementById("showSeminar").onclick = function () {
  document.getElementById("newsItemOne").style.display = "none";
  document.getElementById("newsItemTwo").style.display = "none";
  document.getElementById("newsItemThree").style.display = "none";
  document.getElementById("newsItemFour").style.display = "none";
};

document.getElementById("showEvents").onclick = function () {
  document.getElementById("newsItemOne").style.display = "none";
  document.getElementById("newsItemTwo").style.display = "none";
  document.getElementById("newsItemThree").style.display = "none";
  document.getElementById("newsItemFour").style.display = "inline";
};

document.getElementById("showNews").onclick = function () {
  document.getElementById("newsItemOne").style.display = "inline";
  document.getElementById("newsItemTwo").style.display = "inline";
  document.getElementById("newsItemThree").style.display = "inline";
  document.getElementById("newsItemFour").style.display = "none";
};

document.getElementById("showPressRelease").onclick = function () {
  document.getElementById("newsItemOne").style.display = "none";
  document.getElementById("newsItemTwo").style.display = "none";
  document.getElementById("newsItemThree").style.display = "none";
  document.getElementById("newsItemFour").style.display = "none";
};
