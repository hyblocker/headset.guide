if (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.head.querySelectorAll(`link[rel="icon"][type="image/png"]`)[0].href = "/content/shared/favicon-light.png";
}
