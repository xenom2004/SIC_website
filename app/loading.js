export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                <div className="mt-4 text-gray-600 text-lg font-semibold">Loading...</div>
            </div>
        </div>
    );
}
