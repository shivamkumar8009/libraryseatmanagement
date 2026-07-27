let zoomLevel = 1;
const img = document.getElementById("chapterImage");

function openChapter(image) {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("viewer").classList.remove("hidden");

    img.src = "images/" + image;

    zoomLevel = 1;
    updateZoom();
}

function goBack() {
    document.getElementById("viewer").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
}

/* 🔍 Zoom Controls */
function zoomIn() {
    zoomLevel += 0.2;
    updateZoom();
}

function zoomOut() {
    zoomLevel -= 0.2;
    if (zoomLevel < 1) zoomLevel = 1;
    updateZoom();
}

function resetZoom() {
    zoomLevel = 1;
    updateZoom();
}

function updateZoom() {
    img.style.transform = `scale(${zoomLevel})`;
}

/* 🖱 Scroll Zoom */
document.addEventListener("wheel", function(e) {
    if (!img.src) return;

    if (e.deltaY < 0) {
        zoomLevel += 0.1;
    } else {
        zoomLevel -= 0.1;
        if (zoomLevel < 1) zoomLevel = 1;
    }

    updateZoom();
});
