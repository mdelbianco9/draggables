

let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event){
    event.preventDefault();

    var shiftX = event.clientX - thumb.getBoundingClientRect().left; 

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event){
        newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if(newLeft < 0){
            newLeft = 0;
        }

        var rightEdge = slider.offsetWidth - thumb.offsetWidth;

        if(newLeft > rightEdge){
            newLeft = rightEdge
        }

        thumb.style.left = newLeft + "px";
        console.log(newLeft)
    }

    function onMouseUp(){
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    

}