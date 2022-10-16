import Event from "./events/entities/event.entity";
import Workshop from "./events/entities/workshop.entity";

export const mapEventsWithWorkshops = (events: Array<Event>, workShops: Array<Workshop>) => {
  return events.map((event: Event & { workshops: Array<Workshop> }) => {
      const workShop = workShops.filter(({ eventId }) => eventId === event.id);
      return { ...event, workshops: workShop };
  });
}
