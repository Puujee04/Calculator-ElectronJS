import React from "react";

const Button = (props) => {
  const { data, setData } = { ...props };
  const click = (e) => {
    console.log(data);
    if (e === "C") {
      setData({ text: "0", operate: null, input1: null });
    } else if (e === "x") {
      setData({ ...data, operate: "x", input1: data.text, text: "0" });
    } else if (e === "/") {
      setData({ ...data, operate: "/", input1: data.text, text: "0" });
    } else if (e === "-") {
      setData({ ...data, operate: "-", input1: data.text, text: "0" });
    } else if (e === "+") {
      setData({ ...data, operate: "+", input1: data.text, text: "0" });
    } else if (e === "%") {
      const percent = parseInt(data.text) / 100;
      setData({ ...data, text: percent });
    } else if (e === ".") {
      let flag = false;
      for (let i = 0; i < data.text.length; i++) {
        if (data.text[i] === ".") {
          flag = true;
          break;
        }
      }
      if (!flag) {
        setData({ text: data.text + e });
      }
    } else {
      data.text[0] === "0" && data.text[1] !== "."
        ? setData({ ...data, text: e })
        : setData({ ...data, text: data.text + e });
    }
  };

  return (
    <div
      className="flex-1 bg-indigo-500 border border-yellow-300 "
      style={{ height: "80px" }}
    >
      <button
        onClick={(e) => {
          click(e.target.innerText);
        }}
        className="w-full h-full hover:bg-indigo-300"
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
