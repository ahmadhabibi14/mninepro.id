<script lang="ts">
	import CompanyTeamLegality from "@/partials/about/CompanyTeamLegality.svelte";
	import Head from "@/partials/Head.svelte";


</script>

<Head
  title="Tentang Kami"
/>

<div class="min-h-[900px] w-full flex flex-col gap-7 md:gap-10 pb-10">
  <div class="relative min-h-[200px] md:min-h-[300px] z-1 bg-black" role="banner">
    <div class="absolute w-full h-full bg-black/60 backdrop-blur-[2px] z-3"></div>
    <img
      src="/img/lighting-concert-confetti.png"
      alt="Concert, pink confetti"
      class="absolute w-full h-full object-cover z-2"
    />
    <div class="absolute w-full h-full flex flex-col z-3 md:mt-32 justify-center md:justify-start">
      <div class="md:container mx-auto">
        <div class="w-full flex flex-col text-center gap-6 px-5 md:px-0">
          <h1 class="text-white font-poppins leading-8 text-4xl md:text-7xl font-bold">Tentang Kami</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="md:container w-full px-5 md:px-0 mx-auto md:my-14 my-7">
    <div class="md:grid md:grid-cols-[auto_30%] gap-7 flex flex-col">
      <div class="flex flex-col md:gap-7 gap-4 h-auto">
        <p class="text-lg">
          Kami adalah perusahaan jasa Event Equipment yang telah berdiri sejak tahun 2010 dan berpengalaman dalam melayani berbagai event, baik berskala daerah maupun nasional. Kami menyediakan beragam kebutuhan Event Equipment dengan standar kualitas yang terjaga.
        </p>
        <p class="text-lg">
          Pengalaman panjang di bidang ini menjadi komitmen kami dalam memastikan setiap event yang kami tangani berjalan dengan kualitas terbaik. Kami selalu mengutamakan pelayanan profesional serta menjaga kepercayaan klien sebagai nilai utama dalam setiap kerja sama.
        </p>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam voluptatibus velit perferendis labore harum dolorem corrupti. Voluptates veniam adipisci odit architecto amet, nulla, facere laudantium provident dolore, nobis quisquam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vitae quae debitis pariatur nemo rerum facere. Quis cumque id, quia perspiciatis laborum error quidem impedit facilis ducimus obcaecati. Veniam, commodi.
        </p>
      </div>
      <div class="grid grid-rows-[auto_65%] gap-6">
        <div class="flex flex-col justify-center items-center bg-black text-white rounded-xl py-4 md:py-0">
          <span class="text-2xl font-bold font-poppins">15+ Tahun</span>
          <p>Pengalaman</p>
        </div>
        <div class="w-full h-auto overflow-hidden rounded-xl">
          <img
            src="/img/sound-system-2.jpg"
            alt="Concerts"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <CompanyTeamLegality />
</div>