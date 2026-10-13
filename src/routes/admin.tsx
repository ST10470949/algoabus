import { createFileRoute } from '@tanstack/react-router';
import { Portal } from '@/components/algoa/portals';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/admin')({head:()=>pageMeta('Management Dashboard Concept','Independent Algoa Bus redesign concept — clearly labelled demonstration and draft content.'),component:Page});
function Page(){return <Portal admin={true}/>}
