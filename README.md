## Deployment

To deploy this project Movie Application

```bash
  npm run deploy
```

# Project Title:Movie Application

Movie Application in React js using TMDB Api to fetch data and then display cards on screen and here we used 2 more api to display image and another is for search .When we search movie in search bar it display that movie.

## API Reference

GET /api/items

const Featured_Api =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=15";

const Img_Api = "https://image.tmdb.org/t/p/w1280";

const Search_Api =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | 04c35731a5ee918f014970082a0088b1 Your API key |



## Authors

- [@Mohit Gautam](https://www.github.com/gautam-mohit)


## Features

- fetch movie from Api
-  Display Movie Cards
- Search Movie
- Overview and Rating



```
