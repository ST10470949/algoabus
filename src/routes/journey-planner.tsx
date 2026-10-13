import { createFileRoute } from '@tanstack/react-router';
import { Planner } from '@/components/algoa/transport';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/journey-planner')({validateSearch:(search:Record<string,unknown>)=>({from:typeof search.from==='string'?search.from:'',to:typeof search.to==='string'?search.to:'',day:typeof search.day==='string'?search.day:'Weekday',date:typeof search.date==='string'?search.date:''}),head:()=>pageMeta('Journey Planner','Search clearly labelled sample connections across Nelson Mandela Bay.'),component:Page});
function Page(){const search=Route.useSearch();return <Planner {...search}/>}
