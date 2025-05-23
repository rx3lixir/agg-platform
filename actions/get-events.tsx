import { Event } from "@/types";

const URL = "http://localhost:8080/event/api/v1/events";

const getEvents = async (): Promise<Event[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getEvents;
