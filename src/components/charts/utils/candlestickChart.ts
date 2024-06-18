import dayjs from "dayjs";

export const candlestickChartSettings: ApexCharts.ApexOptions = {
  chart: { type: "candlestick" },
  title: {
    text: "WIG20",
    align: "center",
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "category",
    labels: {
      formatter: function (val: string) {
        return dayjs(val).format("MMM DD");
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
    title: {
      text: "",
    },
  },
};
