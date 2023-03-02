const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
	item.onclick = () => {
		if (item.id == "clear") {
			display.innerText = "";
		} else if (item.id == "backspace") {
			let string = display.innerText.toString();
			display.innerText = string.substr(0, string.length - 1);
		} else if (item.id == "equal" && display.innerText == "") {
			display.innerText = "Null";
			setTimeout(() => (display.innerText = ""), 2000);
		} else if (display.innerText != "" && item.id == "equal") {
			display.innerText = eval(display.innerText);
		} else {
			display.innerText += item.id;
		}
	};
});

const themeTogglerBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");



themeTogglerBtn.onclick = () => {
	calculator.classList.toggle("dark");
	themeTogglerBtn.classList.toggle("active");
	
};