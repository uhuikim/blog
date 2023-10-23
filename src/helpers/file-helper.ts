import React from 'react';

import fs from 'fs/promises';
import path from 'path';

import matter from 'gray-matter';

import { BlogList } from '@/types/blog';

const readFile = (localPath: string) => {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
};

const readDirectory = (localPath: string) => {
  return fs.readdir(path.join(process.cwd(), localPath));
};

export const getBlogPostList = async () => {
  const fileNames = await readDirectory('/content');

  const blogPosts: BlogList = [];

  const response: Array<Promise<string>> = [];
  fileNames.forEach((fileName) => {
    const rawContent = readFile(`/content/${fileName}`);
    response.push(rawContent);
  });

  await Promise.all(response).then((lists) => {
    for (let i = 0; i < lists.length; i += 1) {
      const fileName = fileNames[i];
      const { data: frontmatter } = matter(lists[i]);
      const { title, abstract, publishedOn, tags, time } = frontmatter;

      blogPosts.push({
        slug: fileName.replace('.mdx', ''),
        title,
        abstract,
        publishedOn,
        tags,
        time
      });
    }
  });

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
};

// metadata와 블로그에서 두번 호출 방지 => React.cache
export const loadBlogPost = React.cache(async function loadBlogPost(slug: string) {
  let rawContent;

  try {
    rawContent = await readFile(`/content/${slug}.mdx`);
  } catch (err) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});
