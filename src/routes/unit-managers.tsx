import { createFileRoute } from '@tanstack/react-router';
import { Managers } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/unit-managers')({head:()=>pageMeta('Unit Managers','Find grouped unit manager contacts supplied for review and verification.'),component:Managers});
