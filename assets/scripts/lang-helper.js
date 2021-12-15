const userLang = navigator.language || navigator.userLanguage;
const currentLocale = "en";

// TODO: Fetch from array of JSONs using `fetch`
const langArray = [{
    "among-us": "penis shit cum"
}];

window.addEventListener("load", () => {
    // Redirect towards the appropriate page unless the user is overriding the current locale

    // TODO: DONT BE A LAZY SHIT

    console.log(userLang);
})
