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
const podatek = 0.12 * przychód
obliczzysk.addEventListener("click", function(){
    const przychód = parseInt(document.querySelector(".przychód").value)
const koszt = parseInt(document.querySelector(".koszt").value)
const podatek = 0.12 * przychód
const wynikzysku = document.querySelector(".wynikzysku")
const obliczzysk = document.querySelector(".obliczzysk")
const wynik = (przychód - podatek -  koszt)
wynikzysku.textContent = "Zysk " + wynik



})
let sales = JSON.parse(localStorage.getItem("sales")) || []
obliczzysk.addEventListener("click", function(){
    const przychód = parseInt(document.querySelector(".przychód").value)
const koszt = parseInt(document.querySelector(".koszt").value)
const podatek = 0.12 * przychód
const wynikzysku = document.querySelector(".wynikzysku")
const obliczzysk = document.querySelector(".obliczzysk")
const wynik = (przychód - podatek -  koszt)
const container2 = document.querySelector(".container2")
wynikzysku.textContent = "Zysk " + wynik
       sales.push(wynik)
       localStorage.setItem("sales", JSON.stringify(sales))
       const suma = sales.reduce((acc, curr) => acc + curr, 0 )
       console.log(suma)
       container2.textContent = suma.toFixed(2) + " PLN"
})
const container2 = document.querySelector(".container2")
const cofnij = document.querySelector(".cofnij")
cofnij.addEventListener("click", function(){
    sales.pop()
    localStorage.setItem("sales", JSON.stringify(sales))
    const suma = sales.reduce((acc, curr) => acc + curr, 0 )
    container2.textContent = suma.toFixed(1) + " PLN"
    function animacja1() {
        container2.classList.toggle("animacja1")
    }

})

const style = document.querySelector(".style")

function zmiana() {
    style.classList.toggle("zmiana")
}
style.addEventListener("click", zmiana)

function ankieta() {
    const values = [
        document.querySelector("#input1").value,
        document.querySelector("#input2").value,
        document.querySelector("#input3").value,
        document.querySelector("#input4").value,
        document.querySelector("#input5").value,
        document.querySelector("#input6").value,
        document.querySelector("#input7").value
    ];

    const bars = document.querySelectorAll(".bar");

    values.forEach((val, i) => {
        const height = Number(val) * 5 || 0;
        bars[i].style.height = height + "px";
    });
}



function rysuj(){
    const values = [
        document.querySelector("#val1"),
        document.querySelector("#val2"),
        document.querySelector("#val3"),
        document.querySelector("#val4")
    ]

    values.forEach((val, i) => {
        const height = val * 2;
        document.querySelector(".bar" + (i + 1)).style.height = height + "px"
    }
)}
