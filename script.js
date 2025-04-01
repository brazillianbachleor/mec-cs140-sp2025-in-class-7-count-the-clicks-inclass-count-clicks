// Initialize count variable
let count = 0;

// Function to handle button clicks
function clickEvent() {
    // Increment count
    count++;

    // Log count to the console
    console.log(count);

    // Update the paragraph with the new count
    document.getElementById("counter").textContent = count;

    // Check if count is even
    if (count % 2 === 0) {
        alert("The count is even: " + count);
    }
}

// Attach event listener to the button
document.getElementById("clickButton").addEventListener("click", clickEvent);
