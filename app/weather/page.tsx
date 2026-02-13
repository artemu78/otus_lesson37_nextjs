import { getUsers } from '@/lib/db';
import { WeatherForm } from './WeatherForm';

async function getWeather(lat: number, long: number) {

    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return res.json();
}

export default async function WeatherPage({
    searchParams,
  }: {
    searchParams: Promise<{ lat: number, long: number }>
  }) {
    const {lat = 55, long = 37} = await searchParams;
    const weatherData = await getWeather(lat, long);
    const users = await getUsers();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Weather & Local Data</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Weather Section */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">Current Weather (Moscow {lat}/{long})</h2>
                    <div className="space-y-2">
                        <p className="text-4xl font-bold">{weatherData.current_weather.temperature}°C</p>
                        <p className="text-gray-400">Wind Speed: {weatherData.current_weather.windspeed} km/h</p>
                        <p className="text-xs text-gray-500 mt-4">Data from Open-Meteo API</p>
                    </div>
                </div>

                {/* Local DB Section */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-green-400">Local Users (File System)</h2>
                    <ul className="space-y-2">
                        {users.map((user, index) => (
                            <li key={index} className="p-2 bg-white/5 rounded border border-white/5">
                                {user.email}
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">Data from /data/users_db.txt using fs/promises</p>
                </div>
            </div>

            {/* Server Action Form */}
            <div className="max-w-2xl">
                <WeatherForm />
            </div>
        </div>
    );
}
