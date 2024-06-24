import { setInteriorId } from "./TransientState.js"

export const ChooseInterior = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()
    
    document.addEventListener("change", handleInteriorChange)
    let html = ""
    html += `<select id="interior">`
    html += `<option value="0">Select an interior</option>`

    const interiorOptions = interiors.map((interior) => {
            return `<option value="${interior.id}">${interior.name}</option>`
        }
    )

    html += interiorOptions.join("")
    html += "</select>"
    
    return html
}

const handleInteriorChange = (changeEvent) => {
    if(changeEvent.target.id === "interior") {
        const chosenOption = changeEvent.target.value
        setInteriorId(chosenOption)
    }
}