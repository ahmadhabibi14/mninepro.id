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
	import { RiArrowsArrowRightLine, RiSystemCloseFill, RiSystemSearchLine } from 'svelte-icons-pack/ri';

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

<div id="top" class="top-0 z-99 fixed w-full flex flex-col items-center justify-center bg-black text-white md:bg-white md:text-slate-900 shadow-lg">
	<div class="hidden md:flex h-8 w-full bg-mnine">
		<div class="container max-w-6xl mx-auto flex flex-row justify-between items-center text-sm text-white font-light">
      <p>One Partner for All your Event Needs!</p>
      <div class="flex flex-row items-center gap-2 italic">
        <span>Explore in here</span>
        <Icon
          src={RiArrowsArrowRightLine}
          size="18"
        />
      </div>
    </div>
  </div>
  <div class="h-16 px-4 md:px-0 container max-w-6xl flex flex-row items-center justify-between mx-auto gap-14">
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
      <a href="/" class="w-fit h-16 flex justify-center items-center px-4 md:px-0 py-3">
        <img
          src="/icons/logo-text-dark.svg"
          alt="MNine Pro"
          class="h-full w-auto md:block hidden"
        />
        <img
          src="/icons/logo-text.png"
          alt="MNine Pro"
          class="h-full w-auto block md:hidden"
        />
      </a>
    </div>

    <nav class="hidden md:flex flex-row gap-6 items-center justify-center w-fit text-sm">
      <a href={PathHome}
        class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
        {$CURRENT_PATH === PathHome ? 'text-mnine' : ''}"
      >Beranda</a>
      <a href={PathAbout}
        class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
        {$CURRENT_PATH === PathAbout ? 'text-mnine' : ''}"
      >Tentang</a>
      <a
        href={PathServices}
        class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
        {$CURRENT_PATH === PathServices ? 'text-mnine' : ''}"
      >Layanan</a>
      <a
        href={PathPortfolio}
        class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
        {$CURRENT_PATH === PathPortfolio ? 'text-mnine' : ''}"
      >Portofolio</a>
      <a
        href={PathEvents}
        class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
        {$CURRENT_PATH === PathEvents ? 'text-mnine' : ''}"
      >Event</a>
      <a
        href={PathContact}
        class="w-fit h-fit hover:text-mnine cursor-pointer flex flex-col gap-1.5 justify-center items-center
        {$CURRENT_PATH === PathContact ? 'text-mnine' : ''}"
      >Contact Us</a>
    </nav>
    <div class="hidden relative border border-slate-300 rounded-full
      md:flex flex-row items-center gap-2
      py-2.5 pl-5 pr-10 text-sm grow">
      <input
        type="text"
        name="Search"
        id="search"
        placeholder="Search your event needs..."
        class="focus:ring-0 focus:outline-none grow"
      />
      <Icon
        src={RiSystemSearchLine}
        size="15"
        className="absolute right-4 w-fit h-fit"
      />
    </div>
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