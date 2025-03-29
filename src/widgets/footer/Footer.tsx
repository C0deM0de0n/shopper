import { FC } from 'react';
import { Container } from '@/shared';
import { GetStarted } from './components/GetStarted';
import { Line } from './components/Line';
import { Subscribe } from './components/Subscribe';
import { Navigation } from './components/Navigation';
import { Privacy } from './components/Privacy';
import { Socials } from './components/Socials';


interface Props { }

export const Footer: FC<Props> = ({ }) => {
    return (
        <Container>
            <div id='About' className='flex flex-col gap-10 pb-20'>
                <div className='flex pt-20 flex-col  gap-10'>
                    <GetStarted />
                    <Line />
                </div>
                <div className='flex justify-between max-md:flex-col max-md:gap-5'>
                    <Subscribe />
                    <Navigation />
                </div>
                <div className='flex justify-between items-center'>
                    <Privacy />
                    <Socials/>
                </div>
            </div>
        </Container>
    );
};