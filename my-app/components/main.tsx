"use client"
import Button from "../components/button";
import React from "react"

interface MainScreenProps {
  onNavigate: () => void
}

export default function MainScreen({ onNavigate }: MainScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] bg-[#d8b7d8] p-6 text-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-serif italic tracking-wide mb-2">Dermify</h1>
          <p className="text-sm">Track. Analyze. Glow.</p>
        </div>
      </div>
      <Button
        onClick={onNavigate}
        className="mt-auto mb-8 bg-white/20 hover:bg-white/30 text-white rounded-full px-6 py-2"
      >
        Get Started
      </Button>
    </div>
  )
}

