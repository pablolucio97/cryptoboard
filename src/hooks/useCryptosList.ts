import { useQuery, UseQueryOptions } from "react-query";

export  const fetchCryptos = async () => {
  const headers = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await fetch("https://coinranking1.p.rapidapi.com/coins", {
    headers,
  });
  const data = await response.json();
  const { coins } = data.data;

  const returnedCoins = coins.map((coin) => {
    return {
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      price: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: coin.price >= 1 ? 2 : 6,
      }).format(coin.price),
      circulatingSupply: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      }).format(coin.circulatingSupply),
      volume: coin.volume,
      iconUrl: coin.iconUrl,
      rank: coin.rank,
      history: coin.history,
      marketCap: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(coin.marketCap),
    };
  });

  return returnedCoins;
}

export function useCryptosList(options?: UseQueryOptions) {
  return useQuery("cryptos-list", () => fetchCryptos(), { ...options });
}
