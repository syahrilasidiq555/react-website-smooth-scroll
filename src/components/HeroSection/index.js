const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    );
}
 
export default HeroSection;