var seatsPerRow = 4; // Number of seats in each row
var totalRows = 4; // Total number of rows
var maxSeats = 4; // Maximum number of seats that can be selected
var seatPrice = 10; // Price per seat

var selectedSeats = [];
var totalPrice = 550;
var labelColumns = ['a', 'b', 'c', 'd']; // Labels for columns

function createSeats() {
    var seatsDiv = document.getElementById("seats");
    for (var row = 1; row <= totalRows; row++) {
        for (var col = 1; col <= seatsPerRow; col++) {
            var seat = document.createElement("div");
            seat.className = "seat";
            seat.textContent = labelColumns[col - 1] + row;
            seat.onclick = function() {
                selectSeat(this);
            };
            seatsDiv.appendChild(seat);
        }
    }
}

function selectSeat(seat) {
    if (!seat.classList.contains("selected") && selectedSeats.length < maxSeats) {
        seat.classList.add("selected");
        var seatNumber = seat.textContent;
        selectedSeats.push(seatNumber);
        totalPrice += seatPrice;
        updateCart();
    }
}

function updateCart() {
    var selectedSeatsList = document.getElementById("selectedSeats");
    selectedSeatsList.innerHTML = "";
    for (var i = 0; i < selectedSeats.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = "Seat " + selectedSeats[i] + " - $" + seatPrice;
        selectedSeatsList.appendChild(listItem);
    }
    document.getElementById("totalPrice").textContent = totalPrice;
}

function applyCoupon() {
    var coupon = prompt("Enter coupon code:");
    if (coupon === "DISCOUNT") {
        totalPrice *= 0.8; // 20% discount
        updateCart();
    } else {
        alert("Invalid coupon code.");
    }
}

createSeats();
