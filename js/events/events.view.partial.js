const toggleButtons = document.querySelectorAll(
    ".events-view__toolbar-toogle"
);

toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        toggleButtons.forEach((b) =>
            b.classList.remove("events-view__toggle--active")
        );
        btn.classList.add("events-view__toggle--active");
    });
});