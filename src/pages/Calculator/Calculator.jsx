export const Calculator = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto flex flex-col gap-2">
      <div className="w-full px-2 py-2 flex flex-col items-end border border-gray-300">
        <span className="text-sm font-medium">Operation</span>
        <span className="text-xl font-semibold">Result</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> ( </button>
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> ) </button>
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> % </button>
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> AC </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 7 </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 8 </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 9 </button>
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> / </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 4 </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 5 </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 6 </button>
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> x </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 1 </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 2 </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 3 </button>
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> - </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> 0 </button>
        <button className="calculator-btn bg-gray-500 hover:bg-gray-500/75"> . </button>
        <button className="calculator-btn bg-blue-400 hover:bg-blue-400/75"> = </button>
        <button className="calculator-btn bg-gray-400 hover:bg-gray-400/75"> + </button>
      </div>
    </div>
  )
}
