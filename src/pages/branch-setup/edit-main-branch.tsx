import IconEmail from "@/components/icons/IconEmail";
import IconLeftArrow from "@/components/icons/IconLeftArrow";
import IconMapPin from "@/components/icons/IconMapPin";
import IconPhone from "@/components/icons/IconPhone";
import IconSave from "@/components/icons/IconSave";
import IconShop from "@/components/icons/IconShop";
import CustomTextFiled from "@/components/ui/custom-text-field";
import {
  Box,
  Button,
  Container,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Inter } from "next/font/google";
import React from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import IconError from "@/components/icons/IconError";
import Combobox from "@/components/ui/combobox";
import Link from "next/link";
import IconClose2 from "@/components/icons/IconClose2";

const inter = Inter({ subsets: ["latin"] });

export interface EditMainBranchProp {
  shop: string;
  phone: string;
  email?: string;
  map: string;
  township: string;
  address: string;
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
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<EditMainBranchProp>({
    resolver: yupResolver(YupSchema),
    defaultValues: {
      shop: "",
      phone: "",
      email: "",
      map: "",
      address: "",
      township: "",
    },
  });

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
        onSubmit={handleSubmit((value) => console.log(value))}
      >
        <Box component={"div"}>
          <Controller
            control={control}
            name="shop"
            render={({ field }) => {
              return (
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
              );
            }}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => {
              return (
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
              );
            }}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            defaultValue=""
            name="email"
            render={({ field }) => {
              return (
                <CustomTextFiled
                  resetField={resetField}
                  icon={<IconEmail />}
                  label="*အီးမေးလ်"
                  endSection="အီးမေးလ်မရှိပါကထည့်ရန်မလိုပါ"
                  maxLength={0}
                  name="email"
                  field={{ ...field, value: field.value ?? "" }}
                />
              );
            }}
          />
        </Box>
        <Box component={"div"}>
          <Controller
            control={control}
            name="map"
            render={({ field }) => {
              return (
                <>
                  <Combobox
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
            render={({ field }) => {
              return (
                <>
                  <Combobox
                    icon={<IconMapPin />}
                    labelInput="*မြို့နယ်ရွေးချယ်ပါ"
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
            name="address"
            render={({ field }) => {
              return (
                <>
                  <CustomTextFiled
                    icon={<IconMapPin />}
                    minRows={3}
                    label="*လိပ်စာအပြည့်အစုံ"
                    multiline
                    maxLength={0}
                    field={field}
                    error={!!errors.address}
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
            startIcon={<IconSave />}
          >
            သိမ်းဆည်းမည်
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditMainBranch;
