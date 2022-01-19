//Smooth Scrolling
var navMenuAnchorTag = document.querySelectorAll(".nav-menu a");
var interval;
for (var i = 0; i < navMenuAnchorTag.length; i++) {
  navMenuAnchorTag[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    // console.log(targetSectionId);
    var targetSection = document.getElementById(targetSectionId);
    console.log(targetSectionId);
    //We can also write this way
    //  interval = setInterval( scrollVertically, 20 , targetSection);
    //Another way to write to code
    interval = setInterval(function () {
      scrollVertically(targetSection, 0);
    });
  });
}

function scrollVertically(targetSection) {
  var targetSectionCordinate = targetSection.getBoundingClientRect();
  if (targetSectionCordinate.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}

//AutoFill Skills percentage

var progressBar = document.querySelectorAll('.skills-progress > div');
var skillscontainer = document.getElementById('skills-container');

var animationDone = false;

function intilizedbar() {
//   console.log("done");
  for (let bar of progressBar) {
    bar.style.width = 0 + '%';
  }
}
intilizedbar();

function fillBar() {
  for (let bar of progressBar) {
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function(){
        if(targetWidth <  currentWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    } , 1);
  }
}

window.addEventListener('scroll', checkScroll);

function checkScroll() {
  var coordinate = skillscontainer.getBoundingClientRect();
  if (!animationDone && coordinate.top <= window.innerHeight) {
    animationDone = true;
    console.log("skill section visible");
    fillBar();
  } else if(coordinate.top > window.innerHeight){
      animationDone = false;
      intilizedbar();
  }
}
