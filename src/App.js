'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const entities = [
  'Evolution',
  'Structural Bioinformatics',
  'Engineering',
  'Multi-OMICs',
  'Biological System'
]

function App() {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', updateDimensions)
    updateDimensions()
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2
  const radius = Math.min(dimensions.width, dimensions.height) * 0.25

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-0 right-0 text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center">
          <motion.span
            className="inline-block w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full mr-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          The Systeome Project
        </h1>
      </motion.div>
      
      <svg width={dimensions.width} height={dimensions.height} className="absolute inset-0">
        <defs>
          <radialGradient id="network-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(76, 175, 80, 0.6)" />
            <stop offset="100%" stopColor="rgba(76, 175, 80, 0)" />
          </radialGradient>
        </defs>
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius * 1.5}
          fill="url(#network-gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={20}
          fill="#4CAF50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        {entities.map((entity, index) => {
          const angle = (index / entities.length) * 2 * Math.PI
          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)
          const textX = centerX + (radius + 30) * Math.cos(angle)
          const textY = centerY + (radius + 30) * Math.sin(angle)
          return (
            <g key={entity}>
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth={2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r={10}
                fill="#2196F3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              />
              <motion.text
                x={textX}
                y={textY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              >
                {entity}
              </motion.text>
            </g>
          )
        })}
      </svg>

      <motion.div
        className="absolute bottom-4 left-0 right-0 text-center text-yellow-300 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="text-lg md:text-xl font-semibold"
          animate={{ 
            textShadow: [
              '0 0 5px rgba(255,255,0,0.5)',
              '0 0 20px rgba(255,255,0,0.5)',
              '0 0 5px rgba(255,255,0,0.5)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          AI powered
        </motion.div>
        <div className="text-sm md:text-base text-gray-400 mt-1">
          Illuminating the future of systems biology
        </div>
        <motion.div 
          className="text-xs mt-2 text-gray-500"
          whileHover={{ color: '#FFFF00' }}
          transition={{ duration: 0.3 }}
        >
          <a 
            href="https://biodavidjm.github.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            &copy; biodavidjm
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App