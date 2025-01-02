"use client";

import StoryForm from "../ui/form/StoryForm";

export default function CreatePage() {
    const handleFormSubmit = async (data: any) => {
        console.log("Form submitted:", data);
        // TODO: Call API to generate story and image
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-gray-900">Create a Story</h1>
            <p className="mt-2 text-gray-600">
                Fill out the details below to generate a custom story for your pet.
            </p>
            <StoryForm onSubmit={handleFormSubmit} />
        </div>
    );
}
