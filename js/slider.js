

let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event){
    event.preventDefault();

    var shiftX = event.clientX - thumb.getBoundingClientRect().left; 

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    var demo = document.getElementById('demo');



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
        demo.innerHTML = Math.floor((newLeft/(slider.getBoundingClientRect().width-20))*100);

        console.log(slider.getBoundingClientRect())
    }

    function onMouseUp(){
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}
var count = 0;
document.onkeydown = function(event){
    var demo = document.getElementById('demo');
    if(event.keyCode == 39){
        let thumb = slider.querySelector('.thumb');
        count=count + 10;
    }else if(event.keyCode == 37){
        count=count-10;
    }
    thumb.style.left = count + "px";
    demo.innerHTML = count
}








