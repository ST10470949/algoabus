import { createFileRoute } from '@tanstack/react-router';
import { Legal } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/privacy')({head:()=>pageMeta('POPIA & Privacy Draft','Independent Algoa Bus redesign concept — clearly labelled demonstration and draft content.'),component:Page});
function Page(){return <Legal terms={false}/>}
