export const CustomOrders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=color&_expand=wheel&_expand=technology&_expand=interior&_expand=vehicle")
    const orderList = await response.json()

    let orderHTML = ""
    const placedOrders = orderList.map((order) => {
        const totalPrice = (order.color.price + order.wheel.price + order.technology.price + order.interior.price) * order.vehicle.price
        return `<ul class="custom-order">
                <li class="order-header">Order #${order.id}:</li>
                <li>Paint Color - ${order.color.name}</li>
                <li>Interior - ${order.interior.name}</li>
                <li>Tech Package - ${order.technology.name}</li>
                <li>Wheel Style - ${order.wheel.name}</li>
                <li>Price - ${totalPrice.toLocaleString("en-US",{style: "currency", currency:"USD"})}</li>
                </ul>`
        }
    )
    orderHTML += placedOrders.join("")
    return orderHTML
}