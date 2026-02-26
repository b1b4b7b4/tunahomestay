<script lang="ts">
	import { onMount } from "svelte";

	let { mapConfig }: { mapConfig: { center: [number, number]; zoom: number; marker: { position: [number, number]; popup: string }; tileUrl: string; attribution: string } } = $props();

	onMount(() => {
		// @ts-ignore
		const map = L.map("map").setView(mapConfig.center, mapConfig.zoom);
		// @ts-ignore
		L.tileLayer(mapConfig.tileUrl, {
			maxZoom: 19,
			attribution: mapConfig.attribution,
		}).addTo(map);
		// @ts-ignore
		L.marker(mapConfig.marker.position)
			.addTo(map)
			.bindPopup(mapConfig.marker.popup)
			.openPopup();
	});
</script>

<div
	id="map"
	class="isolate"
	style="height: 350px; width: 100%;"
></div>
