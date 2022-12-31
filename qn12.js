const movieInfo = {
  name: 'Puff the Magic Dragon',
  duration: 30,
  star: {
    name: 'Puff',
    age: 45,
    country: 'Uganda'
  }
}

function extractMovieInfo() {
  const starobj = movieInfo.star;
  const text = `${movieInfo.name} lasts for ${movieInfo.duration} minutes. Star: ${starobj.name} is ${starobj.age} years old from ${starobj.country}`;
  console.log(text);
}

extractMovieInfo()