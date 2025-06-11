import getDisplayMetadata from "./getDisplayMetadata";

export const generateStatic = (slug: string) => {
  const pages = getDisplayMetadata(slug);
  return pages.map((page) => ({
    slug: page.slug,
  }));
};
