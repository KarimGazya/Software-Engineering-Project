async function initMap() {
    // Get latitude and longitude from local storage, or use default values if not present
    
    const lastLat = parseFloat(localStorage.getItem("lastLat")) || 37.39094933041195;
    const lastLng = parseFloat(localStorage.getItem("lastLng")) || -122.02503913145092;

    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map"), {
        center: { lat: lastLat, lng: lastLng }, // Use default or local storage values
        zoom: 10,
        mapId: "4504f8b37365c3d0",
    });
    const infoWindow = new InfoWindow();
    const draggableMarker = new AdvancedMarkerElement({
        map,
        position: { lat: lastLat, lng: lastLng }, // Use default or local storage values
        gmpDraggable: true,
        title: "This marker is draggable.",
    });
  
    draggableMarker.addListener("dragend", (event) => {
        const position = draggableMarker.position;
        localStorage.setItem("lastLat", position.lat);
        localStorage.setItem("lastLng", position.lng);
        infoWindow.close();
        infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
        infoWindow.open(draggableMarker.map, draggableMarker);
    });
}

initMap();
