// pages/articles/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShare } from 'react-icons/fa';
import Link from 'next/link';

const ShareButton = ({ platform, url, title }) => {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };

    const handleShare = () => {
        window.open(shareUrls[platform], '_blank');
    };

    return (
        <button
            onClick={handleShare}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-primary hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
        >
            {platform === 'facebook' && <FaFacebookF className="w-4 h-4" />}
            {platform === 'twitter' && <FaTwitter className="w-4 h-4" />}
            {platform === 'linkedin' && <FaLinkedinIn className="w-4 h-4" />}
        </button>
    );
};

export default function Article({ article, error }) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em]" />
                    <p className="mt-2 text-gray-600">Loading article...</p>
                </div>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-red-600 text-lg mb-4">
                        {error || 'Article not found'}
                    </div>
                    <Link href='/articles'
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Back to Articles
                    </Link>
                </div>
            </div>
        );
    }

    const {
        attributes: {
            title,
            body,
            created,
            field_meta_description,
            field_meta_title
        },
        imageUrl
    } = article.data;

    const formattedDate = new Date(created).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const fullUrl = typeof window !== 'undefined'
        ? window.location.href
        : `https://saaranj.com/articles/${router.query.id}`;

    const metaTitle = field_meta_title || title;
    const metaDescription = field_meta_description ||
        (body?.value ? body.value.substring(0, 160).replace(/<[^>]*>/g, '') : '');

    return (
        <>
            <Head>
                <title>{metaTitle} | Saaranj</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={fullUrl} />
                {imageUrl && <meta property="og:image" content={imageUrl} />}
                <meta property="og:site_name" content="Saaranj" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                {imageUrl && <meta name="twitter:image" content={imageUrl} />}
                <meta property="article:published_time" content={created} />
            </Head>

            <div className="min-h-screen bg-secondary">
                <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => router.push('/articles')}
                        className="mb-8 text-primary font-medium inline-flex items-center"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Articles
                    </button>

                    <article className="bg-[#192738] rounded-lg shadow-lg overflow-hidden">
                        {imageUrl && (
                            <div className="relative w-full h-96">
                                <img
                                    src={imageUrl}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="p-8">
                            <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                <p className="text-white flex items-center">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formattedDate}
                                </p>

                                <div className="flex space-x-2">
                                    <ShareButton platform="facebook" url={fullUrl} title={title} />
                                    <ShareButton platform="twitter" url={fullUrl} title={title} />
                                    <ShareButton platform="linkedin" url={fullUrl} title={title} />
                                    {navigator.share && (
                                        <button
                                            onClick={() => navigator.share({ url: fullUrl, title })}
                                            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-primary hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
                                        >
                                            <FaShare className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div
                                className="prose prose-lg max-w-none text-white prose-img:rounded-lg prose-img:my-8 prose-a:text-blue-600 hover:prose-a:text-blue-800"
                                dangerouslySetInnerHTML={{
                                    __html: body?.processed || body?.value || 'No content available'
                                }}
                            />
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps({ params, req }) {
    try {
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
        const host = req.headers.host;

        const response = await fetch(
            `${protocol}://${host}/api/articles/${params.id}`
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch article (${response.status})`);
        }

        const article = await response.json();

        // Process content to handle relative URLs
        if (article.data.attributes?.body?.value) {
            article.data.attributes.body.value = article.data.attributes.body.value
                .replace(/src="\//g, 'src="https://admin.saaranj.com/');
        }

        return {
            props: {
                article,
                error: null
            }
        };
    } catch (error) {
        console.error('Error in getServerSideProps:', error);
        return {
            props: {
                article: null,
                error: 'Failed to load article'
            }
        };
    }
}