export default function HomePage() {
  return (
    <div className="p-6 flex flex-col gap-4 md:gap-8 h-full">
      <div className="flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold">Workout Plans</h1>
        <div className="flex items-center bg-gray-700 rounded-4xl overflow-hidden">
          <span className="px-4 py-2 bg-gray-600 rounded-4xl">Weekly</span>
          <span className="p-4 py-2">Monthly</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1  lg:grid-rows-4 gap-8">
        <div className="bg-gray-800 lg:row-start-1 lg:row-end-4">1</div>
        <div className="bg-gray-800 lg:row-start-1 lg:row-span-2">2</div>
        <div className="bg-gray-800 lg:row-start-1 lg:row-end-2">3</div>
        <div className="bg-gray-800 lg:row-start-2 lg:row-end-3">4</div>
        <div className="bg-gray-800 lg:row-start-4 lg:row-end-5">5</div>
        <div className="bg-gray-800 lg:row-start-3 lg:row-end-5">6</div>
        <div className="bg-gray-800 lg:row-start-3 lg:row-end-5">7</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="bg-gray-800 p-8">2</div>
        <div className="bg-gray-800 p-8">2</div>
        <div className="bg-gray-800 p-8">2</div>
        <div className="bg-gray-800 p-8">2</div>
        <div className="bg-gray-800 p-8">2</div>
        <div className="bg-gray-800 p-8">2</div>
      </div>
    </div>
  );
}
