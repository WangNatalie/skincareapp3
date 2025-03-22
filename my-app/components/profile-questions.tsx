"use client"

import Button from "../components/button"
import React from "react"

interface ProfileQuestionsScreenProps {
  onNavigate: () => void
}

export default function ProfileQuestionsScreen({ onNavigate }: ProfileQuestionsScreenProps) {
  return (
    <div className="flex flex-col h-[600px] bg-white p-6">
      <div className="h-1 w-full bg-[#d8b7d8] rounded-full mb-8"></div>

      <div className="space-y-6 flex-1">
        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            What is your skin type?
          </p>

          <button className="w-full py-3 px-4 border rounded-lg text-left flex justify-between items-center">
            <span className="text-gray-500">Select an Option</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            Are you pregnant or breastfeeding?
          </p>

          <button className="w-full py-3 px-4 border rounded-lg text-center text-gray-500">No</button>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            What are your main skin concerns?
          </p>

          <button className="w-full py-3 px-4 border rounded-lg text-center text-gray-500">Acne</button>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            Do you have any product preferences?
          </p>

          <button className="w-full py-3 px-4 border rounded-lg text-center text-gray-500">Vegan</button>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            Are you currently on any medications?
          </p>

          <button className="w-full py-3 px-4 border rounded-lg text-center text-gray-500">Birth Control</button>
        </div>
      </div>

      <Button onClick={onNavigate} className="w-full bg-[#b992b9] hover:bg-[#a883a8] text-white py-3 rounded-full mt-4">
        Next
      </Button>
    </div>
  )
}

