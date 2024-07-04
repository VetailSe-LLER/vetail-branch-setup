import { Skeleton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function SuccessBox({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Stack
        bgcolor="rgba(0,0,0,0.5)"
        borderRadius={4}
        color="white"
        alignItems="center"
        px={2}
        pt={1}
      >
        <Skeleton variant="rounded" width={"100%"} height={150} />
      </Stack>
    </Backdrop>
  );
}
