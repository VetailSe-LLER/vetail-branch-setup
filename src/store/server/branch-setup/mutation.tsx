import { authJsonHeader, axios } from "@/api";

interface payloadProp {
  shopId: number;
  branchName: string;
  phoneNo: string;
  email: string;
  cityId: number;
  townshipId: number;
  address: string;
  isEcommerce: boolean;
  landMark: string;
}

const createBrancb = async (payload: payloadProp) => {
  const { data } = await axios.post("auth/CreateBranch", payload, {
    headers: authJsonHeader(),
  });
  return data;
};
