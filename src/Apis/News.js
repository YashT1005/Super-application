

export const fetchNewsDetails = () => {

  fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-11-04&sortBy=publishedAt&apiKey=9926cdc149ab4d6a9e95322a72d5c4a0")
    .then(data => data.json())
    .then((res) => {
      const response = res.articles[0];
      console.log(response);
      return response;
    })
    .catch(err => console.log(err))
}

// 9926cdc149ab4d6a9e95322a72d5c4a0