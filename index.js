// imageLoad.js
const loadImage = new Promise((resolve, reject) => {
    const image = new Image();
    image.src = 'C:/Users/maria/OneDrive/Pictures/Screenshots/Screenshot 2023-05-27 212557.png';
  
    image.onload = () => {
      resolve(image); // Resolve the promise with the loaded image
    };
  
    image.onerror = () => {
      reject('Failed to load image'); // Reject the promise with an error message
    };
  });
  
  loadImage
    .then((image) => {
      // Do something with the loaded image
      console.log('Image loaded:', image);
    })
    .catch((error) => {
      // Handle the error if the image failed to load
      console.error('Image loading failed:', error);
    });
  