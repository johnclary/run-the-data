import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { COLORS } from "./Categories";

import * as d3Array from "d3-array";
import * as d3Format from "d3-format";

const tooltipValueFormatter = (value, name, props) => [
  d3Format.format("$.2s")(value),
  name + ": ",
];

const tooltipLabelFormatter = (d) => {
  return parseInt(d);
};

const yAxisTickFormatter = (d) => {
  return d3Format.format("$.2s")(d);
};

const xAxisTickFormatter = (d) => {
  return parseInt(d);
};

function yDomain(data) {
  const yMin = d3Array.min(data, (d) => parseInt(d.total));
  const yMax = d3Array.max(data, (d) => parseInt(d.total));
  return [yMin, yMax];
}

function renderLine(category, index) {
  return (
    <Line
      isAnimationActive={false}
      type="monotone"
      dataKey={category.name}
      key={category.name}
      stroke={COLORS[index]}
      strokeWidth={1.5}
    />
  );
}

function mapDataByYear(data) {
  let years = {};
  data.forEach((point) => {
    let year;
    if (years[point.cal_year] === undefined) {
      year = { cal_year: point.cal_year };
      years[point.cal_year] = year;
    } else {
      year = years[point.cal_year];
    }
    year[point.category] = point.total;
  });
  return years;
}

function MakeChart(props) {
  const { data, categories } = props;
  const years = mapDataByYear(data);
  return (
    <div className="bg-light mb-2 row">
      <div className="col">
        <div className="justify-content-between row">
          <div className="col">
            <h6 className="text-left">
              <p className="text-reset" style={{paddingTop: '10px'}}>All Categories</p>
            </h6>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={700}>
        <LineChart width={500} height={600} data={Object.values(years)}>
          <Legend verticalAlign="bottom" height={48} />
          <XAxis dataKey="cal_year" tickFormatter={xAxisTickFormatter} />
          <YAxis domain={yDomain(data)} tickFormatter={yAxisTickFormatter} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {categories.map((category, index) => renderLine(category, index))}
          <Tooltip
            formatter={tooltipValueFormatter}
            labelFormatter={tooltipLabelFormatter}
            separator=""
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function Combined(props) {
  return <MakeChart {...props} />;
}
