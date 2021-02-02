import './style.css';
import Home from './images/home.png';
import {printMe} from './print.js';

function component(){
	const element = document.createElement('div');
	const button = document.createElement("button");
	button.innerHTML = 'click me';
	button.onclick = printMe;
	element.appendChild(button);
	return element;
}
document.body.appendChild(component());


let img = document.createElement('img');
img.src = Home;

document.body.appendChild(img);


let div = document.createElement('div');
div.classList.add('hello');
document.body.append(div);