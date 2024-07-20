const btn = document.querySelector("header .container .btn");
const navigatinBar = document.querySelector("header .container .navigation ul");
let navigatin = document.getElementById("header");
const allLis = document.querySelectorAll("header .container .navigation ul li");
const scrollProgress = document.querySelector(".scroll-height");
const totalHeight = document.body.scrollHeight - window.innerHeight;
const scrollProgressDiv = document.querySelector(".scroll-height > div");

btn.addEventListener("click", function () {
  navigatinBar.classList.toggle("show");
});

allLis.forEach(function (e) {
  e.onclick = function () {
    navigatinBar.classList.remove("show");
  };
});

let scrollbtn = document.querySelector(".scroll");

window.onscroll = function () {
  if (window.scrollY >= 150) {
    navigatin.classList.add("fixed");
  } else {
    navigatin.classList.remove("fixed");
  }
  if (window.scrollY >= 600) {
    scrollbtn.style.display = "flex";
  } else {
    scrollbtn.style.display = "none";
  }
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  if (window.scrollY <= 0) {
    scrollProgress.style.display = "none";
  } else {
    scrollProgress.style.display = "block";
  }
  scrollProgressDiv.style.width = `${progressHeight}%`;
};

scrollbtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};

let copyRight = document.querySelector("footer .container .footer-title sub");

copyRight.innerHTML = new Date().getFullYear();

scrollProgress.style.top = `${
  document.querySelector("header#header").offsetHeight
}px`;
window.onresize = function () {
  scrollProgress.style.top = `${
    document.querySelector("header#header").offsetHeight
  }px`;
};
// Landing Image
const landing = document.querySelector(".landing .container .image img");
const imgs = ["landing-01.png", "landing-02.jpeg", "landing-03.png"];

setInterval(function () {
  const randomNumber = Math.floor(Math.random() * imgs.length);
  landing.src = `imgs/${imgs[randomNumber]}`;
}, 3000);

// Feedback Box
const feedbackBox = document.querySelector(".feedback-box");
const submitButton = document.querySelector(".feedback-box .submit");
const counterDown = document.querySelector(".counter-down");
const timerOptions = document.querySelector(".feedback-box select");
const reasonCard = document.querySelector(".reason");
const reasonCardName = document.querySelector(".reason .card .name");
const reasonCardTextArea = document.querySelector(".reason textarea");
const reasonSubmitButton = document.querySelector(".reason button");
const reasonSubmitButtonLink = document.querySelector(".reason button a");
const reasonSelect = document.querySelector(".reason .select .reason-select");

submitButton.addEventListener("click", function () {
  counterDown.innerHTML = timerOptions.value;
  feedbackBox.style.display = "none";
  function countDown() {
    counterDown.innerHTML -= 1;
    if (counterDown.innerHTML === "0") {
      clearInterval(counter);
      counterDown.style.display = "none";
    }
  }
  let counter = setInterval(countDown, 1000);
  setTimeout(function () {
    reasonCard.style.display = "flex";
  }, parseInt(`${timerOptions.value}000`));
});

let reasonValue = `الأسم : ${reasonCardName.value} 
                                  |       وصلت للموقع من : ${reasonSelect.value}         
                                  |                       
رأيي في الموقع  : ${reasonCardTextArea.value}
`;

reasonCardName.oninput = function () {
  reasonValue = `الأسم : ${reasonCardName.value} 
                                  |       وصلت للموقع من : ${reasonSelect.value}         
                                  |                       
رأيي في الموقع  : ${reasonCardTextArea.value}
`;
};
reasonCardTextArea.oninput = function () {
  reasonValue = `الأسم : ${reasonCardName.value} 
                                  |       وصلت للموقع من : ${reasonSelect.value}         
                                  |                       
رأيي في الموقع  : ${reasonCardTextArea.value}
`;
};

reasonSubmitButton.addEventListener("click", function () {
  reasonValue = `الأسم : ${reasonCardName.value} 
                                  |       وصلت للموقع من : ${reasonSelect.value}         
                                  |                       
رأيي في الموقع  : ${reasonCardTextArea.value}
`;
  reasonSubmitButtonLink.href = `https://wa.me/+201015850600?text=${reasonValue}`;
  localStorage.setItem("active", "active");
  feedbackBox.classList.add(localStorage.getItem("active"));
  reasonCard.classList.add(localStorage.getItem("active"));
  counterDown.classList.add(localStorage.getItem("active"));
});

if (localStorage.getItem("active")) {
  feedbackBox.style.display = "none";
  reasonCard.style.display = "none";
  counterDown.style.display = "none";
}


// Internet Connection
const onlineMessage = document.querySelector(".online");
const offlineMessage = document.querySelector(".offline");
let connectionButton = document.querySelectorAll(".close");

window.addEventListener("online", function () {
  onlineMessage.style.display = "flex";
  offlineMessage.style.display = "none";
  setTimeout(function () {
    if (onlineMessage.style.display === "flex") {
      onlineMessage.style.display = "none";
    } else {
      onlineMessage.style.display = "flex";
    }
  }, 10000);
});
window.addEventListener("offline", function () {
  onlineMessage.style.display = "none";
  offlineMessage.style.display = "flex";
});
connectionButton.forEach(function (el) {
  addEventListener("click", function () {
    el.parentElement.style.display = "none";
  });
});
