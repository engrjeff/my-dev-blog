import Image from 'next/image';

interface BannerImageProps {
  src: string;
  alt: string;
}

const BannerImage = ({ src, alt }: BannerImageProps) => {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        blurDataURL={src}
        placeholder="blur"
        fill
        className="rounded-lg object-cover object-center"
      />
    </div>
  );
};

export default BannerImage;
