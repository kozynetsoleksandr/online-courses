document.querySelectorAll(".talk-about__item").forEach((item) => {
    const button = item.querySelector(".talk-about__item-title");
    const content = item.querySelector(".talk-about__item-content");
    const iconPlus = item.querySelector(".talk-about__item-icon--plus");
    const iconMinus = item.querySelector(".talk-about__item-icon--minus");

    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isExpanded));
        content.hidden = isExpanded;

        iconPlus.style.display = isExpanded ? "block" : "none";
        iconMinus.style.display = isExpanded ? "none" : "block";
    });
});