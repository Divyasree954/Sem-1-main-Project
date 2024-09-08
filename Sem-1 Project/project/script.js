
const menuToggle = document.querySelector('.checkbtn');
const menu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});


const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const faqDetails = document.querySelectorAll('.faq details');

faqDetails.forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      faqDetails.forEach(d => {
        if (d !== detail) d.removeAttribute('open');
      });
    }
  });
});


const categoryItems = document.querySelectorAll('.category li');
const menuItems = document.querySelectorAll('.restaurant-menu .menu-item');

categoryItems.forEach(category => {
  category.addEventListener('click', () => {
    categoryItems.forEach(c => c.classList.remove('active'));
    category.classList.add('active');
    
    const categoryText = category.textContent.toLowerCase();
    menuItems.forEach(item => {
      if (categoryText === 'all' || item.querySelector('.title').textContent.toLowerCase().includes(categoryText)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
