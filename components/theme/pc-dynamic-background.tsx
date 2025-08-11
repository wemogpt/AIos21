"use client"

import { useTheme } from "@/components/providers/theme-provider"

export function PCDynamicBackground() {
  const { primaryColor, secondaryColor } = useTheme()

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main gradient background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}15 0%, ${secondaryColor}15 100%)`,
        }}
      />
      
      {/* Animated gradient orbs */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`,
          animation: "float 20s ease-in-out infinite",
        }}
      />
      
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${secondaryColor}40 0%, transparent 70%)`,
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${primaryColor}50 1px, transparent 1px),
            linear-gradient(90deg, ${primaryColor}50 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>
    </div>
  )
}
