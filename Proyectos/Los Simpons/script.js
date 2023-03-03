const favButton = document.querySelectorAll("button");
const favorite = document.getElementById("heartbutton");
favButton.forEach((item) => {
	item.onclick = () => {
		item.classList.toggle("active");
        
        
	};
});
