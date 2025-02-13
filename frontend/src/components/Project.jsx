import Controlers from "./Controlers";
import Preview from "./Preview";

export default function Project() {
  return(
    <div className="flex flex-line">
      <Controlers />
      <Preview />
    </div>
  );
}