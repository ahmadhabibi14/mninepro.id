<script lang="ts">
	import './layout.css';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/state';
	import { CURRENT_PATH } from '@/states/page';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
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

{@render children()}
