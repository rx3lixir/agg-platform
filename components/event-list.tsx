import { Event } from "@/types";
import NoResults from "@/components/ui/no-results";
import EventCard from "@/components/ui/event-card";
import getCategories from "@/actions/get-categories";

interface EventListProps {
  title: string;
  items: Event[];
}

const EventList: React.FC<EventListProps> = async ({ title, items }) => {
  // Получаем категории, мапаем и передаем их в карточки
  const categories = await getCategories();
  const categoryMap = new Map<number, string>();
  categories.forEach((cat) => categoryMap.set(cat.id, cat.name));

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <EventCard key={item.id} data={item} cat={categoryMap} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
