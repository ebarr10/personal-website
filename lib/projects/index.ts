import { changelogscribe } from "./changelogscribe";
import { cookingclub } from "./cookingclub";
import { clothingstore } from "./clothingstore";
import type { FeaturedProject } from "./types";

export const featuredProjects: FeaturedProject[] = [
    changelogscribe,
    clothingstore,
    cookingclub,
];

export function getFeaturedProject(slug: string) {
    return featuredProjects.find((p) => p.slug === slug);
}
