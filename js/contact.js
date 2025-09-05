 document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.querySelector('.contact-form form');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show success modal
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
                // Reset form after submission
                contactForm.reset();
            });
        });