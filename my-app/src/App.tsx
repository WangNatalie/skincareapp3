"use client"

import React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import "./App.css"
import {supabase} from './utils/supabaseClient'

function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    fullName: "",
    skinType: "",
    pregnantOrBreastfeeding: "",
    skinConcerns: [] as string[],
    productPreferences: [] as string[],
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

  const handleSkinTypeSelect = (skinType: string) => {
    setFormData({
      ...formData,
      skinType,
    })
  }

  const handleSkinConcernToggle = (concern: string) => {
    setFormData((prev) => {
      const currentConcerns = [...prev.skinConcerns]
      if (currentConcerns.includes(concern)) {
        // Remove if already selected
        return {
          ...prev,
          skinConcerns: currentConcerns.filter(item => item !== concern)
        }
      } else {
        // Add if not already selected
        return {
          ...prev,
          skinConcerns: [...currentConcerns, concern]
        }
      }
    })
  }

  const handleProductPrefToggle = (preference: string) => {
    setFormData((prev) => {
      const currentPrefs = [...prev.productPreferences]
      if (currentPrefs.includes(preference)) {
        // Remove if already selected
        return {
          ...prev,
          productPreferences: currentPrefs.filter(item => item !== preference)
        }
      } else {
        // Add if not already selected
        return {
          ...prev,
          productPreferences: [...currentPrefs, preference]
        }
      }
    })
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async () => {
    try {
      // Insert the data into Supabase
      const { data, error } = await supabase
        .from('user')
        .insert([
          { 
            gender: formData.gender,
            age: formData.age,
            name: formData.fullName,
            skin_type: formData.skinType,
            pregnancy: formData.pregnantOrBreastfeeding,
            concern: formData.skinConcerns,
            medications: formData.medications
          } 
        ])
        .select()
  
      if (error) {
        throw error;
      }
  
      console.log('User information saved:', data);
      // Navigate to the next page or show success message
      // Example: router.push('/dashboard');
      
    } catch (error) {
      console.error('Error saving user information:', error);
      // Show error message to user
    }
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-black">
      {/* Screen 1 */}
      {step === 1 && (
        <div className="w-[95%] h-[90%] bg-white rounded-lg p-12 flex flex-col relative">
          <h2 className="text-gray-500 mb-6 text-xl">user quiz screen</h2>

          {/* Progress bar */}
          <div className="h-2 w-full bg-gray-200 rounded-full mb-16">
            <div className="h-2 bg-purple-300 rounded-full w-1/4"></div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              {/* Gender question */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">What is your gender?</p>
                </div>

                <div className="flex gap-6">
                  <button
                    className={`border-2 rounded-lg p-8 flex flex-col items-center justify-center w-48 h-48 ${formData.gender === "Female" ? "border-purple-400" : "border-gray-300"}`}
                    onClick={() => handleGenderSelect("Female")}
                    type="button"
                  >
                    <div className="text-purple-400 text-5xl mb-4">♀</div>
                    <span className="text-xl">Female</span>
                  </button>

                  <button
                    className={`border-2 rounded-lg p-8 flex flex-col items-center justify-center w-48 h-48 ${formData.gender === "Male" ? "border-purple-400" : "border-gray-300"}`}
                    onClick={() => handleGenderSelect("Male")}
                    type="button"
                  >
                    <div className="text-purple-400 text-5xl mb-4">♂</div>
                    <span className="text-xl">Male</span>
                  </button>

                  <button
                    className={`border-2 rounded-lg p-8 flex flex-col items-center justify-center w-48 h-48 ${formData.gender === "Other" ? "border-purple-400" : "border-gray-300"}`}
                    onClick={() => handleGenderSelect("Other")}
                    type="button"
                  >
                    <div className="text-purple-400 text-5xl mb-4">⚧</div>
                    <span className="text-xl">Other</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              {/* Age question */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">What is your age?</p>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="w-full px-8 py-6 rounded-full bg-purple-100 text-center focus:outline-none text-xl"
                  />
                </div>
              </div>

              {/* Full name question */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">What is your full name?</p>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-8 py-6 rounded-full bg-purple-100 text-center focus:outline-none text-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Next button - positioned at bottom right */}
          <div className="absolute bottom-12 right-12 w-72">
            <button
              onClick={handleNext}
              className="w-full py-6 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition-colors text-xl font-medium"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Screen 2 */}
      {step === 2 && (
        <div className="w-[95%] h-[90%] bg-white rounded-lg p-12 flex flex-col relative">
          <h2 className="text-gray-500 mb-6 text-xl">user screen 2</h2>

          {/* Progress bar */}
          <div className="h-2 w-full bg-gray-200 rounded-full mb-16">
            <div className="h-2 bg-purple-300 rounded-full w-2/3"></div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              {/* Skin type question with toggle buttons */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">What is your skin type?</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {["Dry", "Oily", "Combination", "Normal", "Sensitive"].map((type) => (
                    <button
                      key={type}
                      onClick={() => handleSkinTypeSelect(type)}
                      className={`px-6 py-3 rounded-full text-lg ${
                        formData.skinType === type
                          ? "bg-purple-400 text-white"
                          : "bg-gray-100 text-gray-700 border border-gray-300"
                      }`}
                      type="button"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pregnant or breastfeeding dropdown */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">Are you pregnant or breastfeeding?</p>
                </div>

                <div className="relative w-full">
                  <select
                    name="pregnantOrBreastfeeding"
                    value={formData.pregnantOrBreastfeeding}
                    onChange={handleSelectChange}
                    className="w-full px-8 py-6 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none bg-white text-black text-xl"
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                  </select>
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="text-gray-400" size={28} />
                  </div>
                </div>
              </div>

              {/* Skin concerns multi-select toggle buttons */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">What are your main skin concerns?</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {["Acne", "Aging", "Dryness", "Hyperpigmentation", "Redness", "Sensitivity", "Uneven Texture"].map((concern) => (
                    <button
                      key={concern}
                      onClick={() => handleSkinConcernToggle(concern)}
                      className={`px-6 py-3 rounded-full text-lg ${
                        formData.skinConcerns.includes(concern)
                          ? "bg-purple-400 text-white"
                          : "bg-gray-100 text-gray-700 border border-gray-300"
                      }`}
                      type="button"
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              {/* Product preferences multi-select toggle buttons */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">Do you have any product preferences?</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {["Vegan", "Cruelty-free", "Fragrance-free", "Sustainable"  ].map((pref) => (
                    <button
                      key={pref}
                      onClick={() => handleProductPrefToggle(pref)}
                      className={`px-6 py-3 rounded-full text-lg ${
                        formData.productPreferences.includes(pref)
                          ? "bg-purple-400 text-white"
                          : "bg-gray-100 text-gray-700 border border-gray-300"
                      }`}
                      type="button"
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              {/* Medications question */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-5 h-5 rounded-full bg-purple-300 mr-3"></div>
                  <p className="text-black text-xl font-medium">Are you currently on any medications?</p>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                    className="w-full px-8 py-6 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none bg-white text-black text-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Back and Submit buttons - positioned at bottom right */}
          <div className="absolute bottom-12 right-12 flex gap-6 w-96">
            <button
              onClick={handleBack}
              className="w-1/3 py-6 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors text-xl font-medium"
              type="button"
            >
              Back
            </button>
            <button
              className="w-2/3 py-6 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition-colors text-xl font-medium"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App