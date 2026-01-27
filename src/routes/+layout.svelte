<script lang="ts">
	import './layout.css';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/state';
	import { CURRENT_PATH } from '@/states/page';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { UNDER_CONSTRUCTION } from '@/states/setting';
	import Head from '@/partials/Head.svelte';
	import '@fontsource-variable/orbitron';
	import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';
	
	let { children } = $props();

	NProgress.configure({
		minimum: 0.16,
		speed: 500,
		showSpinner: false,
		easing: 'ease'
	});

  $effect(() => {
    if (navigating.to) {
      NProgress.start();
      CURRENT_PATH.set(navigating.to.url.pathname);
    } else {
      NProgress.done();
    }
  });

  onMount(() => {
    if (browser) {
      CURRENT_PATH.set(window.location.pathname);
    }
  });
</script>

{#if $UNDER_CONSTRUCTION}
	<Head
		title="MNine Production | Under Construction"
	/>
	
	<div class="bg-white text-slate-800 top-0 bottom-0 left-0 right-0 h-screen w-screen overflow-x-hidden">
	<div class="w-full h-full flex flex-col">
		<main class="flex flex-col left-0 right-0 h-full mx-5">
			<div class="flex flex-col gap-5 justify-center items-center h-full w-full">
				<img
					src="/img/allen_heath_sq_6.webp"
					alt="Allen & Heath SQ-6"
					class="w-full md:w-96 h-auto"
				/>
				<div class="flex flex-col gap-2 justify-center items-center text-center">
					<h1 class="text-mnine-2 font-bold text-3xl md:text-4xl">Under Construction</h1>
					<p class="md:text-lg text-base">
						Complete Event Equipment Rental Solutions by <a href="https://mninepro.id" class="italic underline">mninepro.id</a>
					</p>
				</div>
			</div>
		</main>
	</div>
</div>
{:else}
	{@render children()}
{/if}
