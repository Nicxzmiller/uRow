import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper,HeroContent, ArrowForward, ArrowRight, HeroH1, HeroP} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {

    const [hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive £250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;