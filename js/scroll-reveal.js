document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.querySelectorAll('.feature-card, .team-card, .mission-box, .mentor-box');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  }, { threshold: 0.15 });

  boxes.forEach(function (box) {
    observer.observe(box);
  });
});
