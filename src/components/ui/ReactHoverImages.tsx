import { cn } from "@/lib/utils";
import { ChartArea, MessageCircleIcon, Settings } from "lucide-react";
import React, { useState } from "react";

// Définition du type pour chaque feature
interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Définition des props attendues
interface ReactHoverImagesProps {
  steps: Step[];
}

const ReactHoverImages: React.FC<ReactHoverImagesProps> = ({ steps }) => {
  // État pour suivre l'image courante
  const [currentImage, setCurrentImage] = useState<string>(steps[0].image);

  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      {/* Liste des fonctionnalités */}
      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className={cn(
              currentImage === step.image &&
                "bg-white shadow-[0_0px_25px_5px_rgba(0,0,0,0.1)]",
              "group flex h-auto items-start gap-4 rounded-3xl p-6",
            )}
            onMouseEnter={() => setCurrentImage(step.image)}
          >
            {step.id === 1 && (
              <div className="w-fit rounded-full bg-purple-light p-3">
                <Settings className="size-6 fill-purple-light text-purple" />
              </div>
            )}
            {step.id === 2 && (
              <div className="w-fit rounded-full bg-green-light p-3">
                <ChartArea className="size-6 fill-green-light text-green" />
              </div>
            )}
            {step.id === 3 && (
              <div className="w-fit rounded-full bg-orange-light p-3">
                <MessageCircleIcon className="size-6 fill-orange-light text-orange" />
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Image dynamique */}
      <ImageDisplay image={currentImage} />
    </div>
  );
};

// Sous-composant pour afficher l'image
interface ImageDisplayProps {
  image: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ image }) => (
  <img src={image} alt="Feature illustration" className="h-auto w-full" />
);

export default ReactHoverImages;
