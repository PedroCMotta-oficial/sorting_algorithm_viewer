import Header from './components/Header';
import Project from './components/Project';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Cabeçalho */}
      <Header />

      {/* Projeto */}
      <Project />
    </div>
  );
}