<script lang="ts">
	import Navbar from '@/partials/Navbar.svelte';
	import Footer from '@/partials/Footer.svelte';
	import WhatsappButton from '@/partials/WhatsappButton.svelte';
	
	let { children } = $props();
</script>

<div class="bg-white text-slate-800 md:mt-24 mt-16 min-h-screen flex flex-col top-0 bottom-0 left-0 right-0 overflow-x-hidden">
	<div class="w-full h-full flex flex-col max-w-full">
		<Navbar />
		<main class="flex flex-col left-0 right-0 h-auto">
			{@render children()}
		</main>
		<WhatsappButton />
		<Footer />
	</div>
</div>