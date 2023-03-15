function showDate() {
  var dateToday = document.querySelector(".date-today");

  var data = new Date();
  var day = data.getDay();
  var daymonth = data.getDate();
  var month = data.getMonth();
  var hrs = data.getHours();
  var minutes = data.getMinutes();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "february";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;

    case 7:
      month = "August";
      break;
    case 8:
      month = "Septembar";
      break;
    case 9:
      month = "Octobar";
      break;
    case 10:
      month = "Novembar";
      break;
    case 11:
      month = "December";
      break;
  }

  function hrsFixed() {
    if (hrs == "0") {
      hrs += "0";
    }
  }

  hrsFixed();


  dateToday.innerHTML =
    day + ", " + month + " " + daymonth + "th" +  ", " + hrs + "h:" + minutes;

  function Aberto() {
    var openClose = document.querySelector("#now-open");
    var time = document.querySelector(".time-missing");
    ("#now-open");
    if (day != "Thrusday" && hrs >= 16) {
      openClose.innerHTML = "Now open";
      time.innerHTML = "Closes at 11:30";
    } else {
      openClose.innerHTML = "Closed now";
      if (day == "Thrusday") {
        time.innerHTML = "Opens at 4pm tomorrow";
      } else {
        time.innerHTML = "Opens at 4pm today";
      }
    }
  }
  Aberto();
}

setInterval(showDate, 1000);

function menus() {
  var btnMenu = document.querySelectorAll(".btns-menu button");
  var menu = document.querySelectorAll(".container-menu .menus");

  function activeMenu(index) {
    menu.forEach((menu) => {
      menu.classList.remove("menu-active");
    });
    btnMenu.forEach((menu) => {
      menu.classList.remove("btn-menu-active");
    });
    menu[index].classList.add("menu-active");
    btnMenu[index].classList.add("btn-menu-active");
  }

  btnMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeMenu(index);
    });
  });
}

menus();

/* header change color */

function headerScroll() {
  var header = document.querySelector("header");
  var headerTop = header.getBoundingClientRect().top;

  if (headerTop <= 0) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}

window.addEventListener("scroll", headerScroll);

/* menu mobile */

var btnMobile = document.querySelector("#btn-menu");
var headerMobile = document.querySelector(".header-down .container");

function menuMobile(event) {
  if (event.type === "touchstart") event.preventDefault();
  headerMobile.classList.toggle("header-mobile-active");
  var active = headerMobile.classList.contains("header-mobile-active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Close menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Open menu");
  }
}

btnMobile.addEventListener("click", menuMobile);
btnMobile.addEventListener("touchstart", menuMobile);
