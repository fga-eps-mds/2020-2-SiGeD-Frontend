import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, CartesianGrid, XAxis, Bar, YAxis,
} from 'recharts';
import {
  Main, Title, Container, Card, CardTitle,
} from './Style';

const StatisticScreen = () => {
  const data = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 100 },
    { name: 'Group C', value: 100 },
    { name: 'Group D', value: 100 },
    { name: 'Group E', value: 100 },
    { name: 'Group F', value: 100 },
    { name: 'Group G', value: 100 },
    { name: 'Group H', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const dataBar = [
    {
      name: 'Page A',
      uv: 4000,
      demandas: 2400,
      amt: 2400,
      color: '#0088FE',
    },
    {
      name: 'Page B',
      uv: 3000,
      demandas: 1398,
      amt: 2210,
      color: '#00C49F',
    },
    {
      name: 'Page C',
      uv: 2000,
      demandas: 9800,
      amt: 2290,
      color: '#FFBB28',
    },
    {
      name: 'Page D',
      uv: 2780,
      demandas: 3908,
      amt: 2000,
      color: '#FF8042',
    },
    {
      name: 'Page E',
      uv: 1890,
      demandas: 4800,
      amt: 2181,
      color: '#0088FE',
    },
    {
      name: 'Page F',
      uv: 2390,
      demandas: 3800,
      amt: 2500,
      color: '#00C49F',
    },
    {
      name: 'Page G',
      uv: 3490,
      demandas: 4300,
      amt: 2100,
      color: '#FFBB28',
    },
  ];

  return (
    <Main>
      <Container>
        <Title>Estatísticas</Title>
        <div
          style={{
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', height: '100%',
          }}
        >
          <Card>
            <CardTitle>Demandas por setor</CardTitle>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                data={dataBar}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="demandas">
                  {dataBar.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <Card>
            <CardTitle>Demandas por categoria</CardTitle>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart width={400} height={300}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </Container>
    </Main>
  );
};

export default StatisticScreen;
