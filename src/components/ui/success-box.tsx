import { Box, Skeleton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import success from "@/assets/success.gif";
export default function SuccessBox({
  setOpen,
}: {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Stack
        bgcolor="white"
        borderRadius={4}
        color="white"
        alignItems="center"
        px={2}
        pt={1}
        position={"relative"}
      >
        <Box>
          <Box
            height={200}
            width={"100%"}
            component={"img"}
            sx={{ objectFit: "cover" }}
            src={success.src}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 15,
              left: "15%",
            }}
            component={"div"}
            fontSize={"12px"}
            display={"flex"}
            justifyContent={"center"}
            my={0}
            fontWeight={500}
            color={"blue"}
          >
            ဆိုင်ခွဲအသစ်ထည့်ခြင်း‌‌အောင်မြင်ပါသည်
          </Box>
        </Box>
      </Stack>
    </Backdrop>
  );
}
