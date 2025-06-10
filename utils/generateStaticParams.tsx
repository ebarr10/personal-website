import getDisplayMetadata from "./getDisplayMetadata";

export const generateStaticParams = (slug: string) => {
  const pages = getDisplayMetadata(slug);
  return pages.map((page) => ({
    slug: page.slug,
  }));
};
