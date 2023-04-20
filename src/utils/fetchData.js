export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": 'c49852e3efmsh798080028c70455p1c3063jsn9074271380f2',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youTubeOptions = {
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': 'c49852e3efmsh798080028c70455p1c3063jsn9074271380f2',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


 
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
