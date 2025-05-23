import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface GalleryTabProps {
  data: string[];
}

const GalleryTab: React.FC<GalleryTabProps> = ({ data }) => {
  return (
    <div className="w-full">
      <Carousel className="w-full max-w-lg mx-auto">
        <CarouselContent>
          {data.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square relative overflow-hidden rounded-lg border">
                <Image
                  src={imageUrl}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {data.length > 1 && (
          <>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default GalleryTab;
