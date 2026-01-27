<script lang="ts">
  import {
    CURRENT_PATH,
    PathHome,
    PathAbout,
    PathContact,
    PathServices,
    PathEvents,
    PathPortfolio
  } from '@/states/page';
  import { writable, type Writable } from 'svelte/store';
	import { Icon } from 'svelte-icons-pack';
	import { BsList } from 'svelte-icons-pack/bs';
	import { RiSystemCloseFill } from 'svelte-icons-pack/ri';

  const isShowMenu: Writable<Boolean> = writable(false);

  const navMenuMobile: {
    name: string;
    link: string;
  }[] = [
    { name: 'Beranda', link: PathHome },
    { name: 'Tentang', link: PathAbout },
    { name: 'Layanan', link: PathServices},
    { name: 'Portofolio', link: PathPortfolio },
    { name: 'Event', link: PathEvents },
    { name: 'Kontak', link: PathContact },
  ];
</script>

<button
  aria-label="Backdrop"
  onclick={() => $isShowMenu = !$isShowMenu}
  class="{$isShowMenu ? 'block' : 'hidden'} z-101 inset-0 bg-slate-700/50 h-screen fixed">
</button>

<button
  aria-label="Close menu"
  title="Close"
  onclick={() => $isShowMenu = !$isShowMenu}
  class="{$isShowMenu ? 'block' : 'hidden'} cursor-pointer z-101 shadow-md right-6 top-6 fixed h-fit w-fit p-2 rounded-full bg-mnine text-[#1f1f1f]"
>
  <Icon src={RiSystemCloseFill} size="20"/>
</button>

<div id="top" class="top-0 z-99 fixed w-full h-24 flex flex-row items-center justify-center py-6 bg-black text-slate-300">
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
          src="/icons/logo-text-horizontal.png"
          alt="MNine Pro"
          class="h-12 w-auto"
        />
      </a>
    </div>
    <nav class="hidden md:flex flex-row gap-8 items-center justify-center w-fit font-semibold text-sm">
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
        href={PathPortfolio}
        class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
        {$CURRENT_PATH === PathPortfolio ? 'text-mnine' : ''}"
      >
        <span>Portofolio</span>
        <span class="w-[70px] h-[3px] {$CURRENT_PATH === PathPortfolio ? 'bg-mnine' : 'bg-transparent'}"></span>
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
      class="md:block hidden w-fit h-fit cursor-pointer py-2 px-5 rounded-xl text-[#1f1f1f] bg-mnine hover:bg-mnine-2 text-sm"
    >
      CONTACT US
    </a>
  </div>
</div>

<aside
  class="{$isShowMenu ? 'left-0' : '-left-[250px]'} duration-150 py-6 px-6 h-dvh w-[250px] bg-black text-slate-300 rounded-r-xl
  fixed z-110 top-0 bottom-0 flex flex-col gap-5">
  {#each navMenuMobile as nav}
    <a
      class="hover:text-mnine {$CURRENT_PATH === nav.link ? 'text-mnine-2 border-mnine-2 font-semibold' : 'border-transparent'} px-4 pt-1 pb-2 w-fit border-b-2"
      href={nav.link}
      onclick={()=> $isShowMenu = false}
    >
      {nav.name}
    </a>
  {/each}
</aside>