import { Suspense } from "react";
import Banner from "./components/Banner";
import Navber from "./components/Navber";
import Technologys from "./technology/technologys";
import type { Itechnologys } from "./type/technologys";
import { ToastContainer } from "react-toastify";

const technologysFetch = async (): Promise<Itechnologys[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
 
  const technologysPromise = technologysFetch();

  return (
    <>
      <Navber />
      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologys technologysPromise={technologysPromise} />
      </Suspense>


    <ToastContainer />

    </>
  );
}

export default App;