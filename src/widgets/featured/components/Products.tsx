import { FC } from 'react';
import Image from 'next/image';
import { featured } from '@/enteties';

interface Props { }

export const Products: FC<Props> = ({ }) => {
    return (
        <div className='flex items-center gap-5 z-10'>
            {featured.map((item, id) =>
                <div key={id} className={`relative flex flex-col ${id === 1 ? 'gap-10' : ''}`}>
                    <Image src={item.icon} width={190} height={330} alt='product' />
                    {id === 1 &&
                        <span className='text-white text-[35px] font-[400]'>
                            Price: <p className='inline text-white text-3xl font-[400]'>$45.99</p>
                        </span>
                    }
                </div>
            )}
        </div>
    );
}; 