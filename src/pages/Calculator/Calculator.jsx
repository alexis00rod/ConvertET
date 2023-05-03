import { evaluate } from "mathjs"
import { useState } from "react"
import { Button } from "../../components"

export const Calculator = () => {
  const [operation, setOperation] = useState('')

  const handleOperation = (button) => {
    setOperation(operation + button)
    if(button === '=') setOperation(evaluate(operation))
    if(button === 'AC') setOperation('')
  }

  const buttons = ['(',')','%','AC','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+',]

  return (
    <div className="w-full max-w-screen-md mx-auto flex flex-col gap-2">
      <div className="w-full px-2 py-2 flex flex-col items-end border border-gray-300">
        <span className="text-3xl font-medium">{operation ? operation : 0}</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((e,i) => (
          <Button 
          key={i} 
          color={e === '=' ? 'blue' : /[0-9]+/.test(e) || e === '.' ? 'gray' : 'gray-light'}
          onClick={() => handleOperation(e)} 
          >
            {e}
          </Button>
        ))}
      </div>
    </div>
  )
}
