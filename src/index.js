import './style.css';
// import _ from 'lodash';
// import print from './print.js'

function create_element(){
	let div = document.createElement('div');
	// div.onclick = print.bind(null,'hello webpack!');
	div.textContent = 'hello';
	document.body.appendChild(div);
}
// console.log(_.join(['hello','hello']," "))
create_element();