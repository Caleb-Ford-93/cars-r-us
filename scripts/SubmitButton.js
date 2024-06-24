import { PlaceOrder } from "./TransientState.js"

export const SubmitButton = () => {
    document.addEventListener("click", handleSubmitButton)
    return `<button id="submit">Place Order</button>`
}

const handleSubmitButton = (clickEvent) => {
    if(clickEvent.target.id === "submit"){
    PlaceOrder()
    }
}