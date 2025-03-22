"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SkinCareQuiz() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    fullName: "",
    skinType: "",
    pregnantOrBreastfeeding: "No",
    skinConcerns: "Acne",
    productPreferences: "Vegan",
    medications: "Birth Control",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleGenderSelect = (gender: string) => {
    setFormData({
      ...formData,
      gender,
    })
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Screen 1 */}
        <div className={`bg-white rounded-lg p-8 flex flex-col ${step === 2 ? "hidden md:flex" : ""}`}>
          <h2 className="text-gray-500 mb-4 text-lg">user quiz screen</h2>

          {/* Progress bar */}
          <div className="h-1 w-full bg-gray-200 rounded-full mb-12">
            <div className="h-1 bg-purple-300 rounded-full w-1/4"></div>
          </div>

          {/* Gender question */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">What is your gender?</p>
            </div>

            <div className="flex space-x-4">
              <button
                className={`border rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 ${formData.gender === "Female" ? "border-purple-400" : "border-gray-300"}`}
                onClick={() => handleGenderSelect("Female")}
              >
                <div className="text-purple-400 text-3xl mb-2">♀</div>
                <span>Female</span>
              </button>

              <button
                className={`border rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 ${formData.gender === "Male" ? "border-purple-400" : "border-gray-300"}`}
                onClick={() => handleGenderSelect("Male")}
              >
                <div className="text-purple-400 text-3xl mb-2">♂</div>
                <span>Male</span>
              </button>

              <button
                className={`border rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 ${formData.gender === "Other" ? "border-purple-400" : "border-gray-300"}`}
                onClick={() => handleGenderSelect("Other")}
              >
                <div className="text-purple-400 text-3xl mb-2">⚧</div>
                <span>Other</span>
              </button>
            </div>
          </div>

          {/* Age question */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">What is your age?</p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age"
                className="w-full px-6 py-4 rounded-full bg-purple-100 text-center focus:outline-none"
              />
            </div>
          </div>

          {/* Full name question */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">What is your full name?</p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-6 py-4 rounded-full bg-purple-100 text-center focus:outline-none"
              />
            </div>
          </div>

          {/* Next button */}
          <div className="mt-auto">
            <button
              onClick={handleNext}
              className="w-full py-4 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        {/* Screen 2 */}
        <div className={`bg-white rounded-lg p-8 flex flex-col ${step === 1 ? "hidden md:flex" : ""}`}>
          <h2 className="text-gray-500 mb-4 text-lg">user screen 2</h2>

          {/* Progress bar */}
          <div className="h-1 w-full bg-gray-200 rounded-full mb-12">
            <div className="h-1 bg-purple-300 rounded-full w-2/3"></div>
          </div>

          {/* Skin type question */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">What is your skin type?</p>
            </div>

            <div className="relative w-full">
              <select
                name="skinType"
                value={formData.skinType}
                onChange={handleSelectChange}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 appearance-none focus:outline-none"
              >
                <option value="">Select an Option</option>
                <option value="Dry">Dry</option>
                <option value="Oily">Oily</option>
                <option value="Combination">Combination</option>
                <option value="Normal">Normal</option>
                <option value="Sensitive">Sensitive</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Pregnant or breastfeeding question */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">Are you pregnant or breastfeeding?</p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="pregnantOrBreastfeeding"
                value={formData.pregnantOrBreastfeeding}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 text-center focus:outline-none"
                readOnly
              />
            </div>
          </div>

          {/* Skin concerns question */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">What are your main skin concerns?</p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="skinConcerns"
                value={formData.skinConcerns}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 text-center focus:outline-none"
              />
            </div>
          </div>

          {/* Product preferences question */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">Do you have any product preferences?</p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="productPreferences"
                value={formData.productPreferences}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 text-center focus:outline-none"
              />
            </div>
          </div>

          {/* Medications question */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-300 mr-2"></div>
              <p className="text-black">Are you currently on any medications?</p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="medications"
                value={formData.medications}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 text-center focus:outline-none"
              />
            </div>
          </div>

          {/* Next button */}
          <div className="mt-auto">
            <button className="w-full py-4 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

