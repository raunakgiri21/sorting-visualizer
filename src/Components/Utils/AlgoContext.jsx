import React, { createContext, useContext, useEffect, useState } from "react";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import bubbleSort from "./bubbleSort";
import selectionSort from "./selectionSort";

const AlgoContext = createContext(null);

export function Algocontext({ children }) {
  const [settings, setSettings] = useState({
    algorithm: "mergeSort",
    arrayLength: "25",
    delay: "15",
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    const randomNums = [];
    for (let i = 0; i < settings.arrayLength; i++) {
      randomNums.push(Math.random() * 540);
    }
    setItems(randomNums);
  }, [settings.arrayLength]);

  const sort = () => {
    switch (settings.algorithm) {
      case "insertionSort": {
        const [newArr, animArr] = insertionSort(items);
        animateDivs(newArr, animArr);
        break;
      }
      case "mergeSort": {
        const aux = [];
        const animArr = [];
        const newArr = [...items];
        mergeSort(newArr, aux, animArr, 0, items.length - 1);
        animateMerge(newArr, animArr);
        break;
      }
      case "bubbleSort": {
        const [newArr, animArr] = bubbleSort(items);
        animateDivs(newArr, animArr);
        break;
      }
      case "selectionSort": {
        const [newArr, animArr] = selectionSort(items);
        animateDivs(newArr, animArr);
        break;
      }
      default:
        alert("dusra choose kro bhai");
    }
  };

  const animateDivs = (newArr, arr) => {
    arr.forEach(([first, second], idx) => {
      const div1 = document.getElementById(`${first}`);
      const div2 = document.getElementById(`${second}`);
      if (!div1 || !div2) return;
      setTimeout(() => {
        div1.style.backgroundColor = "#b041f0";
        div2.style.backgroundColor = "#b041f0";
        const divHeight = div1.style.height;
        div1.style.height = div2.style.height;
        div2.style.height = divHeight;
        setTimeout(() => {
          div2.style.backgroundColor = "#482";
          div1.style.backgroundColor = "#482";
          if (idx === arr.length - 1) {
            setItems(newArr);
          }
        }, settings.delay * 2);
      }, settings.delay * idx * 2);
    });
  };
  const animateMerge = (newArr, arr) => {
    arr.forEach(([newHeight, index], idx) => {
      const div1 = document.getElementById(`${index}`);
      if (!div1) return;
      setTimeout(() => {
        div1.style.backgroundColor = "#b041f0";
        div1.style.height = `${newHeight / 7}%`;
        setTimeout(() => {
          div1.style.backgroundColor = "#482";
          if (idx === arr.length - 1) {
            setItems(newArr);
          }
        }, settings.delay * 2);
      }, settings.delay * idx * 2);
    });
  };

  return (
    <AlgoContext.Provider
      value={{ settings, setSettings, sort, items, setItems }}
    >
      {children}
    </AlgoContext.Provider>
  );
}

export function useAlgoContext() {
  const context = useContext(AlgoContext);
  if (!context) {
    throw new Error("useAlgoContext must be used within a AlgoContextProvider");
  }
  return context;
}
