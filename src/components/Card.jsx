export default function Card({
  size,
  period,
  price,
  notAllowedOnRoad,
  selected,
}) {
  return (
    <div className="group relative border-2 md:p-6 transition-all border-[#0037C1] bg-[#0037C1]/10 bg-[#1C1C1C] p-4 rounded-lg text-white cursor-pointer">
      <div className="relative">
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`}
          alt=""
          className="w-full h-36 object-cover md:h-48 rounded-md mb-4"
        />
        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {size} Yards
        </div>
        {notAllowedOnRoad && (
          <div className="absolute bottom-3 left-2 z-20 space-y-2">
            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span className="text-xs font-medium text-yellow-500">
                Not Allowed On The Road
              </span>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
        {size} Yard Skip
      </h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">
        {period} day hire period
      </p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
            £{price}
          </span>
        </div>
      </div>
      <button className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#0037C1] text-white hover:bg-[#002da1] false">
        <span>{selected ? "Selected" : "Select This Skip "} </span>
        {!selected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-arrow-right w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
