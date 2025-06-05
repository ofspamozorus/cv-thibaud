import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SkillProgressChart = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-border rounded-interactive p-3 shadow-card">
          <p className="text-sm font-medium text-primary mb-2">{`Année ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs text-text-secondary">
              <span className="font-medium" style={{ color: entry.color }}>
                {entry.name}:
              </span>
              {` ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const skillColors = {
    googleAds: '#4285F4',
    metaAds: '#1877F2',
    tiktokAds: '#FF0050',
    analytics: '#FF6B35',
    strategy: '#34A853'
  };

  const skillLabels = {
    googleAds: 'Google Ads',
    metaAds: 'Meta Ads',
    tiktokAds: 'TikTok Ads',
    analytics: 'Analytics',
    strategy: 'Stratégie'
  };

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis 
            dataKey="year" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'var(--color-text-secondary)' }}
          />
          <YAxis 
            domain={[0, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'var(--color-text-secondary)' }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '12px' }}
            formatter={(value) => skillLabels[value] || value}
          />
          
          {Object.keys(skillColors).map((skill) => (
            <Line
              key={skill}
              type="monotone"
              dataKey={skill}
              stroke={skillColors[skill]}
              strokeWidth={2}
              dot={{ fill: skillColors[skill], strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: skillColors[skill], strokeWidth: 2 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillProgressChart;