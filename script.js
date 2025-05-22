// GITHUB CONTIBUTION
GitHubCalendar(".calendar", "olisekw");

// LOADING SCREEN
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const main = document.getElementById("main");
  const navbar = document.getElementById("navbar");
  //otherwise it would show on loading screen
  menuButton.style.display = "none";
  homeButton.style.display = "none";

  setTimeout(() => {
    loading.style.display = "none";
    navbar.style.display = "block";
    main.style.display = "block";
    menuButton.style.display = "block";
    homeButton.style.display = "block";
  }, 1000); // change delay
});

// MENU

const homeButton = document.getElementById("home-button");
const hero = document.getElementById("hero");
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Open & Close
menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
  homeButton.classList.toggle("hidden");

});

overlay.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  homeButton.classList.toggle("hidden");

});

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      homeButton.style.display = "none";
      menuButton.style.display = "none";
      navbar.style.display = "flex";
    } else {
      homeButton.style.display = "block";
      menuButton.style.display = "block";
      navbar.style.display = "none";
    }
  },
  {
    threshold: 0.5, // Adjust this if needed
  }
);

observer.observe(hero);

// PROJECTS

const projectCards = document.querySelectorAll(".project-card");
const preview = document.getElementById("project-preview");
const previewTitle = document.getElementById("preview-title");
const previewDescription = document.getElementById("preview-description");
const closeBtn = document.getElementById("close-preview");
const previewText = document.getElementById("preview-text");
const previewLink = document.getElementById("preview-link");
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");
    const moreText = card.getAttribute("more-text");
    const link = card.getAttribute("data-link");

    previewLink.href = link;
    previewText.textContent = moreText;
    previewTitle.textContent = title;
    previewDescription.textContent = description;

    preview.classList.add("visible");
  });
});

closeBtn.addEventListener("click", () => {
  preview.classList.remove("visible");
});

// NIGHTMODE

const toggleNight = document.getElementById("night-mode-toggle");

toggleNight.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: Change icon
  toggleNight.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

  // Optional: Save user preference
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// scrollTo

homeButton.addEventListener("click", (e) => {
  e.preventDefault();

  hero.scrollIntoView({
    behavior: "smooth",
  });
});

const aboutButton = document.getElementById('about-button');
const contactButton = document.getElementById('contact-button');
const projectsButton = document.getElementById('projects-button');

const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');
const projectsSection = document.getElementById('projects');

aboutButton.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

contactButton.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

projectsButton.addEventListener('click', (e) => {
  e.preventDefault();
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});


aboutButton.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

contactButton.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

projectsButton.addEventListener('click', (e) => {
  e.preventDefault();
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

const menuAboutButton = document.getElementById('menu-about-button');
const menuContactButton = document.getElementById('menu-contact-button');
const menuProjectButton = document.getElementById('menu-projects-button');

menuAboutButton.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
    menu.classList.remove("open");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  homeButton.classList.toggle("hidden");

});

menuContactButton.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: 'smooth' });
    menu.classList.remove("open");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  homeButton.classList.toggle("hidden");

});

menuProjectButton.addEventListener('click', (e) => {
  e.preventDefault();
  projectsSection.scrollIntoView({ behavior: 'smooth' });
    menu.classList.remove("open");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  homeButton.classList.toggle("hidden");

});
