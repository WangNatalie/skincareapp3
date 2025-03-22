"use client"

import { useState } from "react"
import Button from "../components/button";
import React from "react"

interface GenderScreenProps {
  onNavigate: () => void
}

export default function GenderScreen({ onNavigate }: GenderScreenProps) {
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [age, setAge] = useState("")
  const [fullName, setFullName] = useState("")

  return (
    <div className="flex flex-col h-[600px] bg-white p-6">
      <div className="h-1 w-full bg-[#d8b7d8] rounded-full mb-8"></div>

      <div className="space-y-6 flex-1">
        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            What is your gender?
          </p>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setSelectedGender("female")}
              className={`border rounded-lg p-4 flex flex-col items-center justify-center ${
                selectedGender === "female" ? "border-[#d8b7d8] bg-[#f9f0f9]" : "border-gray-200"
              }`}
            >
              <div className="h-8 w-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#d8b7d8]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <span className="text-xs mt-1">Female</span>
            </button>

            <button
              onClick={() => setSelectedGender("male")}
              className={`border rounded-lg p-4 flex flex-col items-center justify-center ${
                selectedGender === "male" ? "border-[#d8b7d8] bg-[#f9f0f9]" : "border-gray-200"
              }`}
            >
              <div className="h-8 w-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#d8b7d8]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <span className="text-xs mt-1">Male</span>
            </button>

            <button
              onClick={() => setSelectedGender("other")}
              className={`border rounded-lg p-4 flex flex-col items-center justify-center ${
                selectedGender === "other" ? "border-[#d8b7d8] bg-[#f9f0f9]" : "border-gray-200"
              }`}
            >
              <div className="h-8 w-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#d8b7d8]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <span className="text-xs mt-1">Other</span>
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            What is your age?
          </p>

          <button className="w-full py-3 px-4 bg-[#f9f0f9] rounded-full text-center text-gray-500" onClick={() => {}}>
            Age
          </button>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 flex items-center">
            <span className="h-4 w-4 rounded-full bg-[#d8b7d8] inline-flex mr-2"></span>
            What is your full name?
          </p>

          <button className="w-full py-3 px-4 bg-[#f9f0f9] rounded-full text-center text-gray-500" onClick={() => {}}>
            Full Name
          </button>
        </div>
      </div>

      <Button onClick={onNavigate} className="w-full bg-[#b992b9] hover:bg-[#a883a8] text-white py-3 rounded-full mt-4">
        Next
      </Button>
    </div>
  )
}

