// 1. Hamburger Menu Logic
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  hamburger.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});
// Keyboard accessibility for hamburger menu
hamburger.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    hamburger.click();
  }
});

// 2. Contact Form Validation Logic
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check 1: Empty Fields Check
  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.innerText = "Error: Please fill out all fields!";
    return;
  }

  // Check 2: Email Format Check
  if (!emailPattern.test(email)) {
    formMessage.style.color = "red";
    formMessage.innerText =
      "Error: Please enter a valid email address (e.g., test@example.com).";
    return;
  }

  formMessage.style.color = "green";
  formMessage.innerText = "Success: Your message has been sent successfully!";

  contactForm.reset();
  setTimeout(() => {
    formMessage.innerText = "";
  }, 4000);
});

// 3. Active Nav Link on Scroll
const sections = document.querySelectorAll("section, header");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active-link");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active-link");
    }
  });
});
