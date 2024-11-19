import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Testimonial = {
  avis: string;
  name: string;
  job: string;
  image?: {
    src: string;
    alt: string;
  };
};

type InteractiveCarouselProps = {
  testimonials: Testimonial[]; // Une liste de témoignages
};

const InteractiveCarousel: React.FC<InteractiveCarouselProps> = ({
  testimonials,
}) => {
  return (
    <Carousel className="relative mx-auto w-full max-w-4xl">
      <CarouselContent className="flex gap-4">
        {testimonials.map(({ avis, name, job, image }, index) => (
          <CarouselItem
            key={index}
            className="bg-blue-light relative flex min-w-full flex-col items-center rounded-3xl p-6 shadow-md"
          >
            <div className="rounded-3xl bg-white p-5 pb-12">
              <Quote className="mx-auto size-12" />
              <blockquote className="mt-6 text-center">
                <p className="text-sm text-gray-600">{avis}</p>
              </blockquote>
            </div>

            <div className="-mt-8 flex flex-col items-center">
              {image && (
                <img
                  src={image.src}
                  className="h-16 w-16 rounded-full border border-gray-200 object-cover"
                  width={64}
                  height={64}
                  alt={image.alt}
                />
              )}
              <p className="text-dark mt-4 text-base font-bold">{name}</p>
              <p className="text-sm text-gray-500">{job}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default InteractiveCarousel;
