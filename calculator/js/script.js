function getInputValues() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const result = document.getElementById("netice");

    const num1 = Number(num1Input.value.trim());
    const num2 = Number(num2Input.value.trim());

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        showError("Zehmet olmasa duzgun reqem daxil edin.");
        return null;
    }

    result.classList.remove("error");
    return { num1, num2 };
}



function showResult(value) {
    const result = document.getElementById("netice");
    result.classList.remove("error");
    result.textContent = `Netice: ${value}`;
}

function showError(message) {
    const result = document.getElementById("netice");
    result.classList.add("error");
    result.textContent = message;
}

function Toplama() {
    const values = getInputValues();
    if (!values) return;
    showResult(values.num1 + values.num2);
}

function Cixma() {
    const values = getInputValues();
    if (!values) return;
    showResult(values.num1 - values.num2);
}

function Vurma() {
    const values = getInputValues();
    if (!values) return;
    showResult(values.num1 * values.num2);
}

function Bolme() {
    const values = getInputValues();
    if (!values) return;

    if (values.num2 === 0) {
        showError("0-a bolmek olmaz.");
        return;
    }

    showResult(values.num1 / values.num2);
}
