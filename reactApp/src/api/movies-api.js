export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=b077d449f6bc9de14639188c5e777fc4&language=en-US&include_adult=false&page=1`
  );
  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch("http://localhost:8080/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ username: username, password: password }),
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch(
    "http://localhost:8080/api/users?action=register",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ username: username, password: password }),
    }
  );
  return response.json();
};
