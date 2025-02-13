import Controlers from "./Controlers";
import Preview from "./Preview";

export default function Project() {
  return(
    <div className="flex flex-row py-10 px-20">
      <Controlers />
      <Preview />
    </div>
  );
}