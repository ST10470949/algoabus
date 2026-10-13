import { createFileRoute } from '@tanstack/react-router';
import { Legal } from '@/components/algoa/information';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/terms')({head:()=>pageMeta('Website Terms Draft','Independent Algoa Bus redesign concept — clearly labelled demonstration and draft content.'),component:Page});
function Page(){return <Legal terms={true}/>}
