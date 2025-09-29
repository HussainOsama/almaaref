export type TripTypeEn = "Cultural" | "Recreational" | "Group";

export type TripEn = {
  id: string;
  title: string;
  type: TripTypeEn;
  date: string;
  location: string;
  seats: number;
  image: string;
  description: string;
  itinerary: string[];
};

export const tripsEn: TripEn[] = [
  {
    id: "t1",
    title: "Cultural Trip to the National Museum",
    type: "Cultural",
    date: "2025-10-10",
    location: "Kuwait City",
    seats: 24,
    image: "/images/trip1.svg",
    description:
      "Educational visit to learn about Kuwait's heritage and history.",
    itinerary: [
      "Meet and depart at 9:00 AM",
      "Guided tour of the history gallery",
      "Short workshop on national identity",
      "Return by 1:00 PM",
    ],
  },
  {
    id: "t2",
    title: "Recreational Park Outing",
    type: "Recreational",
    date: "2025-10-18",
    location: "Ahmadi",
    seats: 30,
    image: "/images/trip2.svg",
    description:
      "Active games and group activities in a fun and safe environment.",
    itinerary: [
      "Depart at 8:00 AM",
      "Games and competitions",
      "Lunch break",
      "Return at 2:00 PM",
    ],
  },
  {
    id: "t3",
    title: "Team-Building Group Trip",
    type: "Group",
    date: "2025-10-25",
    location: "Jahra",
    seats: 18,
    image: "/images/trip3.svg",
    description:
      "Meet-and-greet with team-building exercises to foster collaboration.",
    itinerary: [
      "Opening session",
      "Team-building exercises",
      "Reflective activities",
      "Wrap-up and feedback",
    ],
  },
];
