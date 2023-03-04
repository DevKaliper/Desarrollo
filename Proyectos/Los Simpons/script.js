// Favorites button in Third Section
const favButton = document.querySelectorAll("button");

favButton.forEach((item) => {
	item.onclick = () => {
		item.classList.toggle("active");
        
        
	};
});
// -----------------------------------------------------------------------------


