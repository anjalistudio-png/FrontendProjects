//showing nav when click menu on mobile
const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener('click', function() {
    // Toggle the 'active' class on the sidebar
  mobilelink.classList.toggle('active');

});
// Scroll functionality for highlights
const highlightWrapper = document.querySelector('.highlight-wrapper');
const backButtons = document.querySelectorAll('.back-menus');
const nextButtons = document.querySelectorAll('.next-menus');


backButtons.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (index === 0) { // First back button is for highlights
            highlightWrapper.scrollLeft -= 200;
        }
    });
});

nextButtons.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (index === 0) { // First next button is for highlights
            highlightWrapper.scrollLeft += 200;
        }
    });
});


const filterWrapper = document.querySelector('.filter-wrapper');
const backFilterBtn = document.querySelector('.back-menus-filter');
const nextFilterBtn = document.querySelector('.next-menus-filter');

if (backFilterBtn) {
    backFilterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        filterWrapper.scrollLeft -= 100;
    });
}

if (nextFilterBtn) {
    nextFilterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        filterWrapper.scrollLeft += 100;
    });
}


document.querySelectorAll('.highlight-wrapper, .filter-wrapper').forEach(wrapper => {
    wrapper.style.scrollBehavior = 'smooth';
});

// Close the sidebar when clicking outside of it on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        if (!mobilelink.contains(e.target) && !mobile.contains(e.target)) {
            mobilelink.classList.remove('active');
        }
    }
});




