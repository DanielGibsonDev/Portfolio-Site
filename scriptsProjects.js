const webAppsLink = document.getElementById("web-app-link");
const websiteLink = document.getElementById("website-link");
const webAppArray = document.getElementsByClassName("web-app");
const websiteArray = document.getElementsByClassName("website");

// Project finish dates
const monthsAgoSpanArray = document.getElementsByClassName('months-ago');

const todayDate = new Date();

const appLeotreat = new Date("02/20/2020");
const appRockPaperScissors = new Date("02/04/2020");
const appUrlShortener = new Date("12/04/2019");
const appCountriesResearch = new Date("10/18/2019");
const appCourses = new Date("07/02/2019");
const appCourseDirectory = new Date("04/30/2019");
const appBoardGame = new Date("04/16/2019");
const appPhraseHunter = new Date("01/30/2019");

const webEasybank = new Date("06/10/2020");
const webManage = new Date("02/27/2020");
const webPricing = new Date("01/05/2020");
const webSnowball = new Date("11/10/2019");
const webClipboard = new Date("09/01/2019");
const webPing = new Date("09/01/2019");
const webDocstar = new Date("09/01/2019");
const webProject = new Date("08/01/2019");
const webFylo = new Date("08/01/2019");
const webHuddle = new Date("08/01/2019");

const finishDateArray = [appLeotreat, appRockPaperScissors, appUrlShortener, appCountriesResearch, appCourses, appCourseDirectory, appBoardGame, appPhraseHunter, webEasybank, webManage, webPricing, webSnowball, webClipboard, webPing, webDocstar, webProject, webFylo, webHuddle]

let howLongAgo = 0;

webAppsLink.addEventListener("click", () => {
  if (!webAppsLink.classList.contains("active")) {
    webAppsLink.classList.add("active");
    websiteLink.classList.remove("active");
  }
  if (webAppArray[0].classList.contains("hidden")) {
    for (i=0; i < webAppArray.length; i++) {
      webAppArray[i].classList.remove("hidden");
    }
    for (i=0; i < websiteArray.length; i++) {
      websiteArray[i].classList.add("hidden");
    }
  }
}, false);

websiteLink.addEventListener("click", () => {
  if (!websiteLink.classList.contains("active")) {
    websiteLink.classList.add("active");
    webAppsLink.classList.remove("active");
  }
  if (websiteArray[0].classList.contains("hidden")) {
    for (let i=0; i < websiteArray.length; i++) {
      websiteArray[i].classList.remove("hidden");
    }
    for (let i=0; i < webAppArray.length; i++) {
      webAppArray[i].classList.add("hidden");
    }
  }
}, false);


calculateMonthsAgo = () => {
  for (i=0; i < monthsAgoSpanArray.length; i++) {
    howLongAgo = Math.floor((todayDate.getTime() - finishDateArray[i].getTime()) / (1000 * 3600 * 24) / 30);
    if (howLongAgo === 0) {
      monthsAgoSpanArray[i].innerHTML = "Less than a month ago"
    } else if (howLongAgo === 1) {
      monthsAgoSpanArray[i].innerHTML = "1 month ago"
    } else {
      monthsAgoSpanArray[i].innerHTML = `${howLongAgo} months ago`
    }
  }
}

calculateMonthsAgo();