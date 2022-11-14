import { CoinList } from '../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, CoinInput } from './StyledCryptoTable';

const CryptoTable = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getCoinData = () => {
    axios
      .get(CoinList('usd'))
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getCoinData();
  }, []);

  {
  }
  return (
    <>
      <Form>
        <CoinInput
          onChange={handleChange}
          type={'text'}
          placeholder={'Search'}
        ></CoinInput>
      </Form>

      {filteredCoins.map((coin) => {
        return coin.name;
      })}
    </>
  );
};

export default CryptoTable;
