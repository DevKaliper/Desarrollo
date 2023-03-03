const favButton = document.querySelectorAll("button");

favButton.forEach((item) => {
	item.onclick = () => {
		item.classList.toggle("active");
        
        
	};
});
