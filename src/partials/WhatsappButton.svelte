<script lang="ts">
	import { Icon } from "svelte-icons-pack";
	import { RiLogosWhatsappLine } from "svelte-icons-pack/ri";
	import { fade } from "svelte/transition";

  const message: string = `Halo,

Saya mau bertanya terkait event equipment`;
  const whatsappUrl: string = `https://wa.me/6282146021999?text=${encodeURIComponent(message)}`;
</script>

<div class="fixed bottom-5 right-5 z-100 flex justify-end w-30 h-30">
  <div class="flex justify-center items-center">
    <a
      aria-label="Contact via WhatsApp"
      title="Chat ke WhatsApp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="relative z-100 cursor-pointer hover:shadow-xl p-4 w-20 h-20 bg-linear-to-b from-[#25d366] to-[#2BB741] text-white rounded-full">
      <Icon
        src={RiLogosWhatsappLine}
        size="45"
      />
    </a>
    <div class="flex justify-center items-center w-30 h-30 absolute">
      <div class="mic-on inset-0 bg-[#25d366]/20 z-99 rounded-full"></div>
    </div>
  </div>
</div>

<style lang="postcss">
  .mic-on {
    width: 80px;
    height: 80px;
    animation: resizeAnimation 1.5s infinite;
  }

  @keyframes resizeAnimation {
    0% {
      width: 80px;
      height: 80px;
    }
    50% {
      width: 95px;
      height: 95px;
    }
    100% {
      width: 80px;
      height: 80px;
    }
  }
</style>