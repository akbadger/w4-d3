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
        box.className = 'box';
        box.style.position = 'absolute';
        box.style.top = e.clientY+ 'px';
        box.style.left = e.clientX+ 'px';
        box.style.width = '10px';
        box.style.height = '20px';
        box.style.borderRadius = '50%';
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        document.body.appendChild(box);
    });

    document.addEventListener('click', function(e) {
    if (e.target.className === 'box') {
        var box = e.target;
        // Number converts the width string style into a number. Replace replaces the px with nothing, and we add px back on to make it a css value once again
        box.style.width = (Number(box.style.width.replace('px', '')) + 150) + 'px';
        box.style.height = (Number(box.style.height.replace('px', '')) + 150) + 'px';
    }
});

}




