import { setVehicleId } from "./TransientState.js"

export const ChooseVehicle = async () => {
    const response = await fetch("http://localhost:8088/vehicles")
    const vehicles = await response.json()
    
    document.addEventListener("change", handleVehicleChange)

    let html = ""
    html += `<select id="vehicle">`
    html += `<option value="0">Select a Vehicle Style</option>`

    const vehicleOptions = vehicles.map((vehicle) => {
            return `<option value="${vehicle.id}">${vehicle.name}</option>`
        }
    )

    html += vehicleOptions.join("")
    html += "</select>"
    
    return html
}


const handleVehicleChange = (changeEvent) => {
    if(changeEvent.target.id === "vehicle") {
        const chosenOption = changeEvent.target.value
        setVehicleId(chosenOption)
    }
}