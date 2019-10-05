const container = document.querySelector('#container');



const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);



const redText = document.createElement('p');
redText.style.color = 'red';
redText.classList.add('redText');
redText.textContent = "Hey I'm red!";

container.appendChild(redText);



const blueH = document.createElement('h3');
blueH.style.color = 'blue';
blueH.classList.add('blueH');
blueH.textContent = "I'm a blue h3!";

container.appendChild(blueH);



const pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.border = '2px solid black';
pinkDiv.classList.add('pinkDiv');

const divH =  document.createElement('h1');
divH.classList.add('divH');
divH.textContent = "I'm in a div";

const divP = document.createElement('p');
divP.classList.add('divP');
divP.textContent = "ME TOO!";

pinkDiv.appendChild(divH);
pinkDiv.appendChild(divP);
container.appendChild(pinkDiv);