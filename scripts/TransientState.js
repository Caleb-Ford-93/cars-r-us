let transientState = {
    "colorId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "wheelId": 0,
    "vehicleId": 0
}

export const setColorId = (chosenColor) => {
    transientState.colorId = chosenColor
}
export const setInteriorId = (chosenInterior) => {
    transientState.interiorId = chosenInterior
}
export const setTechId = (chosenTech) => {
    transientState.technologyId = chosenTech
}
export const setWheelId = (chosenWheel) => {
    transientState.wheelId = chosenWheel
}
export const setVehicleId = (chosenVehicle) => {
    transientState.vehicleId = chosenVehicle
}

export const PlaceOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    if(transientState.colorId != 0 && 
       transientState.interiorId !=0 && 
       transientState.technologyId != 0 && 
       transientState.wheelId != 0 &&
       transientState.vehicleId !=0){
            const response = await fetch("http://localhost:8088/orders", postOptions)
            
            const creationEvent = new CustomEvent("newOrderCreated")
            document.dispatchEvent(creationEvent)
        } else {
            window.alert("Please make a selection for all options")
    }
}

export const resetTransientState = () => {
    transientState = {
        "colorId": 0,
        "interiorId": 0,
        "technologyId": 0,
        "wheelId": 0,
        "vehicleId": 0
    }
}