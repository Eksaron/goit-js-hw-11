async function fetchImages(query) {
  const apiKey = '44064586-c85ee0d0f4282a04fbc0070f7';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  console.log('url', url);
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
export default fetchImages;
