import getEvent from "@/actions/get-event";
import Container from "@/components/ui/container";
import GalleryTab from "@/components/gallery/gallery-tab";
import Info from "@/components/info";
import EventList from "@/components/event-list";
import getCategories from "@/actions/get-categories";

interface ProductPageProps {
  params: {
    eventId: string;
  };
}

const EventPage: React.FC<ProductPageProps> = async ({ params }) => {
  const event = await getEvent(params.eventId);

  // Получаем категории, мапаем и передаем их в карточки
  const categories = await getCategories();
  const categoryMap = new Map<number, string>();
  categories.forEach((cat) => categoryMap.set(cat.id, cat.name));

  const images = [];

  images.push(event.image);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <GalleryTab data={images} />
            <div className="mr-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={event} cat={categoryMap} />
            </div>
          </div>
          <hr className="my-10" />
          <EventList title="Похожие события" items={[]} />
        </div>
      </Container>
    </div>
  );
};

export default EventPage;
