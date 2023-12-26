document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const semester = document.getElementById("semester").value;
    const cgpa = document.getElementById("cgpa").value;

    const studentData = {
        name: name,
        age: age,
        semester: semester,
        cgpa: cgpa
    };

    // Simulate data submission (replace this with your actual AJAX or fetch call)
    setTimeout(() => {
        alert("Student data saved!");
        document.getElementById("studentForm").reset();
    }, 1000);
});
