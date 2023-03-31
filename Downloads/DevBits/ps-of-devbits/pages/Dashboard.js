import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

/*const Portfolio = () => {
    const [sanityTokens, setSanityTokens] = useState([])
    useEffect(() => {
        const getCoins = async () => {
            try{
                const coins = await fetch(
                    "https://u5i352de.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%27coins%27%5D%20%7B%0A%20%20name%2C%0A%20%20symbol%2C%0A%20%20contractAddress%2C%0A%20%20logo%2C%0A%20%20usdPrice%0A%7D"
                    )
                    const tempSanityTokens = await coins.json()
            } catch (error) {
                console.log(error)
    
            }
        }
      })

}*/



 

 

  







const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.NEXT_PUBLIC_METAMASK_KEY,
      ethers.getDefaultProvider(
        'https://goerli.infura.io/v3/'
        
        ),
    ),
  )




const Dashboard = ({ address }) => {
    const [sanityTokens, setSanityTokens] = useState([])
    const [thirdWebTokens, setThirdWebTokens] = useState([])

    useEffect(() => {
        const getSanityAndThirdWebTokens = async () => {
            
                const coins = await fetch(
                    "https://anyqrslu.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20inrPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
                )
                const SanityTokens = (await coins.json()).result
                
                setSanityTokens(SanityTokens)
                setThirdWebTokens(
                    sanityTokens.map(token => (sdk.getTokenModule(token.contractAddress))
                    )
                )
                    
             
            
        }
         /*return*/ getSanityAndThirdWebTokens();

    }, [])

    //console.log('sanity ⚰️', sanityTokens)
    //console.log('sanity 💈', thirdWebTokens)

    return (
    <Wrapper>
        <Sidebar />
        <MainContainer>
        <Header 
        walletAddress={address} 
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
        />
        <Main
        walletAddress={address} 
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
        />
        </MainContainer>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`

const MainContainer = styled.div`
  flex: 1;
`