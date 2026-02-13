'use client'

import { useActionState } from 'react'
import { getWeatherByCoords } from './actions'

const initialState = {
  error: null as string | null,
  data: null as any,
}

export function WeatherForm() {
  const [state, formAction, pending] = useActionState(getWeatherByCoords, initialState)

  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">Get Weather by Coordinates</h2>
      
      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="latitude" className="block text-sm font-medium mb-2">
              Latitude
            </label>
            <input
              type="number"
              id="latitude"
              name="latitude"
              step="any"
              required
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 55.75"
            />
          </div>
          <div>
            <label htmlFor="longitude" className="block text-sm font-medium mb-2">
              Longitude
            </label>
            <input
              type="number"
              id="longitude"
              name="longitude"
              step="any"
              required
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 37.61"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
        >
          {pending ? 'Fetching...' : 'Get Weather'}
        </button>

        {state?.error && (
          <p className="text-red-400 text-sm mt-2" aria-live="polite">
            {state.error}
          </p>
        )}
      </form>

      {state?.data && (
        <div className="mt-6 pt-6 border-t border-white/10">
          <h3 className="text-lg font-semibold mb-3 text-green-400">Weather Result</h3>
          <div className="space-y-2">
            <p className="text-4xl font-bold">
              {state.data.current_weather.temperature}°C
            </p>
            <p className="text-gray-400">
              Wind Speed: {state.data.current_weather.windspeed} km/h
            </p>
            <p className="text-gray-400">
              Wind Direction: {state.data.current_weather.winddirection}°
            </p>
            <p className="text-gray-400">
              Weather Code: {state.data.current_weather.weathercode}
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Data from Open-Meteo API
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
