import LoginScreen from "@/component/latihan/loginScreen";
import { useState } from "react";

export default function Index() {
  const [nama, setNama] = useState("somra");
  return (
    <>
      <LoginScreen />
      {/* <Latihan1 /> */}
      {/* <Latihan2 />
      <Latihan3 />
      <Latihan4 /> */}

      {/* <HomeScreen /> */}
    </>
  );
}
