function track() {
  const input =
    document.getElementById("trackingInput").value;
  const result =
    document.getElementById("result");
  if (input.trim() === "") {
    result.style.display = "block";
    result.innerHTML =
      "❌ Bitte eine Sendungsnummer eingeben.";
    return;
  }
  result.style.display = "block";
  result.innerHTML =
    "🚛 <b>Sendung gefunden!</b><br><br>" +
    "📦 Nummer: " + input.toUpperCase() + "<br>" +
    "🍋 Inhalt: 1.000 Zitronen<br>" +
    "📍 Standort: Irgendwo auf der A5<br>" +
    "⏱️ Status: Fahrer macht gerade Pause.<br>" +
    "✅ Lieferung: Wenn alles klappt.";
}
