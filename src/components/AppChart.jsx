import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AppChart = ({ data }) => {
  // Calculate total reviews
  const totalReviews = data.reduce((acc, rating) => acc + rating.count, 0);

  // Transform data to include percentage for visualization
  const chartData = data
    .map((item) => ({
      name: item.name, // e.g., "5 star"
      Reviews: item.count,
      Percentage: totalReviews > 0 ? (item.count / totalReviews) * 100 : 0,
    }))
    // Reverse the order to show 5-star at the top (5, 4, 3, 2, 1)
    .reverse();

  // Custom Tick for YAxis to show the full label ("X star") next to the bar
  const CustomYAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        {/* Draw the full star rating label */}
        <text 
          x={-5} // Move text closer to the bar (negative value moves left)
          y={0} 
          dy={5} // Center vertically
          textAnchor="end" 
          fill="#444144ff" // Tailwind gray-700
          fontSize={14} 
          fontWeight="bold"
        >
          {payload.value}
        </text>
      </g>
    );
  };
  
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          barCategoryGap="25%" 
          margin={{ top: 10, right: 30, left: 40, bottom: 5 }} // Increased left margin to fit "X star" label
        >
          {/* Hide X-axis as it represents percentage (0 to 100%) */}
          <XAxis 
            type="number" 
            domain={[0, 100]} // Fixed domain for 100% chart
            hide={true} 
          />
          
          {/* Y-axis uses the star name and a custom tick to position the full label */}
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            width={70} // Adjusted width for full label
            tick={CustomYAxisTick}
          />
          
          <Tooltip 
            formatter={(value, name, props) => [`${props.payload.Reviews.toLocaleString()} reviews`, 'Count']} 
          />
          
          {/* 1. Background Bar (The full line behind the colored bar) */}
          <Bar 
            dataKey="max" 
            fill="#ebe9e5ff" // Tailwind gray-200
            isAnimationActive={false} 
            barSize={10}
            // Add a constant value of 100 to the data so the background bar always exists
            data={chartData.map(d => ({ ...d, max: 100 }))}
          />

          {/* 2. Foreground Bar (The actual percentage) */}
          <Bar 
            dataKey="Percentage" 
            fill="#f7a90dff" // Use the primary indigo color
            isAnimationActive={true}
            barSize={10}
            data={chartData}
            
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppChart;