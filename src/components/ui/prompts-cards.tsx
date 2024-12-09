import { calculateReadingTime, cn } from "@/lib/utils";
import type { PromptType } from "@/types/sanityTypes";
import { useMemo, useState } from "react";

export const promptsCategories = [
  {
    title: "Tous",
    value: "all",
    textColor: "text-blue",
    bgColorLight: "bg-blue-light",
    bgColor: "bg-blue",
    buttonBorder: "border-blue",
  },
  {
    title: "Social Listening",
    value: "social-listening",
    textColor: "text-green",
    bgColorLight: "bg-green-light",
    bgColor: "bg-green",
    buttonBorder: "border-green",
  },
  {
    title: "Veille Concurrentielle",
    value: "veille-concurrentielle",
    textColor: "text-purple",
    bgColorLight: "bg-purple-light",
    bgColor: "bg-purple",
    buttonBorder: "border-purple",
  },
  {
    title: "E-réputation",
    value: "e-reputation",
    textColor: "text-orange",
    bgColorLight: "bg-orange-light",
    bgColor: "bg-orange",
    buttonBorder: "border-orange",
  },
  {
    title: "Stratégie digitale",
    value: "strategie-digitale",
    textColor: "text-blue",
    bgColorLight: "bg-blue-light",
    bgColor: "bg-blue",
    buttonBorder: "border-blue",
  },
];

export const categoryStyles = promptsCategories.reduce(
  (acc, category) => {
    acc[category.value] = {
      textColor: category.textColor,
      bgColor: category.bgColor,
    };
    return acc;
  },
  {} as Record<string, { textColor: string; bgColor: string }>,
);

export const PromptsCards = ({ prompts }: { prompts: PromptType[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    promptsCategories[0].value,
  );

  const filteredPrompts = useMemo(() => {
    return selectedCategory === "all"
      ? prompts
      : prompts.filter((prompt) => prompt.category === selectedCategory);
  }, [selectedCategory, prompts]);
  return (
    <>
      <div className="my-6 flex items-center gap-2 overflow-y-scroll">
        {promptsCategories.map((category) => (
          <button
            key={category.value}
            className={cn(
              category.buttonBorder,
              "text-nowrap rounded-full border-2 px-5 py-1 text-sm ring-0 transition-colors",
              selectedCategory === category.value &&
                `${category.bgColor} text-white`,
            )}
            aria-pressed={selectedCategory === category.value}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPrompts.map((prompt) => (
          <a
            href={"/resources/prompts/" + prompt.slug.current}
            className={cn(
              promptsCategories.find(
                (category) => category.value === prompt.category,
              )?.bgColorLight,
              "space-y-2 rounded-3xl transition-all hover:translate-x-2",
            )}
          >
            {prompt.imageUrl && (
              <img
                src={prompt.imageUrl}
                alt={prompt.title}
                className="h-32 w-full rounded-3xl object-cover"
                loading="lazy"
              />
            )}
            <div className="px-4 py-3">
              <div
                className={cn(
                  "flex w-fit items-center rounded-full bg-white px-2 py-1",
                  categoryStyles[prompt.category].textColor,
                )}
              >
                <div
                  className={cn(
                    "mr-2 inline-block h-4 w-4 rounded-full",
                    categoryStyles[prompt.category].bgColor,
                  )}
                ></div>
                <p>
                  {
                    promptsCategories.find(
                      (category) => category.value === prompt.category,
                    )?.title
                  }
                </p>
              </div>
              <p className="mb-1 mt-2 font-sans text-xl font-semibold leading-tight">
                {prompt.title}
              </p>
              <div className="text-sm font-normal">
                {new Date(prompt.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" • "}
                {calculateReadingTime(prompt.prompt + prompt.response) +
                  " min de lecture"}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
