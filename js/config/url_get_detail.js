const urlParams = new URLSearchParams(window.location.search);
const menuItemId = urlParams.get("menuItemId");

export let urlFetch = "https://kaloriku-d9941de09573.herokuapp.com/menu/" + menuItemId;