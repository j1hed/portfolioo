import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={"rounded-lg border border-gray-700 bg-gray-900 p-6 " + className} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "", ...props }: CardProps) {
  return (
    <div className={"mb-4 " + className} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = "", ...props }: CardProps) {
  return (
    <h3 className={"text-lg font-semibold text-white " + className} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className = "", ...props }: CardProps) {
  return (
    <div className={"text-gray-300 " + className} {...props}>
      {children}
    </div>
  )
}
