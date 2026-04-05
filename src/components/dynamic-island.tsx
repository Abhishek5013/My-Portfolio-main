
'use client';

import { useDynamicIsland } from '@/hooks/use-dynamic-island';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

export function DynamicIsland() {
  const { isVisible, message, status, hide } = useDynamicIsland();

  const Icon = status === 'success' ? CheckCircle : XCircle;

  return (
    <div
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
      )}
    >
      <button
        onClick={hide}
        className={cn(
          'flex items-center gap-3 h-12 px-4 rounded-full text-sm font-medium text-white transition-all duration-300',
          'border border-white/10 shadow-xl backdrop-blur-md',
           status === 'success' ? 'bg-green-500/30' : 'bg-red-500/30'
        )}
      >
        <Icon className={cn('h-5 w-5', status === 'success' ? 'text-green-400' : 'text-red-400')} />
        <span>{message}</span>
      </button>
    </div>
  );
}
