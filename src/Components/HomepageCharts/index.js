import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, CartesianGrid, XAxis, Bar, YAxis,
} from 'recharts';
import moment from 'moment';
import { getDemandsStatistics, getCategories } from '../../Services/Axios/demandsServices';
import {
  Main, Card, ChartsDiv, Container,
} from './Style';
import { getSectors } from '../../Services/Axios/sectorServices';
import { useProfileUser } from '../../Context';

const HomepageCharts = () => {
  const { token, user, startModal } = useProfileUser();
  const [sectors, setSectors] = useState(['Todos']);
  const [loading, setLoading] = useState(true);
  const [categoryStatistics, setCategoryStatistics] = useState([]);
  const [sectorChartData, setSectorChartData] = useState([]);
  const [categories, setCategories] = useState(['Todas']);
  const initialDate = (moment('2000-01-01').format('YYYY-MM-DD'));
  const finalDate = (moment().format('YYYY-MM-DD'));

  const getSectorsApi = async () => {
    await getSectors(startModal)
      .then((response) => {
        setSectors([...sectors, ...response.data]);
        setLoading(false);
      });
  };

  const getCategoriesApi = async () => {
    await getCategories('category', startModal)
      .then((response) => {
        setCategories([...categories, ...response.data]);
      })
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting categories.${error}`);
      });
  };

  const getStatisticsCategories = async (idSector, idCategory) => {
    await getDemandsStatistics(
      `statistic/category?idSector=${idSector}&idCategory=${idCategory}&initialDate=${initialDate}&finalDate=${finalDate}`,
      startModal,
    )
      .then((response) => {
        setCategoryStatistics(response?.data);
      });
  };

  const getStatisticsSectors = async (idCategory) => {
    await getDemandsStatistics(
      `statistic/sector?idCategory=${idCategory}&initialDate=${initialDate}&finalDate=${finalDate}`,
      startModal,
    )
      .then((response) => {
        const sectorChart = [];
        response.data?.map((item) => {
          sectors.map((sector) => {
            if (item._id === sector?._id) {
              const data = {
                _id: sector._id,
                name: sector.name,
                total: item.total,
              };
              sectorChart.push(data);
            }
            return true;
          });
          return true;
        });
        setSectorChartData(sectorChart);
      });
  };

  useEffect(() => {
    if (user && token) {
      getSectorsApi();
      getCategoriesApi();
      getStatisticsCategories(null, null);
      getStatisticsSectors(null);
    }
  }, [token, user]);

  useEffect(() => {
    getStatisticsSectors(null);
  }, [loading]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Main>
      { user ? (
        <Container>
          <ChartsDiv>
            <Card>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart width="100%" height="100%">
                  <Pie
                    data={sectorChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    fill="#8884d8"
                    dataKey="total"
                  >
                    {sectorChartData.map((entry, index) => (
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
                      <Cell key={index} fill={entry?.categories[0]?.color} />
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
