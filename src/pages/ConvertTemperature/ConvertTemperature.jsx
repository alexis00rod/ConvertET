import { useEffect } from "react"

export const ConvertTemperature = () => {
  useEffect(() => {
    document.title = 'ConvertET | Conversion de Temperatura'
  },[])
  
  return (
    <h2>Conversion de temperatura</h2>
  )
}
