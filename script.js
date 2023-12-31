

//nav bar optimization for scroling up/hide/show

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


  //adding active status to nav bar- color change

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

// Nav check for active section on page load-when loading/refres
window.addEventListener('DOMContentLoaded', function() {
  updateActiveSection();
});



//buttons link
function redirectToWebsite(url) {
  window.location.href = url;
}

 


