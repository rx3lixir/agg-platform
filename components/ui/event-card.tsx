"use client";
import { useRouter } from "next/navigation";
import { Expand, PlusCircle } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import { toast } from "sonner";

interface EventData {
  id: number;
  name: string;
  description: string;
  category_id: number;
  date: string;
  time: string;
  location: string;
  price: number;
  image: string;
  source: string;
}

interface EventCardProps {
  data: EventData;
  cat: Map<number, string>;
}

const EventCard: React.FC<EventCardProps> = ({ data, cat }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => {
    router.push(`/event/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 hover:shadow transition"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.image}
          fill
          unoptimized
          alt="Концерт"
          className="aspect-square object-cover rounded-md"
        />

        {/* Badge с локацией */}
        <Badge variant="secondary" className="absolute top-2 left-2">
          {cat.get(data.category_id) || "Н/И"}
        </Badge>

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={
                <Expand
                  size={20}
                  className="text-gray-600 hover:cursor-pointer"
                />
              }
            />
            <IconButton
              onClick={() => {
                toast.success("Событие добавлено!");
              }}
              icon={
                <PlusCircle
                  size={20}
                  className="text-gray-600 hover:cursor-pointer"
                />
              }
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="font-normal text-sm text-gray-600">
          {formatDate(data.date)} | {data.time}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default EventCard;
