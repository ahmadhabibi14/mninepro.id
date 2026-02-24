<script lang="ts">
	import Image from "@/components/Image.svelte";
import CompanyTeamLegality from "@/partials/about/CompanyTeamLegality.svelte";
	import Head from "@/partials/Head.svelte";
	import Header from "@/partials/Header.svelte";
	import { PathAbout } from "@/states/page";
</script>

<Head
  title="Tentang Kami"
  path={PathAbout}
/>

<div class="min-h-[900px] w-full flex flex-col gap-7 md:gap-10 pb-10">
  <Header
    title="Tentang Kami"
  />
  <div class="container max-w-6xl w-full px-4 md:px-0 mx-auto md:my-10 my-7">
    <div class="md:grid md:grid-cols-[auto_30%] gap-7 flex flex-col">
      <div class="flex flex-col md:gap-7 gap-4 h-auto">
        <p class="text-base md:text-lg">
          Kami adalah perusahaan jasa Event Equipment yang telah berdiri sejak tahun 2010 dan berpengalaman dalam melayani berbagai event, baik berskala daerah maupun nasional. Kami menyediakan beragam kebutuhan Event Equipment dengan standar kualitas yang terjaga.
        </p>
        <p class="text-base md:text-lg">
          Pengalaman panjang di bidang ini menjadi komitmen kami dalam memastikan setiap event yang kami tangani berjalan dengan kualitas terbaik. Kami selalu mengutamakan pelayanan profesional serta menjaga kepercayaan klien sebagai nilai utama dalam setiap kerja sama.
        </p>
      </div>
      <div class="grid grid-rows-[auto_65%] gap-6">
        <div class="flex flex-col justify-center items-center bg-black text-white rounded-xl py-4 md:py-0">
          <span class="text-2xl font-bold font-poppins">15+ Tahun</span>
          <p>Pengalaman</p>
        </div>
        <Image
          src="/img/sound-system-2.webp"
          alt="Concerts"
          classNameContainer="w-full h-auto rounded-xl overflow-hidden"
        />
      </div>
    </div>
  </div>
  <CompanyTeamLegality />
</div>