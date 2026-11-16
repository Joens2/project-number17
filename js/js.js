const skills = {
    Frontend: ["HTML", "HTML5", "CSS", "CSS3", "JavaScript", "React"],
    Backend: ["Python", "Java", "PHP", "Node.js"],
    Tools: ["Git"]
};
const skillsList = document.getElementById("skillsList");

for (const [category, categorySkills] of Object.entries(skills)) {
    const categoryItem = document.createElement("li");
    const categoryHeading = document.createElement("strong");
    const categoryList = document.createElement("ul");

    categoryHeading.textContent = category;
    categoryItem.appendChild(categoryHeading);

    for (const skill of categorySkills) {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        categoryList.appendChild(skillItem);
    }

    categoryItem.appendChild(categoryList);
    skillsList.appendChild(categoryItem);
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

document.getElementById("year").textContent = new Date().getFullYear();

function sayHello() {
    alert("Thanks for visiting!");
}

function visibility() {
    document.querySelector(".contact").classList.toggle("hidden");
}

function calculateExperience(startYear) {
    return new Date().getFullYear() - startYear;
}

document.getElementById("expYears").textContent = calculateExperience(2026);

function timeLeft(targetDate) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((targetDate - new Date()) / millisecondsPerDay);
}

const daysLeft = timeLeft(new Date("2028-03-01T00:07:30"));
document.getElementById("timeLeft").textContent =
    daysLeft > 0 ? `${daysLeft} days` : "No License";

function updateProjectAmount() {
    document.getElementById("projectAmount").textContent =
        document.querySelectorAll(".project-card").length;
}

updateProjectAmount();

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

function validateForm(form) {
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields");
        return false;
    }

    alert("Message sent!");
    return false;
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(function (project) {
        const shouldShow =
            category === "all" || project.dataset.category === category;

        if (shouldShow) {
            project.style.display = "";
            requestAnimationFrame(function () {
                project.classList.remove("fade-out");
            });
        } else {
            project.classList.add("fade-out");

            setTimeout(function () {
                if (project.classList.contains("fade-out")) {
                    project.style.display = "none";
                }
            }, 300);
        }
    });
}