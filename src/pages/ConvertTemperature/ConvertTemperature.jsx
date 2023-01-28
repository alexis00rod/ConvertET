import { useEffect } from "react"

export const ConvertTemperature = () => {
  useEffect(() => {
    document.title = 'ConvertET | Conversion de Temperatura'
  },[])
  
  return (
    <div>Conversion de temperatura</div>
  )
}
