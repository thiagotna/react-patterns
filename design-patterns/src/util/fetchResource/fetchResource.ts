export async function fetchResource(resourceUrl: string): Promise<any> {
  try {
    const response = await fetch(resourceUrl)
    if (!response.ok) return console.error('Network response was not ok')

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching resource:', error)
  }
}
