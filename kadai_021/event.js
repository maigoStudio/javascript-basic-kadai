const btnClick = document.getElementById("btn");

btnClick.addEventListener("click", () => {
	const text = document.getElementById("text");

	setTimeout(() => {
		text.textContent = "ボタンをクリックしました";
	}, 2000);
});