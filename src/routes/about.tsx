import { createFileRoute } from '@tanstack/react-router';
import { About } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/about')({head:()=>pageMeta('About Algoa Bus','Learn about Algoa Bus’s mission and public transport role in Nelson Mandela Bay.'),component:About});
