export default function Controlers() {
  return (
    <div className="w-150 flex flex-col items-center justify-center">
      {/* Selecionador do Algoritmo */}
      <select className="w-50 h-10 bg-gray-900 flex items-center justify-center rounded">
        <option value="bubble">Bubble Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="merge">Merge Sort</option>
      </select>

      {/* Botão para criação de lista de número*/}
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Generate List
      </button>

      {/* Botão para rodar o visualizador */}
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Run
      </button>

    </div>
  );
}