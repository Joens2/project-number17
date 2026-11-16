const skills = {
    frontend: ["HTML", "HTML5", "CSS", "CSS3", "JavaScript", "React"],
    backend: ["Python", "Java", "PHP", "Node.js"],
    tools: ["Git"]
};

const skillsList = document.getElementById("skillsList");
const projects = [
    {
        title: "Project 1",
        category: "web",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://picsum.photos/seed/project-one/600/400",
        description: "Geographical IQ, a web project.",
        featured: true,
        links: {
            github: "https://github.com/example/geographical-iq",
            live: "https://geographical-iq.example.com"
        }
    },
    {
        title: "Project 2",
        category: "app",
        tech: ["Java"],
        image: "https://picsum.photos/seed/project-two/600/400",
        description: "This is a description of project 2.",
        featured: false,
        links: {
            github: "https://github.com/example/project-two",
            live: "https://project-two.example.com"
        }
    },
    {
        title: "Project 3",
        category: "web",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://picsum.photos/seed/project-three/600/400",
        description: "This is a description of project 3.",
        featured: false,
        links: {
            github: "https://github.com/example/project-three",
            live: "https://project-three.example.com"
        }
    }
];
console.log(projects);
console.log(projects[1].title);

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
    const visibleProjectIndexes = new Set(
        projects
            .map(function (project, index) {
                return { project, index };
            })
            .filter(function ({ project }) {
                return category === "all" ||
                    (category === "featured" && project.featured) ||
                    project.category === category;
            })
            .map(function ({ index }) {
                return String(index);
            })
    );
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {
        const shouldShow = visibleProjectIndexes.has(card.dataset.projectIndex);

        if (shouldShow) {
            card.style.display = "";
            requestAnimationFrame(function () {
                card.classList.remove("fade-out");
            });
        } else {
            card.classList.add("fade-out");

            setTimeout(function () {
                if (card.classList.contains("fade-out")) {
                    card.style.display = "none";
                }
            }, 300);
        }
    });
}
console.log(skills.frontend.length);
skills.backend.push("Express");
console.log(JSON.stringify(skills, null, 2));

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(function (project, index) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.category = project.category;
    card.dataset.projectIndex = String(index);
    card.innerHTML = `
        <figure>
            <img src="${project.image}" alt="${project.title} thumbnail">
            <figcaption>${project.title}</figcaption>
            ${project.featured ? '<span class="badge">Featured</span>' : ""}
        </figure>
        <div class="project-card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.tech.join(", ")}</p>
            <a href="${project.links.live}" target="_blank" rel="noopener noreferrer">Live project</a>
            <a href="${project.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    `;

    projectsContainer.appendChild(card);
});

updateProjectAmount();