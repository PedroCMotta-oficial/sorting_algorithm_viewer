export default function ButtonProp({text}) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
      {text}
    </button>
  );
}