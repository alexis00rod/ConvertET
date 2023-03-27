const url = 'https://translate-plus.p.rapidapi.com/translate'

export const getTranslate = async ({text,source,target}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'f469387336mshdd2a48bd0a882a1p1002b2jsne8836ed405ad',
      'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
    },
    body: `{"text":"${text}","source":"${source}","target":"${target}"}`
  })
  const json = await response.json()
  const {translations} = json
  return translations
}
