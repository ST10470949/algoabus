import { createFileRoute } from '@tanstack/react-router';
import { Home } from '@/components/algoa/home';
import { pageMeta } from '@/components/algoa/data';
export const Route = createFileRoute('/')({head:()=>pageMeta('Your Journey Starts Here','Independent Drew Technologies redesign concept for Algoa Bus. Explore journeys, timetables, smart cards and group bus hire in Nelson Mandela Bay.'),component:Home});
