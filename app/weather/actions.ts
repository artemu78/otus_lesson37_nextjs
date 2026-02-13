'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getWeatherByCoords(
  prevState: any,
  formData: FormData
) {
  const latitude = formData.get('latitude') as string
  const longitude = formData.get('longitude') as string

  // Validate inputs
  if (!latitude || !longitude) {
    return {
      error: 'Please provide both latitude and longitude',
      data: null,
    }
  }

  const lat = parseFloat(latitude)
  const lon = parseFloat(longitude)


  redirect(`/weather?lat=${lat}&long=${lon}`);
}
