"use client"

import { ArrowLeft, Plus, ShoppingBag, Home, Settings } from "lucide-react"
import React from "react"

interface SkincareFridgeProps {
  onNavigateToHome: () => void
  onNavigateToProduct: () => void
}

export default function SkincareFridge({ onNavigateToHome, onNavigateToProduct }: SkincareFridgeProps) {
  return (
    <div className="flex flex-col h-[600px] bg-white">
      <div className="p-4 border-b flex items-center">
        <button className="mr-4" onClick={onNavigateToHome}>
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-medium">Add Products</h1>
      </div>

      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full py-2 pl-10 pr-4 border rounded-lg text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-3 top-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button className="bg-[#6b76c5] text-white p-3 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Scan Barcode</span>
          </button>

          <button className="bg-[#b992b9] text-white p-3 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Add Manually</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div
            className="rounded-full bg-[#f9f0f9] aspect-square flex items-center justify-center"
            onClick={onNavigateToProduct}
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#d8b7d8] rounded-full"></div>
            </div>
          </div>

          <div className="rounded-full bg-[#f9f0f9] aspect-square flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#d8b7d8] rounded-full"></div>
            </div>
          </div>

          <div className="rounded-full bg-[#f9f0f9] aspect-square flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#d8b7d8] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="rounded-full bg-[#f9f0f9] aspect-square flex items-center justify-center mb-4">
          <Plus className="h-8 w-8 text-[#b992b9]" />
        </div>
      </div>

      <div className="mt-auto border-t flex justify-around p-3">
        <button className="flex flex-col items-center" onClick={onNavigateToHome}>
          <Home className="h-5 w-5 text-gray-400" />
          <span className="text-xs text-gray-500 mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <ShoppingBag className="h-5 w-5 text-[#b992b9]" />
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

