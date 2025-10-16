function addSkill(id) {
  let name = prompt("Введите название навыка: ");
  if (name === null || name === "") {
    alert("Не смешно...");
    return;
  }
  let percent = Number(prompt("Введите процент владения навыком: "));
  if (percent === null || isNaN(percent)) {
    alert("Не смешно...");
    return;
  }

  let progress = "#".repeat(percent / 10);

  document.getElementById(id).innerHTML +=
    `<li class="courses_text">${name} ${progress} ${percent}%</li>`;

  return;
}

const projectsData = {
  project1: {
    title: "Название проекта 1",
    description:
      "Полное описание проекта 1. Здесь можно рассказать о технологиях, целях проекта, сложностях и решениях.",
    screenshots: ["image1.jpg", "image2.jpg"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
  project2: {
    title: "Название проекта 2",
    description: "Полное описание проекта 2. Детали реализации и особенности.",
    screenshots: ["image3.jpg", "image4.jpg"],
    liveLink: "https://example2.com",
    codeLink: "https://github.com/example2",
  },
  project3: {
    title: "Название проекта 3",
    description: "Полное описание проекта 3. Интересные факты о разработке.",
    screenshots: ["image5.jpg", "image6.jpg"],
    liveLink: "https://example3.com",
    codeLink: "https://github.com/example3",
  },
};

const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".modal__close");
const projectCards = document.querySelectorAll(".project_card");

function openModal(projectId) {
  const project = projectsData[projectId];

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalLiveLink").href = project.liveLink;
  document.getElementById("modalCodeLink").href = project.codeLink;

  const gallery = document.getElementById("modalGallery");
  gallery.innerHTML = "";
  project.screenshots.forEach((screenshot) => {
    const img = document.createElement("img");
    img.src = screenshot;
    img.alt = `Скриншот ${project.title}`;
    gallery.appendChild(img);
  });

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

projectCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    openModal(`project${index + 1}`);
  });
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
