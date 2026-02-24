<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import Header from '@/partials/Header.svelte';
	import { Icon, type IconType } from 'svelte-icons-pack';
	import {
		RiBusinessMailLine,
		RiDevicePhoneLine,
		RiLogosFacebookCircleLine,
		RiLogosInstagramLine,
		RiLogosWhatsappLine,
		RiMapMapPinRangeLine
	} from 'svelte-icons-pack/ri';
	
	const contacts: {
		name: string;
		content: string;
		icon: IconType;
		link: string;
	}[] = [
		{
			name: 'Address',
			content: 'Jl. Tarunajaya No.09 Ampenan, Mataram, NTB',
			icon: RiMapMapPinRangeLine,
			link: 'https://maps.app.goo.gl/1Tx6d1t6rHtYR4Qc8?g_st=aw'
		},
		{
			name: 'Email',
			content: 'media9audiopro@gmail.com',
			icon: RiBusinessMailLine,
			link: 'mailto:media9audiopro@gmail.com'
		},
		{
			name: 'Phone',
			content: '(+62) 821-46021-999',
			icon: RiDevicePhoneLine,
			link: 'tel:+6282146021999'
		},
		{
			name: 'Instagram',
			content: 'MNine Production',
			icon: RiLogosInstagramLine,
			link: 'https://www.instagram.com/mnineproduction'
		},
		{
			name: 'WhatsApp',
			content: '(+62) 821-46021-999',
			icon: RiLogosWhatsappLine,
			link: 'https://wa.me/6282146021999'
		},
		{
			name: 'Facebook',
			content: 'MNine Production',
			icon: RiLogosFacebookCircleLine,
			link: 'https://www.facebook.com/mnine.audiopro'
		}
	]
</script>

<Head title="Kontak" path="/contact" />

<div class="min-h-[900px] w-full flex flex-col">
	<Header
		title="Kontak Kami"
	/>
	<div class="container max-w-6xl mx-auto px-5 md:px-0 my-8">
		<div class="flex flex-col md:grid md:grid-cols-[30%_1fr] gap-6">
			<div class="flex flex-col gap-2 text-lg">
				{#each contacts as contact}
					<a
						href={contact.link}
						aria-label={contact.name}
						target="_blank"
						class="cursor-pointer flex flex-row gap-2 items-start hover:underline hover:text-mnine"
					>
						<Icon
							size="25"
							className="text-mnine fill-mnine shrink-0"
							src={contact.icon}
						/>
						<p class="grow">{contact.content}</p>
					</a>
				{/each}
			</div>
			<div class="w-full h-[400px]">
				<iframe
					title="Lokasi CV. Media Sembilan"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.1659953890357!2d116.0861238!3d-8.580033400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc101b15be261%3A0x5a0970525e0ee266!2sCV.%20MEDIA%20SEMBILAN!5e0!3m2!1sid!2sid!4v1771896454106!5m2!1sid!2sid"
					width="100%"
					height="400"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</div>
