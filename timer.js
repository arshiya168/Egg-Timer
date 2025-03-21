const images = [
    'assets/images/softboiledegg1.png',
    'assets/images/softboiledegg2.png',
    'assets/images/softboiledegg3.png'
  ];

  let currentIndex = 0; // Track the current image index
    let imageElement = document.querySelector('.egg-img img'); // Get the image element
    let animationInterval; // Variable to store the interval

    // Function to change the image
    function changeImage() {
      // Update the src attribute with the next image
      
      
      imageElement.src = images[currentIndex];
      
      // Move to the next image in the array
      currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
    }

    // Start the animation when the image is clicked
    imageElement.addEventListener('click', () => {
       
      if (!animationInterval) { // Check if the animation is not already running
        animationInterval = setInterval(changeImage, 1000); // Start the loop (500ms interval)
      }
    });
   

  