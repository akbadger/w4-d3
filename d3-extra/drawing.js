enableDrawing();

function enableDrawing() {

    // holds all browser JavaScript code
    console.dir(window);

    // holds all browser HTML code
    console.dir(document);


    document.addEventListener('mousemove', function(e) {
        console.log(e);

        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        var box = document.createElement('div');

        // these are css values and not javascript - that's why they are strings
        box.style.position = 'absolute';
        box.style.top = e.clientY+ 'px';
        box.style.left = e.clientX+ 'px';
        box.style.width = '10px';
        box.style.height = red + 'px';
        box.style.borderRadius = '50%';
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        document.body.appendChild(box);
    });
}