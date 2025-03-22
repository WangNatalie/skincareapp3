"use client"

import { ArrowLeft, ShoppingBag, Home, Settings } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import React from "react"

interface ProductDetailProps {
  onNavigateBack: () => void
}

export default function ProductDetail({ onNavigateBack }: ProductDetailProps) {
  return (
    <div className="flex flex-col h-[600px] bg-white">
      <div className="p-4 border-b flex items-center">
        <button className="mr-4" onClick={onNavigateBack}>
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 text-right text-xs text-gray-500">EXP: 01/24/2026</div>
      </div>

      <div className="p-4">
        <div className="rounded-full bg-[#f9f0f9] aspect-square flex items-center justify-center mb-4">
          <div className="w-24 h-24 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#d8b7d8] rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm text-gray-500">The Ordinary</h2>
          <h1 className="text-lg font-medium">Niacinamide 10% + Zinc 1% Serum</h1>
          <p className="text-sm text-gray-500">(1240 Reviews)</p>
          <p className="text-sm font-medium mt-1">$5.90</p>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Positive Effects</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Brightening</span>
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Smoothing</span>
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Moisturizing</span>
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Anti-Aging</span>
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Skin Texture</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Beneficial For</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Dry Skin</span>
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Pores</span>
                  <span className="px-3 py-1 bg-[#f9f0f9] text-[#b992b9] rounded-full text-xs">Others</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ingredients">
            <p className="text-sm text-gray-600">
              Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum,
              Xanthan gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.
            </p>
          </TabsContent>
          <TabsContent value="reviews">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#b992b9]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">4.8 (1240 reviews)</span>
              </div>

              <p className="text-sm text-gray-600">
                "This product has completely transformed my skin! The niacinamide helps control my oiliness and the zinc
                helps with inflammation. My acne has significantly reduced."
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-auto border-t flex justify-around p-3">
        <button className="flex flex-col items-center" onClick={onNavigateBack}>
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

