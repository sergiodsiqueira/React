new Chart(document.getElementById("canvas-grafico-EBITDA"), {
  type: "line",
  data: {
    labels: [
      "Jan.",
      "Fev.",
      "Mar.",
      "Abr.",
      "Mai.",
      "Jun.",
      // "Jul.",
      // "Ago.",
      // "Set.",
      // "Out.",
      // "Nov.",
      // "Dez.",
    ],
    datasets: [
      {
        borderWidth: 1,
        backgroundColor: ["rgba(224, 223, 119, 0.2)"],
        borderColor: ["rgb(224, 223, 119)"],
        data: [97, 93, 101, 97, 121, 95],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});
