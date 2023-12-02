
const btnShowMore = document.getElementById("btnShowMore");

const htmlAhtml_cssndCss = document.getElementById("html_css");

const btnHide = document.getElementById("btnHide");

btnShowMore.addEventListener("click", function () {
  html_css.classList.replace("d-none", "m-0");
  btnHide.classList.replace("d-none", "d-block");
  btnShowMore.classList.replace("d-block", "d-none");

})
btnHide.addEventListener("click", function () {
  html_css.classList.replace("m-0", "d-none");
  btnShowMore.classList.replace("d-none", "d-block");
  btnHide.classList.replace("d-block", "d-none");


})


// <====startNav====>

const navItems = document.querySelectorAll(".nav-link");
navItems.forEach(function (navItem) {
  navItem.addEventListener("click", function () {

    navItems.forEach(function (item) {
      item.classList.remove("active");
    });

    navItem.classList.add("active");
  });
});

function makeNavItemActive(item) {
  const allItemForNav = document.querySelectorAll(".navbar-nav a");
  for (let index = 0; index < allItemForNav.length; index++) {
    if (item === allItemForNav[index].innerHTML) {
      allItemForNav[index].classList.add("active");
    }
    else {
      allItemForNav[index].classList.remove("active");
    }
  }
}

// <====endNav====>










//<========================================>

document.addEventListener("DOMContentLoaded", () => {
  handleScroll();
});

window.onscroll = handleScroll;
let started = false;


function handleScroll() {

  // start home
  if (window.scrollY < 500) {
    makeNavItemActive("Home")
  }
  // end home



  // start about<====================> 
  const about = document.getElementById("about");
  $("#btnUp").addClass("d-none")
  const aboutHeader = document.getElementById("aboutHeader");
  const contentAboutLeft = document.querySelector(".contentAboutLeft");
  const contentAboutRight = document.querySelector(".contentAboutRight");
  const contentAboutButton = document.querySelector(".contentAboutButton");

  


  if (window.scrollY >= about.offsetTop - 700) {
    aboutHeader.classList.add("animate__fadeInUp");
  }

  if (window.scrollY >= about.offsetTop - 500) {
    contentAboutLeft.classList.add("animate__fadeInUp");
    contentAboutLeft.classList.remove("opacity-0");
    contentAboutRight.classList.add("animate__fadeInUp");
    contentAboutRight.classList.remove("opacity-0");


  }

  if (window.scrollY >= about.offsetTop - 200) {
    makeNavItemActive("About")
    $("#btnUp").removeClass("d-none")
    $("#btnUp").fadeIn(500);

    $("nav").addClass("bg-gray").removeClass("bg-white");
    contentAboutButton.classList.add("animate__fadeInUp");
    contentAboutButton.classList.remove("opacity-0");
     if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }


  } else {
    $("#btnUp").fadeOut(500);
    $("nav").addClass("bg-white").removeClass("bg-gray");
  }
  // end about<====================> 







  // start skills<==================>
  const skills = document.getElementById("skills");
  const cartRow1 = document.querySelectorAll(".carts .cart-row1");
  const cartRow2 = document.querySelectorAll(".carts .cart-row2");
  const skillsHeader = document.querySelector(".skillsName");


  if (window.scrollY >= skills.offsetTop - 500) {
    for (let index = 0; index < cartRow1.length; index++) {
      cartRow1[index].classList.add("animate__fadeInUp");
      cartRow1[index].classList.remove("opacity-0");
    }

    if (window.scrollY >= skills.offsetTop - 350) {
      for (let index = 0; index < cartRow2.length; index++) {
        cartRow2[index].classList.add("animate__fadeInUp");
        cartRow2[index].classList.remove("opacity-0");
      }
    }
  }
  if (window.scrollY >= skills.offsetTop - 600) {
    makeNavItemActive("Skills")
    skillsHeader.classList.remove("opacity-0");
    skillsHeader.classList.add("animate__fadeInUp");
  }
  // end skills<==================>








  // start myEducation<==================>
  const myEducation = document.querySelector(".myEducation");
  const myEducationtitle = document.querySelector(".myEducationtitle");
  const myEducationParagraph = document.querySelector(".myEducationParagraph");

  if (window.scrollY >= myEducation.offsetTop - 600) {
    myEducationtitle.classList.add("animate__fadeInUp");
    myEducationtitle.classList.remove("opacity-0");

    myEducationParagraph.classList.add("animate__fadeInUp");
    myEducationParagraph.classList.remove("opacity-0");

  }
  // end myEducation<==================>








  //start Portfolio<==================>

  const portfolio = document.getElementById("portfolio");
  const portfolioHeaderName = document.querySelector(".portfolioHeaderName");
  const portfolioNav = document.querySelector(".portfolioNav");
  const portfolioCartRow1 = document.querySelectorAll(".portfolioCartRow1");
  const portfolioCartRow2 = document.querySelectorAll(".portfolioCartRow2");
  const portfolioCartRow3 = document.querySelectorAll(".portfolioCartRow3");

  if (window.scrollY >= portfolio.offsetTop - 600) {
    portfolioHeaderName.classList.add("animate__fadeInUp");
    portfolioHeaderName.classList.remove("opacity-0")
  }

  if (window.scrollY >= portfolio.offsetTop - 500) {
    makeNavItemActive("Portfolio")

    portfolioNav.classList.add("animate__fadeInUp");
    portfolioNav.classList.remove("opacity-0")

  }
  if (window.scrollY >= portfolio.offsetTop - 350) {
    for (let index = 0; index < portfolioCartRow1.length; index++) {
      portfolioCartRow1[index].classList.add("animate__fadeInUp");
      portfolioCartRow1[index].classList.remove("opacity-0")
    }

  }

  if (window.scrollY >= portfolio.offsetTop - 200) {
    for (let index = 0; index < portfolioCartRow2.length; index++) {
      portfolioCartRow2[index].classList.add("animate__fadeInUp");
      portfolioCartRow2[index].classList.remove("opacity-0")
    }
  }

  if (window.scrollY >= portfolio.offsetTop) {
    for (let index = 0; index < portfolioCartRow3.length; index++) {
      portfolioCartRow3[index].classList.add("animate__fadeInUp");
      portfolioCartRow3[index].classList.remove("opacity-0")
    }
  }
  //end Portfolio<==================>










  //start contact<==================>
  const contact = document.getElementById("contact");
  const contactTitle = document.querySelector(".contactTitle");
  const contactContent = document.querySelector(".contactContent");

  if (window.scrollY >= contact.offsetTop - 600) {
    makeNavItemActive("Contact")


    contactTitle.classList.add("animate__fadeInUp");
    contactTitle.classList.remove("opacity-0")

  }
  if (window.scrollY >= contact.offsetTop - 300) {
    contactContent.classList.add("animate__fadeIn");
    contactContent.classList.remove("opacity-0")

  }
  // footer
  const footerContent = document.querySelector(".footerContent");
  if (window.scrollY >= contact.offsetTop + 200) {
    footerContent.classList.add("animate__pulse");
    footerContent.classList.remove("opacity-0")
    console.log("done");

  }
  //end contact<==================>



}
//<========================================>









// start conter
let nums = document.querySelectorAll(".contentAboutButton .num");
function startCount(el) {
  let goal = parseInt(el.dataset.goal); // Parse goal as an integer
  let count = 0;

  let intervalId = setInterval(() => {
    el.textContent = `${count++}+`;

    if (count > goal) {
      clearInterval(intervalId); // Clear the interval when count reaches the goal
    }
  }, 400 / goal);
}
// end conter

