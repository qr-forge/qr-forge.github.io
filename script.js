let qr;

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('modeToggle');
  toggle.addEventListener('change', toggleMode);
});

function generateQR() {
  const textInput = document.getElementById("qrText");
  const result = document.getElementById("qrResult");
  let text = textInput.value.trim();

  result.innerHTML = ""; // Clear previous QR

  if (!text) {
    alert("Please enter a URL or text.");
    return;
  }

  // Auto-add https:// if missing
  if (!text.startsWith("http://") && !text.startsWith("https://") && text.includes(".")) {
    text = "https://" + text;
  }

  qr = new QRCode(result, {
    text: text,
    width: 256,
    height: 256
  });
}

function downloadQR() {
  const qrContainer = document.getElementById("qrResult");

  if (!qrContainer.firstChild) {
    alert("Generate a QR code first.");
    return;
  }

  let imgSrc;
  const canvas = qrContainer.querySelector("canvas");
  const img = qrContainer.querySelector("img");

  if (canvas) imgSrc = canvas.toDataURL("image/png");
  else if (img) imgSrc = img.src;

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

function toggleMode() {
  const root = document.documentElement;
  const toggle = document.getElementById("modeToggle");

  if (toggle.checked) {
    // Dark blue mode
    root.style.setProperty('--bg-color', '#0b1e45');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--input-bg', '#1a2b5b');
    root.style.setProperty('--button-bg', '#2196f3');
    root.style.setProperty('--button-text', '#ffffff');
    root.style.setProperty('--toggle-bg', '#555');
    root.style.setProperty('--toggle-circle', '#ffffff');
  } else {
    // Light mode
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--input-bg', '#f0f0f0');
    root.style.setProperty('--button-bg', '#007bff');
    root.style.setProperty('--button-text', '#ffffff');
    root.style.setProperty('--toggle-bg', '#ccc');
    root.style.setProperty('--toggle-circle', '#ffffff');
  }
}
