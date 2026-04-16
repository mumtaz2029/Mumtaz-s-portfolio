$(document).ready(function () {
    $("#menu").click(function () {
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on("scroll load", function () {
        $("#menu").removeClass("fa-times");
        $(".navbar").removeClass("nav-toggle");

        if (window.scrollY > 60) {
            document.querySelector("#scroll-top").classList.add("active");
        } else {
            document.querySelector("#scroll-top").classList.remove("active");
        }
    });
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.title = "Highlights | Mumtaz Jahan";
        $("#favicon").attr("href", "/assets/images/favicon.png");
    } else {
        document.title = "Come Back | Mumtaz Jahan";
        $("#favicon").attr("href", "/assets/images/favhand.png");
    }
});

function getProjects() {
    return fetch("projects.json").then((response) => response.json());
}

function renderLinks(links) {
    return links
        .map((link) => `<a href="${link.url}" class="btn" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
        .join("");
}

function showProjects(projects) {
    const projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach((project) => {
        projectsHTML += `
        <div class="grid-item">
            <div class="box tilt" style="width: 380px; margin: 1rem">
                <img draggable="false" src="${project.image}" alt="${project.name}" />
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            ${renderLinks(project.links)}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectsHTML;

    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15
    });
}

getProjects().then((data) => {
    showProjects(data);
});
