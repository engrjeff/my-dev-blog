import Image from 'next/image';
import React from 'react';

interface BannerImageProps {
  src: string;
  alt: string;
}

const BannerImage = ({ src, alt }: BannerImageProps) => {
  return (
    <div className='relative aspect-video rounded-lg'>
      <Image src={src} alt={alt} layout='fill' className='rounded-lg' objectFit='cover' />
    </div>
  );
};

export default BannerImage;
