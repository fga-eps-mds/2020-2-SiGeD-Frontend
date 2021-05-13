import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, CartesianGrid, XAxis, Bar, YAxis,
} from 'recharts';
import moment from 'moment';
import { getDemandsStatistics, getCategories } from '../../Services/Axios/demandsServices';
import {
  Main, Title, Container, Card, CardTitle, TopDiv, MiddleDiv, FiltersDiv, DropdownDiv,
  SearchDiv, TextLabel, DateInput, styles,
} from './Style';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';
import { getSectors } from '../../Services/Axios/sectorServices';
import { useProfileUser } from '../../Context';

const StatisticScreen = () => {
  const { token, user, startModal } = useProfileUser();
  const [sectors, setSectors] = useState(['Todos']);
  const [loading, setLoading] = useState(true);
  const [sectorActive, setSectorActive] = useState('Todos');
  const [sectorID, setSectorID] = useState('');
  const [categoryStatistics, setCategoryStatistics] = useState([]);
  const [sectorGraphData, setSectorGraphData] = useState([]);
  const [categories, setCategories] = useState(['Todas']);
  const [categoryActive, setCategoryActive] = useState('Todas');
  const [categoryID, setCategoryID] = useState('');
  const [initialDate, setInitialDate] = useState(moment('2021-01-01').format('YYYY-MM-DD'));
  const [finalDate, setFinalDate] = useState(moment().format('YYYY-MM-DD'));

  const getSectorsFromApi = async () => {
    await getSectors(startModal)
      .then((response) => {
        setSectors([...sectors, ...response.data]);
        setLoading(false);
      });
  };

  const getCategoriesFromApi = async () => {
    await getCategories('category', startModal)
      .then((response) => {
        setCategories([...categories, ...response.data]);
      })
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting categories.${error}`);
      });
  };

  useEffect(() => {
    if (sectorActive !== 'Todos') {
      const results = sectors.find((element) => element.name === sectorActive);
      setSectorID(results._id);
    } else {
      setSectorID(null);
    }
  }, [sectorActive]);

  useEffect(() => {
    if (categoryActive !== 'Todas') {
      const results = categories.find((element) => element.name === categoryActive);
      setCategoryID(results._id);
    } else {
      setCategoryID(null);
    }
  }, [categoryActive]);

  const getCategoriesStatistics = async (idSector, idCategory) => {
    await getDemandsStatistics(
      `statistic/category?idSector=${idSector}&idCategory=${idCategory}&initialDate=${initialDate}&finalDate=${finalDate}`,
      startModal,
    )
      .then((response) => {
        setCategoryStatistics(response?.data);
      });
  };

  const getSectorStatistics = async (idCategory) => {
    await getDemandsStatistics(
      `statistic/sector?idCategory=${idCategory}&initialDate=${initialDate}&finalDate=${finalDate}`,
      startModal,
    )
      .then((response) => {
        const sectorGraph = [];
        response.data?.map((item) => {
          sectors.map((sector) => {
            if (item._id === sector?._id) {
              const data = {
                _id: sector._id,
                name: sector.name,
                total: item.total,
              };
              sectorGraph.push(data);
            }
            return true;
          });
          return true;
        });
        setSectorGraphData(sectorGraph);
      });
  };

  useEffect(() => {
    if (user && token) {
      getSectorsFromApi();
      getCategoriesFromApi();
      getCategoriesStatistics(null, null);
      getSectorStatistics(null);
    }
  }, [token, user]);

  useEffect(() => {
    getSectorStatistics(null);
  }, [loading]);

  useEffect(() => {
    getCategoriesStatistics(sectorID);
  }, [sectorID, finalDate, initialDate]);

  useEffect(() => {
    getSectorStatistics(categoryID);
    getCategoriesStatistics(sectorID, categoryID);
  }, [categoryID, finalDate, initialDate]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Main>
      { user ? (
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
                    OnChangeFunction={(Option) => setSectorActive(Option.target.value)}
                    style={styles.dropdownComponentStyle}
                    optionStyle={{
                      backgroundColor: `${colors.secondary}`,
                    }}
                    optionList={sectors?.map(
                      (sectorx) => (sectorx.name ? sectorx.name : sectorx),
                    )}
                  />
                </DropdownDiv>
                <DropdownDiv>
                  <TextLabel>
                    Categoria:
                  </TextLabel>
                  <DropdownComponent
                    OnChangeFunction={(Option) => setCategoryActive(Option.target.value)}
                    style={styles.dropdownComponentStyle}
                    optionStyle={{
                      backgroundColor: `${colors.secondary}`,
                    }}
                    optionList={categories?.map(
                      (categoryx) => (categoryx.name ? categoryx.name : categoryx),
                    )}
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
                    value={initialDate}
                    onChange={(e) => setInitialDate(e.target.value)}
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
                    value={finalDate}
                    onChange={(e) => setFinalDate(e.target.value)}
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
                    data={sectorGraphData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="total"
                    label
                  >
                    {sectorGraphData.map((entry, index) => (
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
                  data={categoryStatistics}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 2,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="categories[0].name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="demandas">
                    {categoryStatistics?.map((entry, index) => (
                      <Cell key={index} fill={entry?.categories[0]?.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </MiddleDiv>
        </Container>
      ) : <h1>Carregando...</h1> }
    </Main>
  );
};

export default StatisticScreen;
