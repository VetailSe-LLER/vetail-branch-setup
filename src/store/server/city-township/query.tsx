import { authJsonHeader, axios } from "@/api";
import { useQuery } from "@tanstack/react-query";

const city = async () => {
  const { data } = await axios.get(
    `https://mysterious.shopdoora.com/vetaildelivery/api/VetailDelivery/GetCity`,
    {
      headers: authJsonHeader(),
    }
  );
  return data;
};

export const useCity = () => {
  return useQuery({
    queryKey: ["city"],
    queryFn: () => city(),
  });
};

export const township = async (id: string) => {
  const { data } = await axios.get(
    `https://mysterious.shopdoora.com/vetaildelivery/api/VetailDelivery/GetTownship?CityId=${id}`,
    {
      headers: authJsonHeader(),
    }
  );
  return data;
};
