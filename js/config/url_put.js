const urlParams = new URLSearchParams(window.location.search);
const pasienId = urlParams.get('pasienId');

export let urlPUT = "https://ws-rumahsakit-2e1eb71f14e2.herokuapp.com/update/" + pasienId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message); 
    window.location.href = "index.html"; 
}