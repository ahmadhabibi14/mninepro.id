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
	<meta name="referrer" content="no-referrer-when-downgrade" />

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
	<meta property="og:see_also" content="https://www.facebook.com/mnine.audiopro" />
	<meta property="og:see_also" content="https://www.instagram.com/mnineproduction"/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:width" content={imgWidth} />
  <meta name="twitter:image:height" content={imgHeight} />

	<meta name="DC.title" content="Geo Tag Generator" />
	<meta name="geo.region" content="ID-NB" />
	<meta name="geo.placename" content="Lombok, Nusa Tenggara Barat" />
	<meta name="geo.position" content="-8.581109, 116.085747" />
	<meta name="ICBM" content="-8.581109, 116.085747" />

	<link href={SiteBaseUrl} rel="canonical" />
  <link href={SiteBaseUrl} rel="home" />
	<link type="text/plain" href="{SiteBaseUrl}/humans.txt" rel="author" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": ["LocalBusiness", "RentalBusiness"],
			"@id": "https://mninepro.id/#localbusiness",
			"name": "MNine Production",
			"url": "https://mninepro.id",
			"description": "Jasa event equipment di Lombok: rental sound system, lighting, genset, band equipment, rowing, LED videotron, panggung & setup event. Melayani event wedding, konser, dan corporate.",
			"image": "https://mninepro.id/img/preview.jpg",
			"telephone": "+6282146021999",
			"priceRange": "$$",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Jl. Tarunajaya No.9, Taman Sari",
				"addressLocality": "Ampenan",
				"addressSubregion": "Kota Mataram",
				"addressRegion": "Nusa Tenggara Barat",
				"postalCode": "83112",
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
			"sameAs": ["https://www.instagram.com/mnineproduction", "https://wa.me/6282146021999"],
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
			},
			"areaServed": {
				"@type": "AdministrativeArea",
				"name": "Lombok"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": "-8.581109",
				"longitude": "116.085747"
			}
		}
	</script>
</svelte:head>
