import Spline from "@splinetool/react-spline"
import styled from 'styled-components'


export default function App() {
  return (
    <Wrapper>
        <Spline className="spline" 
        scene="https://prod.spline.design/X-Vj-zOVFq5xCbmi/scene.splinecode" />
      
        
    </Wrapper>
  );
  }
  

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 1080px;
  overflow: hidden;

  @media (max-width: 1080px) {
    min-height: 1080px;
  }
  `;