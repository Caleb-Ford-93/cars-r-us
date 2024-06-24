import { setColorId } from "./TransientState.js"

export const ChooseColor = async () => {
    const response = await fetch("http://localhost:8088/colors")
    const colors = await response.json()
    
    document.addEventListener("change", handleColorChange)

    let html = ""
    html += `<select id="color">`
    html += `<option value="0">Select a paint color</option>`

    const colorOptions = colors.map((color) => {
            return `<option value="${color.id}">${color.name}</option>`
        }
    )

    html += colorOptions.join("")
    html += "</select>"
    
    return html
}


const handleColorChange = (changeEvent) => {
    if(changeEvent.target.id === "color") {
        const chosenOption = changeEvent.target.value
        setColorId(chosenOption)
    }
}