// Python progress circular bar
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 85, // Specify Python skill percentage here
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#306998 ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`; // Adjust the color

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// JavaScript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75, // Specify JavaScript skill percentage here
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#f7df1e ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// Django progress circular bar
let djangoProgress = document.querySelector(".django"),
  djangoValue = document.querySelector(".django-progress");

let djangoStartValue = 0,
  djangoEndValue = 70, // Specify Django skill percentage here
  djangospeed = 30;

let progressdjango = setInterval(() => {
  djangoStartValue++;

  djangoValue.textContent = `${djangoStartValue}%`;
  djangoProgress.style.background = `conic-gradient(#092e20 ${
    djangoStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (djangoStartValue == djangoEndValue) {
    clearInterval(progressdjango);
  }
}, djangospeed);

// ReactJS progress circular bar
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 50, // Specify ReactJS skill percentage here
  reactspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#61dbfb ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, reactspeed);

// HTML/CSS progress circular bar
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-css-progress");

let htmlStartValue = 0,
  htmlEndValue = 90, // Specify HTML/CSS skill percentage here
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// MySQL progress circular bar
let gitProgress = document.querySelector(".git"),
  gitValue = document.querySelector(".git-progress");

let gitStartValue = 0,
  gitEndValue = 70, // Specify MySQL skill percentage here
  gitspeed = 30;

let progressgit = setInterval(() => {
  gitStartValue++;

  gitValue.textContent = `${gitStartValue}%`;
  gitProgress.style.background = `conic-gradient(#20c997 ${
    gitStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (gitStartValue == gitEndValue) {
    clearInterval(progressgit);
  }
}, gitspeed);



// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});