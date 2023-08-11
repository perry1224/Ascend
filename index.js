
const header = document.getElementById('header');
    const paragraph = document.getElementById('paragraph');

    function fadeInElement(element) {
      element.style.transition = 'opacity 1s'; // Set the transition duration
      element.style.opacity = 1; // Set the target opacity to 1 (fully visible)
    }

    // Call the fadeInElement function after a short delay (e.g., 100ms) to start the fade-in effect
    setTimeout(() => {
      fadeInElement(header);
   
    }, 500);

    setTimeout(() => {
 
      fadeInElement(paragraph);
    },  1500);

  // Get all elements with the class "js-input"
  const inputs = document.querySelectorAll('.js-input');

  // Function to handle the keyup event
  function handleKeyup(event) {
    const input = event.target;
    if (input.value) {
      input.classList.add('not-empty');
    } else {
      input.classList.remove('not-empty');
    }
  }

  // Attach the event listener to each input element
  inputs.forEach(input => {
    input.addEventListener('keyup', handleKeyup);
  });



  // FAQ

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
// Check if AOS object exists before calling AOS.init()
if (typeof AOS !== 'undefined') {
  AOS.init();
} else {
  // If AOS is not defined yet, you can either wait for it to load or handle the situation accordingly
  console.warn('AOS library is not loaded yet. Make sure you have included the AOS library.');
}

// scroll to top functionality
const scrollUpIcon = document.querySelector(".scroll-up");
let isScrolling = false;

scrollUpIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (!isScrolling && window.scrollY > 0) {
    isScrolling = true;
    scrollUpIcon.classList.add("show");
  } else if (isScrolling && window.scrollY === 0) {
    isScrolling = false;
    scrollUpIcon.classList.remove("show");
  }
});

