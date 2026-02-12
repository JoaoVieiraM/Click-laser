// FAQ Accordion Logic

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            // Close all other items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector(".faq-answer");
                const otherIcon = otherItem.querySelector(".faq-icon");
                if (otherItem !== item) {
                    otherAnswer.style.display = "none";
                    otherIcon.style.transform = "rotate(0deg)";
                    // Optional: You could use GSAP here too for smooth closing of others
                }
            });

            // Toggle current item
            if (isOpen) {
                answer.style.display = "none";
                icon.style.transform = "rotate(0deg)";
            } else {
                answer.style.display = "block";
                icon.style.transform = "rotate(45deg)";

                // Add simple fade in animation
                gsap.from(answer, { opacity: 0, duration: 0.3 });
            }
        });
    });
});
