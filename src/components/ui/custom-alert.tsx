import { Alert, Backdrop, Stack } from "@mui/material";
import React from "react";

const CustomAlert = () => {
  return (
    <Backdrop
      sx={{ backgroundColor: "transparent", height: "100vh" }}
      open={true}
    >
      <Stack
        bgcolor=""
        borderRadius={4}
        color="white"
        alignItems="end"
        bottom={10}
        zIndex={100}
        px={2}
        pt={1}
        position={"fixed"}
      >
        <Alert
          icon={<></>}
          sx={{ backgroundColor: "#D3F8B6", borderRadius: 3 }}
        >
          ဆိုင်အချက်အလက်များကို ပြင်ဆင်ပြီးပါပြီ
        </Alert>
      </Stack>
    </Backdrop>
  );
};

export default CustomAlert;
