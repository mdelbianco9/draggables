


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

    let currentDroppable = null; // potential droppable that we're flying over right now

    // changes the position of the ball to the position of the cursor (onmousemove method)
    function onMouseMove(event) {
    // moveAt(event.pageX, event.pageY);
    // 
     ball.style.left = event.pageX - shiftX + 'px';
     ball.style.top = event.pageY - shiftY + 'px';

     ball.hidden = true;
     // gets the element below the cursor, explusing the ball because we hid it
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;

      // mousemove events may trigger out of the window (when the ball is dragged off-screen)
      // if clientX/clientY are out of the window, then elementfromPoint returns null
      if (!elemBelow) return;

       // potential droppables are labeled with the class "droppable" (can be other logic) looks for the specific element below the cursor
        let droppableBelow = elemBelow.closest('.droppable');
        console.log(droppableBelow)
        console.log(currentDroppable)
        if (currentDroppable != droppableBelow) { // if there are any changes
        // we're flying in or out...
        // note: both values can be null
        //   currentDroppable=null if we were not over a droppable (e.g over an empty space)

        //   droppableBelow=null if we're not over a droppable now, during this event
        var ourclass = document.getElementsByClassName('droppable');
        if (currentDroppable) {
          currentDroppable.style.backgroundColor = "#fff";
          // ourclass[0].style.backgroundColor = "#fff";
        }
        // This is placed here as a way to trigger the flying in and flying out logic
        currentDroppable = droppableBelow;

        if (currentDroppable) {
          // the logic to process "flying in" of the droppable
          // the logic to process "flying out" of the droppable (remove highlight)
          currentDroppable.style.backgroundColor = "red";
          // ourclass[0].style.backgroundColor = "red";
        }
      }

    }

// var bw = document.body.getBoundingClientRect();
//      console.log(bw)
  

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
















