const useFetch = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => r.updateBestFilms);
};
export default useFetch;
