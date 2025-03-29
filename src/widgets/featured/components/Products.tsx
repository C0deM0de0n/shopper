import { FC } from 'react';
import Image from 'next/image';
import { featured } from '@/enteties';

interface Props { }

export const Products: FC<Props> = ({ }) => {
    return (
        <div className='flex items-center gap-5 z-10 max-md:mt-5 max-sm:gap-0'>
            {featured.map((item, id) =>
                <div key={id} className={`relative flex flex-col ${id === 1 ? 'gap-10' : ''} max-md:w-[100px]`}>
                    <Image className='max-md:w-[100px] max-sm:h-[100px]' src={item.icon} width={190} height={330}  alt='product' />
                    {id === 1 &&
                        <span className='text-white text-[35px] font-[400] max-md:text-2xl max-md:text-center max-sm-text-[20px]'>
                            Price: <p className='inline text-white text-3xl font-[400] max-md:text-2xl'>$45.99</p>
                        </span>
                    }
                </div>
            )}
        </div>
    );
}; 