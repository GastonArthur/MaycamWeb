interface LoadingSpinnerProps {
  message?: string
}

export default function LoadingSpinner({ message = "Cargando..." }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background text-foreground">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-violet-500 border-opacity-20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-violet-500 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg text-violet-400">{message}</p>
    </div>
  )
}

