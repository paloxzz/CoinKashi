
/*import React from 'react'
import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import  Dashboard  from './Dashboard'
//import { Spline } from '@splinetool/runtime';

//const canvas = document.getElementById('canvas3d');
//const app = new Application(canvas);
//app.load('https://prod.spline.design/LPx39qpYXakeWIvW/scene.splinecode');


export default function Home() {
  const { address, connectWallet } = useWeb3()
  
  return(

  <Wrapper>
    
    {address ? (
      <Dashboard address={address}/>
    ):(
    <WalletConnect>
      
    <Button onClick={() => connectWallet('injected')}> 
    Connect Wallet
    </Button>
    <Details>
    You need to be a 
     <br /> Metamask user
    </Details>
    </WalletConnect>
    )}
  </Wrapper>
   );
  }



  const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`


const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
  
const Button = styled.div`
  /* flex: 0; */
/*border: 1px solid #282b2f;
padding: 0.8rem;
font-size: 1.3rem;
font-weight: 500;
border-radius: 0.4rem;
background-color: #3773f5;
color: #000;

&:hover {
  cursor: pointer;
}
`
const Details = styled.div`
font-size: 1.2rem;
text-align: center;
margin-top: 1rem;
font-weight: 500;
color: #282b2f;
`
*/


/*import styled from 'styled-components'
import React  from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard'
import PlayButton from "../components/PlayButton";
import SplineScene from "../components/SplineScene";

//import Header from "../components/Header";
import  { useState }  from 'react'


/*export default function Home() {
    const { address, connectWallet } = useWeb3()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper className="Home">
            <ContentWrapper>
                <Container>
                    <TextContainer>
                        {address ? (
                            <Dashboard address={address} />
                        ) : (
                            <WalletConnect>

                                <Button onClick={() => connectWallet('injected')}>
                                    Connect Wallet
                                </Button>
                                <Details>
                                    You need to be a
                                    <br /> Metamask user
                                </Details>
                            </WalletConnect>
                        )}
                    </TextContainer>
                    <ButtonContainer>
                        <PlayButton onClick={() => setIsOpen(true)} />
                    </ButtonContainer>
                </Container>
                <SplineContainer isOpen={isOpen}>
                    
                    
                    <SplineScene />
                </SplineContainer>
            </ContentWrapper>
        </Wrapper>
    );
}


const Wrapper = styled.div`
display: flex;
height: 100vh;
max-width: 100vw;
background-color: #0a0b0d;
color: white;
display: grid;
place-items: center;
`;


const WalletConnect = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Button = styled.div`
/* flex: 0; */
/*
border: 1px solid #282b2f;
padding: 0.8rem;
font-size: 1.3rem;
font-weight: 500;
border-radius: 0.4rem;
background-color: #3773f5;
color: #000;

&:hover {
  cursor: pointer;
}
`;
const Details = styled.div`
font-size: 1.2rem;
text-align: center;
margin-top: 1rem;
font-weight: 500;
color: #282b2f;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 855px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    align-content: center;
    padding-bottom: 40px;
  }
`;

const Container = styled.div`
  position: relative;
`;

const SplineContainer = styled.div`
  position: ${(props) => (props.isOpen ? "fixed" : "relative")};
  padding: ${(props) => (props.isOpen ? "0px" : "24px 20px 24px 0px")};

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

  .spline {
    border-radius: ${(props) => (props.isOpen ? "0px" : "20px")};
  }

  .closeButton {
    top: 54%;
    left: -32px;
  }

  @media (max-width: 1400px) {
    padding: ${(props) => (props.isOpen ? "0px" : "0px 20px 10px")};

    .closeButton {
      top: -44px;
      left: 50%;
      margin-left: -50px;
      transform: rotate(90deg);
    }
  }
`;

const TextContainer = styled.div`
  display: grid;
  gap: 24px;
  max-width: 460px;
  padding: 225px 0px 0px 56px;

  @media (max-width: 560px) {
    padding: 145px 20px 0px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: 20px;
  background: linear-gradient(
    270deg,
    #f1f1f1 12.86%,
    rgba(255, 255, 255, 0) 83.72%
  );
  mix-blend-mode: normal;
  padding: 40px 0px 40px 56px;
  margin-top: 53px;

  a {
    text-decoration: none;
  }

  @media (max-width: 560px) {
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
    align-content: center;
    padding: 32px 20px;
    margin-top: 40px;
  }
`;
*/

import React, { useState } from "react";
import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard'
import SplineScene from "../components/SplineScene";


export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (

    <Wrapper>

      {address ? (
        <Dashboard address={address} />
      ) : (

        <WalletConnect>
          <div id="home">
            <SplineScene />
            <div>
              <div id="connecWallet">
              <Button onClick={() => connectWallet('injected')}>
                Connect Wallet
              </Button>
              </div>
              <div id="metaMask">
              {/* <Details> */}
                You need to be 
                <br/> a Metamask user 
              {/* </Details> */}
              </div>
             
            </div>

          </div>



        </WalletConnect>
      )}

    </Wrapper>

  );

}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
  
`


const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  /* flex: 0; */ 
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`
const Details = styled.div`
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #282b2f;
`