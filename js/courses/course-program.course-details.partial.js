document.querySelectorAll(".course-program-item").forEach((item) => {
    const button = item.querySelector(".course-program-item-title");
    const content = item.querySelector(".course-program-item-content");
    const iconPlus = item.querySelector(".course-program-item-icon--plus");
    const iconMinus = item.querySelector(".course-program-item-icon--minus");

    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isExpanded));
        content.hidden = isExpanded;

        iconPlus.style.display = isExpanded ? "block" : "none";
        iconMinus.style.display = isExpanded ? "none" : "block";
    });
});
