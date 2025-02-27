import gsap from "gsap";
import Draggable from "gsap/src/Draggable";
import Chart from 'chart.js/auto';

gsap.registerPlugin(Draggable);

"use struct";

const navButton = document.getElementById("navButton");
const nav = document.getElementById("nav");

navButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});

Draggable.create(".draggable", {
  bounds: ".header",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".puke-draggable", {
  bounds: ".situation",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".undo-draggable", {
  bounds: ".situation",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".wave-draggable", {
  bounds: ".first-contact",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".cat-draggable", {
  bounds: ".team",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".cola-draggable", {
  bounds: ".team",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".cool-draggable", {
  bounds: ".team",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".d20-draggable", {
  bounds: ".team",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".apple-draggable", {
  bounds: ".team",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

Draggable.create(".airplane-draggable", {
  bounds: ".team",
  onDragStart: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1.2,
    });
  }, 
  onDragEnd: function() {
    gsap.to(this.target, {
      duration: 0.3,
      scale: 1,
    });
  }
});

const pruxText = document.getElementById("prux");
const footerSticker = document.getElementById("footerSticker");

pruxText.addEventListener("mouseover", () => {
  gsap.to(footerSticker, {
    duration: 0.5,
    scale: 1.1,
    rotate: 15,
    x: 50,
  });
});

pruxText.addEventListener("mouseout", () => {
  gsap.to(footerSticker, {
    duration: 0.5,
    scale: 1,
    rotate: -15,
    x: 0,
  });
});

const freeTimeSurvey = document.getElementById("freeTimeSurvey");
const utilitySurvey = document.getElementById("utilitySurvey");
const roomIssuesSurvey = document.getElementById("roomIssuesSurvey");
const decorationSurvey = document.getElementById("decorationSurvey");

new Chart(freeTimeSurvey, {
  type: "pie",
  options: {
    plugins: {
      legend: {
        position: "left",
      },
    },
  },
  data: {
    labels: ["Détente hors école", "Détente à l'école", "Travail hors école", "Travail à l'école"],
    datasets: [
      {
        label: "Pourcentage de réponses",
        data: [33.3, 41.7, 31.3, 22.9],
        borderColor: "#392B3D",
        borderWidth: 2,
        backgroundColor: ["#9E27BD", "#C7B9FF", "#CB21A9", "#EF89E3"],
        hoverBackgroundColor: ["#7A1F8E", "#A08ACC", "#9A187F", "#C96DB1"],
      },
    ],
  },
});

new Chart(utilitySurvey, {
  type: "pie",
  options: {
    plugins: {
      legend: {
        position: "left",
      },
    },
  },
  data: {
    labels: ["Travail", "Détente", "Les deux"],
    datasets: [
      {
        label: "Pourcentage de réponses",
        data: [35.4, 54.2, 10.4],
        borderColor: "#392B3D",
        borderWidth: 2,
        backgroundColor: ["#9E27BD", "#C7B9FF", "#CB21A9"],
        hoverBackgroundColor: ["#7A1F8E", "#A08ACC", "#9A187F"],
      },
    ],
  },
});

new Chart(roomIssuesSurvey, {
  type: "bar", 
  data: {
    labels: ["Agencement", "Matériel", "Confort", "Ambiance", "Plusieurs réponses"],
    datasets: [
      {
        label: "Pourcentage de réponses",
        data: [35.4, 37.5, 29.2, 35.4, 17],
        borderColor: "#392B3D",
        borderWidth: 2,
        backgroundColor: ["#9E27BD", "#C7B9FF", "#CB21A9", "#EF89E3", "#D8B3D7"],
        hoverBackgroundColor: ["#7A1F8E", "#A08ACC", "#9A187F", "#C96DB1", "#B08AAE"],
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true, 
        max: 40, 
        ticks: {
          callback: function(value) {
            return value + " %"; 
          }
        }
      }
    }
  }
});

new Chart(decorationSurvey, {
  type: "pie",
  options: {
    plugins: {
      legend: {
        position: "left",
      },
    },
  },
  data: {
    labels: ["Oui", "Non"],
    datasets: [
      {
        label: "Pourcentage de réponses",
        data: [18.7, 81.3],
        borderColor: "#392B3D",
        borderWidth: 2,
        backgroundColor: ["#9E27BD", "#C7B9FF"],
        hoverBackgroundColor: ["#7A1F8E", "#A08ACC"], // Couleurs plus foncées
      },
    ],
  },
});