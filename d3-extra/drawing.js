enableDrawing();

function enableDrawing() {
    document.addEventListener('mousemove', function(e) {
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        var box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = e.clientY+ 'px';
        box.style.left = e.clientX+ 'px';
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

        document.body.appendChild(box);
    });
}