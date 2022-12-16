import React from 'react';
import { height, styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import song_image from '../../assets/images/songwallpaper.jpg';
import { relative } from 'node:path/win32';


interface Props {
    title: string;
}

const Root = styled("div")({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'darkgreen'
})

const Logo = styled('h1')({
    margin: '.35em 0.45em',
})

const LogoA = styled(Link)( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
})

const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'capitalize',
    textDecoration: 'none',
    display: 'flex',
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'white'
})

const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${song_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    margin: '5em 0'
})




export const Home = (props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to="/"><img src="https://w7.pngwing.com/pngs/334/118/png-transparent-music-music-logo-texture-comics-text-thumbnail.png" alt="music logo" height={'70vh'}/></LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="/">Home</NavA>
                    </li>
                    <li>
                        <NavA to="/dashboard">Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to="/signin">Sign In</NavA>
                    </li>
                    <li>
                        <NavA to="/signup">Sign Up</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <MainText>
                        <p>Save song lyrics here!</p>
                    </MainText>
                    <Button color="success" variant="contained" size="large" component={Link} to='/dashboard'>See the Songs</Button>
                </MainText>
            </Main>
        </Root>
    )
}