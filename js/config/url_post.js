export let urlPOST = "https://kaloriku-d9941de09573.herokuapp.com/insert"

export function AmbilResponse(result) {
    console.log(result); 
    // alert(result.message); 
    window.location.href = "index.html"; 
}