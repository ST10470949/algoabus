import { createFileRoute } from '@tanstack/react-router';
import { Offers } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/offers')({head:()=>pageMeta('Core Offers','Explore timetable app access, stored value smart cards and group bus hire.'),component:Offers});
