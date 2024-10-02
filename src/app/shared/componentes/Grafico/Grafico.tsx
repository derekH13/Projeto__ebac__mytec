import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { Util } from "../../../Util/Util";

type props = {
  info: [string, number | string][]
}


function Grafico({info}: props) {


  useEffect(() => {
    Util.requisicaoDados("usuario").then((data) => {
  
      if(data) console.log(data[0].nome);
      
      
    })
  },[])



   const data = info;
   const options = {
    title: "My Daily Activities",
    pieHole: 0.3,
    is3D: true,
    backgroundColor: "transparent",
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "white",
        fontSize: 14,
      },
    },
    titleTextStyle: {
      color: "white",
      fontSize: 20,
      bold: true,
    },
  
    colors: ['#654485', '#237b86', '#3357FF', '#3436a1'],
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
  };









  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default Grafico;