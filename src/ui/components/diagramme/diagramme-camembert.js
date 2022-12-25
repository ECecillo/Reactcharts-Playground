import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function SkillPieChart({ data }) {
  const normalizedDataPieChart = Object.entries(data[0].competence).map(
    ([name, value]) => ({
      name,
      value,
    }),
  );
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie data={normalizedDataPieChart} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default SkillPieChart;
