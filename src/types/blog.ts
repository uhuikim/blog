export type BlogFrontmatterType = {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
  tags: Array<string>;
  time: string;
};

export type BlogList = Array<BlogFrontmatterType>;
