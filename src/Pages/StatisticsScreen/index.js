import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, CartesianGrid, XAxis, Bar, YAxis,
} from 'recharts';
import { getDemandsStatistics } from '../../Services/Axios/demandsServices';
import {
  Main, Title, Container, Card, CardTitle, TopDiv, MiddleDiv, BottomDiv, FiltersDiv, DropdownDiv,
  BoldText, DataDiv, TextDiv,
} from './Style';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';

const StatisticScreen = () => {
  const [sector, setSector] = useState('');
  const [pageState, setPageState] = useState(true);
  const [demands, setDemands] = useState([]);

  const getStatistics = async () => {
    await getDemandsStatistics('statistic')
      .then((response) => setDemands(response.data));
  };

  useEffect(() => {
    getStatistics();
  }, []);

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

  return (
    <Main>
      <Container>
        <TopDiv>
          <Title>Estatísticas</Title>
          <FiltersDiv>
            <DropdownDiv>
              <TextDiv>
                Categoria:
              </TextDiv>
              <DropdownComponent
                style={{
                  display: 'flex',
                  color: `${colors.text}`,
                  width: '100%',
                  height: '40px',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  border: '1px solid black',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}
                optionStyle={{
                  backgroundColor: `${colors.secondary}`,
                }}
                optionList={['Geral', 'InGeral']}
              />
            </DropdownDiv>
            <DropdownDiv>
              <TextDiv>
                Categoria:
              </TextDiv>
              <DropdownComponent
                OnChangeFunction={(Option) => {
                  setSector(Option.target.value); setPageState(!pageState);
                }}
                style={{
                  display: 'flex',
                  color: `${colors.text}`,
                  width: '100%',
                  height: '40px',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  border: '1px solid black',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}
                optionStyle={{
                  backgroundColor: `${colors.secondary}`,
                }}
                optionList={['Geral', 'InGeral']}
              />
            </DropdownDiv>
            <DataDiv>
              <DropdownDiv>
                <TextDiv>
                  Data de Inicio:
                </TextDiv>
                <DropdownComponent
                  style={{
                    display: 'flex',
                    color: `${colors.text}`,
                    width: '100%',
                    height: '40px',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    borderRadius: '8px',
                    border: '1px solid black',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                  }}
                  optionStyle={{
                    backgroundColor: `${colors.secondary}`,
                  }}
                  optionList={['Geral', 'InGeral']}
                />
              </DropdownDiv>
              <DropdownDiv>
                <TextDiv>
                  Data final:
                </TextDiv>
                <DropdownComponent
                  style={{
                    display: 'flex',
                    color: `${colors.text}`,
                    width: '100%',
                    height: '40px',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    borderRadius: '8px',
                    border: '1px solid black',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                  }}
                  optionStyle={{
                    backgroundColor: `${colors.secondary}`,
                  }}
                  optionList={['Geral', 'InGeral']}
                />
              </DropdownDiv>
            </DataDiv>
          </FiltersDiv>
        </TopDiv>
        <MiddleDiv>
          <Card>
            <CardTitle>Demandas por setor</CardTitle>
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
          <Card>
            <CardTitle>Demandas por categoria</CardTitle>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                data={demands}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="categorires[0].name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count">
                  {demands.map((entry, index) => (
                    <Cell key={index} fill={entry.categorires[0].color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </MiddleDiv>
        <BottomDiv>
          <BoldText>
            Total de demands filtradas: 5.956
            {sector}
          </BoldText>
        </BottomDiv>
      </Container>
    </Main>
  );
};

export default StatisticScreen;
