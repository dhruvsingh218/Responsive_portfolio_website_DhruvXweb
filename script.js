const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x'); // Change icon
            navbar.classList.toggle('active'); // Show/hide menu
        });

        // Close navbar when clicking a link (optional enhancement)
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });


      

// Swiper initialization for Certificates
const swiper = new Swiper('.mySwiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
        

const projectSwiper = new Swiper('.projectSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.proj-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.proj-next',
        prevEl: '.proj-prev',
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// ===== LOR TEASER (SHOW EVERY VISIT BUT NOT AGAIN IN SAME SESSION) =====

const certSection = document.querySelector("#certificates");
const lorTeaser = document.getElementById("lorTeaser");
const lorPopup = document.getElementById("lorPopup");
const closeLor = document.getElementById("closeLor");

// session check (sirf current visit ke liye)
let lorClosed = sessionStorage.getItem("lorClosed");

let teaserShown = false;

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting && !teaserShown && !lorClosed){

            teaserShown = true;

            setTimeout(()=>{
                lorTeaser.classList.add("show");
            },2000);
        }
    });
},{ threshold:0.5 });

observer.observe(certSection);

// teaser click → popup open
lorTeaser.onclick = ()=>{
    lorPopup.style.display = "flex";
}

// popup close
closeLor.onclick = ()=>{
    lorPopup.style.display = "none";

    // sirf current session ke liye memory
    sessionStorage.setItem("lorClosed", "true");

    // teaser hide
    lorTeaser.style.display = "none";
}

// ===== CHATBOT LOGIC =====

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotBox = document.getElementById("chatbotBox");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");

chatbotToggle.onclick = ()=>{
  chatbotBox.style.display="flex";
}

closeChat.onclick = ()=>{
  chatbotBox.style.display="none";
}

chatbotToggle.onclick = ()=>{
  chatbotBox.style.display="flex";

  if(!chatMessages.dataset.introShown){

    typeMessage("Hi 👋 I’m Dhruv's AI assistant. Ask me anything!");

    chatMessages.dataset.introShown = "true";
  }
}



function botReply(type){

 let reply="";

 if(type==="about"){
   reply="Dhruv is a Data Analyst & Automation Developer with experience in Power BI, Web Scraping, and Analytics.";
 }

 if(type==="skills"){
   reply="Skills include Python, Power BI, Excel, Data Analysis, HTML, CSS, JavaScript & Automation.";
 }

 if(type==="projects"){
   reply="You can explore Dhruv's animated websites, data dashboards, and automation projects in the Projects section.";
 }

 if(type==="resume"){
   reply="Click the Download CV button in the Home section to view Dhruv's latest resume.";
 }

 if(type==="contact"){
   reply="Use the Contact section below or connect via LinkedIn & WhatsApp icons.";
 }

 const msg = document.createElement("div");
 msg.className="bot-msg";
typeMessage(reply);

 chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===== TYPEWRITER EFFECT =====

function typeMessage(text){

  const msg = document.createElement("div");
  msg.className = "bot-msg";
  chatMessages.appendChild(msg);

  let i = 0;

  function typing(){
    if(i < text.length){
      msg.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 20); // speed (lower = faster)
    }
  }

  typing();
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===== ANIMATED STATS COUNTER =====

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){

      counters.forEach(counter=>{

        const updateCount = ()=>{
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const increment = target / 50;

          if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount,30);
          }else{
            counter.innerText = target;
          }
        }

        updateCount();

      });

      counterObserver.disconnect();
    }
  });
});

if(counters.length){
  counterObserver.observe(counters[0]);
}
