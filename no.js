//function change(color) {
     
   // document.body.style.backgroundColor = color;
    
 // }
 var backgroundColors = ['blue', 'red'];
 var currentColorIndex = 0;
 
 function change() {
   
   document.body.style.backgroundColor = backgroundColors[currentColorIndex];
   currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
 }