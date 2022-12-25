import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const colors = {
  Redux: '#A23E48',
  React: '#00ff00',
  Node: '#0000ff',
  Meteor: '#8D6A9F',
  Graphql: '#F7F0F0',
  Apollo: '#F24333',
  Jitsi: '#F19C79',
  BPMN: '#C6CA53',
  Emotion: '#662C91',
  Typescript: '#00ffff',
  Nextjs: '#fff',
  Prisma: '#008080',
  Postgresql: '#6699CC',
  Mongodb: '#008000',
  AWS: '#EB5E28',
};

const SkillLineDiagram = ({ data }) => {
  const [hoveredKey, setHoveredKey] = useState(null);

  const normalisedDataForLine = data.map((skill) => ({
    name: skill.name,
    ...skill.competence,
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={normalisedDataForLine}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ padding: '1rem' }}
          onMouseEnter={(event) => {
            setHoveredKey(event.value);
          }}
          onMouseLeave={() => {
            setHoveredKey(null);
          }}
        />
        {Object.keys(data[0].competence).map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[key]}
            strokeOpacity={hoveredKey === key ? 1 : 0.5}
            activeDot={{ r: hoveredKey === key ? 8 : 1 }}
            strokeWidth={hoveredKey === key ? 4 : 2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SkillLineDiagram;
