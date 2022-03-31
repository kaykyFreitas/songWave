const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    darkPurple: getStyle(html, "--dark-purple"),
    mediumPurple: getStyle(html, "--medium-purple"),
    lightPurple: getStyle(html, "--light-purple"),
    highPurple: getStyle(html, "--high-purple"),
    purple: getStyle(html, "--purple"),
    pink: getStyle(html, "--pink"),
    lightPink: getStyle(html, "--light-pink"),
    lightGrey: getStyle(html, "--light-grey"),
    white: getStyle(html, "--white"),
    linearPink: getStyle(html, "--linear-pink"),
    linearPurple: getStyle(html, "--linear-purple"),
}

const lightMode = {
    darkPurple: "#E89CE8",
    mediumPurple: "#F17FBC",
    lightPurple: "#2e2e2e",
    highPurple: "#2e2e2e",
    purple: "#BF7CBF",
    pink: "#2e2e2e",
    lightPink: "#2e2e2e",
    lightGrey: "#2e2e2e",
    white: "#2e2e2e",
    playlistShadow: "#c4c4c4",
    navActive: "linear-gradient(to right, #af43b3, #F0C3F0);",
    linearPink: "#af43b3",
    linearPurple: "#F17FBC",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})