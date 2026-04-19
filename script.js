const input = document.querySelector(".date")
const wystawianie = document.querySelector(".wystawianie")


input.addEventListener("change", function(){
    const new1 = new Date(input.value)
    const today = new Date()
    const różnica = today - new1
    if(różnica > 0){
        const data = Math.floor(różnica / (1000*60*60*24))
        wystawianie.textContent = "mineło " + data + " dni"    }
    else{
        wystawianie.textContent = "Jesteś w przyszłości"
    }
})

const button = document.querySelector(".button")
const wynik = document.querySelector(".button2")
button.addEventListener("click" ,function(){
    wynik.textContent = "Obciążone twoje konto o 99zł"
    setTimeout(() => {
        window.location.href = "index2.html"
    }, 1000)
        
})

const losowykolor = document.querySelector(".losowy")

losowykolor.addEventListener("click", function(){
    const q = Math.floor(Math.random() * 256)
    const d = Math.floor(Math.random() * 256)
    const a = Math.floor(Math.random() * 256)
    document.body.style.background = `rgb(${q}, ${d}, ${a})`
})


const przychód = document.querySelector(".przychód")
const koszt = document.querySelector(".koszt")
const wynikzysku = document.querySelector(".wynikzysku")
const obliczzysk = document.querySelector(".obliczzysk")
obliczzysk.addEventListener("click", function(){
    const przychód = parseInt(document.querySelector(".przychód").value)
const koszt = parseInt(document.querySelector(".koszt").value)
    const podatek = 0.12 * przychód
const wynikzysku = document.querySelector(".wynikzysku")
const obliczzysk = document.querySelector(".obliczzysk")
const wynik = (przychód - podatek - koszt)
wynikzysku.textContent = "Zysk " + wynik
})
localStorage.setItem("user", 40)
console.log(localStorage.getItem("user")) 
