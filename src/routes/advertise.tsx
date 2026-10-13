import { createFileRoute } from '@tanstack/react-router';
import { Advertise } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/advertise')({head:()=>pageMeta('Advertise on Algoa Buses','Find supplied advertising provider contacts and prepare a campaign enquiry draft.'),component:Advertise});
