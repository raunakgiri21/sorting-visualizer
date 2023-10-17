import { useAlgoContext } from "../Utils/Algocontext";

export default function Navbar() {
  const { settings, setSettings, sort } = useAlgoContext();

  return (
    <nav className="w-screen bg-gray-300">
      <div className="flex items-center justify-center w-full py-2 gap-6">
        <select
          defaultValue={"mergeSort"}
          onChange={(e) =>
            setSettings({ ...settings, algorithm: `${e.target.value}` })
          }
          className="border border-teal-100 bg-gray-300 shadow-md py-2 px-4 transition-all"
        >
          <option value="mergeSort">Merge Sort</option>
          <option value="bubbleSort">Bubble Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="quickeSort">Quick Sort</option>
          <option value="heapSort">Heap Sort</option>
        </select>
        <button
          onClick={sort}
          className="border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95"
        >
          Start
        </button>
      </div>
      <div className="flex flex-col items-center w-full pb-3">
        <label htmlFor="array_length">
          Array Lenght: {settings?.arrayLength}
        </label>
        <input
          type="range"
          name="array_length"
          id="array_length"
          className="w-full max-w-2xl"
          defaultValue={25}
          onChange={(e) =>
            setSettings({ ...settings, arrayLength: `${e.target.value * 5}` })
          }
          min={1}
        />
        <label htmlFor="delay">Delay: {settings?.delay}</label>
        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-2xl"
          min={1}
          onChange={(e) =>
            setSettings({ ...settings, delay: `${e.target.value}` })
          }
          defaultValue={15}
        />
      </div>
    </nav>
  );
}
