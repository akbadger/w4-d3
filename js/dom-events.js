// console.dir(document);

start();

// function start() {
//     var button = document.querySelector('button');
//     button.className ='round';

//     button.addEventListener('mouseover', function(e) {
//         if (button.className ==='round') {
//             button.className = 'circle';
//         }
//         else {
//             button.className = 'round';
//         }
//         if  (button.className = 'round') {
//             button.className = 'yellow';
//         }
//     });
// }



function start() {
    document.addEventListener('click', function(e){
       if (e.target.innerText === 'Nope') {
           e.target.style.backgroundColor = 'green';
           e.target.style.borderColor = 'brightGreen';
           e.target.style.color = 'white';
       }
       else if (e.target.innerText === 'Not This One') {
           e.target.style.backgroundColor = 'pink';
           e.target.style.padding = '30px';
           e.target.style.color = 'white';
       }
       else if (e.target.innerText === 'This Is A Button') {
           e.target.style.backgroundColor = 'orange';
           e.target.style.color = 'white';
       }
       else if (e.target.innerText === 'Still Just A Button') {
           e.target.style.backgroundColor = 'purple';
           e.target.style.textTransform = 'uppercase';
           e.target.style.color = 'white';
       }
    });
}
