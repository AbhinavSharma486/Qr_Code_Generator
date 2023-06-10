const qrFormEl = document.getElementById("qrForm");
const qrImage = document.getElementById("qrImage");
const qrContainer = document.getElementById("qrContainer");
const qrMyINputText = document.getElementById("myInput");



const renderQrCode = (url) => {
    if (!url) return;
    qrImage.src = url;
    qrContainer.classList.add("show");
};

qrFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");
    const qrCodeUrl = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

    renderQrCode(qrCodeUrl)

});

qrMyINputText.addEventListener("keyup", () => {

    if (!qrMyINputText.value.trim()) {
        qrContainer.classList.remove("show");
    }

});

