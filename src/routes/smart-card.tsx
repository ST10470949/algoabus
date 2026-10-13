import { createFileRoute } from '@tanstack/react-router';
import { SmartCard } from '@/components/algoa/transport';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/smart-card')({head:()=>pageMeta('Stored Value Smart Card','Explore the Algoa stored value card and fictional balance and top-up demonstrations.'),component:SmartCard});
