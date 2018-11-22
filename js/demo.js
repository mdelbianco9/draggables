


// function dragStart(event) {
//     event.dataTransfer.setData("Text", event.target.id);
// }

// function dragging(event) {
//     document.getElementById("dragtarget").style.border = "1px solid red";
//     var parent = document.getElementById('dragtarget').parentElement;

// }

// function allowDrop(event) {
//     event.preventDefault();
// }

// function drop(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data));
//     document.getElementById("demo").innerHTML = "The p element was dropped";

//     console.log(data)

// }

ball.onmousedown = function(event){

    // gets the point on the ball that we click
    // clientX gets the position where the event occured
    // getBoundingClientRect() gets the size and position of an element
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    console.log(ball.getBoundingClientRect())

    // (2) prepare to moving: make absolute and on top by z-index
    ball.style.position = "absolute";
    ball.style.zIndex = 1000;
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
    /*moveAt(event.pageX, event.pageY);

    // changes the position of the ball 
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY){
        // ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        // ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
        // keeps the pointer in the spot it was clicked while moving
        // ball.style.left = event.pageX - shiftX + 'px';
        // ball.style.top = event.pageY - shiftY + 'px';
    }
    */

    // changes the position of the ball to the position of the cursor (onmousemove method)
    function onMouseMove(event) {
    // moveAt(event.pageX, event.pageY);
    // 
     ball.style.left = event.pageX - shiftX + 'px';
     ball.style.top = event.pageY - shiftY + 'px';
  
  }


  

  console.log(event.pageX - shiftX)
  console.log(event.pageX + "page")
  console.log(shiftX + "shift")

  // (3) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

  

};

// ball.ondragstart = function() {
//   return false;
// };




















