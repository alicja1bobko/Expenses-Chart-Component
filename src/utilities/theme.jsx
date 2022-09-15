// Colors
const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900,
];
const blueGrey50 = "#ECEFF1";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

// Typography
const sansSerif = "'DM Sans', sans-serif";
const letterSpacing = "normal";
const fontSize = 10;
const fontWeight = "bold";

// Layout
const padding = 2;

const baseProps = {
  width: 370,
  height: 230,
  padding: 20,
};

// * Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0,
};

const labelCustomStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0,
  fontWeight: "bold",
};

const centeredLabelStyles = Object.assign(
  { textAnchor: "middle" },
  baseLabelStyles
);

// Strokes
const strokeDasharray = "0,100";
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
export const theme = {
  area: Object.assign(
    {
      style: {
        data: {
          fill: grey900,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  axis: Object.assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin,
        },
        axisLabel: Object.assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent",
        }),
        grid: {
          fill: "none",
          stroke: "transparent",
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted",
        },
        ticks: {
          fill: "transparent",
          size: 5,
          stroke: "transparent",
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: Object.assign({}, baseLabelStyles, {
          fill: blueGrey700,
        }),
      },
    },
    baseProps
  ),
  polarDependentAxis: Object.assign({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent",
      },
    },
  }),
  bar: Object.assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  boxplot: Object.assign(
    {
      style: {
        max: { padding, stroke: blueGrey700, strokeWidth: 1 },
        maxLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        median: { padding, stroke: blueGrey700, strokeWidth: 1 },
        medianLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        min: { padding, stroke: blueGrey700, strokeWidth: 1 },
        minLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        q1: { padding, fill: blueGrey700 },
        q1Labels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        q3: { padding, fill: blueGrey700 },
        q3Labels: Object.assign({}, baseLabelStyles, { padding: 3 }),
      },
      boxWidth: 20,
    },
    baseProps
  ),
  candlestick: Object.assign(
    {
      style: {
        data: {
          stroke: blueGrey700,
        },
        labels: Object.assign({}, baseLabelStyles, { padding: 5 }),
      },
      candleColors: {
        positive: "#ffffff",
        negative: blueGrey700,
      },
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: Object.assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  group: Object.assign(
    {
      colorScale: colors,
    },
    baseProps
  ),
  histogram: Object.assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          stroke: grey900,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: baseLabelStyles,
      title: Object.assign({}, baseLabelStyles, { padding: 5 }),
    },
  },
  line: Object.assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  pie: Object.assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: blueGrey50,
          strokeWidth: 1,
        },
        labels: Object.assign({}, baseLabelStyles, { padding: 20 }),
      },
    },
    baseProps
  ),
  scatter: Object.assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          opacity: 1,
          stroke: "transparent",
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  stack: Object.assign(
    {
      colorScale: colors,
    },
    baseProps
  ),
  tooltip: {
    style: Object.assign({}, labelCustomStyles, {
      padding: 5,
      pointerEvents: "none",
    }),
    flyoutStyle: {
      stroke: "transparent",
      strokeWidth: 1,
      fill: "hsl(25 47% 15% / 90%)",
      pointerEvents: "none",
    },
    flyoutPadding: 15,
    cornerRadius: 3,
    pointerLength: 0,
  },
  voronoi: Object.assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0,
        },
        labels: Object.assign({}, baseLabelStyles, {
          padding: 5,
          pointerEvents: "none",
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none",
        },
      },
    },
    baseProps
  ),
};
