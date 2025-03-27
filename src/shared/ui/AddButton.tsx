import { FC } from 'react';
import { Button } from '@mui/material';

interface Props {
  btnFC: () => void
  className?: string,
  text: string
}

export const AddButton: FC<Props> = ({ className, btnFC, text }) => {
  return (
    <Button
      onClick={() => btnFC()}
      className={`w-[263px] h-[70px] ${className}`}
      sx={{
        backgroundColor: '#10B981',
        '&:hover': { backgroundColor: '#20B2AA' }
      }}
      variant={'contained'}>
      <p className='text-white text-[16px] font-medium'>{text}</p>
    </Button>
  );
};