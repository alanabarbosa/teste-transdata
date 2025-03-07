const btnVerify = document.getElementById("freq");

const verify = (event) => {
    event.preventDefault();

    const input = document.getElementById("value").value.trim();

    if (input.length === 0) {
        document.getElementById("result").innerText = "Por favor, insira uma palavra válida.";
        return;
    }

    const filteredInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (filteredInput.length === 0) {
        document.getElementById("result").innerText = "Por favor, insira uma palavra contendo apenas letras.";
        return;
    }

    const letterCount = {};
    const totalLetters = filteredInput.length;

    for (let i = 0; i < filteredInput.length; i++) {
        const letter = filteredInput[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    const letterFrequency = [];
    for (const letter in letterCount) {
        const percentage = ((letterCount[letter] / totalLetters) * 100).toFixed(2);
        letterFrequency.push({ letter, percentage });
    }

    letterFrequency.sort((a, b) => b.percentage - a.percentage);

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = '';
    letterFrequency.forEach(item => {
        const resultText = document.createElement('p');
        resultText.innerText = `${item.letter} = ${item.percentage}%`;
        resultContainer.appendChild(resultText);
    });
}

btnVerify.addEventListener("click", verify)
window.onload = () => {
    document.getElementById("value").focus();
};