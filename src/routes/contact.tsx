import { createFileRoute } from '@tanstack/react-router';
import { Contact } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/contact')({head:()=>pageMeta('Contact Algoa Bus','Find supplied enquiries and complaints contacts and prepare a local enquiry draft.'),component:Contact});
