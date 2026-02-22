<script>
	import { onMount } from "svelte";

	const { ...rest } = $props();

	onMount(() => {
		// @ts-ignore
		const map = L.map("map").setView([21.0634, 105.8195], 15);
		// @ts-ignore
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);
		// @ts-ignore
		L.marker([21.059257153168925, 105.80826036441773])
			.addTo(map)
			.bindPopup("Tuna Homestay & Experience")
			.openPopup();
	});
</script>

<div
	id="map"
	class="isolate"
	style="height: 350px; width: 100%;"
	{...rest}
></div>
