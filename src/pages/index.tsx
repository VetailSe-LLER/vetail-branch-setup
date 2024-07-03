import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container className={inter.className} maxWidth="sm">
        <Link href={"/branch-setup"}>Go To Branch</Link>
      </Container>
    </>
  );
}
