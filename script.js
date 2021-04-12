var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var txt = document.body.querySelector(".text");
var btn = document.body.querySelector(".Submit");
var num = document.body.querySelector(".number");
var list = [];
var pages = [
  {
    title: "Home",
    content: "Home"
  },
  {
    title: "About",
    content: "About",
    name: "none"
  },
  {
    title: "View",
    content: "View Notes"
  }
];

// for (var i = 0; i < pages.length; i++) {
//   createPage(pages[i]);
// }

function createPage(pg) {
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    contentWrite(pg.content, pg.title);
  });
  button.innerHTML = pg.title;
  nav.appendChild(button);
}

function homePage() {
  display.innerHTML = "<h1>Home</h1>";
  btn.style.display = "none";
  txt.style.display = "none";
  num.style.display = "none";
  document.body.querySelector(".subMess").style.display = "none";
}

function aboutPage() {
  btn.style.display = "none";
  txt.style.display = "none";
  num.style.display = "none";
  document.body.querySelector(".Submit").style.display = "none";
  display.innerHTML = "";
  var header1 = document.createElement("h1");
  header1.innerHTML = "About";
  display.appendChild(header1);
  var header = document.createElement("h3");
  header.innerHTML = "Zach";
  display.appendChild(header);
}

function viewPage() {
  display.innerHTML = "";
  var header = document.createElement("h1");
  header.innerHTML = "View Notes";
  display.appendChild(header);
  btn.style.display = "";
  txt.style.display = "";
  num.style.display = "";
  btn.addEventListener("click", submit);
}

function contentWrite(wd, pg) {
  if (wd === "Home") {
    homePage();
  } else if (wd === "About") {
    aboutPage();
  } else {
    viewPage();
  }
}

function login() {
  btn.style.display = "none";
  txt.style.display = "none";
  num.style.display = "none";
  var messEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  if (username === "coolStudent123" && password === "Naruto") {
    //messEle.innerHTML = "Submitted";
    for (var i = 0; i < pages.length; i++) {
      createPage(pages[i]);
    }
    contentWrite(pages[0].content, "Home");
  } else if (username !== "coolStudent123" && password !== "Naruto") {
    messEle.innerHTML = "You didn't type anything vaild!";
  } else if (username !== "coolStudent123" && password === "Naruto") {
    messEle.innerHTML = "You didn't type in vaild username!";
  } else if (username === "coolStudent123" && password !== "Naruto") {
    messEle.innerHTML = "You didn't type in valid password!";
  }
}
document.body.querySelector(".login").addEventListener("click", function () {
  login();
});

function renderItem() {
  document.body.querySelector(".display").innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var ele = document.createElement("div");
    ele.innerHTML = list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}

function submit() {
  var txt = document.body.querySelector(".text").value;
  var num = document.body.querySelector(".number").value;

  if (txt.length !== 1) {
    list.push(txt);
  }
  if (num.length !== 0) {
    list.push(num);
  }
  renderItem();
}

renderItem();