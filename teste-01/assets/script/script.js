const btnCalc = document.getElementById("calc");
const btnClear = document.getElementById("clear");
const btnDelete = document.getElementById("delete");
const title = document.querySelector("h2");
const form = document.querySelector("form");
const btnRefresh = document.getElementById("op");
const btnKeyboard = document.querySelectorAll(".teclado button");
const boxResult = document.querySelector(".boxResult");

const calcNotas = (event) => {
    event.preventDefault();
    let valueInput = document.getElementById("value").value;
    const value = parseInt(valueInput);

    if (isNaN(value) || value <= 0) {
        document.getElementById("result").innerText = "Por favor, insira um número válido";
        return;
    }

    const banknotes = {
        notes: [
          { price: 20, icon: "assets/images/20_reais.jpg" },
          { price: 10, icon: "assets/images/10_reais.jpg" },
          { price: 5, icon: "assets/images/5_reais.jpg" },
          { price: 1, icon: "assets/images/1_real.jpg" },
        ]
    };
    
    
    let remainingValue = value;

    const resultContainer = document.getElementById('result');
    const figure = document.querySelector(".figure");

    resultContainer.innerHTML = '';

    for (let i = 0; i < banknotes.notes.length; i++) {
        const numberOfNotes = Math.floor(remainingValue / banknotes.notes[i].price);
        console.log("anknotes.notes[i].price "+ banknotes.notes[i].price)
        console.log("banknotes.notes.length " + banknotes.notes.length)
        console.log("numberOfNotes " + numberOfNotes)
        console.log("remainingValue "  + remainingValue)
        console.log("")
        
        if (numberOfNotes > 0) {
            const noteText = document.createElement('p');
            noteText.innerText = `${numberOfNotes} nota(s) de R$ ${banknotes.notes[i].price}`;
            resultContainer.appendChild(noteText);
            title.style.display = 'block';
            form.style.display = "none";
            btnRefresh.style.display = 'block';
            document.getElementById("value").value = "";

            for (let j = 0; j < numberOfNotes; j++) {
                const noteImage = document.createElement('img');
                noteImage.src = banknotes.notes[i].icon;
                noteImage.alt = `Nota de R$ ${banknotes.notes[i].price}`;
                noteImage.style.width = '150px';
                resultContainer.appendChild(noteImage);
            }

            remainingValue %= banknotes.notes[i].price;
            console.log(" remainingValue %= banknotes.notes[i].price;",  remainingValue %= banknotes.notes[i].price)
        }
    }
}

const clearNotas = () => {
    document.getElementById("value").value = "";
}

const deleteNotas = () => {
    const valueInput = document.getElementById("value").value;

    document.getElementById("value").value = valueInput.slice(0, -1);
}

const refresh = () => {
    form.style.display = 'flex';
    document.getElementById('result').innerHTML = '';
    //boxResult.innerHTML = '';
    title.style.display = 'none';
    btnRefresh.style.display = 'none';
    calcNotas();    
}

const getKeyboard = (event) => {
    const convertNumber = parseInt(event.target.id);
    document.getElementById("value").value += convertNumber;
}

btnCalc.addEventListener("click", calcNotas);
btnClear.addEventListener("click", clearNotas);
btnDelete.addEventListener("click", deleteNotas);
btnRefresh.addEventListener("click", refresh);
btnKeyboard.forEach((item, index) => {
    item.addEventListener("click", getKeyboard)
})