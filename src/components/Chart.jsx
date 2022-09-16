import {
  VictoryBar,
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
import { data } from "../utilities/data";
import { theme } from "../utilities/theme";

const COLOR_ONHOVER = "hsl(10 79% 65% / 70%)";
const COLOR_DEFAULT = "hsl(10 79% 65%)";
const COLOR_TODAY = "hsl(186 34% 60%)";
const COLOR_TODAY_ONHOVER = "hsl(186 34% 60% / 70%)";

const today = new Date()
  .toLocaleString("en-us", { weekday: "short" })
  .toLowerCase();

const Chart = () => {
  return (
    <div className="chart-container">
      <h1 className="text-left font-bold">Spending - Last 7 days</h1>
      <div className="chart">
        <VictoryChart
          domainPadding={15}
          theme={theme}
          animate={{
            duration: 500,
            onLoad: { duration: 200 },
          }}
        >
          <VictoryAxis tickValues={data.map((d) => d.day)} />
          <VictoryBar
            style={{
              data: {
                fill: ({ datum }) =>
                  datum.day === today ? COLOR_TODAY : COLOR_DEFAULT,
              },
              labels: { fill: "white" },
            }}
            cornerRadius={{ top: 3, bottom: 3 }}
            barWidth={32}
            data={data}
            x={"day"}
            y={"amount"}
            labels={(d) => [d.y]}
            labelComponent={
              <VictoryTooltip
                constrainToVisibleArea
                flyoutHeight={20}
                flyoutWidth={40}
              />
            }
            events={[
              {
                eventHandlers: {
                  onMouseEnter: () => {
                    return [
                      {
                        eventKey: "all",
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: ({ datum }) =>
                              datum.day === today ? COLOR_TODAY : COLOR_DEFAULT,
                          },
                        }),
                      },
                      {
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: ({ datum }) =>
                              datum.day === today
                                ? COLOR_TODAY_ONHOVER
                                : COLOR_ONHOVER,
                          },
                        }),
                      },
                    ];
                  },
                  onMouseLeave: () => {
                    return [
                      {
                        eventKey: "all",
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: ({ datum }) =>
                              datum.day === today ? COLOR_TODAY : COLOR_DEFAULT,
                          },
                        }),
                      },
                      {
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: ({ datum }) =>
                              datum.day === today ? COLOR_TODAY : COLOR_DEFAULT,
                          },
                        }),
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </VictoryChart>
      </div>
      <hr className="opacity-10" />

      <footer>
        <div className="text-left">
          <p id="total">Total this month</p>
          <span className="font-bold total">$227.77</span>
        </div>
        <div className="text-right ">
          <p className="font-bold mb-1">+2.4%</p>
          <span>from last month</span>
        </div>
      </footer>
    </div>
  );
};

export default Chart;
