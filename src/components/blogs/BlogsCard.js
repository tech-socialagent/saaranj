import Link from 'next/link';
import Image from 'next/image';

const ArticleCard = ({ article }) => {
  const {
    id,
    attributes: { title, body, field_meta_description, created, field_slug },
    imageUrl
  } = article;

  const formattedDate = new Date(created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
    href={`/blogs/${field_slug}`} className="bg-[#192738] rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-sm text-white mb-2">{formattedDate}</p>
          <h2 className="text-xl font-semibold text-white mb-2 ">
            {title}
          </h2>
        <p className="text-white mb-4">{field_meta_description}</p>
        <div
          className="text-primary font-medium"
        >
          Read More →
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;