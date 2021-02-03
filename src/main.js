import home from './images/home.png';
import _ from 'lodash';
function create_element(){
	let img = document.createElement('img');
	img.src = home;
	document.body.appendChild(img);
}
console.log( _.join(['world','world']," ") )
create_element();