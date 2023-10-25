import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helper';

import styles from './page.module.scss';

const Home = async () => {
  const blogPosts = await getBlogPostList();

  return (
    <main className={styles.container}>
      {blogPosts.map(({ slug, ...delegated }) => (
        <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </main>
  );
};

export default Home;
