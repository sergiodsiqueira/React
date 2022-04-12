new Chart(document.getElementById("canvas-grafico-receitas-despesas"), {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Despesas",
        data: [-12, -8, -16, -5],
        backgroundColor: "rgba(232, 13, 9, 0.2)",
        borderColor: "rgba(232, 13, 9, 0.5)",
        order: 2,
      },
      {
        label: "Receitas",
        data: [12, 21, 15, 22],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 0.5)",
        order: 2,
      },
      {
        label: "Lucro",
        data: [0, 13, -1, 17],
        fill: false,
        backgroundColor: "rgb(5, 62, 71, 0.5)",
        borderColor: "rgb(23, 5, 71)",
        type: "line",
        order: 1,
        tension: 0,
      },
    ],
    labels: [
      "Jan.",
      "Fev.",
      "Mar.",
      "Abr.",
      "Mai.",
      "Jun.",
      "Jul.",
      "Ago.",
      "Set.",
      "Out.",
      "Nov.",
      "Dez.",
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
      text: "Resultados",
    },
    legend: {
      display: false,
      position: "bottom",
      labels: {
        usePointStyle: true,
        padding: 50,
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          beginAtZero: true,
        },
      ],
      yAxes: [
        {
          beginAtZero: true,
        },
      ],
    },
  },
});
