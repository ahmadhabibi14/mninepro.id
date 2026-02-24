<script lang="ts">
	export let imgBg: string = '/img/lighting-concert-confetti.png';
	export let imgAlt: string = 'Concert, pink confetti';
	export let title: string = 'Tentang Kami';

	function handleImgSrcError(event: any) {
		event.target.onerror = null;
		event.target.src = '/img/placeholder.webp';
	}
</script>

<header class="relative min-h-[200px] md:min-h-[300px] z-1 bg-black">
	<div class="absolute w-full h-full bg-black/60 backdrop-blur-[2px] z-3"></div>
	<img
		src={imgBg}
		onerror={handleImgSrcError}
		alt={imgAlt}
		class="absolute w-full h-full object-cover z-2"
	/>
	<div class="absolute w-full h-full flex flex-col z-3 md:mt-32 justify-center md:justify-start">
		<div class="md:container mx-auto">
			<div class="w-full flex flex-col text-center gap-6 px-4 md:px-0">
				<h1 class="text-white font-poppins leading-8 text-4xl md:text-7xl font-bold">
					{title}
				</h1>
			</div>
		</div>
	</div>
</header>
