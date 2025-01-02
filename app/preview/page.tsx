"use client";

import StoryPreview from "../ui/preview/StoryPreview";

export default function PreviewPage() {
    const dummyStory = `
        Once upon a time, there was a brave dog named Max. 
        He loved exploring the forest and making new friends.
        One day, he found a hidden treasure that changed his life forever.
    `;

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-gray-900">Story Preview</h1>
            <p className="mt-2 text-gray-600">Here's your story:</p>
            <StoryPreview story={dummyStory} />
        </div>
    );
}
