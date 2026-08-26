// AYUSH PORTFOLIO — simple interactions.
// You do not need to edit this file to change your text or photo.

const header = document.querySelector(".site-header");
const reveals = document.querySelectorAll(".reveal");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

// CHANGE QUOTES HERE: add, remove or rewrite these original portfolio quotes.
// One is selected each time the page refreshes.
const quotes = [
  "Learning is the first version of building. — सिकाइ नै निर्माणको पहिलो चरण हो।",
  "Small projects become practical skills. — साना परियोजनाहरूले व्यावहारिक सीप बनाउँछन्।",
  "Stay curious. Make something useful. — जिज्ञासु बन। केही उपयोगी बनाऊ।",
  "Experience grows when you try. — प्रयास गर्दै जाँदा अनुभव बढ्छ।",
  "Learn it. Test it. Improve it. — सिक, परीक्षण गर, सुधार गर।",
  "Good ideas become useful when you build them. — राम्रो विचार निर्माण गरेपछि मात्र उपयोगी बन्छ।",
  "A small step can still move the work forward. — सानो कदमले पनि कामलाई अगाडि बढाउन सक्छ।",
  "Design starts by paying attention. — ध्यान दिनबाट नै राम्रो डिजाइन सुरु हुन्छ।",
  "Real work teaches a different kind of lesson. — वास्तविक कामले फरक किसिमको पाठ सिकाउँछ।",
  "Keep learning close to the real world. — सिकाइलाई वास्तविक जीवनसँग जोडेर राख।",
  "Progress is usually built in quiet moments. — प्रगति प्रायः शान्त क्षणहरूमा निर्माण हुन्छ।",
  "Curiosity is a practical skill. — जिज्ञासा पनि एउटा व्यावहारिक सीप हो।",
  "Make space for better questions. — अझ राम्रो प्रश्नका लागि ठाउँ बनाऊ।",
  "Build the habit before the big result. — ठूलो परिणामभन्दा पहिले राम्रो बानी बनाऊ।",
  "Every useful skill starts as practice. — हरेक उपयोगी सीप अभ्यासबाट सुरु हुन्छ।",
  "Start before you feel ready. — तयार महसुस नभए पनि सुरुवात गर।",
  "Consistency turns effort into progress. — निरन्तरताले मेहनतलाई प्रगतिमा बदल्छ।",
  "Learn slowly, build steadily, grow quietly. — बिस्तारै सिक, निरन्तर बनाऊ, शान्तसँग बढ।",
  "Your skills grow every time you solve a problem. — हरेक समस्या समाधान गर्दा तिम्रो सीप बढ्छ।",
  "Don't wait for perfect conditions. Start with what you have. — उत्तम समयको प्रतीक्षा नगर। जे छ, त्यहीँबाट सुरु गर।",
  "Practice makes difficult things familiar. — अभ्यासले कठिन कुरालाई सजिलो र परिचित बनाउँछ।",
  "A curious mind finds opportunities everywhere. — जिज्ञासु सोचले अवसरलाई जहाँ पनि देख्छ।",
  "Build something today that teaches you something tomorrow. — आज यस्तो केही बनाऊ, जसले भोलि केही नयाँ सिकाओस्।",
  "Mistakes are part of becoming better. — गल्तीहरू अझ राम्रो बन्ने यात्राकै हिस्सा हुन्।",
  "Progress begins when excuses end. — बहाना सकिएपछि प्रगति सुरु हुन्छ।",
  "Focus on learning, and results will follow. — सिकाइमा ध्यान देऊ, परिणाम आफैं पछ्याउँदै आउँछ।",
  "The best way to learn is to try. — सिक्ने सबैभन्दा राम्रो तरिका प्रयास गर्नु हो।",
  "Every attempt adds experience. — हरेक प्रयासले अनुभव थप्छ।",
  "Keep showing up. Skills take time. — निरन्तर अघि बढ। सीप बन्न समय लाग्छ।",
  "Small improvements create big changes. — सानो सुधारले ठूलो परिवर्तन ल्याउँछ।",
  "Learn from yesterday. Build for tomorrow. — हिजोबाट सिक, भोलिका लागि निर्माण गर।",
  "Your first version doesn't have to be your best version. — तिम्रो पहिलो प्रयास नै उत्कृष्ट हुनुपर्छ भन्ने छैन।",
  "Create more than you consume. — उपभोगभन्दा बढी सिर्जना गर।",
  "Knowledge becomes powerful when you apply it. — ज्ञानलाई प्रयोग गरेपछि मात्र त्यो शक्तिशाली बन्छ।",
  "Stay patient. Good work takes time. — धैर्य गर। राम्रो काम बन्न समय लाग्छ।",
  "A beginner who keeps going can become an expert. — लगातार अघि बढ्ने सुरुवाती व्यक्ति एक दिन विशेषज्ञ बन्न सक्छ।",
  "Don't fear being new at something. — कुनै कुरामा नयाँ हुन नडराऊ।",
  "Questions are the beginning of better ideas. — प्रश्नहरू नै राम्रो विचारको सुरुवात हुन्।",
  "Build with purpose. Learn with curiosity. — उद्देश्यका साथ बनाऊ। जिज्ञासाका साथ सिक।",
  "Progress doesn't need to be loud. — प्रगति सधैं ठूलो र देखिने हुनुपर्दैन।",
  "Keep learning, even when nobody is watching. — कसैले नहेरे पनि सिकिरह।",
  "One project can teach what a hundred tutorials cannot. — एउटा परियोजनाले सयौँ ट्युटोरियलले नसिकाएको कुरा सिकाउन सक्छ।",
  "Discipline keeps you moving when motivation disappears. — प्रेरणा हराउँदा अनुशासनले अघि बढाइरहन्छ।",
  "Your future skills are built by today's practice. — तिम्रो भविष्यको सीप आजको अभ्यासबाट बन्छ।",
  "Try, fail, learn, repeat. — प्रयास गर, गल्ती गर, सिक, फेरि प्रयास गर।",
  "Make mistakes, but make progress too. — गल्ती गर, तर प्रगति गर्न नछोड।",
  "Today's practice becomes tomorrow's confidence. — आजको अभ्यास भोलिको आत्मविश्वास बन्छ।",
  "A clear goal makes small steps meaningful. — स्पष्ट लक्ष्यले साना कदमलाई अर्थपूर्ण बनाउँछ।",
  "Keep your mind open and your hands busy. — मन खुला राख र हातलाई काममा व्यस्त राख।",
  "Good work begins with a willingness to learn. — राम्रो काम सिक्ने इच्छाबाट सुरु हुन्छ।",
  "Dream big, work quietly, grow daily. — ठूलो सपना देख, शान्तसँग मेहनत गर, हरेक दिन बढ।",
  "Your pace doesn't matter as long as you keep moving. — तिम्रो गति महत्त्वपूर्ण होइन, अघि बढिरहनु महत्त्वपूर्ण हो।",
  "Success is built one small effort at a time. — सफलता एक-एक सानो प्रयासबाट निर्माण हुन्छ।",
  "Don't compare your beginning with someone's middle. — आफ्नो सुरुवातलाई अरूको बीचको यात्रासँग तुलना नगर।",
  "Every expert was once a beginner. — हरेक विशेषज्ञ कहिल्यै न कहिल्यै सुरुवाती थिए।",
  "Your effort today is an investment in tomorrow. — आजको मेहनत भोलिका लागि गरिएको लगानी हो।",
  "Believe in your ability to learn. — सिक्न सक्ने आफ्नो क्षमतामाथि विश्वास गर।",
  "The journey teaches what the destination cannot. — गन्तव्यले नसिकाउने कुरा यात्राले सिकाउँछ।",
  "Keep building, even when progress feels slow. — प्रगति ढिलो जस्तो लागे पनि निर्माण गरिरह।",
  "Hard days build strong minds. — कठिन दिनहरूले बलियो सोच निर्माण गर्छन्।",
  "A little progress is still progress. — थोरै प्रगति पनि प्रगति नै हो।",
  "Your future self will thank you for starting today. — आज सुरु गरेकोमा तिम्रो भविष्यको आफूले तिमीलाई धन्यवाद दिनेछ।",
  "Turn your curiosity into action. — आफ्नो जिज्ञासालाई काममा बदल।",
  "Don't just learn the skill, use the skill. — सीप सिकेर मात्र होइन, त्यसलाई प्रयोग पनि गर।",
  "Build something you're proud of. — आफूलाई गर्व लाग्ने केही बनाऊ।",
  "Raah mushkil ho sakti hai, par kadam rukne nahi chahiye. — बाटो कठिन हुन सक्छ, तर पाइला रोकिनु हुँदैन।",
  "Khwab bade rakho, hausle usse bhi bade. — सपना ठूलो राख, हिम्मत त्योभन्दा पनि ठूलो।",
  "Girna haar nahi, na uthna haar hai. — लड्नु हार होइन, नउठ्नु हार हो।",
  "Waqt lagega, magar mehnat rang zaroor layegi. — समय लाग्छ, तर मेहनतले एक दिन रंग अवश्य ल्याउँछ।",
  "Aaj ki mehnat kal ki pehchaan banegi. — आजको मेहनत भोलिको पहिचान बन्नेछ।",
  "बाटो लामो भए पनि पाइला रोकिँदैन, सपना ठूलो भए पनि मेहनत थाक्दैन। — The road may be long, but the steps don't stop; the dream may be big, but the effort doesn't give up.",
  "आजको पसिना भोलिको मुस्कान हो। — Today's sweat is tomorrow's smile.",
  "संघर्षभित्रै सफलताको सुन्दर कथा लुकेको हुन्छ। — Hidden inside every struggle is a beautiful story of success.",
  "हारले होइन, प्रयास छोड्दा मान्छे हार्छ। — You don't lose by failing; you lose when you stop trying.",
  "सपना आँखामा राख, हिम्मत मुटुमा राख। — Keep dreams in your eyes and courage in your heart.",
  "आज कठिन छ भने भोलि अझ बलियो हुनेछौ। — If today is hard, you'll be stronger tomorrow.",
  "समय बदलिन्छ, परिस्थिति बदलिन्छ, मेहनतको फल पनि बदलिँदैन। — Time changes, circumstances change, but the reward of hard work remains.",
  "सानो सुरुवातलाई कहिल्यै सानो नसम्झ। — Never underestimate a small beginning.",
  "आफ्नो बाटो आफैं बनाऊ, संसारले पछि चिन्नेछ। — Build your own path, and the world will recognize you later.",
  "चुपचाप मेहनत गर, परिणामले आफैं आवाज दिनेछ। — Work quietly; your results will speak for themselves."
];

const quote = document.querySelector("#daily-quote");
if (quote) {
  quote.textContent = `“${quotes[Math.floor(Math.random() * quotes.length)]}”`;
  requestAnimationFrame(() => quote.classList.add("visible"));
}

// ASK AYUSH CONFIGURATION: this button opens a secure-backend placeholder only.
// Never add an OpenAI, Gemini or any other AI API key to this file.
const askDialog = document.querySelector(".ask-dialog");
const askTrigger = document.querySelector(".ask-trigger");
const askClose = document.querySelector(".ask-close");
askTrigger?.addEventListener("click", () => askDialog?.showModal());
askClose?.addEventListener("click", () => askDialog?.close());
askDialog?.addEventListener("click", (event) => {
  if (event.target === askDialog) askDialog.close();
});

// Add the glassy header after the visitor scrolls a little.
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

// Reveal sections gently as they enter the screen.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));

// Highlight the navigation item for the section currently on screen.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

// Mobile menu.
menuToggle?.addEventListener("click", () => {
  if (!nav) return;
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "Close" : "Menu";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "Menu";
  });
});

// Expand/collapse the Global Suppliers experience.
const expandButton = document.querySelector(".expand-button");
const experienceCard = document.querySelector(".experience-card");

expandButton?.addEventListener("click", () => {
  if (!experienceCard) return;
  const open = experienceCard.classList.toggle("open");
  expandButton.setAttribute("aria-expanded", open);
  if (expandButton.firstChild) {
    expandButton.firstChild.textContent = open ? "Hide experience " : "View experience ";
  }
});

// Subtle ink trail following the mouse.
// On touch devices this automatically does nothing.
const dot = document.querySelector(".cursor-dot");
const ink = document.querySelector(".cursor-ink");
let mouseX = -100, mouseY = -100;
let inkX = -100, inkY = -100;
let lastDrop = 0;

if (dot && ink) {
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const now = Date.now();
    if (now - lastDrop > 65) {
      const drop = document.createElement("span");
      drop.className = "ink-drop";
      drop.style.left = mouseX + "px";
      drop.style.top = mouseY + "px";
      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 800);
      lastDrop = now;
    }
  });

  function animateCursor() {
    inkX += (mouseX - inkX) * 0.14;
    inkY += (mouseY - inkY) * 0.14;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
    ink.style.left = inkX + "px";
    ink.style.top = inkY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

// Small magnetic-feeling movement on desktop buttons.
document.querySelectorAll(".button, .header-cta").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 850) return;
    const r = button.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.08;
    const y = (e.clientY - r.top - r.height / 2) * 0.08;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

// Small, slow image depth movement. Disabled for reduced-motion settings.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const depthItems = document.querySelectorAll(".hero-photo-wrap, .about-portrait, .experience-media");
  let animationQueued = false;
  window.addEventListener("scroll", () => {
    if (animationQueued) return;
    animationQueued = true;
    requestAnimationFrame(() => {
      depthItems.forEach((item, index) => {
        const fromCenter = item.getBoundingClientRect().top - window.innerHeight / 2;
        item.style.translate = `0 ${Math.max(-10, Math.min(10, fromCenter * (0.012 + index * 0.003)))}px`;
      });
      animationQueued = false;
    });
  }, { passive: true });
}