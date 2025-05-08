// import Components
import SkipHeader from "../components/SkipHeader";
import SkipList from "../components/SkipList";

export default function SelectSkip() {
  return (
    <div className="flex flex-col justify-center mb-8 overflow-x-auto">
      <SkipHeader />
      <div className="flex flex-col items-center justify-center my-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that suits your needs
        </p>
      </div>
      <SkipList />
    </div>
  );
}
