import { cn } from "@/lib/utils"
import DotPattern from "./ui/dot-pattern"

const HeadingBox = ({ title }) => {
  return (
    <div className="relative flex h-24 w-full flex-col items-center justify-center overflow-hidden border-y bg-background">
      <h1 className="z-10 text-center text-lg uppercase font-bold ">
        {title}
      </h1>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  )
}

export default HeadingBox