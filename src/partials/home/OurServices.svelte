<script lang="ts">
	import Image from "@/components/Image.svelte";

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

<div class="w-full px-4 md:px-0 mx-auto md:my-14 my-7">
	<div class="flex flex-col gap-11">
		<h2 id="our-services" class="md:text-5xl text-3xl text-center font-bold font-poppins">
			Our Services
		</h2>
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
