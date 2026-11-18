import { cn } from '@/lib/utils';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

export default function Skeleton({ className, ...props }: ViewProps) {
  return (
    <View
      className={cn('animate-pulse rounded-md bg-border', className)}
      {...props}
    />
  );
}
