import IconEdit from "@/components/icons/IconEdit";
import IconMapPin from "@/components/icons/IconMapPin";
import IconPhone from "@/components/icons/IconPhone";
import { Box, Button, Stack, useTheme } from "@mui/material";
import React from "react";
import shop from "@/assets/shop.png";
import Image from "next/image";
import { useMainBranchList } from "@/store/server/branch-setup/query";

const MainCard = ({
  toggleDrawer,
  data,
}: {
  toggleDrawer: (newOpen: boolean) => () => void;
  data: any;
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#2E6EFF1A",
        borderRadius: "10px",
        position: "relative",
        zIndex: 100,
      }}
      component={"div"}
      p={2.5}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <Image src={shop} style={{ opacity: 0.2 }} alt="Shop image" />
      </Box>
      <Stack
        direction={"row"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box py={0} my={0} component={"h4"}>
          {data?.shopName}
        </Box>
        <Box
          component={"div"}
          sx={{ padding: 0, margin: 0, cursor: "pointer" }}
          onClick={toggleDrawer(true)}
        >
          <IconEdit />
        </Box>
      </Stack>
      <Stack
        mt={1}
        gap={1}
        direction={"row"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box component={"div"} width={30}>
          <IconPhone />
        </Box>
        <Box
          sx={{ color: "#1E1E1ECC", textAlign: "start" }}
          my={0}
          fontSize={14}
          component={"p"}
        >
          {data?.phoneNo}
        </Box>
      </Stack>
      <Stack
        mt={1.5}
        direction={"row"}
        gap={1}
        display={"flex"}
        alignItems={"center"}
      >
        <Box component={"div"} width={30}>
          <IconMapPin />
        </Box>
        <Box sx={{ color: "#1E1E1ECC" }} my={0} fontSize={14} component={"p"}>
          {data?.shopAddress}
        </Box>
      </Stack>
    </Box>
  );
};

export default MainCard;
