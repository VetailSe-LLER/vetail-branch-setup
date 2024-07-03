import IconEdit from "@/components/icons/IconEdit";
import IconFlag from "@/components/icons/IconFlag";
import IconMenu from "@/components/icons/IconMenu";
import IconMinus from "@/components/icons/IconMinus";
import { Box, Container, Stack, Typography } from "@mui/material";

const SubCard = ({ branch }: { branch: SelectedBranchList }) => {
  return (
    <Box
      component={"div"}
      sx={{
        borderBottom: "2px solid #EEEEEE",
      }}
    >
      <Stack pt={2} direction={"row"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} gap={1} component={"div"}>
          <IconMenu />
          <Typography fontWeight={600} component={"h5"} my={0}>
            {branch.branchName}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"} component={"div"}>
          <IconEdit />
          <IconMinus />
        </Box>
      </Stack>
      <Box mx={"5px"} component={"ul"}>
        <Box fontSize={"15px"} component={"li"}>
          {branch.phoneNo}
        </Box>
        <Box fontSize={"15px"} pt={"8px"} component={"li"}>
          {branch.address}
        </Box>
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
      </Box>
    </Box>
  );
};

export default SubCard;
