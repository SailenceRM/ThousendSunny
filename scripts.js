const selected = document.querySelector('.select__selected');
const selectOptions = document.querySelector('.select__options');
const selectOption = document.querySelectorAll('.select__option');

selected.addEventListener('click',() => {
	selectOptions.classList.toggle('active');
	selected.classList.toggle('active');
});

selectOption.forEach(o =>  {
	o.addEventListener('click',() => {
		selected.innerHTML= o.querySelector('label').innerHTML;
		selectOptions.classList.remove('active');
	})
})

$(document).ready(function(){
	$('.slider').slick({
		
	});
})