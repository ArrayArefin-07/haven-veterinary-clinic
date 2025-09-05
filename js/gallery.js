// Filter functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    galleryItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Modal functionality
            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            const modalImageTitle = document.getElementById('modalImageTitle');
            const modalImage = document.getElementById('modalImage');
            const modalImageCategory = document.getElementById('modalImageCategory');
            
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    const title = this.querySelector('.gallery-title').textContent;
                    const category = this.querySelector('.gallery-category').textContent;
                    const imgSrc = this.querySelector('.gallery-img').src;
                    
                    modalImageTitle.textContent = title;
                    modalImageCategory.textContent = category;
                    modalImage.src = imgSrc;
                    
                    imageModal.show();
                });
            });
        });