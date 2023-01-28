import { useEffect } from "react"

export const Translate = () => {
  useEffect(() => {
    document.title = 'ConvertET | Traductor'
  },[])
  
  return (
    <div>Traductor</div>
  )
}
