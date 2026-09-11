import { Suspense } from "react";
import Banner from "./components/Banner";
import Navber from "./components/Navber";
import Technologys from "./technology/technologys";
import type { Itechnologys } from "./type/technologys";
import { ToastContainer } from "react-toastify";  
import Footer from './components/Footer/Footer'



const technologysFetch = async (): Promise<Itechnologys[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

 const technologysPromise = technologysFetch();

function App() {
 
 
  return (
    <> 
      <Navber />
      
      <Banner />

      <Suspense fallback={<div className="text-center font-bold text-2xl">Loading...</div>}>
        
        <Technologys technologysPromise={technologysPromise} />

      </Suspense>
   
    <ToastContainer />

   <Footer />
   
    </>
  );
}

export default App;