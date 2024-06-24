import { CustomOrders } from "./CustomOrders.js"
import { ChooseInterior } from "./InteriorChoice.js"
import { ChooseColor } from "./PaintChoice.js"
import { SubmitButton } from "./SubmitButton.js"
import { ChooseTechnology } from "./TechChoice.js"
import { resetTransientState } from "./TransientState.js"
import { ChooseVehicle } from "./VehicleType.js"
import { ChooseWheel } from "./WheelChoice.js"

const container = document.querySelector("#container")

const render = async () => {
    const paintHTML = await ChooseColor()
    const interiorHTML = await ChooseInterior()
    const techHTML = await ChooseTechnology()
    const wheelHTML = await ChooseWheel()
    const vehicleHTML = await ChooseVehicle()
    const buttonHTML = SubmitButton()
    const orderHTML = await CustomOrders()
    const html = `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    <article id="optionContainer">
        <div class="paint_options options">
            <h2>Paint Color</h2>
            ${paintHTML}
        </div>
        <div class="interior_options options">
            <h2>Interior</h2>
            ${interiorHTML}
        </div>
        <div class="technology_options options">
            <h2>Tech Package</h2>
            ${techHTML}
        </div>
        <div class="wheel_options options">
            <h2>Wheel Style</h2>
            <div class="select">${wheelHTML}</div>
        </div>
        <div class="vehicle_options options">
            <h2>Vehicle Style</h2>
            <div class="select">${vehicleHTML}</div>
        </div>
    </article>
    <div id="buttonDiv">
     ${buttonHTML}
    </div>
    <section id="customOrders">
        <h2>Custom Car Orders</h2>
        <div id="customOrderList">
        ${orderHTML}
        </div>
    </section>`

    container.innerHTML = html
    resetTransientState()
}

document.addEventListener("newOrderCreated", render)

render()