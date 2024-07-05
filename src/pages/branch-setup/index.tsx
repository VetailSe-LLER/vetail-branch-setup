import MainCard from "@/common/branch-setup/main-card";
import SubCard from "@/common/branch-setup/sub-card";
import IconLeftArrow from "@/components/icons/IconLeftArrow";
import IconPlus from "@/components/icons/IconPlus";
import Drawer from "@/components/ui/drawer";

import {
  useBranchList,
  useMainBranchList,
} from "@/store/server/branch-setup/query";
import {
  Box,
  Button,
  Container,
  Skeleton,
  Stack,
  useTheme,
} from "@mui/material";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import EditMainBranch from "./edit-main-branch";
import { getCookie } from "cookies-next";

const inter = Inter({ subsets: ["latin"] });

const BranchSetup = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const shopId = Number(getCookie("shopId"));

  const { data, isLoading } = useBranchList(shopId);

  const { data: mainBranch, isLoading: load } = useMainBranchList(shopId);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Container className={inter.className} maxWidth="sm">
      <Stack direction={"row"} display={"flex"} gap={1} alignItems={"center"}>
        <IconLeftArrow />
        <Box component={"p"}>Branch Setup</Box>
      </Stack>
      {/* main card */}
      {mainBranch && !load ? (
        <MainCard data={mainBranch} toggleDrawer={toggleDrawer} />
      ) : (
        <>
          <Skeleton variant="rounded" width={"100%"} height={130} />
        </>
      )}
      {/* create-new-branch */}
      <Box px={2}>
        <Link href={"/branch-setup/create-new-branch"}>
          <Button
            fullWidth
            sx={{
              borderRadius: "30px",
              paddingBlock: 1.4,
              marginTop: 2,
            }}
            startIcon={<IconPlus />}
            color={"primary"}
            variant="contained"
          >
            ဆိုင်ခွဲအသစ်ထည့်မည်
          </Button>
        </Link>
      </Box>

      {/* SubCard */}
      {data && !isLoading ? (
        <>
          {data?.branchInfo.map((branch, index) => (
            <SubCard branch={branch} key={index} />
          ))}
        </>
      ) : (
        <>
          <Box mt={2} display={"flex"} flexDirection={"column"} gap={2}>
            {[...Array(4)].map((_, idx) => (
              <Skeleton
                variant="rounded"
                height={150}
                key={idx}
                width={"100%"}
              />
            ))}
          </Box>
        </>
      )}

      <Drawer open={open} toggleDrawer={toggleDrawer}>
        {mainBranch && <EditMainBranch data={mainBranch} setOpen={setOpen} />}
      </Drawer>
    </Container>
  );
};

export default BranchSetup;
