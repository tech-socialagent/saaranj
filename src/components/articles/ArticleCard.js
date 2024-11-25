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
    <div className="bg-[#192738] rounded-lg shadow-md overflow-hidden">
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
        <Link href={`/article/${id}`}>
          <h2 className="text-xl font-semibold text-white mb-2 ">
            {title}
          </h2>
        </Link>
        <p className="text-white mb-4">{field_meta_description}</p>
        <Link
          href={`/articles/${field_slug}`}
          className="text-primary font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;