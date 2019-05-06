import React from 'react';
import { Link } from 'gatsby';
// import Author from './Author';
// import Comments from './Comments';
// import Content from './Content';
// import Meta from './Meta';
// import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    title,
  } = post.frontmatter;

  const { html } = post;

  return (
    <div className={styles['post']}>
      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>
    </div>
  );
};

export default Post;
