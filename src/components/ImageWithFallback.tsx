import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

const ImageWithFallback = ({ src, alt, className = '', fallbackClassName = '' }: ImageWithFallbackProps) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${fallbackClassName || className}`}>
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-sm">Image placeholder</p>
          <p className="text-xs text-gray-400">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
};

export default ImageWithFallback;
