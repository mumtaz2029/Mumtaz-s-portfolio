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

        $("section").each(function () {
            const height = $(this).height();
            const offset = $(this).offset().top - 200;
            const top = $(window).scrollTop();
            const id = $(this).attr("id");

            if (top > offset && top < offset + height) {
                $(".navbar ul li a").removeClass("active");
                $(".navbar").find(`[href="#${id}"]`).addClass("active");
            }
        });
    });

    $('a[href*="#"]').on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top
            },
            500,
            "linear"
        );
    });

    $("#contact-form").submit(function (event) {
        event.preventDefault();

        const name = $('input[name="name"]').val() || "";
        const email = $('input[name="email"]').val() || "";
        const message = $('textarea[name="message"]').val() || "";
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:mumtazjahan2029@gmail.com?subject=${subject}&body=${body}`;
        document.getElementById("contact-form").reset();
    });
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.title = "Mumtaz Jahan | DevOps Portfolio";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back | Mumtaz Jahan";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

const typed = new Typed(".typing-text", {
    strings: ["cloud engineering", "devops automation", "aws and azure", "docker and kubernetes", "reliable systems"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500
});

async function fetchData(type = "skills") {
    const response = type === "skills"
        ? await fetch("skills.json")
        : await fetch("./projects/projects.json");
    return response.json();
}

function showSkills(skills) {
    const skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach((skill) => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="${skill.name}" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

function renderHighlightLinks(links) {
    return links
        .map((link) => `<a href="${link.url}" class="btn" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
        .join("");
}

function showProjects(projects) {
    const projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 6).forEach((project) => {
        projectHTML += `
        <div class="box tilt">
            <img draggable="false" src="${project.image}" alt="${project.name}" />
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        ${renderHighlightLinks(project.links)}
                    </div>
                </div>
            </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectHTML;

    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15
    });

    const reveal = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 1000,
        reset: true
    });
    reveal.reveal(".work .box", { interval: 200 });
}

fetchData().then((data) => {
    showSkills(data);
});

fetchData("projects").then((data) => {
    showProjects(data);
});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15
});

const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true
});

srtop.reveal(".home .content h2", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });
srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 300 });
srtop.reveal(".home .github", { interval: 450 });
srtop.reveal(".home .youtube", { interval: 600 });
srtop.reveal(".home .mail", { interval: 750 });
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });
srtop.reveal(".education .box", { interval: 200 });
srtop.reveal(".work .box", { interval: 200 });
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
