import { createFileRoute } from '@tanstack/react-router';
import { Hire } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/hire')({head:()=>pageMeta('Group Bus Hire','Find special hire depot contacts and prepare a local quotation request draft.'),component:Hire});
