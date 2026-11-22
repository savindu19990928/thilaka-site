import {
  Activity,
  Bone,
  Droplets,
  Flower2,
  HeartPulse,
  Leaf,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
  Wind,
} from "lucide-react";
import type { CategoryIconName } from "@/lib/site-data";

export function CategoryIcon({
  name,
  className = "w-5 h-5",
}: {
  name: CategoryIconName;
  className?: string;
}) {
  const props = {
    className,
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "leaf":
      return <Leaf {...props} />;
    case "wind":
      return <Wind {...props} />;
    case "activity":
      return <Activity {...props} />;
    case "flower":
      return <Flower2 {...props} />;
    case "sparkles":
      return <Sparkles {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    case "droplets":
      return <Droplets {...props} />;
    case "scale":
      return <Scale {...props} />;
    case "heart":
      return <HeartPulse {...props} />;
    case "smile":
      return <Smile {...props} />;
    case "bone":
      return <Bone {...props} />;
    case "sun":
      return <Sun {...props} />;
  }
}
