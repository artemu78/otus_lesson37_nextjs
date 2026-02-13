export default function Loading() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Weather & Local Data</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg h-48 animate-pulse">
                        <div className="h-6 bg-white/10 rounded w-1/2 mb-4"></div>
                        <div className="h-10 bg-white/10 rounded w-1/3 mb-2"></div>
                        <div className="h-4 bg-white/10 rounded w-1/4"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
