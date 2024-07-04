import { authJsonHeader, axios } from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface payloadProp {
  shopId: number;
  branchName: string;
  phoneNo: string;
  email: string | undefined;
  cityId: number;
  townshipId: number;
  address: string;
  isEcommerce: boolean;
  landMark: string | undefined;
}

// sub branch
const createBranch = async (payload: payloadProp) => {
  const { data } = await axios.post("auth/CreateBranch", payload, {
    headers: authJsonHeader(),
  });
  return data;
};

export const useCreateBranch = () => {
  const router = useRouter();
  const query = useQueryClient();
  return useMutation({
    mutationFn: (payload: payloadProp) => createBranch(payload),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["branch-list"] });
      router.push("/branch-setup");
    },
  });
};

// sub update branch
export const updateSubBranch = async (payload: any) => {
  const { data } = await axios.post("auth/UpdateBranch", payload, {
    headers: authJsonHeader(),
  });
  return data;
};

export const useUpdateSubBranch = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => updateSubBranch(payload),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["branch-list"] });
    },
  });
};

// sub branch delete

const deleteBranch = async (id: number) => {
  const { data } = await axios.delete(`auth/DeleteBranch`, {
    params: {
      BranchId: id,
    },
    headers: authJsonHeader(),
  });

  // const { data } = await axios.post(
  //   `auth/DeleteBranch`,
  //   { BranchId: id },
  //   {
  //     headers: authJsonHeader(),
  //   }
  // );
  return data;
};

export const useDeleteBranch = () => {
  const router = useRouter();
  const query = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteBranch(id),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["branch-list"] });
      //   router.push("/branch-setup");
    },
  });
};

// main shop update
const updateShop = async (payload: any) => {
  const { data } = await axios.post("auth/UpdateMainShop", payload, {
    headers: authJsonHeader(),
  });
  return data;
};

export const useUpdateShop = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => updateShop(payload),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["branch-list"] });
    },
  });
};
