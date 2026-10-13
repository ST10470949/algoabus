import { createFileRoute } from '@tanstack/react-router';
import { Timetables } from '@/components/algoa/transport';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/routes')({head:()=>pageMeta('Routes & Timetables','Explore clearly labelled sample routes and timetable filters for Nelson Mandela Bay.'),component:Timetables});
