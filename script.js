let links = []
const inputText = document.getElementById("input-txt")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Leads
let leadsSaved = JSON.parse( localStorage.getItem("links"))

if (leadsSaved) {
    links = leadsSaved
    renderLeads()
}

inputBtn.addEventListener('click', function() {
// add valor do input e limpa oque foi digitado
    links.push(inputText.value)
    inputText.values = ""

    localStorage.setItem("links", JSON.stringify(links))
    renderLeads()

    console.log(localStorage.getItem("links"))
})

function renderLeads() {
    let list = ""
     for (let link in links) {
         list += `
            <li>
                <a target='_blank' href='${links[link]}'>
                    ${links[link]}
                </a>
            </li>
         `
        // const li = document.createElement("li") // criando uma lista. Melhor que innerHTML
        // li.textContent = links[link]
        // ulEl.append(li)
    }
    ulEl.innerHTML = list
}
