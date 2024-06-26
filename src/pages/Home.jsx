import { useEffect, useState } from "react";
import axiosInstance from "../api/api";
import { useNavigate } from 'react-router-dom';
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [coins, setCoins] = useState({ isLoading: true, data: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get(`coins/markets?vs_currency=usd`);
        setCoins({
          isLoading: false,
          data: response.data
        })
      } catch (error) {
        console.log(error)
        setCoins({ isLoading: false, error: error.message, data: [] })
      }
    };
    getData();
  }, [])

  const displayLoading = coins.isLoading;
  const displayError = Boolean(!coins.isLoading && coins.error);
  const displayUnavailable = Boolean(!coins.isLoading && !coins.error && !coins?.data.length);

  return (
    <div>
      <h2 className="my-4 font-semibold text-lg">Dashboard</h2>
      <div className="overflow-x-auto border rounded-md border-light-gray py-2 sm:px-6 lg:px-8">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b border-light-gray py-4">
            <tr>
              <th className="py-4 font-semibold"></th>
              <th className="py-4 font-semibold">Name</th>
              <th className="py-4 font-semibold">Current Price</th>
              <th className="py-4 font-semibold">Market Cap</th>
              <th className="py-4 font-semibold">24h Percentage Change</th>
            </tr>
          </thead>
          <tbody>
            {coins?.data?.map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-light-gray hover:bg-table-head cursor-pointer"
                onClick={() => navigate(`/${coin.id}`, { state: { data: coin }})}
              >
                <td className="px-2 sm:px-6 py-4">
                  <div className="w-10 h-auto">
                    <img src={coin.image} alt="logo"/>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col gap-y-2">
                    <p>{coin.name}</p>
                    <p className="text-dark-gray">{coin.symbol?.toUpperCase()}</p>
                  </div>
                </td>
                <td>{`$ ${coin.current_price.toLocaleString()}`}</td>
                <td>{`$ ${coin.market_cap.toLocaleString()}`}</td>
                <td>
                  <p className={coin.price_change_percentage_24h < 0
                    ? "text-error" : "font-normal"}
                  >
                    {coin.price_change_percentage_24h}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {displayUnavailable && (
          <p>Coins not available</p>
        )}
        {displayLoading && (
          <Skeleton />
        )}
        {displayError && (
          <p>{coins.error}</p>
        )}
      </div>
    </div>
  )
}

export default Home;