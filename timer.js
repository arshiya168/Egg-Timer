const images = [
    'assets/images/softboiledegg1.png',
    'assets/images/softboiledegg2.png',
    'assets/images/softboiledegg3.png'
  ];

  let currentIndex = 0; 
    let imageElement = document.querySelector('.egg-img img');
    let animationInterval; 

    function changeImage() {
      imageElement.src = images[currentIndex];
      
     
      currentIndex = (currentIndex + 1) % images.length; 
    }

    imageElement.addEventListener('click', () => {
       
      if (!animationInterval) { 
        animationInterval = setInterval(changeImage, 1000); 
      }
    });
   

  
