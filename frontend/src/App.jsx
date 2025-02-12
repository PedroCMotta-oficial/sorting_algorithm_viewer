import Button from "./components/Button";
import ButtonProp from "./components/ButtonProp";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3x1 font-bold">Sorting Algorithm Viewer</h1>
      <Button />
      <ButtonProp text="Button made by props" />
      <Counter />
    </div>
  );
}