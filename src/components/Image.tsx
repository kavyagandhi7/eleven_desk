import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className, ...props }: ImageProps) => {
  // Generate WebP URL
  const webpSrc = src.includes('unsplash.com') 
    ? `${src}&fm=webp&q=80` 
    : src;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
        {...props}
      />
    </picture>
  );
};

export default Image; 