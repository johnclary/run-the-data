import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import * as d3Array from "d3-array";
import * as d3Format from "d3-format";

const tooltipValueFormatter = (value, name, props) => [
  d3Format.format("$.2s")(value),
  "",
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

function MakeChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="cal_year" tickFormatter={xAxisTickFormatter} />
        <YAxis domain={yDomain(data)} tickFormatter={yAxisTickFormatter} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          isAnimationActive={false}
          type="monotone"
          dataKey="total"
          stroke="#d400a6"
          strokeWidth={1.5}
        />
        <Tooltip
          formatter={tooltipValueFormatter}
          labelFormatter={tooltipLabelFormatter}
          separator=""
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function CategoryByYear({ data }) {
  return <MakeChart data={data} />;
}
