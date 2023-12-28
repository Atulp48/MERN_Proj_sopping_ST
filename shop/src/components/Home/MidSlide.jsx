import { Box, styled } from "@mui/system";
import Slide from "./Slide";

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme }) => ({
    padding: 5,
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({ products, title, timer }) => {
    const adv = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            
            <RightComponent>
                <img src={adv} alt="add" style={{ width: 210 }} />
            </RightComponent>
        </Component>
    )
}

export default MidSlide;