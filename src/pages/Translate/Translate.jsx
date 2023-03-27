import { useEffect, useState } from "react"
import { getLanguages } from "./utils/languages"
import { getTranslate } from "./utils/translate"

export const Translate = () => {
  const [loading, setLoading] = useState(false)
  const [languages, setLanguages] = useState([])

  const [textToTranslate, setTextToTranslate] = useState({
    text:"",
    source: "es",
    target:"en"
  })
  const [textTranslated, setTextTranslated] = useState('')

  useEffect(() => {
    document.title = 'ConvertET | Traductor'

    getLanguages()
    .then(resp => setLanguages(resp))
    .finally(() => setLoading(true))
  },[])

  const translateText = async () => {
    const {translation} = await getTranslate(textToTranslate)
    setTextTranslated(translation)
  }

  
  if(!loading) return <p>Loading...</p>

  return (
    <div className="w-full max-w-3xl px-2 py-2 mx-auto flex flex-col">
      <div className="mb-4 border border-gray-300 divide-y divide-gray-300 rounded-sm">
        {/* Buttons */}
        <div className="w-full px-2 py-2 flex items-center gap-2">
          <div className="select">
            <select 
              defaultValue={textToTranslate.source}
              onChange={({target:{value}}) => setTextToTranslate({...textToTranslate,source:value})}>
              {languages.map(e => (
                <option key={e[1]} value={e[1]}>{e[0]}</option>
              ))}
            </select>
          </div>
          <button className="w-10 h-8 flex items-center justify-center flex-none text-gray-500 border-x border-gray-300" title="Intercambiar idiomas">
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </button>
          <div className="select">
            <select 
              defaultValue={textToTranslate.source}
              onChange={({target:{value}}) => setTextToTranslate({...textToTranslate,source:value})}>
              {languages.map(e => (
                <option key={e[1]} value={e[1]}>{e[0]}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Texts */}
        <div className="w-full flex flex-col lg:flex-row divide-y divide-x-0 lg:divide-x lg:divide-y-0  divide-gray-300">
          <div className="px-2 py-2 flex flex-col items-start grow">
            <textarea 
              className="w-full h-40 px-1 py-1 bg-transparent outline-none resize-none" 
              placeholder="Ingresar texto"
              onChange={({target:{value}}) => setTextToTranslate({...textToTranslate,text:value})}>
            </textarea>
            <button className="w-8 h-8 flex items-center justify-center flex-none text-gray-500" title="Traducir por voz">
              <i className="fa-solid fa-volume-high"></i>
            </button>
          </div>
          <div className="px-2 py-2 flex flex-col items-start grow">
            <textarea 
              className="w-full h-40 px-1 py-1 bg-transparent outline-none resize-none" 
              placeholder="Traduccion" 
              readOnly 
              disabled
              value={textTranslated}>
            </textarea>
            <button className="w-8 h-8 flex items-center justify-center flex-none text-gray-500" title="Copiar traduccion">
              <i className="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <button 
        className="w-full h-10 flex justify-center items-center bg-blue-400 text-white duration-300 rounded-sm 
        hover:bg-blue-500 active:bg-blue-600"
        onClick={translateText}>
          Traducir Texto
        </button>
      </div>
    </div>
  )
}
