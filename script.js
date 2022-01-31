let links = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function() {
    links.push(inputEl.value)

    renderLeads()
    links = []
})

function renderLeads() {
     for (let link in links) {
        const li = document.createElement("li") // criando uma lista. Melhor que innerHTML
        li.textContent = links[link]
        ulEl.append(li)
    }
   
}
