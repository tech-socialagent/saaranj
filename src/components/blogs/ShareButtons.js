// ShareButtons.js
'use client';

import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShare } from 'react-icons/fa';

const ShareButton = ({ platform, url, title }) => {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };

    const handleShare = (e) => {
        e.preventDefault();
        window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleShare}
            aria-label={`Share on ${platform}`}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-primary hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
        >
            {platform === 'facebook' && <FaFacebookF className="w-4 h-4" />}
            {platform === 'twitter' && <FaTwitter className="w-4 h-4" />}
            {platform === 'linkedin' && <FaLinkedinIn className="w-4 h-4" />}
        </button>
    );
};

const ShareButtons = ({ url, title }) => {
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        setCanShare(!!navigator.share);
    }, []);

    const handleNativeShare = async () => {
        try {
            await navigator.share({
                title,
                url
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <div className="flex space-x-2">
            <ShareButton platform="facebook" url={url} title={title} />
            <ShareButton platform="twitter" url={url} title={title} />
            <ShareButton platform="linkedin" url={url} title={title} />
            {canShare && (
                <button
                    onClick={handleNativeShare}
                    aria-label="Share article"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-primary hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
                >
                    <FaShare className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default ShareButtons;