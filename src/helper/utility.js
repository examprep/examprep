

export function capitalizeFirstText(text) {
    return text.slice(0, 1).toString().toUpperCase() + text.slice(1, text.length).toString().toLowerCase();
}