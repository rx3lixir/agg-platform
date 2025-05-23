import { Event } from "@/types";
import Currency from "./ui/currency";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Badge } from "./ui/badge";

interface InfoProps {
  data: Event;
  cat: Map<number, string>;
}

const Info: React.FC<InfoProps> = ({ data, cat }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900"></p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <div>{data.description}</div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4 relative">
        <div className="grid grid-cols-[120px_1fr] gap-x-4 items-center pl-4">
          <h3 className="font-semibold text-black">Где?</h3>
          <div>{data.location}</div>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-x-4 items-center pl-4">
          <h3 className="font-semibold text-black">Когда?</h3>
          <div>
            {data.date} | {data.time}
          </div>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-x-4 items-center pl-4">
          <h3 className="font-semibold text-black">Подробности</h3>
          <div>{data.source}</div>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-x-4 items-center pl-4">
          <h3 className="font-semibold text-black">Билеты</h3>
          <Currency value={data?.price} />
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-x-4 items-center pl-4">
          <h3 className="font-semibold text-black">Категория</h3>
          <Badge variant="outline">{cat.get(data.category_id) || "Н/и"}</Badge>
        </div>
      </div>
      <div className="mt-10 items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Добавить к себе <CirclePlus size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
