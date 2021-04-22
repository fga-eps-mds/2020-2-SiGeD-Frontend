import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, CartesianGrid, XAxis, Bar, YAxis,
} from 'recharts';
import { getDemandsStatistics } from '../../Services/Axios/demandsServices';
import {
  Main, Title, Container, Card, CardTitle, TopDiv, MiddleDiv, BottomDiv, FiltersDiv, DropdownDiv,
  BoldText, SearchDiv, TextLabel, DateInput,
} from './Style';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';
import { getSectors } from '../../Services/Axios/sectorServices';

const StatisticScreen = () => {
  const [sectors, setSectors] = useState([]);
  const [pageState, setPageState] = useState(true);
  const [demands, setDemands] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  // const [finalDate, setFinalDate] = useState(new Date());
  const [sector, setSector] = useState('');

  const getSectorsFromApi = async () => {
    await getSectors()
      .then((response) => {
        console.log(response.data);
        setSectors(response.data);
      });
  };

  const getStatistics = async () => {
    await getDemandsStatistics('statistic/category')
      .then((response) => setDemands(response?.data));
  };

  useEffect(() => {
    getStatistics();
    getSectorsFromApi();
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
            <SearchDiv style={{ justifyContent: 'flex-start' }}>
              <DropdownDiv>
                <TextLabel>
                  Setor:
                </TextLabel>
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
                  optionList={sectors.map((sectorx) => sectorx.name)}
                />
              </DropdownDiv>
              <DropdownDiv>
                <TextLabel>
                  Categoria:
                </TextLabel>
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
            </SearchDiv>
            <SearchDiv>
              <DropdownDiv
                style={{ width: '40%' }}
              >
                <TextLabel>
                  Data de Inicio:
                </TextLabel>
                <DateInput
                  type="date"
                />
              </DropdownDiv>
              <DropdownDiv
                style={{ width: '40' }}
              >
                <TextLabel>
                  Data final:
                </TextLabel>
                <DateInput
                  type="date"
                />
              </DropdownDiv>
            </SearchDiv>
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
                  {demands?.map((entry, index) => (
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
