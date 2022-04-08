console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Success! Your form has been submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const mouseoverPic = document.querySelector('img')
mouseoverPic.addEventListener('mouseover', () => {
	alert("Wow, you have great taste!")
})