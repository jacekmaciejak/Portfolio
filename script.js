< script src = "https://unpkg.com/aos@next/dist/aos.js" > < /script> <
	script >
	AOS.init({
		duration: 1000,
		mirror: true
	});

<
/script>

<
script src = "https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js" > < /script> <
	script >
	$(document).ready(function () {
		$('.about_1-card,.about_2-card').tilt({

			perspective: 900,
			maxTilt: 20,
			glare: true,
			maxGlare: .5
		})
	})

	<
	/script>
