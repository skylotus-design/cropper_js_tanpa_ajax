const fileInput = document.getElementById('fileInput');
const image = document.getElementById('image');
const cropButton = document.getElementById('cropButton');
const croppedImageInput = document.getElementById('croppedImageInput');
let cropper;

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
            image.style.display = 'block';

            // Initialize Cropper.js
            cropper = new Cropper(image, {
                aspectRatio: 0, // Set the aspect ratio here (e.g., 1 for square)
                viewMode: 0,
            });
        };
        reader.readAsDataURL(file);
    }
});

cropButton.addEventListener('click', function() {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas();
        const dataURL = canvas.toDataURL('image/jpeg');
        croppedImageInput.value = dataURL;

        // Submit the form
        document.getElementById('uploadForm').submit();
    }
    
});
