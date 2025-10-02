import { memo, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { posts } from './data/posts';

const BlogPost = () => {
    const intl = useIntl();
    const { slug } = useParams();

    // Find the post by slug
    const post = posts.find(p => p.slug === slug);
    useEffect(() => {
        console.log("post");
    }, []);
    useEffect(() => {
        console.log("post", post);
    }, [post]);
    if (!post) {
        return <div>Post not found</div>;
    }

    const Content = memo(post.content);
    return (
        <div className="blog-post">
            <div className="blog-post-header">
                <h1>
                    {intl.formatMessage({ id: post.title })}
                </h1>
                <div className="blog-post-meta">
                    <span className="category">
                        <FormattedMessage id={post.category} />
                    </span>
                    <span className="author">{post.author}</span>
                    <span className="date">{post.date}</span>
                </div>
                <div className="blog-post-description">
                    <FormattedMessage id={post.description} />
                </div>
            </div>

            <div className="blog-post-image">
                <img
                    src={post.image}
                    alt={intl.formatMessage({ id: post.title })}
                />
            </div>

            <div className="blog-post-content">
                <Content />
            </div>
        </div>
    );
};

export default memo(BlogPost); 