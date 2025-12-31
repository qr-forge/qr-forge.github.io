function generateQR() {
  let text = document.getElementById("qrText").value.trim();
  const result = document.getElementById("qrResult");

  result.innerHTML = "";

  if (!text) {
    alert("Please enter a URL or text.");
    return;
  }

  // Auto-add https:// if missing and looks like a URL
  if (
    !text.startsWith("http://") &&
    !text.startsWith("https://") &&
    text.includes(".")
  ) {
    text = "https://" + text;
  }

  new QRCode(result, {
    text: text,
    width: 256,
    height: 256
  });
}
