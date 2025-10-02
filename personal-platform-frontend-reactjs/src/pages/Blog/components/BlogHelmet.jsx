import { Helmet } from 'react-helmet';

const BlogHelmet = ({ title, description, image, type = 'article', url }) => {
    const fullTitle = `${title}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}

         
            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="ItGalaxy.io" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": type === 'article' ? 'BlogPosting' : 'Website',
                    "headline": title,
                    "description": description,
                    "image": image,
                    "author": {
                        "@type": "Organization",
                        "name": "ItGalaxy.io"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "ItGalaxy.io",
                        "logo": {
                            "@type": "ImageObject",
                            "url": `${process.env.REACT_APP_CDN_ITGALAXY}/logo.png`
                        }
                    }
                })}
            </script>
        </Helmet>
    );
};

export default BlogHelmet; 