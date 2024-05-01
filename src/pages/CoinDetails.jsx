import { useState, useEffect } from 'react';
import { Link as RouterLink, useParams, useLocation } from 'react-router-dom';
import axiosInstance from '../api/api';
import Skeleton from '../components/Skeleton';

const CoinDetails = () => {
  const [coinInfo, setCoinInfo] = useState({ isLoading: true, data: {} });
  const params = useParams();
  const location = useLocation();
  const coinData = location.state;

  useEffect(() => {
    const getData = async() => {
      try {
        const response = await axiosInstance.get(`coins/${params.id}`);
        console.log('response', response.data);
        setCoinInfo({
          isLoading: false,
          data: response.data
        })
      } catch (error) {
        console.log(error);
        setCoinInfo({
          isLoading: false,
          error: error.message,
          data: {}
        })
      }
    };
    getData();
  }, [])

  const displayLoading = coinInfo.isLoading;
  const displayError = Boolean(!coinInfo.isLoading && coinInfo.error);
  return (
    <div className='w-full'>
      <p className='my-4'><RouterLink to="/" className='hover:text-primary'>Back to all cryptocurrencies</RouterLink></p>
      <div className='min-w-full border rounded-md border-light-gray py-2 sm:py-4 px-2 sm:px-6'>
        <div>
          <div className="flex gap-x-4 items-center mb-4">
            <img src={coinInfo.data?.image?.small} alt="logo"/>
            <p>{coinInfo.data?.name}</p>
            <p className="text-dark-gray">{coinInfo.data?.symbol?.toUpperCase()}</p>
          </div>
          {/* <hr className="my-6 h-0.5 border-t-0 bg-light-gray"/> */}
          <div className='flex flex-col gap-y-2'>
            <p className='font-medium'>Current price:
              <span className='font-normal'>
                {` $ ${coinData?.data?.current_price.toLocaleString()}`}
              </span>
            </p>
            <p className='font-medium'>Market Cap:
              <span className='font-normal'>
                {` $ ${coinData?.data?.market_cap.toLocaleString().toLocaleString()}`}
              </span>
            </p>
            <p className='font-medium'>24-hour percentage change:
              <span className={coinInfo?.data?.market_data?.price_change_percentage_24h < 0
                    ? "text-error" : "font-normal"}>
                {coinInfo?.data?.market_data?.price_change_percentage_24h.toLocaleString()}
              </span>
            </p>
          </div>
          <hr className="my-6 h-0.5 border-t-0 bg-light-gray"/>
          <div>
            <p className='font-medium'>Website:
              <span className='font-normal'>
                <a href={coinInfo?.data?.links?.homepage[0]} className='hover:text-primary'> {coinInfo?.data?.links?.homepage[0]}</a>
              </span>
            </p>
            <p className='font-medium'>Description: <span className='font-normal'>{coinInfo.data?.description?.en}</span></p>
          </div>
        </div>
        {displayLoading && (
          <Skeleton />
        )}
        {displayError && (
          <p>{coinInfo.error}</p>
        )}
      </div>
    </div>
  )
}

export default CoinDetails