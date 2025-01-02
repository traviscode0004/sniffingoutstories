"use client";

import { useState } from "react";

export default function StoryForm({ onSubmit }: { onSubmit: (data: any) => void }) {
    const [petName, setPetName] = useState("");
    const [petSpecies, setPetSpecies] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ petName, petSpecies });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Create a Story</h2>
            <div>
                <label className="block text-gray-600">Pet Name</label>
                <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="border-2 border-blue-400 rounded-lg p-2 w-full"
                    placeholder="E.g., Max"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-600">Pet Species</label>
                <input
                    type="text"
                    value={petSpecies}
                    onChange={(e) => setPetSpecies(e.target.value)}
                    className="border-2 border-green-400 rounded-lg p-2 w-full"
                    placeholder="E.g., Dog"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-6 py-2 shadow-md"
            >
                Generate Story
            </button>
        </form>
    );
}
