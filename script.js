let myLinks = []

const inputText = document.getElementById("input-txt")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")

const ulEl = document.getElementById("ul-el")

// carregando links salvos
let linksSaved = JSON.parse( localStorage.getItem("myLinks"))
if (linksSaved) {
    myLinks = linksSaved
    render(myLinks)
}

tabBtn.addEventListener('dblclick', function() {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
    })
})

function render(links) {
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


inputBtn.addEventListener('click', function() {
// add valor do input e limpa oque foi digitado
    myLinks.push(inputText.value)
    inputText.value = ""

    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})

