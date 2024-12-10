document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');
    const modal = document.getElementById('thankYouModal');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            goal: form.goal.value,
            experience: form.experience.value
        };

        // In a real application, you would send this data to your server
        console.log('Lead captured:', formData);

        // Show thank you modal
        modal.classList.add('active');

        // Reset form
        form.reset();
    });
});