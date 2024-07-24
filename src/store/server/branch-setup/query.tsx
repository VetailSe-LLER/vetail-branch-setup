import { authJsonHeader, axios } from "@/api";
import { useQuery } from "@tanstack/react-query";

// main branch

const mainBranchList = async (id: number) => {
  const { data } = await axios.get(`auth/GetShopInfobyId?id=${id}`, {
    headers: authJsonHeader(),
  });
  return data;
};

export const useMainBranchList = (id: number) => {
  return useQuery({
    queryKey: ["main-branch-list", id],
    queryFn: () => mainBranchList(id),
  });
};

// sub branch
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
    queryKey: ["branch-list", id],
    queryFn: () => branchList(id),
  });
};
