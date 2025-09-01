google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Starting Amount", "Contribution", "Interest"],

    ["2020", 200, 400, 600],
    ["2021", 300, 500, 700],
    ["2022", 400, 600, 800],
    ["2023", 500, 700, 900],
    ["2024", 600, 800, 1000],
    ["2025", 700, 900, 1100],
    ["2026", 800, 1000, 1200],
    ["2027", 900, 1100, 1300],
    ["2028", 1000, 1200, 1400],
    ["2029", 1100, 1300, 1500],
  ]);

  var options = {
    title: "Investment Growth Per Year",
    titlePosition: "out",
    width: "100%",
    height: "80%",
    legend: { position: "top", maxLines: 3 },
    bar: { groupWidth: "75%" },
    isStacked: true,
    backgroundColor: "transparent",
    chartArea: {
      left: 10,
      top: 40,
      bottom: 20,
      width: "100%",
      height: "70%",
    },
    colors: ["#505EFF", "#969FFF", "#DADDFF"],
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("stacked-bar")
  );
  chart.draw(data, options);
}
