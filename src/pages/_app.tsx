import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const query = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={query}>
        <Component {...pageProps} />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
