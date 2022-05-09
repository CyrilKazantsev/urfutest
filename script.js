let underlineRegistration = document.createElement('div');
let link = document.getElementById("3");
let switchButton = document.getElementById("switch");
let switchBall = document.getElementById("switch__ball");
let budget = document.getElementById("budget");
let contract = document.getElementById("contract");
let inperson = document.getElementById("inperson");
let inabsentiaText = document.getElementById("inabsentia__text");
let inabsentiaNumber = document.getElementById("inabsentia__number");
let inpersonExam = document.getElementById("inperson-exam");
let inabsentiaTextExam = document.getElementById("inabsentia__text-exam");
let inabsentiaNumberExam = document.getElementById("inabsentia__number-exam");
underlineRegistration.className = "step__info-link-underline";
underlineRegistration.style.width = `${link.offsetWidth}px`;
link.after(underlineRegistration);
switchBall.style.left = "4px"

function changeType() {
    switch (switchBall.style.left) {
        case "32px":
            switchBall.style.left = "4px";
            budget.classList.add("tuition__active")
            contract.classList.remove("tuition__active")
            inperson.innerText = "20.06 - 08.08"
            inabsentiaText.innerText = "Очно-заочная форма обучения:"
            inabsentiaNumber.innerText = "20.06 - 08.08"
            inpersonExam.innerText = "04.07 - 13.08"
            inabsentiaTextExam.innerText = "Очно-заочная форма обучения:"
            inabsentiaNumberExam.innerText = "04.07 - 13.09 и 22.08 - 12.09"
            break;
        case "4px":
            switchBall.style.left = "32px";
            contract.classList.add("tuition__active")
            budget.classList.remove("tuition__active")
            inperson.innerText = "20.06 - 23.09"
            inabsentiaText.innerText = "Очно-заочная и заочная формы обучения:"
            inabsentiaNumber.innerText = "20.06 - 28.10"
            inpersonExam.innerText = "04.07 - 13.08 и 22.08 - 24.09"
            inabsentiaTextExam.innerText = "Очно-заочная и заочная формы обучения:"
            inabsentiaNumberExam.innerText = "04.07 - 13.08 и 22.08 - 29.10"
            break;
    }
}

switchButton.addEventListener("click", changeType)

