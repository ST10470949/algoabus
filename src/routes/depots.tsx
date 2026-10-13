import { createFileRoute } from '@tanstack/react-router';
import { Depots } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/depots')({head:()=>pageMeta('Depot Locations','Explore supplied Algoa Bus depot addresses with verification notes and contact options.'),component:Depots});
