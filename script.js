function selectAmount(amount) {
  document.getElementById("customAmount").value = amount;
}

function donateNow() {
  const amountInput = document.getElementById("customAmount").value.trim();
  const msg = document.getElementById("donationMsg");

  if (amountInput === "") {
    alert("❗ Please enter a donation amount.");
    msg.textContent = "❗ Please enter a valid amount.";
    return;
  }

  const amount = parseInt(amountInput);

  if (isNaN(amount) || amount <= 0) {
    alert("❗ Donation amount cannot be 0 or less. Please enter a valid amount.");
    msg.textContent = "❗ Please enter a valid amount.";
  } else {
    msg.textContent = `✅ Thank you for your generous ₹${amount} donation! It will directly support food, care, and love through verified NGOs.`;
  }
}

// Navbar active link logic
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Welcome message randomizer
const welcomeMessages = [
  "Welcome to ShareBite – Bringing Smiles Through Every Bite!",
  "Join us in spreading love, one meal at a time.",
  "Your leftovers are someone else's blessing.",
  "Together, we can fight hunger!"
];

const welcomeEl = document.getElementById("welcomeMessage");
if (welcomeEl) {
  welcomeEl.innerText = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
}
// Load particles effect
particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('particles.json loaded...');
});

// Login check
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "donate" && password === "donate") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html"; // redirect to main page
  } else {
    alert("Wrong username or password! Try again.");
  }
}
