import IconEdit from "@/components/icons/IconEdit";
import IconFlag from "@/components/icons/IconFlag";
import IconMenu from "@/components/icons/IconMenu";
import IconMinus from "@/components/icons/IconMinus";
import ConfirmModal from "@/components/ui/confirm-modal";
import CustomAlert from "@/components/ui/custom-alert";
import Drawer from "@/components/ui/drawer";
import EditSubBranch from "@/pages/branch-setup/edit-sub-branch";
import {
  useDeleteBranch,
  useUpdateSubBranch,
} from "@/store/server/branch-setup/mutation";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SubCard = ({ branch }: { branch: SelectedBranchList }) => {
  // const deleteBranch = useDeleteBranch();
  const [open, setOpen] = useState(false);

  const [edit, setEdit] = useState(false);

  const [bal, setBol] = useState(false);

  const updateBranch = useUpdateSubBranch();

  const toggleDrawer = (newOpen: boolean) => () => {
    setEdit(newOpen);
  };

  useEffect(() => {
    if (updateBranch?.isSuccess) {
      setBol(true);
      const timer = setTimeout(() => {
        setBol(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [updateBranch?.isSuccess]);

  return (
    <Box
      component={"div"}
      sx={{
        borderBottom: "2px solid #EEEEEE",
      }}
    >
      {bal && <CustomAlert />}

      <Stack pt={2} direction={"row"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} gap={1} component={"div"}>
          <IconMenu />
          <Typography fontWeight={600} component={"h5"} my={0}>
            {branch.branchName}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"} component={"div"}>
          <Box
            sx={{ cursor: "pointer" }}
            component={"div"}
            onClick={() => setEdit(true)}
          >
            <IconEdit />
          </Box>
          <Box
            sx={{ cursor: "pointer" }}
            component={"div"}
            onClick={() => setOpen(true)}
          >
            <IconMinus />
          </Box>
        </Box>
      </Stack>
      <Box mx={"5px"} component={"ul"}>
        <Box fontSize={"15px"} component={"li"}>
          {branch.phoneNo}
        </Box>
        <Box fontSize={"15px"} pt={"8px"} component={"li"}>
          {branch.address}
        </Box>
        {branch.landMark && (
          <Box
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            mt={"5px"}
          >
            <IconFlag />
            <Box fontSize={"15px"} component={"p"} my={0}>
              {branch.landMark || "-"}
            </Box>
          </Box>
        )}
      </Box>
      <ConfirmModal open={open} setOpen={setOpen} id={branch.id} />

      <Drawer open={edit} toggleDrawer={toggleDrawer}>
        {branch && (
          <EditSubBranch
            updateBranch={updateBranch}
            data={branch}
            setOpen={setEdit}
          />
        )}
      </Drawer>
    </Box>
  );
};

export default SubCard;
