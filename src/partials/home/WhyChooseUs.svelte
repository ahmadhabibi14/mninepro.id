<script lang="ts">
	import type { IconType } from 'svelte-icons-pack';
	import { Icon } from 'svelte-icons-pack';
	import { LuHandHeart } from 'svelte-icons-pack/lu';
	import { RiBusinessShakeHandsLine, RiSystemSettings4Line } from 'svelte-icons-pack/ri';

	const contents: {
		title: string;
		desc: string;
		icon: IconType;
	}[] = [
		{
			title: 'Sumber Daya Berkualitas',
			desc: 'Tim kami terdiri dari SDM yang handal dan telah melewati berbagai proses seleksi. Pelatihan ini bertujuan demi memberikan kualitas dan kemampuan kepada tim dalam menjalankan tugasnya.',
			icon: RiSystemSettings4Line
		},
		{
			title: 'Kolaborasi Dengan Mitra',
			desc: `Kami bekerja sama dengan berbagai mitra
yang kompeten dalam bidang ini.
Mitra - mitra terpercaya kami sangat aware
dan profesionalisme dalam menangani
sebuah project.`,
			icon: RiBusinessShakeHandsLine
		},
		{
			title: 'Pelayanan Dengan Santun',
			desc: `Keramahan dan sopan santun dalam
menjalankan tugas adalah budaya yang kami
junjung tinggi. Prioritas kami adalah memberikan pelayanan yang terbaik dan
melaksanakan tugas dengan penuh tanggung jawab.`,
			icon: LuHandHeart
		}
	];
</script>

<section class="container max-w-6xl w-full px-4 md:px-0 mx-auto md:my-14 my-7" id="why-choose-us">
	<div class="flex flex-col gap-11">
		<h2 class="md:text-5xl text-3xl text-center font-bold font-poppins">Why Choose Us</h2>
		<div class="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-6">
			{#each contents as content}
				<div
					class="odd:bg-mnine-2 even:bg-black text-white rounded-xl flex flex-col gap-3 px-4 py-4"
				>
					<Icon src={content.icon} size="45" className="" />
					<h3 class="text-xl font-bold font-poppins">{content.title}</h3>
					<p class="">{content.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
