"use client"

import { Home, ShoppingBag, Settings } from "lucide-react"
import React from "react"

interface HomeScreenProps {
  onNavigateToFridge: () => void
  onNavigateToRoutine: () => void
}

export default function HomeScreen({ onNavigateToFridge, onNavigateToRoutine }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-[600px] bg-white">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-medium">Welcome back, </p>
              <p className="text-[#b992b9] font-medium">Jane</p>
            </div>
            <p className="text-xs text-gray-500">Tue, 21 Mar 2025</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-medium mb-2">Routine</h2>

        <div className="space-y-2 mb-6">
          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#f9f0f9] flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#b992b9]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 100 12A6 6 0 0010 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Day Routine</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>AM 7:30</span>
                  <span className="mx-1">•</span>
                  <span>4 steps</span>
                  <span className="mx-1">•</span>
                  <span>Completed?</span>
                </div>
              </div>
            </div>
            <button className="text-[#b992b9]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#f9f0f9] flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#b992b9]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Night Routine</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>PM 9:30</span>
                  <span className="mx-1">•</span>
                  <span>4 steps</span>
                  <span className="mx-1">•</span>
                  <span>Completed?</span>
                </div>
              </div>
            </div>
            <button className="text-[#b992b9]" onClick={onNavigateToRoutine}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <h2 className="font-medium mb-2">Skin Symptoms</h2>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {["Acne", "Dryness", "Redness", "Irritation", "Oiliness"].map((symptom) => (
            <div key={symptom} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-[#f9f0f9] flex items-center justify-center mb-1">
                <div className="w-6 h-6 rounded-full bg-white"></div>
              </div>
              <span className="text-xs text-gray-500">{symptom}</span>
            </div>
          ))}
        </div>

        <h2 className="font-medium mb-2">Recent Products</h2>
        <div className="border rounded-lg p-3 flex items-center" onClick={onNavigateToFridge}>
          <div className="w-12 h-12 bg-[#f9f0f9] rounded-lg flex items-center justify-center mr-3">
            <div className="w-8 h-8 bg-[#d8b7d8] rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">The Ordinary</p>
            <p className="text-sm font-medium">Niacinamide 10% + Zinc 1% Serum</p>
            <div className="flex items-center">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-[#b992b9]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">+1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t flex justify-around p-3">
        <button className="flex flex-col items-center">
          <Home className="h-5 w-5 text-[#b992b9]" />
          <span className="text-xs text-gray-500 mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center" onClick={onNavigateToFridge}>
          <ShoppingBag className="h-5 w-5 text-gray-400" />
          <span className="text-xs text-gray-500 mt-1">Fridge</span>
        </button>
        <button className="flex flex-col items-center relative">
          <div className="absolute -top-5 w-10 h-10 rounded-full bg-[#b992b9] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500 mt-5">Routine</span>
        </button>
        <button className="flex flex-col items-center">
          <Settings className="h-5 w-5 text-gray-400" />
          <span className="text-xs text-gray-500 mt-1">Settings</span>
        </button>
      </div>
    </div>
  )
}
