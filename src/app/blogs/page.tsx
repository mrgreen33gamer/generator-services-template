'use client';
import styles from './page.module.scss';
import BlogCard from '#/BlogComponents/BlogCard/BlogCard';
import { getAllPosts, getAllCategories } from '../../../libs/blog-posts';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = ['All', ...getAllCategories()];
  const featured = allPosts[0];
  const rest = allPosts.slice(1);

  return (
    <main className={styles.page}>

      <section className={styles.pageHeader}>
        <motion.div
          className={styles.pageHeaderInner}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>Insights &amp; Resources</span>
          <h1 className={styles.pageTitle}>PowerHold Generators — Blog Center</h1>
          <p className={styles.pageSubtitle}>
            Practical generator safety tips, component & cable repair guidance, and generator maintenance advice for Central Texas homeowners.
          </p>
        </motion.div>
      </section>

      <section className={styles.filterBar}>
        <div className={styles.filterInner}>
          {categories.map((cat, i) => (
            <button key={i} className={`${styles.filterBtn} ${i === 0 ? styles.active : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {featured && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <span className={styles.sectionLabel}>Featured</span>
            <BlogCard post={featured} index={0} featured />
          </div>
        </section>
      )}

      {rest.length > 0 && <div className={styles.divider} />}

      {rest.length > 0 && (
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <span className={styles.sectionLabel}>Latest Posts</span>
            <div className={styles.grid}>
              {rest.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.blogCTAStrip}>
        <div className={styles.container}>
          <motion.div
            className={styles.blogCTAInner}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className={styles.blogCTAHeading}>
              Need a licensed generator technician in Central Texas?
            </p>
            <p className={styles.blogCTABody}>
              We&apos;ve been powering Waco-area homes and businesses with expert generator repair, component & cable repair, and installations since 2011. Free estimate, no obligations.
            </p>
            <Link href="/contact" className={styles.blogCTABtn}>
              Get Your Free Estimate Today
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
