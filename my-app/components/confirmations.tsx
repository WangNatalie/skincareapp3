"use client"

import Button from "../components/button";
import React from "react"

interface ConfirmationScreenProps {
  onNavigate: () => void
}

export default function ConfirmationScreen({ onNavigate }: ConfirmationScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] bg-[#d8b7d8] p-6 text-white">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h2 className="text-xl font-medium mb-2">You're almost done!</h2>
      <p className="text-center text-white/80 mb-8">We're creating your profile.</p>

      <Button onClick={onNavigate} className="mt-auto bg-white/20 hover:bg-white/30 text-white rounded-full px-6 py-2">
        Continue
      </Button>
    </div>
  )
}

