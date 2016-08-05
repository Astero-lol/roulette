(function () {
	var roulette = document.querySelector('.roulette'),
		textResult = document.querySelector('.text-result'),
		button = document.querySelector('.button'),

		sectorCount = 16,
		degree = 360,
		sectorSize = degree / sectorCount,
		progress = 0,

		isAnimate = true;

	function startRoulette() {
		if(!isAnimate) return false;
		progress = progress + degree * 2;

		var result = Math.floor(Math.random() * (1 - sectorCount + 1)) + sectorCount,
			rotate = result * sectorSize + progress;

		roulette.style.transform = 'rotate('+ rotate +'deg)';
		textResult.style.opacity = 0;

		isAnimate = false;

		setTimeout(function () {
			isAnimate = true;
			textResult.style.opacity = 1;
			textResult.innerHTML = 'Result: Section ' + result;
		}, result * sectorSize + degree * 7);

	}

	button.addEventListener('click', startRoulette);

}());