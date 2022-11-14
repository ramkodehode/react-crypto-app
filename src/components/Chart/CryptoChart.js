import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoChart = ({ coin }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const url =
    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1825';

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
      allButtonsEnabled: true,
      buttons: [
        {
          type: 'year',
          count: 1,
          text: '1Y',
          title: 'view 3 years',
        },
        {
          type: 'year',
          count: 3,
          text: '3Y',
          title: 'view 3 years',
        },
        {
          type: 'year',
          count: 5,
          text: '5Y',
          title: 'view 5 years',
        },
        {
          type: 'all',
          text: 'MAX',
          title: 'View all',
        },
      ],
    },
    title: {
      text: 'Crypto Stock Chart',
    },

    series: [
      {
        data: coins.prices,
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
