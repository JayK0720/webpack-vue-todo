import './style.css';
import Home from './images/home.png';

function component(){
	const element = document.createElement('div');
	element.innerText = 'hello webpack';
	return element;
}
document.body.appendChild(component());


let img = document.createElement('img');
img.src = Home;

document.body.appendChild(img);


let div = document.createElement('div');
div.classList.add('hello');
document.body.append(div);