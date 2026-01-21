<script lang="ts">
  const services: {img: string; name: string}[] = [
    {
      img: '/img/services/sound-system.jpg',
      name: 'Sound System'
    },
    {
      img: '/img/services/band-equipment.jpg',
      name: 'Band Equipment'
    },
    {
      img: '/img/services/lighting.jpg',
      name: 'Lighting'
    },
    {
      img: '/img/services/led-screen.webp',
      name: 'LED Screen'
    },
    {
      img: '/img/services/display-multimedia.jpg',
      name: 'Display & Multimedia'
    },
    {
      img: '/img/services/genset.jpg',
      name: 'Genset'
    },
    {
      img: '/img/services/ac.jpg',
      name: 'AC'
    },
    {
      img: '/img/services/tenda.jpg',
      name: 'Tenda'
    },
    {
      img: '/img/services/toilet.png',
      name: 'Toilet'
    },
    {
      img: '/img/services/panggung.jpg',
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
    event.target.src = '/img/placeholder-service.png';
  }
</script>

<div class="w-full px-5 md:px-0 mx-auto md:my-14 my-7">
  <div class="flex flex-col gap-11">
    <h2 id="our-services" class="md:text-5xl text-3xl text-center font-bold font-orbitron">
      Our Services
    </h2>
    <div class="flex flex-wrap gap-6 justify-center-safe items-center">
      {#each services as s}
      <div class="md:h-64 h-40 md:w-80 w-full grid md:grid-rows-[70%_1fr] grid-rows-[75%_1fr] rounded-xl border border-slate-200 overflow-hidden bg-slate-100">
        <div class="w-full h-auto overflow-hidden">
          <img
            onerror={handleImgSrcError}
            src={s.img}
            alt={s.name}
            class="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
        <div class="flex justify-center items-center font-orbitron">
          <h5 class="text-center text-lg font-medium">{s.name}</h5>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>