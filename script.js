let qr;

function generateQR() {
  const text = document.getElementById("qrText").value;
  const result = document.getElementById("qrResult");

  // Clear previous QR
  result.innerHTML = "";

  if (!text) {
    alert("Please enter some text or a URL.");
    return;
  }

  qr = new QRCode(result, {
    text: text,
    width: 256,
    height: 256
  });
}
