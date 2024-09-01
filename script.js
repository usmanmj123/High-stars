document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn('Target element not found for smooth scrolling:', this.getAttribute('href'));
        }
    });
});

document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = this.querySelector('[name="name"]').value.trim();
    const email = this.querySelector('[name="email"]').value.trim();
    const subject = this.querySelector('[name="subject"]').value.trim();
    const message = this.querySelector('[name="message"]').value.trim();
    const successMessageElement = document.getElementById('success-message');
    
    if (name && email && subject && message) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            successMessageElement.textContent = 'Please enter a valid email address.';
            successMessageElement.style.color = 'red';
            return;
        }
        successMessageElement.textContent = 'Thank you for your message!';
        successMessageElement.style.color = 'green';
        this.reset();
    } else {
        successMessageElement.textContent = 'Please fill all the fields.';
        successMessageElement.style.color = 'red';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 20 ? 'block' : 'none';
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.menu')?.classList.toggle('show');
});
