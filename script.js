let zoomLevel = 1;

function openChapter(image) {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("viewer").classList.remove("hidden");

    const img = document.getElementById("chapterImage");
    img.src = "images/" + image;
    zoomLevel = 1;
    img.style.transform = "scale(1)";
}

// Zoom using mouse scroll
document.addEventListener("wheel", function (e) {
    const img = document.getElementById("chapterImage");

    if (!img.src) return;

    if (e.deltaY < 0) {
        zoomLevel += 0.1;
    } else {
        zoomLevel -= 0.1;
        if (zoomLevel < 1) zoomLevel = 1;
    }

    img.style.transform = `scale(${zoomLevel})`;
});

function goBack() {
    document.getElementById("viewer").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
}
