import { FC } from 'react';
import { Skeleton } from '@mui/material';

interface Props {}

export const AuthSkeleton: FC<Props> = ({}) => {
  return (
    <div className='relative flex items-center gap-5'>
        <Skeleton 
          variant={'circular'} 
          width={60} height={60} 
          animation={'wave'}/>
        <Skeleton 
          sx={{ borderRadius: '5px' }} 
          variant={'rectangular'} 
          width={160} height={48} 
          animation={'wave'}/>
    </div>
  );
};