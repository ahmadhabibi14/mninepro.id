<script lang="ts">
	import Head from "@/partials/Head.svelte";
	import { PathEvents } from "@/states/page";
	import { Icon } from "svelte-icons-pack";
	import { RiArrowsArrowRightUpLine } from "svelte-icons-pack/ri";

  const events: {
    title: string;
    desc: string;
    images: string[];
    partner: string;
    venue: string;
  }[] = [
    {
      title: 'ANNUAL NATIONAL DEALERS GATHERING AQUA 2024',
      desc: 'an annual event that brings together dealers from all over Indonesia, packaged with an orchestra concept and held at the awards night and gala dinner, we provide all the equipment at this event and also handle the running of the event.',
      images: [
        'https://bitpro.id/wp-content/uploads/2025/03/DSC00137-scaled.jpeg',
        'https://bitpro.id/wp-content/uploads/2025/09/gathering-aqua-1.jpg',
        'https://bitpro.id/wp-content/uploads/2025/09/gathering-aqua-3.jpg',
        'https://bitpro.id/wp-content/uploads/2025/09/gathering-aqua-2.jpg'
      ],
      partner: 'PT Haier Sales Indonesia',
      venue: 'Jakarta'
    }
  ];

  function handleImgSrcError(event: any) {
		event.target.onerror = null;
		event.target.src = '/img/placeholder.webp';
	}
</script>

<Head
  title="Event"
  path={PathEvents}
/>

<div class="min-h-[900px] w-full flex flex-col gap-7 md:gap-10">
  <div class="container max-w-6xl mx-auto my-10 px-4 md:px-0 flex flex-col">
    <header class="mt-16 mb-24">
      <h1 class="text-4xl font-bold text-center">Previous Event</h1>
    </header>
    
    <section class="flex flex-col gap-7">
      {#each events as event}
      <div class="md:grid md:grid-cols-2 md:gap-8
        flex flex-col gap-5">
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          {#each event.images as image}
            <div class="rounded-xl overflow-hidden group w-full h-44">
              <img
                src={image}
                onerror={handleImgSrcError}
                alt="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
            </div>
          {/each}
        </div>
        <div class="flex flex-col gap-4 justify-between">
          <div class="flex w-fit justify-center items-center bg-mnine-2 text-white px-4 py-1 rounded-xl">
            <span>{event.partner}</span>
          </div>
          <h4 class="font-bold text-2xl text-mnine-2">{event.title}</h4>
          <div class="flex flex-col gap-2">
            <p class="text-lg">{event.desc}</p>
            <span>Venue: {event.venue}</span>
            <button class="bg-mnine-2 text-white text-lg font-semibold py-2 px-10 rounded-xl w-fit
            flex flex-row gap-2 items-center justify-center
            cursor-pointer shadow-lg">
              <span>More Portfolio</span>
              <Icon
                src={RiArrowsArrowRightUpLine}
                size="22"
              />
            </button>
          </div>
        </div>
      </div>
      {/each}
    </section>
  </div>
</div>