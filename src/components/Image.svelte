<script lang="ts">
	export let src: string;
	export let alt: string = '';
	export let classNameContainer: string = '';
  export let classNameImg: string = '';
	export let width: string | number | undefined = undefined;
	export let height: string | number | undefined = undefined;

	let loaded = false;
	let error = false;

	function handleLoad() {
		loaded = true;
	}

	function handleError() {
		error = true;
		loaded = false;
	}
</script>

<div class="relative overflow-hidden {classNameContainer}">
	{#if !loaded || error}
		<img
			src="/img/placeholder.svg"
			alt="Placeholder"
			class="absolute inset-0 w-full h-full object-cover"
		/>
	{/if}

	<img
		{src}
		{alt}
		{width}
		{height}
		class="w-full h-full object-cover duration-300 transition-all
      { loaded && !error ? 'opacity-100' : 'opacity-0' }
      { classNameImg }"
    aria-label={alt}
		onload={handleLoad}
		onerror={handleError}
	/>
</div>
