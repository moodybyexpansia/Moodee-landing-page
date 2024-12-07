import { cn } from "@/lib/utils";
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
    <div className="grid items-center gap-10 md:grid-cols-2 lg:grid-cols-5">
      {/* Liste des fonctionnalités */}
      <div className="space-y-6 lg:col-span-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className={cn(
              currentImage === step.image && "bg-white shadow-full",
              "group flex h-40 items-center gap-4 rounded-3xl p-6",
            )}
            onMouseEnter={() => setCurrentImage(step.image)}
          >
            {step.id === 1 && (
              <div className="w-fit rounded-full bg-purple-light p-4">
                <img src="/Folder.png" alt="folder" className="h-auto w-20" />
              </div>
            )}
            {step.id === 2 && (
              <div className="w-fit rounded-full bg-[#D5F2D5] p-4">
                <img src="/Tick.png" alt="tick" className="h-auto w-[4.5rem]" />
              </div>
            )}
            {step.id === 3 && (
              <div className="w-fit rounded-full bg-orange-light p-4">
                <img src="/Star.png" alt="star" className="h-auto w-24" />
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
  <img
    src={image}
    alt="Feature illustration"
    className="w-[40rem] lg:col-span-3"
  />
);

export default ReactHoverImages;
