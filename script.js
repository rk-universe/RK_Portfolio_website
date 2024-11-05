const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
    })
})

// change background header

function scrollHeader() {
const header = document.getElementById('header');
this.scrollY >= 20 ? header.classList.add('active'): header.classList.remove('active');
}
window.addEventListener('scroll',scrollHeader )

/* Hero type effect */
const typed = document.querySelector('.typed');
if(typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
    })
}

// Scroll section action link
const sections = document.querySelectorAll('section[id]');
console.log(sections)

function scrollActive() {
  // Use scrollY for vertical scroll position (recommended)
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50; // Adjust offset as needed

    const sectionId = section.getAttribute('id');

    // Check if section is in view
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Find corresponding link in menu with matching href
      document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
    } else {
      // Remove active-link class if section is not in view
      document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

// Call scrollActive when scrolling
window.addEventListener('scroll', scrollActive);

// Resume scroll
// const pages = document.querySelectorAll('.page');
// const resume = document.querySelectorAll('.resume');

// function resumeActive() {
//     const scrollY = window.scrollY;

//     pages.forEach(page => {
//         const sectionHeight = page.offsetHeight;
//         const sectionTop = page.offsetTop - 50;

//         let sectionId = page.getAttribute('id');

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
//         }
//         else {
//             document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
//         }
//     });
// }

// window.addEventListener('scroll', resumeActive);

const pages = document.querySelectorAll('.page');
const resumeTabs = document.querySelectorAll('.resume_tabs a');

function resumeActive() {
    const scrollY = window.scrollY;

    pages.forEach(page => {
        const sectionTop = page.offsetTop-150;
        const sectionHeight = page.offsetHeight;
        const sectionId = page.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            resumeTabs.forEach(tab => {
                if (tab.getAttribute('href') === '#' + sectionId) {
                    tab.classList.add('current');
                } else {
                    tab.classList.remove('current');
                }
            });
        }
    });
}

window.addEventListener('scroll', resumeActive);
