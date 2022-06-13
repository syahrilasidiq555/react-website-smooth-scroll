import { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                {/* <HeroH1>Virtual Banking Mode Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next Payment.
                </HeroP> */}
                <HeroH1>Do You Know What is Cunt? Yea That's You</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next Payment.
                </HeroP>
                <HeroP style={{fontSize:'5px'}}>
                    I Lied.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"    
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}
 
export default HeroSection;