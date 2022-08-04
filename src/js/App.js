import React, { useState } from "react";
import "../index.css";
import Button from "./Button";
export default function App() {
  const title = "HelloWorld 123";
  const sendNotification = () => {
    electron.notificationApi.sendNotification("My notifications !");
  };

  const [data, setData] = useState({
    text: "0",
    input1: null,
    operate: null,
  });

  const clicked = () => {
    console.log("=", data);
    if (data.operate === "x") {
      setData(() => {
        return {
          ...data,
          text: parseFloat(data.input1) * parseFloat(data.text),
        };
      });
    } else if (data.operate === "+") {
      setData(() => {
        return {
          ...data,
          text: parseFloat(data.input1) + parseFloat(data.text),
        };
      });
    } else if (data.operate === "-") {
      setData(() => {
        return {
          ...data,
          text: parseFloat(data.input1) - parseFloat(data.text),
        };
      });
    } else if (data.operate === "/") {
      setData(() => {
        return {
          ...data,
          text: parseFloat(data.input1) / parseFloat(data.text),
        };
      });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container  w-96 h-4/6">
        <div className="top h-2/6 bg-green-200 p-4 flex flex-col-4">
          <div className="flex justify-between ">
            <h2>CALCI</h2>
            <h1>:</h1>
          </div>
          <div className="display flex-1 flex justify-end items-center text-5xl">
            {data.text}
          </div>
        </div>
        <div className="bottom h-4/6 bg-green-700">
          <div className="grid grid-rows-5 grid-flow-col flex">
            <Button data={data} setData={setData} title={"C"}></Button>
            <Button data={data} setData={setData} title={"7"}></Button>
            <Button data={data} setData={setData} title={"4"}></Button>
            <Button data={data} setData={setData} title={"1"}></Button>
            <Button data={data} setData={setData} title={"0"}></Button>
            <Button data={data} setData={setData} title={"%"}></Button>
            <Button data={data} setData={setData} title={"8"}></Button>
            <Button data={data} setData={setData} title={"5"}></Button>
            <Button data={data} setData={setData} title={"2"}></Button>
            <Button data={data} setData={setData} title={"."}></Button>
            <Button data={data} setData={setData} title={"/"}></Button>
            <Button data={data} setData={setData} title={"9"}></Button>
            <Button data={data} setData={setData} title={"6"}></Button>
            <Button data={data} setData={setData} title={"3"}></Button>
            <Button data={data} setData={setData} title={"<-"}></Button>
            <Button data={data} setData={setData} title={"x"}></Button>
            <Button data={data} setData={setData} title={"-"}></Button>
            <Button data={data} setData={setData} title={"+"}></Button>
            <div className="flex-1 bg-indigo-500 border border-yellow-300 row-span-2">
              <button
                className="w-full h-full hover:bg-indigo-700"
                onClick={clicked}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
