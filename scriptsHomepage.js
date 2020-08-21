const todayDate = new Date();

const appDesktopTrace = new Date("08/21/2020");

const desktopHomepage = document.getElementById("desktop-date");
let deskHowLongAgo = 0;

deskHowLongAgo = Math.floor((todayDate.getTime() - appDesktopTrace.getTime()) / (1000 * 3600 * 24) / 30);
if (deskHowLongAgo === 0) {
  desktopHomepage.innerHTML = "Less than a month ago"
} else if (deskHowLongAgo === 1) {
  desktopHomepage.innerHTML = "1 month ago"
} else {
  desktopHomepage.innerHTML = `${deskHowLongAgo} months ago`
}


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

