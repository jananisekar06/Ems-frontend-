let notifications = [
    "Attendance Updated Successfully",
    "Leave Request Approved",
    "Salary Credited",
    "Meeting Scheduled Tomorrow"
];

const notificationList = document.getElementById("notificationList");

notifications.forEach(message => {

    const li = document.createElement("li");

    li.className = "bg-indigo-100 p-4 rounded mb-3";

    li.textContent = message;

    notificationList.appendChild(li);

});
