import getEvents from "@/actions/get-events";
import BillboardCard from "@/components/billboard";
import EventList from "@/components/event-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const events = await getEvents();
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardCard />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <EventList title="События" items={events} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
