/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact__form');
  const nameInput = form.querySelector('input[placeholder="Name"]');
  const emailInput = form.querySelector('input[placeholder="Email"]');
  const messageInput = form.querySelector('textarea[placeholder="Message"]');
  const submitBtn = form.querySelector('input[type="button"]');

  submitBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }

    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    if (!message) {
      alert('Please enter a message.');
      messageInput.focus();
      return;
    }

    // If all fields are valid:
    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Clear form fields:
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });

  // Simple email validation function
  function validateEmail(email) {
    // Basic regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

const typed = new Typed('.multiple-text', {
  strings:['An Engineer', 'A Web Developer', 'A MERN Developer', 'A Coder'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});
