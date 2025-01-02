"use client";

export default function StoryPreview({ story }: { story: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Your Story</h2>
            <p className="mt-4 text-gray-700">{story}</p>
        </div>
    );
}
