"use client"

import { ArrowLeft, ShoppingBag, Home, Settings } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import React from "react"

interface RoutineScreenProps {
  onNavigateToHome: () => void
}

export default function RoutineScreen({ onNavigateToHome }: RoutineScreenProps) {
  return (
    <div className="flex flex-col h-[600px] bg-white">
      <div className="p-4 border-b flex items-center">
        <button className="mr-4" onClick={onNavigateToHome}>
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-medium">Your Daily Skin Routine</h1>
      </div>

      <div className="p-4 flex-1 overflow-auto">
        <Tabs defaultValue="morning" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="morning">Morning Routine</TabsTrigger>
            <TabsTrigger value="night">Night Routine</TabsTrigger>
          </TabsList>

          <TabsContent value="morning" className="space-y-4">
            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Cleanser</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>

            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Toner</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>

            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                  />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Serum</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>

            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Moisturizer</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>
          </TabsContent>

          <TabsContent value="night" className="space-y-4">
            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Cleanser</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>

            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Toner</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>

            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                  />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Serum</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>

            <div className="border rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#d8b7d8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Moisturizer</p>
              </div>
              <div className="w-6 h-6 border rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#d8b7d8]"
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
            </div>

            <div className="mt-8 flex justify-center">
              <div className="w-16 h-32 bg-[#f9f0f9] rounded-lg flex items-center justify-center">
                <div className="w-8 h-16 bg-[#d8b7d8] rounded-full"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-auto border-t flex justify-around p-3">
        <button className="flex flex-col items-center" onClick={onNavigateToHome}>
          <Home className="h-5 w-5 text-gray-400" />
          <span className="text-xs text-gray-500 mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center">
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

