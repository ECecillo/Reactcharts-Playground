import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SkillsBarChart({ data }) {
  const normalisedDataForBar = data.reduce((result, skill) => {
    Object.entries(skill.competence).forEach(([name, value]) => {
      if (!result.find((r) => r.name === name)) {
        result.push({ name });
      }
      result.find((r) => r.name === name)[skill.name] = value;
    });
    return result;
  }, []);


  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={normalisedDataForBar} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.map((skill) => (
          <Bar key={skill.name} dataKey={skill.name} fill="#8884d8" />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SkillsBarChart;
