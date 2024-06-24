import { setWheelId } from "./TransientState.js"

export const ChooseWheel = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    
    document.addEventListener("change", handleWheelChange)
    let html = ""
    html += `<select id="wheel">`
    html += `<option value="0">Select a wheel style</option>`

    const wheelOptions = wheels.map((wheel) => {
            return `<option value="${wheel.id}">${wheel.name}</option>`
        }
    )

    html += wheelOptions.join("")
    html += "</select>"
    
    return html
}

const handleWheelChange = (changeEvent) => {
    if(changeEvent.target.id === "wheel") {
        const chosenOption = changeEvent.target.value
        setWheelId(chosenOption)
    }
}