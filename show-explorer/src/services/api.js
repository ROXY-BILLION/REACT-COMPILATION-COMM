const API_URL = "https://api.tvmaze.com";

export async function getShows() {
  const response = await fetch(`${API_URL}/shows`);

  if (!response.ok) {
    throw new Error("Failed to fetch shows.");
  }

  return response.json();
}

export async function searchShows(query) {
  const response = await fetch(
    `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search shows.");
  }

  const data = await response.json();

  return data.map((item) => item.show);
}