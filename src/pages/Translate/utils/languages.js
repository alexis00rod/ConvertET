const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f469387336mshdd2a48bd0a882a1p1002b2jsne8836ed405ad',
		'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
	}
}

const url = 'https://translate-plus.p.rapidapi.com/'

export const getLanguages = async () => {
  const response = await fetch(url, options)
  const json = await response.json()
  const languages = Object.entries(json.supported_languages)
  return languages
}