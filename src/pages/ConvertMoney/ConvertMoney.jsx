import { useEffect } from "react"

export const ConvertMoney = () => {
  useEffect(() => {
    document.title = 'ConvertET | Conversion de Moneda'
  },[])

  return (
    <div className="w-full max-w-3xl px-2 py-2 mx-auto flex flex-col">
      <div className="flex flex-col md:flex-row items-center gap-2">
        {/* desde */}
        <div className="converter">
          <input type="text" className="converter-input" placeholder="Cantidad" />
          <div className="converter-select">
            <select name="" defaultValue='ars'>
              <option value="ars">ARS</option>
              <option value="usd">USD</option>
            </select>
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center text-gray-600 duration-300 hover:text-blue-500">
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </button>
        {/* a */}
        <div className="converter">
          <input type="text" className="converter-input" readOnly disabled />
          <div className="converter-select">
            <select name="" defaultValue='usd'>
              <option value="ars">ARS</option>
              <option value="usd">USD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
