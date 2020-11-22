// emulates fetching data from server asynchronously
const getDataFromServer = async () => {
  // area chart
  const profits = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 40)
  );
  // stacked bar chart
  const web = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx * 4)
  );
  const social = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx * 2)
  );
  const other = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx)
  );
  // fake timeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { profits, web, social, other };
};

const reset = () => {
  areaChart && areaChart.updateSeries([]);
  stackedBarChart && stackedBarChart.updateSeries([]);
  clearInterval(updateInterval);
  updateInterval = setInterval(async () => {
    update();
  }, 30000);
};

const update = async () => {
  document.getElementById("navbar-loader").classList.remove("d-none");
  const response = await getDataFromServer();
  areaChart &&
    areaChart.updateSeries([{ name: "Profits", data: response.profits }]);
  stackedBarChart &&
    stackedBarChart.updateSeries([
      { name: "Web", data: response.web },
      { name: "Social", data: response.social },
      { name: "Other", data: response.other },
    ]);
  updateLastSyncTime && updateLastSyncTime();
  document.getElementById("navbar-loader").classList.add("d-none");
};

document.addEventListener("DOMContentLoaded", async () => {
  update();
});

updateInterval = setInterval(async () => {
  update();
}, 30000);
