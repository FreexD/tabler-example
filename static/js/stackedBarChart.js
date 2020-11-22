var stackedBarChart =
  window.ApexCharts &&
  new ApexCharts(document.getElementById("chart-mentions"), {
    chart: {
      type: "bar",
      fontFamily: "inherit",
      height: 240,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
      stacked: true,
      events: {
        click: function (event, chartContext, config) {
          // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
          console.log(event, chartContext, config);
          if (level < 5) {
            level++;
            document.getElementById(
              "page-title"
            ).innerHTML = `Dashboard - Level ${level}`;
            reset();
            update();
          } else {
            window.alert("Max level reached!");
          }
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    series: [],
    grid: {
      padding: {
        top: -20,
        right: 0,
        left: -4,
        bottom: -4,
      },
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      labels: {
        padding: 0,
      },
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      type: "datetime",
    },
    yaxis: {
      labels: {
        padding: 4,
      },
    },
    labels: [
      "2020-06-20",
      "2020-06-21",
      "2020-06-22",
      "2020-06-23",
      "2020-06-24",
      "2020-06-25",
      "2020-06-26",
      "2020-06-27",
      "2020-06-28",
      "2020-06-29",
      "2020-06-30",
      "2020-07-01",
      "2020-07-02",
      "2020-07-03",
      "2020-07-04",
      "2020-07-05",
      "2020-07-06",
      "2020-07-07",
      "2020-07-08",
      "2020-07-09",
      "2020-07-10",
      "2020-07-11",
      "2020-07-12",
      "2020-07-13",
      "2020-07-14",
      "2020-07-15",
      "2020-07-16",
      "2020-07-17",
      "2020-07-18",
      "2020-07-19",
      "2020-07-20",
      "2020-07-21",
      "2020-07-22",
      "2020-07-23",
      "2020-07-24",
      "2020-07-25",
      "2020-07-26",
    ],
    colors: ["#206bc4", "#79a6dc", "#bfe399"],
    legend: {
      show: true,
      position: "bottom",
      height: 32,
      offsetY: 8,
      markers: {
        width: 8,
        height: 8,
        radius: 100,
      },
      itemMargin: {
        horizontal: 8,
      },
    },
  });

document.addEventListener("DOMContentLoaded", function () {
  stackedBarChart && stackedBarChart.render();
});
