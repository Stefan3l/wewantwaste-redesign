export default function ActionBar({ size, price, period }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">{size} Yard Skip</h3>
            <div>
              <span className="text-xl font-bold text-[#0037C1]">£{price}</span>
              <span className="text-sm text-gray-400 ml-2">{period} days</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-secondary w-full bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-4">
              Back
            </button>
            <button className="btn-primary w-full bg-blue-700 hover:bg-blue-800 rounded-lg py-2 px-4">
              Continue
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-400">{size} Yard Skip</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0037C1]">
                £{price}
              </span>
              <span className="text-sm text-gray-400 ml-2">
                {period} day hire
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-secondary bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-4">
              Back
            </button>
            <button className="btn-primary flex items-center gap-2 bg-blue-700 hover:bg-blue-800 rounded-lg py-2 px-4">
              Continue
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
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
