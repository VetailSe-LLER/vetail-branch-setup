import IconEmail from "@/components/icons/IconEmail";
import IconClose2 from "@/components/icons/IconClose2";
import IconPhone from "@/components/icons/IconPhone";
import IconShop from "@/components/icons/IconShop";
import IconError from "@/components/icons/IconError";
import CustomTextFiled from "@/components/ui/custom-text-field";
import { useMainBranchList } from "@/store/server/branch-setup/query";
import { Box, Button, Container, Stack } from "@mui/material";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconSave from "@/components/icons/IconSave";
import ComboEdit from "@/components/ui/combobox-edit";
import { useUpdateShop } from "@/store/server/branch-setup/mutation";
import load from "@/assets/load.gif";
import { getCookie } from "cookies-next";
import { township, useCity } from "@/store/server/city-township/query";
import IconMapPin from "@/components/icons/IconMapPin";

// import { useUpdateBranch } from "@/store/server/branch-setup/mutation";

const inter = Inter({ subsets: ["latin"] });

export interface EditMainBranchProp {
  shop: string;
  phone: string;
  email?: string;
  map: string;
  township: string;
  address: string;
  nearest?: string;
}

// yup schema
const YupSchema = yup.object({
  shop: yup.string().required("ဆိုင်ခွဲအမည်ထည့်ရန် လိုအပ်ပါသည်"),
  phone: yup.string().required("ဖုန်းနံပါတ်ထည့်ရန် လိုအပ်ပါသည်"),
  email: yup.string().email(),
  map: yup.string().required("မြို့‌ရွေးချယ်ရန် လိုအပ်ပါသည်"),
  township: yup.string().required("မြို့‌‌‌နယ်ရွေးချယ်ရန် လိုအပ်ပါသည်"),
  address: yup.string().required("လိပ်စာအပြည့်အစုံထည့်ရန် လိုအပ်ပါသည်"),
  nearest: yup.string(),
});

const EditMainBranch = ({
  setOpen,
  data,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
}) => {
  const {
    control,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm<EditMainBranchProp>({
    resolver: yupResolver(YupSchema),
    defaultValues: {
      shop: data?.shopName,
      phone: data?.phoneNo,
      email: data?.email,
      map: data?.cityId, // assuming cityId is the correct value
      address: data?.shopAddress,
      township: data?.townShipId, // assuming townShipId is the correct value
      nearest: data?.landMark || "",
    },
  });

  const [cityId, setCityId] = useState<any>({ label: "", value: data.cityId });
  const [townShipData, setTown] = useState<any[]>([]);

  const { data: citydata, isLoading } = useCity();

  const cityDataId =
    cityId &&
    citydata?.filter((city: any) => city.id === cityId.value)?.[0]?.id;

  useEffect(() => {
    if (cityDataId) {
      const townData = async () => {
        const data = await township(cityDataId);
        setTown(data);
        return data;
      };
      townData();
    }
  }, [cityDataId]);

  const updateBranch = useUpdateShop();

  const shopId = Number(getCookie("shopId"));

  return (
    <Container sx={{ position: "relative" }} className={`${inter.className}`}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        display={"flex"}
        gap={1}
        alignItems={"center"}
      >
        <Box margin={0} component={"p"}>
          ဆိုင်အချက်အလက်ပြင်ဆင်မည်
        </Box>
        <Box component={"div"} onClick={() => setOpen(false)}>
          <IconClose2 />
        </Box>
      </Stack>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        component={"form"}
        marginTop={3}
        onSubmit={handleSubmit((value) =>
          updateBranch.mutate(
            {
              ShopId: shopId,
              ShopName: value.shop,
              PhoneNo: value.phone,
              Email: value.email,
              CityId: Number(value.map),
              TownshipId: Number(value.township),
              Address: value.address,
              LandMark: value.nearest,
            },
            {
              onSuccess: () => {
                setOpen(false), reset();
              },
            }
          )
        )}
      >
        <Box component={"div"}>
          <Controller
            control={control}
            name="shop"
            render={({ field }) => (
              <>
                <CustomTextFiled
                  icon={<IconShop />}
                  label="*ဆိုင်ခွဲအမည်"
                  maxLength={0}
                  field={field}
                  error={!!errors.shop}
                  name="shop"
                  resetField={resetField}
                />
                {errors.shop && (
                  <Box
                    fontSize={12}
                    display={"flex"}
                    width={"100%"}
                    color={"red"}
                    component={"div"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={1}
                    mt={1}
                  >
                    <IconError /> {errors.shop.message}
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <>
                <CustomTextFiled
                  resetField={resetField}
                  type="number"
                  icon={<IconPhone />}
                  label="*ဖုန်းနံပါတ်"
                  maxLength={0}
                  field={field}
                  error={!!errors.phone}
                  name="phone"
                />
                {errors.phone && (
                  <Box
                    fontSize={12}
                    display={"flex"}
                    width={"100%"}
                    color={"red"}
                    component={"div"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={1}
                    mt={1}
                  >
                    <IconError /> {errors.phone.message}
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <>
                <CustomTextFiled
                  resetField={resetField}
                  icon={<IconEmail />}
                  label="အီးမေး"
                  maxLength={0}
                  field={field}
                  error={!!errors.email}
                  name="email"
                />
                {errors.email && (
                  <Box
                    fontSize={12}
                    display={"flex"}
                    width={"100%"}
                    color={"red"}
                    component={"div"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={1}
                    mt={1}
                  >
                    <IconError /> {errors.email.message}
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="map"
            render={({ field }) => {
              return (
                <>
                  <ComboEdit
                    setValue={setCityId}
                    option={citydata?.map((city: any) => {
                      return { label: city.name, value: city.id };
                    })}
                    icon={<IconMapPin />}
                    labelInput="*မြို့ရွေးချယ်ပါ"
                    error={!!errors.map}
                    field={field}
                  />
                  {errors.map && (
                    <Box
                      fontSize={12}
                      display={"flex"}
                      width={"100%"}
                      color={"red"}
                      component={"div"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={1}
                      mt={1}
                    >
                      <IconError /> {errors.map.message}
                    </Box>
                  )}
                </>
              );
            }}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="township"
            render={({ field }) => (
              <>
                <ComboEdit
                  icon={<IconShop />}
                  labelInput="မြို့နယ်"
                  error={!!errors.township}
                  field={field}
                  option={townShipData.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />
                {errors.township && (
                  <Box
                    fontSize={12}
                    display={"flex"}
                    width={"100%"}
                    color={"red"}
                    component={"div"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={1}
                    mt={1}
                  >
                    <IconError /> {errors.township.message}
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <>
                <CustomTextFiled
                  resetField={resetField}
                  icon={<IconShop />}
                  label="*ဆိုင်လိပ်စာ"
                  maxLength={0}
                  field={field}
                  error={!!errors.address}
                  name="address"
                />
                {errors.address && (
                  <Box
                    fontSize={12}
                    display={"flex"}
                    width={"100%"}
                    color={"red"}
                    component={"div"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={1}
                    mt={1}
                  >
                    <IconError /> {errors.address.message}
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="nearest"
            render={({ field }) => {
              return (
                <CustomTextFiled
                  minRows={3}
                  label="အနီးဆုံးအ‌ဆောက်အဦး (သို့) ‌‌နေရာ"
                  multiline
                  maxLength={0}
                  field={field}
                />
              );
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
          mt={"auto"}
          component={"div"}
        >
          <Button
            type="submit"
            variant="contained"
            fullWidth
            startIcon={updateBranch.isPending ? null : <IconSave />}
          >
            {updateBranch.isPending ? (
              <Box component={"img"} src={load.src} width={30} alt="Loading" />
            ) : (
              "သိမ်းဆည်းမည်"
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditMainBranch;
