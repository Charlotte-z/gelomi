import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CatLoading from "../styles/CatLoading";

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div style={{ height: "100vh", width: "100vw", background: 'black' }}>
      <CatLoading />
    </div>
  );
};

export default Home;
