/** @format */
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll('.img-container').length;
let counter = 0;

nextBtn.addEventListener('click', goToNext);
prevBtn.addEventListener('click', goToPrev);

function goToNext() {
	counter++;
	if (counter > imgs - 1) counter = 0;
	slider.style.transform = `translateX(-${counter * 100}%)`;
	console.log(counter, imgs - 1);
}
function goToPrev() {
	counter--;
	if (counter < 0) counter = imgs - 1;
	slider.style.transform = `translateX(-${counter * 100}%)`;
}
