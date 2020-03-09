const todayDate = new Date();
const appLeotreat = new Date("02/20/2020");

const leoTreatHomepage = document.getElementById("leotreat-date");
let leotreatHowLongAgo = 0;

leotreatHowLongAgo = Math.floor((todayDate.getTime() - appLeotreat.getTime()) / (1000 * 3600 * 24) / 30);
if (leotreatHowLongAgo === 0) {
  leoTreatHomepage.innerHTML = "Less than a month ago"
} else if (leotreatHowLongAgo === 1) {
  leoTreatHomepage.innerHTML = "1 month ago"
} else {
  leoTreatHomepage.innerHTML = `${leotreatHowLongAgo} months ago`
}


const appRockPaperScissors = new Date("02/04/2020");

const rockHomepage = document.getElementById("rock-paper-date");
let rockHowLongAgo = 0;

rockHowLongAgo = Math.floor((todayDate.getTime() - appRockPaperScissors.getTime()) / (1000 * 3600 * 24) / 30);
if (rockHowLongAgo === 0) {
  rockHomepage.innerHTML = "Less than a month ago"
} else if (rockHowLongAgo === 1) {
  rockHomepage.innerHTML = "1 month ago"
} else {
  rockHomepage.innerHTML = `${rockHowLongAgo} months ago`
}

