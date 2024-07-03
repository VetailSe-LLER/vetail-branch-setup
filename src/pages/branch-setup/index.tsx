import MainCard from "@/common/branch-setup/main-card";
import SubCard from "@/common/branch-setup/sub-card";
import IconLeftArrow from "@/components/icons/IconLeftArrow";
import IconPlus from "@/components/icons/IconPlus";
import Drawer from "@/components/ui/drawer";

import { Box, Button, Container, Stack, useTheme } from "@mui/material";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import EditMainBranch from "./edit-main-branch";
import { useBranchList } from "@/store/server/branch-setup/query";

const inter = Inter({ subsets: ["latin"] });

const index = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { data } = useBranchList(278);

  return (
    <Container className={inter.className} maxWidth="sm">
      <Stack direction={"row"} display={"flex"} gap={1} alignItems={"center"}>
        <IconLeftArrow />
        <Box component={"p"}>Branch Setup</Box>
      </Stack>
      {/* main card */}
      <MainCard toggleDrawer={toggleDrawer} />

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
      {data?.branchInfo.map((branch) => (
        <SubCard branch={branch} />
      ))}

      <Drawer open={open} toggleDrawer={toggleDrawer}>
        <EditMainBranch setOpen={setOpen} />
      </Drawer>
    </Container>
  );
};

export default index;
