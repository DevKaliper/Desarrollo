const valor1 = document.getElementById("n1");
const valor2 = document.getElementById("n2");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplica");
const dividir = document.getElementById("divide");
const btncalcular = document.getElementById("calcular");
const respuesta = document.getElementById("resp");
const signo = document.getElementById("signo");
sumar.addEventListener("click", sumarsig);
restar.addEventListener("click", restarsig);
multiplicar.addEventListener("click", multsig);
dividir.addEventListener("click", dividirsig);
btncalcular.addEventListener("click", calcularnum);

function sumarsig() {
	signo.innerText = "+";
}
function restarsig() {
	signo.innerText = "-";
}
function multsig() {
	signo.innerText = "*";
}
function dividirsig() {
	signo.innerText = "/";
}

function calcularnum() {
	if (signo.innerText == "+") {
		const n1 = parseFloat(valor1.value);
		const n2 = parseFloat(valor2.value);
		let resp = n1 + n2;
		respuesta.innerText = resp;
	}
    else if (signo.innerText == "-") {
		const n1 = parseFloat(valor1.value);
		const n2 = parseFloat(valor2.value);
		let resp = n1 - n2;
		respuesta.innerText = resp;
	}
    else if (signo.innerText == "*") {
		const n1 = parseFloat(valor1.value);
		const n2 = parseFloat(valor2.value);
		let resp = n1 * n2;
		respuesta.innerText = resp;
	}
    else if (signo.innerText == "/") {
		const n1 = parseFloat(valor1.value);
		const n2 = parseFloat(valor2.value);
		let resp = n1 / n2;
		respuesta.innerText = resp;
	}
    else{
        signo.innerText="Elige una Operacion"
    }
    
}
