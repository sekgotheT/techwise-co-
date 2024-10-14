    document.addEventListener('DOMContentLoaded', function() { 
    // Handle profile picture upload
    document.getElementById('profile-upload-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.getElementById('profile-upload');
        if (input.files.length > 0) {
            alert('Profile picture uploaded successfully.');
        } else {
            alert('Please select a profile picture to upload.');
        }
    });

    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you soon.');
    });

    // Fetch message from the back-end
    fetch('http://localhost:8080/api/message') // Adjust the endpoint as needed
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the response data
            alert(data); // Example of displaying the message
        })
        .catch(error => console.error('Error:', error));

    // Web building application form submission
    const applyForm = document.getElementById('apply-form');
    applyForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your application. We will review your project details and get back to you.');
    });

    // Comment form submission and display comments
    const commentForm = document.getElementById('comment-form');
    const commentSection = document.getElementById('comment-section');
    
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const commenterName = document.getElementById('commenter-name').value;
        const commentText = document.getElementById('comment').value;

        if (commenterName && commentText) {
            // Create new comment element
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<p><strong>${commenterName}:</strong> ${commentText}</p>`;
            
            // Append new comment to comment section
            commentSection.appendChild(commentDiv);

            // Reset form fields
            commentForm.reset();
        } else {
            alert('Please enter your name and comment.');
        }
    });

    // Image preview for uploaded files
    function previewImages(event) {
        const fileInput = event.target;
        const previewContainer = document.getElementById('image-preview');
        previewContainer.innerHTML = ''; // Clear previous images

        // Loop through selected files and generate image previews
        for (let i = 0; i < fileInput.files.length; i++) {
            const file = fileInput.files[i];
            const reader = new FileReader();

            reader.onload = function (e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                imgElement.className = 'responsive'; // Add responsive styling
                previewContainer.appendChild(imgElement);
            };

            reader.readAsDataURL(file);
        }
    }

    // Attach event listener for image file input
    const imageInput = document.getElementById('profile-upload');
    if (imageInput) {
        imageInput.addEventListener('change', previewImages);
    }
});
