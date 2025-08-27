"use client";
import React, { useRef } from "react"
import { format } from "date-fns"
import dynamic from "next/dynamic"
import { useFrame } from "@react-three/fiber"
import "@react-three/fiber"
import PricingComponent from "./pricing"

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)

// NeonScene Component
function Spindle() {
  const ref = useRef(null)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = t * 0.2
      ref.current.rotation.y = t * 0.35
    }
  })
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.2, 0.35, 180, 32]} />
      <meshStandardMaterial color="#00ff7f" metalness={0.4} roughness={0.2} emissive="#00ff7f" emissiveIntensity={0.35} />
    </mesh>
  )
}

function NeonScene() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-40">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 60, position: [0, 0, 6] }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={1.2} color="#00ff7f" />
        <directionalLight position={[-5, -4, -6]} intensity={0.3} />
        <Spindle />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  )
}

// UI Components (simplified versions)
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border shadow-lg ${className}`}>{children}</div>
)

const Button = ({ children, variant = "default", disabled = false, onClick, className = "" }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-all duration-200"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const Checkbox = ({ checked, onCheckedChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
  />
)

// Simple Calendar Component
const Calendar = ({ selected, onSelect, className = "" }) => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null)
  
  return (
    <div className={`p-4 ${className}`}>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 font-semibold text-gray-600">{day}</div>
        ))}
        {emptyDays.map((_, i) => <div key={i} className="p-2"></div>)}
        {days.map(day => {
          const date = new Date(currentYear, currentMonth, day)
          const isSelected = selected && selected.getDate() === day && selected.getMonth() === currentMonth
          
          return (
            <button
              key={day}
              onClick={() => onSelect(date)}
              className={`p-2 hover:bg-blue-100 rounded ${isSelected ? 'bg-blue-600 text-white' : ''}`}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Modal Component
const Modal = ({ open, onClose, children }) => {
  if (!open) return null
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        {children}
      </div>
    </div>
  )
}

const TIMES = [
  ["10:00", "11:00"],
  ["11:30", "12:30"],
  ["13:00", "14:00"],
  ["14:30", "15:30"],
  ["16:00", "17:00"],
  ["17:30", "18:30"],
]

// Main Booking Component
export default function BookingComponent() {
  const [date, setDate] = React.useState(new Date(2025, 5, 12))
  const [selected, setSelected] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const dayText = date ? format(date, "d") : "—"
  const subText = date ? `${format(date, "EEEE")}\n${format(date, "d LLLL yyyy")}` : "Pick a date"
  const fullDate = date ? format(date, "EEEE, d LLLL yyyy") : ""
  const timeText = selected ? selected.replace("-", "–") : ""

  const handleBooking = () => {
    setOpen(false)
    alert("Booked! We'll send a confirmation email shortly.")
  }

  return (
    <section aria-label="Booking" className="container relative max-w-7xl mx-auto p-4">
      {/* Custom CSS for neon theme */}
      <style jsx>{`
        .neon-card {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          border: 1px solid #00ff7f;
          box-shadow: 0 0 20px rgba(0, 255, 127, 0.3);
        }
        .neon-text {
          background: linear-gradient(135deg, #00ff7f, #00cc66);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .neon-glow {
          box-shadow: 0 0 15px rgba(0, 255, 127, 0.5);
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .animate-enter {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <NeonScene />
      
      <div className="grid lg:grid-cols-2 gap-12 animate-enter">
        {/* Left: Pricing Section */}
        <div className="neon-card p-8 rounded-lg h-fit">
          <PricingComponent />
        </div>

        {/* Right: Booking Section */}
        <div className="neon-card grid md:grid-cols-2 rounded-lg overflow-hidden min-h-[600px]">
          {/* Left: giant day number */}
          <div className="relative flex flex-col items-center justify-center bg-gray-900 bg-opacity-40 p-10 md:py-16 border-b md:border-b-0 md:border-r border-gray-700 animate-fade-in">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500 to-green-600 opacity-20 blur-3xl" aria-hidden="true" />
            <div className="text-[22vw] md:text-[14vw] leading-none font-serif select-none neon-text">
              {dayText}
            </div>
            <div className="mt-6 text-center text-xs tracking-wide uppercase text-gray-400 whitespace-pre-line animate-fade-in">
              {subText}
            </div>
          </div>

          {/* Right: calendar + times */}
          <div className="p-8 md:p-10 space-y-8 animate-enter bg-gray-900 text-white">
            <header className="space-y-2">
              <h2 className="text-xl font-serif neon-text">Private / Personal</h2>
              <p className="text-sm text-gray-400">June 2025</p>
            </header>

            <div className="grid gap-8">
              <Calendar
                selected={date}
                onSelect={setDate}
                className="p-3 pointer-events-auto rounded-md border border-gray-700 bg-gray-800 bg-opacity-50"
              />

              <div>
                <div className="text-xs font-semibold mb-4 uppercase tracking-wide text-gray-400">Time</div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 animate-fade-in">
                  {TIMES.map(([from, to]) => {
                    const key = `${from}-${to}`
                    const checked = selected === key
                    return (
                      <label
                        key={key}
                        className={`group flex items-center justify-between gap-3 border-b border-gray-700 pb-3 transition-all duration-200 ${checked ? 'bg-gray-800 border-green-400 rounded-md px-3 py-2 ring-1 ring-green-400 neon-glow' : ''}`}
                      >
                        <span className="text-sm text-white">{from} - {to}</span>
                        <Checkbox checked={checked} onCheckedChange={() => setSelected(checked ? null : key)} />
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-700 pt-6 animate-fade-in">
                <div className="text-sm text-gray-400">$20 / 45 min</div>
                <Button
                  variant="outline"
                  disabled={!date || !selected}
                  onClick={() => setOpen(true)}
                  className="hover-scale neon-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                >
                  Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Confirm booking</h3>
          <p className="text-gray-600">
            {fullDate}{timeText ? ` • ${timeText}` : ""}
          </p>
          <div className="flex gap-3 justify-end">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleBooking}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  )
}
