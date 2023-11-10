import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredPost } from "../../Utility/utility";
import { useEffect, useState } from "react";

const Statistics = () => {
  const posts = useLoaderData();
  const [storeId, setStoreId] = useState([]);
  useEffect(() => {
    setStoreId(getStoredPost());
  }, []);

  const data = [
    { name: "Group A", value: posts.length - storeId.length },
    { name: "Group B", value: storeId.length },
  ];
  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={"middle"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div className="min-h-[768px] flex flex-col justify-center items-center conatiner mx-auto px-5 lg:px-0">
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-14">
        <div>
          <h3 className="text-[#0B0B0B] text-lg">
            Your Donation
            <span className="h-3 w-10 bg-[#00C49F] rounded-sm inline-block ms-2"></span>
          </h3>
        </div>
        <div>
          <h3 className="text-[#0B0B0B] text-lg">
            Total Donation
            <span className="h-3 w-10 bg-[#FF444A] rounded-sm inline-block ms-2"></span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
