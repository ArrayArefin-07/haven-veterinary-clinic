        document.addEventListener('DOMContentLoaded', function() {
            const appointmentForm = document.getElementById('appointmentForm');
            const confirmationMessage = document.getElementById('confirmationMessage');
            
            // Set minimum date for date input to today
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
            
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            
            const formattedToday = `${yyyy}-${mm}-${dd}`;
            document.getElementById('preferredDate').setAttribute('min', formattedToday);
            
            appointmentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validate that at least one service is selected
                const services = document.querySelectorAll('input[name="service"]:checked');
                if (services.length === 0) {
                    alert('Please select at least one service.');
                    return;
                }
                
                // If validation passes, show confirmation message
                confirmationMessage.style.display = 'block';
                
                // Scroll to confirmation message
                confirmationMessage.scrollIntoView({ behavior: 'smooth' });
                
                // We would typically send the form data to a server here
                // For this example, i'll just log the data to consol
                const formData = {
                    ownerName: document.getElementById('ownerName').value,
                    contactNumber: document.getElementById('contactNumber').value,
                    email: document.getElementById('email').value,
                    address: document.getElementById('address').value,
                    animalType: document.getElementById('animalType').value,
                    animalName: document.getElementById('animalName').value,
                    age: document.getElementById('age').value,
                    breed: document.getElementById('breed').value,
                    services: Array.from(services).map(service => service.value),
                    healthConcern: document.getElementById('healthConcern').value,
                    preferredDate: document.getElementById('preferredDate').value
                };
                
                console.log('Form data:', formData);
                
                // Reset form after submission (optional)
                appointmentForm.reset();
            });
        });