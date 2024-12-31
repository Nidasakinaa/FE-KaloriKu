const urlParams = new URLSearchParams(window.location.search);
const menuItemId = urlParams.get('menuItemId');

export let urlPUT = "https://kaloriku-d9941de09573.herokuapp.com/update/" + menuItemId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message); 
    window.location.href = "index.html"; 
}