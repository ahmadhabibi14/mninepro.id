<script lang="ts">
	import { SiteName, SiteDesc, SiteBaseUrl, SiteImageUrl, SiteAuthor } from '../lib/constant';

	export let title: string = SiteName;
	export let path: string = '';
	export let description: string = SiteDesc;
	export let imageUrl: string = SiteImageUrl;
	export let author: string = SiteAuthor;
	export let imgWidth: string = '1200';
	export let imgHeight: string = '630';

	const siteUrl: string = SiteBaseUrl + path;
</script>

<svelte:head>
	<title>{title}</title>
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<meta name="author" content={author} />
	<meta name="description" content={description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:locale:alternate" content="en_UK" />
	<meta property="og:locale:alternate" content="ms_MY" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={imageUrl ? imageUrl : SiteImageUrl} />
	<meta property="og:image:secure_url" content={imageUrl ? imageUrl : SiteImageUrl} />
	<meta property="og:image:width" content={imgWidth} />
	<meta property="og:image:height" content={imgHeight} />
	<meta property="og:image:alt" content={title} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
		"@id": "https://mninepro.id/#localbusiness",
    "name": "MNine Production",
    "url": "https://mninepro.id",
    "description": "Jasa rental event equipment di Lombok. Tersedia Sound system, Lighting, LED Vidiotron, Panggung Stage, Sarnavil, Roders, dan lain-lain",
    "image": "https://mninepro.id/img/preview.jpg"
		"telephone": "+6282146021999",
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Lombok",
			"addressRegion": "Nusa Tenggara Barat",
			"addressCountry": "ID"
		},
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday"
				],
				"opens": "07:00",
				"closes": "21:00"
			}
		],
		"sameAs": [
			"https://www.instagram.com/mnineproduction",
			"https://wa.me/6282146021999"
		],
		"hasOfferCatalog": {
		"@type": "OfferCatalog",
		"name": "Layanan Rental Event Equipment",
		"itemListElement": [
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Sound System Rental"
				}
			},
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Lighting & Stage Rental"
				}
			},
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "LED Videotron Rental"
				}
			}
		]
	}
  }
  </script>
</svelte:head>
