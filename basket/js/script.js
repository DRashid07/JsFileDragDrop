const sourceList = document.querySelector("#source-list");
const dropZones = document.querySelectorAll(".drop-zone");
let draggedBox = null;

function isDropAllowed(box, zone) {
    if (zone.id === "source-list") {
        return true;
    }

    const boxNumber = Number(box.textContent);
    const min = Number(zone.dataset.min);
    const max = Number(zone.dataset.max);

    if (Number.isNaN(min) || Number.isNaN(max)) {
        return true;
    }

    return boxNumber >= min && boxNumber <= max;
}

for (let i = 1; i <= 12; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = String(i);
    box.draggable = true;

    box.addEventListener("dragstart", () => {
        draggedBox = box;
        box.classList.add("dragging");
    });

    box.addEventListener("dragend", () => {
        box.classList.remove("dragging");
        draggedBox = null;
    });

    sourceList.appendChild(box);
}

dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    zone.addEventListener("dragenter", (event) => {
        event.preventDefault();
        zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
        zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", () => {
        zone.classList.remove("drag-over");

        if (!draggedBox) {
            return;
        }

        if (!isDropAllowed(draggedBox, zone)) {
            return;
        }

        zone.appendChild(draggedBox);
    });
});

