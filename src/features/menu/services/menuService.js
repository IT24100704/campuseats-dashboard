export async function getMenu() {
  const response = await fetch("/menu.json");

  if (!response.ok) {
    throw new Error("Failed to fetch menu");
  }

  return response.json();
}