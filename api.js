export const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.slice(0, 5); // prendi solo i primi 5 per semplicità
  } catch (error) {
    console.log('Error fetching data:', error);
    return [];
  }
};
