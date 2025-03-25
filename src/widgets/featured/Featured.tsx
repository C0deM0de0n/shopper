import { FC } from 'react';
import { Products } from './components/Products';
import { Text } from './components/Text';
import { Buttons } from './components/Buttons';
import { Container } from '@/shared';

interface Props { }

export const Featured: FC<Props> = ({ }) => {
  return (
    <div id='Features' className="w-full h-[591px] bg-[#845EC2]">
      <Container>
        <div className='flex w-full h-[591px] items-center justify-between'>
          <div>
            <h1 className='text-white text-6xl font-[600]'>Apple wireless Airpod</h1>
            <Products />
          </div>
          <div className='flex flex-col gap-10'>
            <Text />
            <Buttons />
          </div>
        </div>
      </Container>

    </div>

  );
};