//add cdn barcode library and using jquery to use
async function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

(async () => {
  await loadScript(
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.6/dist/JsBarcode.all.min.js"
  );
  let barcode_text = document.getElementById("barcode_text").textContent;
  $("#barcode").JsBarcode(barcode_text.trim(), {
    format: "code39",
    //   lineColor: "#0aa",
    width: 1.7,
    // height: 50,
    displayValue: false,
  });
})();
