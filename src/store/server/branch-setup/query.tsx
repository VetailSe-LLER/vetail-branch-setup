import { authJsonHeader, axios } from "@/api";
import { useQuery } from "@tanstack/react-query";

const branchList = async (
  id: number
): Promise<{ branchInfo: SelectedBranchList[] }> => {
  const { data } = await axios.get(`auth/GetBranchList?ShopId=${id}`, {
    headers: authJsonHeader(),
  });
  return data;
};

export const useBranchList = (id: number) => {
  return useQuery({
    queryKey: ["branch-list"],
    queryFn: () => branchList(id),
  });
};
