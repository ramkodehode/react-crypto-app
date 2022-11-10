import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const CryptoChart = ({ coin }) => {
  const fetchData = () => {
    axios.get();
  };

  const options = {
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
