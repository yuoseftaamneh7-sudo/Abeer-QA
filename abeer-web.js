
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("activ");
        observer.unobserve(entry.target); // يشتغل مرة وحدة
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));




const reveal = document.querySelectorAll(".rer");

const observe = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("activ");
        observer.unobserve(entry.target); // يشتغل مرة وحدة
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveal.forEach(el => observe.observe(el));

