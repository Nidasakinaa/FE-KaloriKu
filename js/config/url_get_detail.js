const urlParams = new URLSearchParams(window.location.search);
const pasienId = urlParams.get("pasienId");

export let urlFetch = "https://ws-rumahsakit-2e1eb71f14e2.herokuapp.com/pasien/" + pasienId;