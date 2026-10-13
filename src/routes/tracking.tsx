import { createFileRoute } from '@tanstack/react-router';
import { Tracking } from '@/components/algoa/transport';
import { pageMeta } from '@/components/algoa/data';
export const Route=createFileRoute('/tracking')({head:()=>pageMeta('Bus Tracking Concept','Proposed tracking interface. No official live bus positions are connected.'),component:Tracking});
