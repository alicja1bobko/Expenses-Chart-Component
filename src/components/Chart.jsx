import {
  VictoryBar,
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
import { data } from "../utilities/data";
import { theme } from "../utilities/theme";

const COLOR_DEFAULT = "hsl(10 79% 65% / 70%)";
const COLOR_NOTHOVER = "hsl(10 79% 65%)";

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
          {/* <VictoryAxis dependentAxis /> */}
          <VictoryBar
            style={{
              data: { fill: "hsl(10 79% 65%)" },
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
                            fill: COLOR_NOTHOVER,
                          },
                        }),
                      },
                      {
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: COLOR_DEFAULT,
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
                            fill: COLOR_NOTHOVER,
                          },
                        }),
                      },
                      {
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: COLOR_NOTHOVER,
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
          <span className="font-bold total">$478.33</span>
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
