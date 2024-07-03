import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const query = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={query}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
