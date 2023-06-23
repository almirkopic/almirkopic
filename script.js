function createStars() {
    const starCount = 100; 
    const container = document.getElementById("stars");
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "blinking-star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
  
      
      const starSize = Math.random() * 1 + 1; 
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;
  
      container.appendChild(star);
    }
  }
  
  createStars();
  

  var prevScrollPos = window.pageYOffset;
var scrollThreshold = window.innerHeight * 0.3; 

// Check initial scroll position on page load
if (window.pageYOffset <= scrollThreshold) {
  document.getElementById("navbar").classList.add("visible");
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    if (currentScrollPos >= scrollThreshold) {
      document.getElementById("navbar").classList.remove("visible");
    }
  } else {
    // Scrolling up
    document.getElementById("navbar").classList.add("visible");
  }

  prevScrollPos = currentScrollPos;
};


function toggleNav() {
  var navMenu = document.querySelector('.nav-item ul');
  navMenu.classList.toggle('active');
}




// Function to add/remove active class based on the active section
function updateActiveSection() {
  var sections = document.querySelectorAll('.section');
  var navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(function(section, index) {
    var rect = section.getBoundingClientRect();
    var navLink = navLinks[index];
    
    if (index === 0 && window.pageYOffset <= 500) {
      navLink.classList.add('active');
    } else if (index === sections.length - 1 && rect.top <= window.innerHeight - 100) {
      navLink.classList.add('active');
    } else if (rect.top <= 100 && rect.bottom >= 100) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

// Event listener for scroll events
window.addEventListener('scroll', function() {
  updateActiveSection();
});

// Initial check for active section on page load
window.addEventListener('DOMContentLoaded', function() {
  updateActiveSection();
});



var button = document.getElementById("fly-button");

  button.addEventListener("click", function() {
    // Perform actions or handle the click event here
    console.log("Button clicked!");
  });

 


