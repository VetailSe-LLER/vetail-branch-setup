import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";

const MfProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children} </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MfProvider;
