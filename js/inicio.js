var cur = 0;
const images = [
	'https://images.unsplash.com/photo-1530645956250-c32934150328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=70',
	'https://images.unsplash.com/photo-1530645561283-171581f1b1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=70',
	'https://images.unsplash.com/photo-1530646120024-0f8993f7752a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=70',
	'https://images.unsplash.com/photo-1528376030525-fea31ca71e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=70',
	'https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=70',
	'https://images.unsplash.com/photo-1509392949348-24e77e5e902d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=70',
]; 

const hero = document.getElementById('hero'),
			btn = document.querySelector('button');

const n = function(){
	cur++;
	let next;
	if( images[cur] ){ next = images[cur]; }
	else { next = images[0]; cur = 0; }
	
	// 	disable cache
	// next += '&x=' + new Date().getTime();
	
		var img = new Image();
		img.onload = function(){
			 hero.style = 'background-image: url('+ next +')';
				btn.classList.remove('loading');
		};
	
		img.src = next;	
}

btn.onclick = function(){
	this.classList.add('loading');
	n();
}