<script lang="ts">
	import Image from "@/components/Image.svelte";
	import Head from "@/partials/Head.svelte";
	import { PathServices } from "@/states/page";

  const services: { img: string; name: string }[] = [
		{
			img: '/img/services/sound-system.webp',
			name: 'Sound System'
		},
		{
			img: '/img/services/band-equipment.webp',
			name: 'Band Equipment'
		},
		{
			img: '/img/services/lighting.webp',
			name: 'Lighting'
		},
		{
			img: '/img/services/led-screen.webp',
			name: 'LED Screen'
		},
		{
			img: '/img/services/display-multimedia.webp',
			name: 'Display & Multimedia'
		},
		{
			img: '/img/services/genset.webp',
			name: 'Genset'
		},
		{
			img: '/img/services/ac.webp',
			name: 'AC'
		},
		{
			img: '/img/services/tenda.webp',
			name: 'Tenda'
		},
		{
			img: '/img/services/toilet.webp',
			name: 'Toilet'
		},
		{
			img: '/img/services/panggung.webp',
			name: 'Panggung'
		},
		{
			img: '/img/services/barikade.webp',
			name: 'Barikade'
		},
		{
			img: '/img/services/rowing.webp',
			name: 'Rowing'
		},
		{
			img: '/img/services/venue-lights.webp',
			name: 'Venue Lights'
		}
	];

	function handleImgSrcError(event: any) {
		event.target.onerror = null;
		event.target.src = '/img/placeholder.webp';
	}
</script>

<Head
  title="Layanan"
  path={PathServices}
/>

<div class="min-h-[900px] w-full flex flex-col gap-7 md:gap-10">
  <div class="relative min-h-[200px] md:min-h-[300px] z-1 bg-black" role="banner">
		<div class="absolute w-full h-full bg-black/60 backdrop-blur-[2px] z-3"></div>
		<img
			src="/img/lighting-concert-confetti.png"
			alt="Concert, pink confetti"
			class="absolute w-full h-full object-cover z-2"
		/>
		<div class="absolute w-full h-full flex flex-col z-3 md:mt-32 justify-center md:justify-start">
			<div class="md:container mx-auto">
				<div class="w-full flex flex-col text-center gap-6 px-4 md:px-0">
					<h1 class="text-white font-poppins leading-8 text-4xl md:text-7xl font-bold">
						Layanan Kami
					</h1>
				</div>
			</div>
		</div>
	</div>

  <div class="container max-w-6xl mx-auto flex mt-6 mb-14 px-4 md:px-0">
    <div class="flex flex-wrap gap-6 justify-center-safe items-center">
			{#each services as s}
				<div
					class="md:h-64 h-40 md:w-80 w-full grid md:grid-rows-[70%_1fr] grid-rows-[75%_1fr] rounded-xl border border-slate-300 overflow-hidden bg-slate-100"
				>
					<Image
						src={s.img}
						alt={s.name}
						classNameContainer="w-full h-full overflow-hidden group"
						classNameImg="group-hover:scale-110 ease-in-out"
					/>
					<div class="flex justify-center items-center font-poppins">
						<h3 class="text-center text-lg font-medium">{s.name}</h3>
					</div>
				</div>
			{/each}
		</div>
  </div>
</div>