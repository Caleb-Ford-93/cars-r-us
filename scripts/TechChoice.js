import { setTechId } from "./TransientState.js"

export const ChooseTechnology = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()
    
    document.addEventListener("change", handleTechChange)
    let html = ""
    html += `<select id="technology">`
    html += `<option value="0">Select a tech package</option>`

    const technologyOptions = technologies.map((technology) => {
            return `<option value="${technology.id}">${technology.name}</option>`
        }
    )

    html += technologyOptions.join("")
    html += "</select>"
    
    return html
}

const handleTechChange = (changeEvent) => {
    if(changeEvent.target.id === "technology") {
        const chosenOption = changeEvent.target.value
        setTechId(chosenOption)
    }
}