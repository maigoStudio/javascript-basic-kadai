const btnClick = document.getElementById("btn");

btnClick.addEventListener("click", () => {
	const text = document.getElementById("text");
	text.textContent = "ボタンをクリックしました";
});