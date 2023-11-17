async function  getTestimonials() {
    const response = await fetch('./json/testimonials.json'); // Fetch the data
    const testimonials = await response.json(); // Convert the data to JSON
    return testimonials; // Return the data
}

async function loadRandomTestimonial() {
    const testimonials = await getTestimonials();  // Get the testimonials
    const randomIndex = Math.floor(Math.random() * testimonials.length); // Get a random index
    
    const testimonialText = document.getElementById('testimonialText'); // Get the testimonial text element
    const testimonial = testimonials[randomIndex]; // Get the testimonial at the random index

    testimonialText.innerHTML = `<strong>${testimonial.name}</strong>: "${testimonial.quote}"`; // Set the testimonial text
} 

document.addEventListener('DOMContentLoaded', loadRandomTestimonial); // Load a random testimonial when the page loads
