<script lang="ts">
  import {
    CURRENT_PATH,
    PathHome,
    PathAbout,
    PathContact,
    PathServices,

	PathEvents

  } from '@/states/page';
  import { writable, type Writable } from 'svelte/store';
	import { Icon } from 'svelte-icons-pack';
	import { BsList } from 'svelte-icons-pack/bs';

  const isShowMenu: Writable<Boolean> = writable(false);

  const navMenuMobile: {
    name: string;
    link: string;
  }[] = [
    { name: 'Beranda', link: PathHome },
    { name: 'Tentang', link: PathAbout },
    { name: 'Layanan', link: PathServices},
    { name: 'Kontak', link: PathContact },
  ];
</script>

<button
  aria-label="backdrop toggle menu"
  onclick={() => $isShowMenu = !$isShowMenu}
  class="{$isShowMenu ? 'block' : 'hidden'} z-40 inset-0 bg-zinc-700/50 h-screen fixed">
</button>

<div id="top" class="top-0 z-99 fixed w-full h-24 flex flex-row items-center justify-center py-6 bg-black text-white/80">
  <div class="px-5 md:px-0 container flex flex-row items-center justify-between mx-auto">
    <div class="flex flex-row gap-3 items-center">
      <div class="flex md:hidden">
        <button
          type="button"
          onclick={() => $isShowMenu = !$isShowMenu}
          class="">
          <Icon
            src={BsList}
            size="30"
          />
        </button>
      </div>
      <a href="/" class="w-fit h-fit">
        <img
          src="/icons/base.png"
          alt="MNine Pro"
          class="w-20 h-auto"
        />
      </a>
    </div>
    <nav class="hidden md:flex flex-row gap-5 items-center justify-center w-fit font-semibold text-sm">
        <a
          href={PathHome}
          class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$CURRENT_PATH === PathHome ? 'text-mnine' : ''}"
        >
          <span>Beranda</span>
          <span class="w-[70px] h-[3px] {$CURRENT_PATH === PathHome ? 'bg-mnine' : 'bg-transparent'}"></span>
        </a>
        <a
          href={PathAbout}
          class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$CURRENT_PATH === PathAbout ? 'text-mnine' : ''}"
        >
          <span>Tentang</span>
          <span class="w-[70px] h-[3px] {$CURRENT_PATH === PathAbout ? 'bg-mnine' : 'bg-transparent'}"></span>
        </a>
        <a
          href={PathServices}
          class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$CURRENT_PATH === PathServices ? 'text-mnine' : ''}"
        >
          <span>Layanan</span>
          <span class="w-[70px] h-[3px] {$CURRENT_PATH === PathServices ? 'bg-mnine' : 'bg-transparent'}"></span>
        </a>
        <a
          href={PathEvents}
          class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$CURRENT_PATH === PathEvents ? 'text-mnine' : ''}"
        >
          <span>Event</span>
          <span class="w-[70px] h-[3px] {$CURRENT_PATH === PathEvents ? 'bg-mnine' : 'bg-transparent'}"></span>
        </a>
      </nav>
    <a
      href={PathContact}
      class="md:block hidden w-fit h-fit cursor-pointer py-2 px-5 rounded-full text-white bg-mnine hover:bg-mnine-2 text-sm"
    >
      CONTACT US
    </a>
  </div>
  <aside
    class="{$isShowMenu ? 'left-0' : '-left-[250px]'} duration-150 py-6 px-6 h-dvh w-[250px] bg-white rounded-r-xl
    fixed z-50 top-0 bottom-0 flex flex-col gap-5">
    {#each navMenuMobile as nav}
      <a
        class="hover:text-mnine {$CURRENT_PATH === nav.link ? 'text-mnine-2 bg-emerald-400/20 font-semibold' : ''} px-4 py-1 rounded-full w-fit"
        href={nav.link}
        onclick={()=> $isShowMenu = false}
      >
        {nav.name}
      </a>
    {/each}
  </aside>
</div>