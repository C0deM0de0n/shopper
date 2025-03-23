import { FC } from 'react';

interface Props { }

export const SellerName: FC<Props> = ({ }) => {
    return (
        <svg className='absolute top-[-45px] z-10' width={550} height={200}  viewBox="0 0 400 200">
            <defs>
                <path
                    id="curve"
                    d="M 50,150 A 150,150 0 0,1 350, 220"  />
            </defs>
            <text fontSize={30} fontWeight="600" dominantBaseline="middle">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Red Beats Ml9c2zm/a
                </textPath>
            </text>
        </svg>
    );
};