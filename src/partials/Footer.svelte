<script lang="ts">
  import { Icon } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiDevicePhoneLine, RiLogosFacebookCircleLine, RiLogosInstagramLine, RiLogosWhatsappLine, RiMapMapPinRangeLine } from "svelte-icons-pack/ri";

  const year: number = new Date().getFullYear();
</script>

<footer class="bg-black text-slate-300 flex flex-col py-8 px-6">
  <div class="container mx-auto flex flex-col gap-5">
    <div class="w-full h-fit grid grid-cols-[3fr_1fr_1fr_2fr]">
      <div class="flex flex-col gap-4">
        <img
          src="/icons/base.png"
          alt="MNine Pro"
          class="w-32 h-auto"
        />
        <p class="text-lg">Satisfaction and Responsibility is Our Guarantee</p>
        <div class="flex flex-row gap-1.5 items-center">
          <a href="/" class="flex justify-center items-center p-2 bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full">
            <Icon
              src={RiLogosInstagramLine}
              size="22"
            />
          </a>
          <a href="/" class="flex justify-center items-center p-2 bg-linear-to-b from-[#00c6ff] to-[#0072ff] text-white rounded-full">
            <Icon
              src={RiLogosFacebookCircleLine}
              size="22"
            />
          </a>
          <a href="/" class="flex justify-center items-center p-2 bg-[#25d366] text-white rounded-full">
            <Icon
              src={RiLogosWhatsappLine}
              size="22"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-white font-semibold">Company</h4>
        <nav class="flex flex-col gap-1">
          <a href="/" class="hover:underline hover:text-mnine">Beranda</a>
          <a href="/" class="hover:underline hover:text-mnine">Tentang</a>
          <a href="/" class="hover:underline hover:text-mnine">Layanan</a>
          <a href="/" class="hover:underline hover:text-mnine">Event</a>
          <a href="/" class="hover:underline hover:text-mnine">Kontak Kami</a>
        </nav>
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-white font-semibold">Services</h4>
        <nav class="flex flex-col gap-1">
          <a href="/" class="hover:underline hover:text-mnine">Sound System</a>
          <a href="/" class="hover:underline hover:text-mnine">Band Equipment</a>
          <a href="/" class="hover:underline hover:text-mnine">Lighting</a>
          <a href="/" class="hover:underline hover:text-mnine">Display & Multimedia</a>
          <a href="/" class="hover:underline hover:text-mnine">Toilet</a>
          <a href="/" class="hover:underline hover:text-mnine">Panggung</a>
        </nav>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-white font-semibold">Contact</h4>
        <div class="flex flex-col gap-1">
          <div class="flex flex-row gap-2 items-center">
            <Icon size="20" className="text-mnine fill-mnine" src={RiMapMapPinRangeLine} />
            <p>Jl. Tarunajaya No.09 Ampenan, Mataram, NTB</p>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <Icon size="20" className="text-mnine fill-mnine" src={RiBusinessMailLine} />
            <p>media9audiopro@gmail.com</p>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <Icon size="20" className="text-mnine fill-mnine" src={RiDevicePhoneLine} />
            <p>+62 821 46021 999</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-white pt-5">
      <div class="text-white flex flex-row items-center gap-1.5">
        <span class="text-mnine text-lg">&copy;</span>
        <p>{year} CV. Media Sembilan. All Rights Reserved</p>
      </div>
    </div>
  </div>
</footer>