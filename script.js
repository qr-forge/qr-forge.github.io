function generateQR() {
  let text = document.getElementById("qrText").value.trim();
  const result = document.getElementById("qrResult");

  function downloadQR() {
  const qrContainer = document.getElementById("qrResult");

  if (!qrContainer.firstChild) {
    alert("Generate a QR code first.");
    return;
  }

  let imgSrc;

  // Case 1: QR rendered as canvas
  const canvas = qrContainer.querySelector("canvas");
  if (canvas) {
    imgSrc = canvas.toDataURL("image/png");
  }

  // Case 2: QR rendered as img
  const img = qrContainer.querySelector("img");
  if (img) {
    imgSrc = img.src;
  }

  if (!imgSrc) {
    alert("Unable to download QR code.");
    return;
  }

  const link = document.createElement("a");
  link.href = imgSrc;
  link.download = "qr-code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  }
  
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
