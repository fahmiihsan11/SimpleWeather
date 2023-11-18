import { CardEnterCity } from "./components/CardEnterCity";
import { CardWeatherResult } from "./components/CardWeatherResult";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const [result, setResult] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <>
      { result && ( <CardWeatherResult data={data} setResult={setResult}/>)} 
      { !result && ( <CardEnterCity isFetching={isFetching} setIsFetching={setIsFetching} setResult={setResult} setData={setData} />)} 
    </>
  )
}

export default App
