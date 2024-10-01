// Problem 1: Display current date and time
function showCurrentDateTime() {
    let currentDate = new Date();
    document.getElementById('dateTime').innerHTML = `Current Date and Time: ${currentDate}`;
}

// Problem 2: Alert current month in words
function alertCurrentMonth() {
    let currentDate = new Date();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    alert("Current Month: " + monthNames[currentDate.getMonth()]);
}

// Problem 3: Alert first 3 letters of the current day
function alertCurrentDay() {
    let currentDate = new Date();
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    alert("Current Day (3 Letters): " + dayNames[currentDate.getDay()]);
}

// Problem 4: Display message “It’s Fun day” if it's Saturday or Sunday
function checkFunDay() {
    let currentDate = new Date();
    let day = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

    if (day === 0 || day === 6) {
        document.getElementById('funDayMessage').innerHTML = "It’s Fun day!";
    } else {
        document.getElementById('funDayMessage').innerHTML = "It's a regular day!";
    }
}

// Problem 5: Show message if it's first 15 days or last days of the month
function checkDayOfMonth() {
    let currentDate = new Date();
    let dayOfMonth = currentDate.getDate(); // Get the day of the month

    if (dayOfMonth < 16) {
        document.getElementById('dayMessage').innerHTML = "First fifteen days of the month";
    } else {
        document.getElementById('dayMessage').innerHTML = "Last days of the month";
    }
}

// Problem 6: Calculate minutes since midnight, Jan. 1, 1970
function minutesSince1970() {
    let currentDate = new Date();
    let millisecondsSince1970 = currentDate.getTime(); // Milliseconds since Jan 1, 1970
    let minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60)); // Convert to minutes
    document.getElementById('minutesSince').innerHTML = `Minutes since Jan. 1, 1970: ${minutesSince1970}`;
}
