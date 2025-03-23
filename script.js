// Load seat data from localStorage or initialize an empty object
let seatsData = JSON.parse(localStorage.getItem("seatsData")) || {};

// Function to create seats dynamically
function createSeats() {
    const seatContainer = document.getElementById("seatContainer");
    seatContainer.innerHTML = ""; // Clear previous seats

    for (let i = 1; i <= 50; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.innerText = i;

        // Get seat data
        if (!seatsData[i]) {
            seatsData[i] = { seatNumber: i, name: "", timing: "", fees: "Pending", occupied: false };
        }

        // Apply occupied styling
        if (seatsData[i].occupied) {
            seat.classList.add("occupied");
        }

        // Add click event to show modal
        seat.addEventListener("click", () => openSeatDetails(seatsData[i]));

        seatContainer.appendChild(seat);
    }

    // Save initial seats if not already saved
    localStorage.setItem("seatsData", JSON.stringify(seatsData));
}

// Function to open modal and populate details
function openSeatDetails(seat) {
    document.getElementById("seatNumber").innerText = seat.seatNumber;
    document.getElementById("seatName").value = seat.name || "";
    document.getElementById("seatTiming").value = seat.timing || "";
    document.getElementById("seatFees").value = seat.fees || "Pending";
    document.getElementById("seatOccupied").checked = seat.occupied || false;

    document.getElementById("seatModal").style.display = "block";

    // Save changes when button is clicked
    document.getElementById("saveSeat").onclick = function () {
        saveSeatData(seat.seatNumber);
    };
}

// Function to save seat data
function saveSeatData(seatNumber) {
    const name = document.getElementById("seatName").value;
    const timing = document.getElementById("seatTiming").value;
    const fees = document.getElementById("seatFees").value;
    const occupied = document.getElementById("seatOccupied").checked;

    // Update seat data
    seatsData[seatNumber] = { seatNumber, name, timing, fees, occupied };

    // Save to localStorage
    localStorage.setItem("seatsData", JSON.stringify(seatsData));

    // Close modal and refresh seats
    document.getElementById("seatModal").style.display = "none";
    createSeats();
}

// Close modal
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("seatModal").style.display = "none";
});

// Generate seats on page load
createSeats();
