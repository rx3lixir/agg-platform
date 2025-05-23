import { Event } from "@/types";

const getEvent = async (id: string): Promise<Event> => {
  const URL = `http://localhost:8080/event/api/v1/events/${id}`;
  const res = await fetch(URL);

  console.log(res);
  return res.json();
};

export default getEvent;
