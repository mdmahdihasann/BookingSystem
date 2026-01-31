function getImage(name) {
    return new URL(`../assets/${name}`, import.meta.url).href
}
export { getImage }