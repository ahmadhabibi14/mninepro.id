<script lang="ts">
	import { PathAbout, PathContact, PathEvents, PathHome, PathServices } from "@/states/page";
  import { Icon } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiDevicePhoneLine, RiLogosFacebookCircleLine, RiLogosInstagramLine, RiLogosWhatsappLine, RiMapMapPinRangeLine } from "svelte-icons-pack/ri";

  const year: number = new Date().getFullYear();
</script>

<footer class="bg-black text-slate-400 flex flex-col py-8 px-6">
  <div class="container mx-auto flex flex-col gap-5">
    <div class="w-full h-fit md:grid md:grid-cols-[3fr_1fr_1fr_2fr] flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <img
          src="/icons/base.png"
          alt="MNine Pro"
          class="w-32 h-auto"
        />
        <p class="text-lg text-white italic">"Satisfaction and Responsibility is Our Guarantee"</p>
        <div class="flex flex-row gap-1.5 items-center" role="navigation">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/mnineproduction"
            target="_blank"
            class="flex justify-center items-center p-2 bg-linear-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full"
          >
            <Icon
              src={RiLogosInstagramLine}
              size="22"
            />
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/mnine.audiopro"
            target="_blank"
            class="flex justify-center items-center p-2 bg-linear-to-b from-[#00c6ff] to-[#0072ff] text-white rounded-full"
          >
            <Icon
              src={RiLogosFacebookCircleLine}
              size="22"
            />
          </a>
          <a
            aria-label="WhatsApp"
            href="wa.me/6282146021999"
            target="_blank"
            class="flex justify-center items-center p-2 bg-linear-to-b from-[#25d366] to-[#2BB741] text-white rounded-full"
          >
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
          <a href={PathHome} class="hover:underline hover:text-mnine">Beranda</a>
          <a href={PathAbout} class="hover:underline hover:text-mnine">Tentang</a>
          <a href={PathServices} class="hover:underline hover:text-mnine">Layanan</a>
          <a href={PathEvents} class="hover:underline hover:text-mnine">Event</a>
          <a href={PathContact} class="hover:underline hover:text-mnine">Kontak Kami</a>
        </nav>
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-white font-semibold">Services</h4>
        <nav class="flex flex-col gap-1">
          <a href={PathServices+'#sound-system'} class="hover:underline hover:text-mnine">Sound System</a>
          <a href={PathServices+'#band-equipment'} class="hover:underline hover:text-mnine">Band Equipment</a>
          <a href={PathServices+'#lighting'} class="hover:underline hover:text-mnine">Lighting</a>
          <a href={PathServices+'#display'} class="hover:underline hover:text-mnine">Display & Multimedia</a>
          <a href={PathServices+'#toilet'} class="hover:underline hover:text-mnine">Toilet</a>
          <a href={PathServices+'#panggung'} class="hover:underline hover:text-mnine">Panggung</a>
        </nav>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-white font-semibold">Contact</h4>
        <div class="flex flex-col gap-1">
          <div class="flex flex-row gap-2 md:items-center items-start">
            <Icon size="20" className="text-mnine fill-mnine shrink-0" src={RiMapMapPinRangeLine} />
            <p class="grow">Jl. Tarunajaya No.09 Ampenan, Mataram, NTB</p>
          </div>
          <a href="mailto:media9audiopro@gmail.com" class="flex flex-row gap-2 items-center">
            <Icon size="20" className="text-mnine fill-mnine shrink-0" src={RiBusinessMailLine} />
            <p class="grow">media9audiopro@gmail.com</p>
          </a>
          <a href="tel:+6282146021999" class="flex flex-row gap-2 items-center">
            <Icon size="20" className="text-mnine fill-mnine shrink-0" src={RiDevicePhoneLine} />
            <p class="grow">+62 821-46021-999</p>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-slate-400 pt-8">
      <div class="text-white flex flex-row items-center justify-center gap-1.5">
        <span class="text-mnine text-lg">&copy;</span>
        <p class="">{year} CV. Media Sembilan</p>
      </div>
    </div>
  </div>
</footer>