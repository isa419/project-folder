
const currentYear = new Date().getFullYear();
const copyrightParagraph = document.querySelector('footer p'); 
if (copyrightParagraph) {
    copyrightParagraph.textContent = `© ${currentYear} Wanderlust Adventures. All rights reserved.`;
}
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

if (scrollToTopBtn) { 
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
}

const contactForm = document.querySelector('form');

if (contactForm) { 
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        let isValid = true;

        nameInput.style.border = '1px solid #ccc';
        emailInput.style.border = '1px solid #ccc';
        messageInput.style.border = '1px solid #ccc';

        if (nameInput.value.trim() === '') {
            nameInput.style.border = '2px solid red';
            alert('Please enter your name.');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailInput.style.border = '2px solid red';
            alert('Please enter your email.');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageInput.style.border = '2px solid red';
            alert('Please enter your message.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully (this is a demo, no actual submission)!');
            contactForm.reset(); 
        }
    });
}
const dreamTripInput = document.getElementById('dreamTripInput');
const getAiSuggestionBtn = document.getElementById('getAiSuggestionBtn');
const aiSuggestionOutput = document.getElementById('aiSuggestionOutput');

if (getAiSuggestionBtn && dreamTripInput && aiSuggestionOutput) {
    getAiSuggestionBtn.addEventListener('click', function() {
        const userDescription = dreamTripInput.value.trim().toLowerCase();
        let suggestion = '';

        if (userDescription === '') {
            aiSuggestionOutput.innerHTML = '<p style="color: red;">Please describe your dream trip!</p>';
            aiSuggestionOutput.classList.remove('loading');
            return;
        }
        aiSuggestionOutput.innerHTML = '<p class="loading">Thinking... Please wait for your personalized suggestion!</p>';
        aiSuggestionOutput.classList.add('loading');
        setTimeout(() => {
            if (userDescription.includes('beach') || userDescription.includes('relaxing') || userDescription.includes('sun')) {
                suggestion = "For a relaxing beach getaway, consider the stunning white sands and clear waters of the **Maldives** or the vibrant coastal culture of **Zanzibar, Tanzania**.";
            } else if (userDescription.includes('mountain') || userDescription.includes('hike') || userDescription.includes('adventure')) {
                suggestion = "An adventurous mountain hike awaits in the **Nepalese Himalayas** with breathtaking Everest views, or the majestic **Rwenzori Mountains in Uganda** for a unique equatorial glacier experience.";
            } else if (userDescription.includes('city') || userDescription.includes('cultural') || userDescription.includes('history')) {
                suggestion = "Dive into history and culture in **Rome, Italy**, exploring ancient ruins, or experience the vibrant art and culinary scene of **Nairobi, Kenya** with its unique urban safari!";
            } else if (userDescription.includes('wildlife') || userDescription.includes('safari') || userDescription.includes('animals')) {
                suggestion = "Experience an unforgettable wildlife safari in **Kenya's Maasai Mara** (for the Great Migration) or the diverse ecosystems of **Botswana's Okavango Delta**.";
            } else {
                suggestion = "It sounds like an amazing journey! How about exploring the ancient wonders of **Petra, Jordan**, or discovering the lush rainforests and biodiversity of **Costa Rica**? Both offer unique adventures!";
            }
            aiSuggestionOutput.innerHTML = `<p>${suggestion}</p>`;
            aiSuggestionOutput.classList.remove('loading');
            aiSuggestionOutput.querySelector('.placeholder-text')?.remove(); 
        }, 2000); 
    });
}