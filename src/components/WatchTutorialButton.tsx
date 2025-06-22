"use client";
import { Button } from "@/components/ui/button";

export const WatchTutorialButton = () => (
    <Button
        className="text-white px-4 py-3 rounded-md transition-colors flex items-center gap-3 border-[1px] border-gray-700 hover:border-gray-600"
        onClick={() => {
            window.open(
                "https://www.youtube.com/@theyetinepal/playlists",
                "_blank"
            );
        }}
    >
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                width: "22px",
                height: "22px",
            }}
        >
            <title>YouTube</title>
            <path
                fill="#dc2626"
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            />
        </svg>
        <span className="text-base">Watch My Free Tutorials</span>
    </Button>
);
