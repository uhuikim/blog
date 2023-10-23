import * as React from 'react';
import styles from './BlogSummaryCard.module.scss';
import dayjs from 'dayjs';
import Link from 'next/link';
import { BlogFrontmatterType } from '@/types/blog';

function BlogSummaryCard(props: BlogFrontmatterType) {

  const { title, slug, publishedOn, abstract, tags } = props;
  const href = `/posts/${slug}`;

  const humanizedDate =
    dayjs(new Date(publishedOn)).format('YYYY.MM.DD')

  return (
    <>
      <ul className={styles.tagList}>
        {tags?.map((tagName) => (
          <li key={tagName}>
            <Link href={`/posts?category=${tagName}`}>{`# ${tagName}`}</Link>
          </li>
        ))}
      </ul>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <p className={styles.abstract}>{abstract}</p>
      <div className={styles.more}>
        <time className={styles.time} dateTime={publishedOn}>
          {humanizedDate}
        </time>
        <Link href={href} className={styles.continueReadingLink}>
          Read More
        </Link>
      </div>
    </>
  )
}

export default BlogSummaryCard;
