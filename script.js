function addRecommendation() {
  const text = prompt("Enter your recommendation:");

  if (text && text.trim() !== "") {
    document.getElementById("rec-text").innerText = text;
    showPopup();
  }
}

function showPopup() {
  alert("Thank you for your recommendation!");
}
