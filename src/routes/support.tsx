import { createFileRoute } from '@tanstack/react-router';
import { Support } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/support')({head:()=>pageMeta('Passenger Support','Passenger safety, lost property draft forms and enquiries contact information.'),component:Support});
