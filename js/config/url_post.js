export let urlPOST = "https://ws-rumahsakit-2e1eb71f14e2.herokuapp.com/insert"

export function AmbilResponse(result) {
    console.log(result); 
    // alert(result.message); 
    window.location.href = "index.html"; 
}