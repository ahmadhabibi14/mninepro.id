<script lang="ts">
  import Head from "@/partials/Head.svelte";
	import AboutUs from "@/partials/home/AboutUs.svelte";
	import Jumbotron from "@/partials/home/Jumbotron.svelte";
	import OurServices from "@/partials/home/OurServices.svelte";
	import VIsiMisi from "@/partials/home/VIsiMisi.svelte";
	import WhyChooseUs from "@/partials/home/WhyChooseUs.svelte";
</script>

<Head />

<div class="min-h-[900px] w-full flex flex-col gap-7 md:gap-10 pb-10">
  <Jumbotron />
  <AboutUs />
  <WhyChooseUs />
  <OurServices />
  <VIsiMisi />
</div>