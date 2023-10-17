import { useAlgoContext } from "../Utils/Algocontext";

export default function Visualizer() {
  const { items } = useAlgoContext();
  return (
    <section className="row-span-5">
      <div className="flex w-full h-full items-end">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-1"
            style={{
              backgroundColor: "#482",
              height: `${item / 7}%`,
            }}
            id={idx}
          ></div>
        ))}
      </div>
    </section>
  );
}
