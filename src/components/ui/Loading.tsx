import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Loading({ open }: { open: boolean }) {
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
        <Typography variant="body2" mb={-1}>
          Vetail
        </Typography>
        <img
          src={
            "https://vetailseller.vercel.app/static/images/loading-vetail.gif"
          }
          alt="Next"
          width={50}
          height={50}
        />
      </Stack>
    </Backdrop>
  );
}
