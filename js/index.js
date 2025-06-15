function init() {
  import("./home-page/index.benefits.partial.js");
  import("./home-page/index.team.partial.js");
  import("./home-page/index.testimonials.partial.js");
  import("./courses/course-program.course-details.partial.js")
  import("./courses/course-suggestions.course-details.partial.js")
  import("./events/events.view.partial.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
