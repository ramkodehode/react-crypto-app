import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoChart = ({ coin }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const url =
    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365';

  const getData = async () => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  };

  console.log('coins', coins);

  useEffect(() => {
    getData();
  }, []);

  const options = {
    rangeSelector: {
      buttons: [
        {
          type: 'year',
          count: 1,
          text: '3Y',
          title: 'view',
        },
        {
          type: 'year',
          count: 1,
          text: '5Y',
          title: 'view',
        },
        {
          type: 'year',
          count: 1,
          text: 'MAX',
          title: 'view',
        },
      ],
    },
    title: {
      text: 'Crypto Stock Chart',
    },

    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  );
};

export default CryptoChart;
