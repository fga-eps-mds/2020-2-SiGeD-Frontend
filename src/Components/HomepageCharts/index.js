import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, CartesianGrid, XAxis, Bar, YAxis,
} from 'recharts';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { getDemandsStatistics, getCategories } from '../../Services/Axios/demandsServices';
import {
  Main, Card, ChartsDiv, Container, Title, Icon, TopSide,
} from './Style';
import { getSectors } from '../../Services/Axios/sectorServices';
import { useProfileUser } from '../../Context';

const HomepageCharts = () => {
  const { token, user, startModal } = useProfileUser();
  const [sectors, setSectors] = useState(['Todos']);
  const [loading, setLoading] = useState(true);
  const [categoryStatistics, setCategoryStatistics] = useState([]);
  const [sectorGraphData, setSectorGraphData] = useState([]);
  const [categories, setCategories] = useState(['Todas']);
  const initialDate = (moment('2000-01-01').format('YYYY-MM-DD'));
  const finalDate = (moment().format('YYYY-MM-DD'));
  const history = useHistory();

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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Main>
      { user ? (
        <Container>
          <TopSide>
            <Title>
              Estatísticas
            </Title>
            <Icon
              onClick={() => history.push('/estatisticas')}
            />
          </TopSide>
          <ChartsDiv>
            <Card>
              <ResponsiveContainer width="100%" height="80%">
                <PieChart width="100%" height="100%">
                  <Pie
                    data={sectorGraphData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    fill="#8884d8"
                    dataKey="total"
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
                      <Cell key={index} fill={entry.categories[0].color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </ChartsDiv>
        </Container>
      ) : <h1>Carregando...</h1> }
    </Main>
  );
};

export default HomepageCharts;
