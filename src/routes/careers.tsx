import { createFileRoute } from '@tanstack/react-router';
import { Careers } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/careers')({head:()=>pageMeta('Careers','Contact Algoa Bus for current employment opportunities. No unverified vacancies listed.'),component:Careers});
