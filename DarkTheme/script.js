const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    darkPurple: getStyle(html, "--dark-purple"),
    mediumPurple: getStyle(html, "--medium-purple"),
    lightPurple: getStyle(html, "--light-purple"),
    pink: getStyle(html, "--pink"),
    lightPink: getStyle(html, "--light-pink"),
    buttonColor: getStyle(html, "--button-color"),
}

const darkMode = {
    darkPurple: "#333333",
    mediumPurple: "#434343",
    lightPurple: "#3664FF",
    pink: "#B5B5B5",
    lightPink: "#c4c4c4",
    buttonColor: "#ff1",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})