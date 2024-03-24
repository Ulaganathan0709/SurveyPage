function resetForm() {
    document.getElementById('registrationForm').reset();
    const uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.src = '';
    uploadedImage.style.display = 'none';
  }
  
  function loadImage(event) {
    const [file] = event.target.files;
    if (file) {
      const uploadedImage = document.getElementById('uploadedImage');
      uploadedImage.src = URL.createObjectURL(file);
      uploadedImage.style.display = 'block';
      uploadedImage.onload = () => {
        URL.revokeObjectURL(uploadedImage.src); 
      };
    }
  }
  