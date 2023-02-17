import { FormEvent, useState } from "react";
import { IFeedback } from "./@types";
import { getEmail, getMessage, getName, sendMessage } from "./feedbackSlice";
import { useAppDispatch, useAppSelector } from "./hooks"
import image from './assets/Map.png'
import styled from 'styled-components';
import { SocialIcon } from "react-social-icons";
const Input = styled.input`
    border-radius: 10px;
    width: 540px;
    height: 90px;
    border-color: #DCDCDC;
    border-width: 1px;
    padding-left: 46px;
    &::placeholder{
      color:#2D2D2D;
    }
  margin-bottom: 8px;
  @media (max-width: 1500px) {
    width: 340px;
    height: 140px;
  }
  @media (max-width: 1150px) {
    width: 240px;
    height: 80px;
  }
  @media (max-width: 850px) {
    width: 60%;
  }
  `
const Textarea = styled.textarea`
  border-radius: 10px;
  width: 540px;
  height: 180px;
  border-color: #DCDCDC;
  border-width: 1px;
  padding-left: 46px;
  padding-top: 30px;
  &::placeholder{
    color:#2D2D2D;
  }
  @media (max-width: 1500px) {
    width: 340px;
    height: 140px;
  }
  @media (max-width: 1150px) {
    width: 240px;
    height: 80px;
  }
  @media (max-width: 850px) {
    width: 60%;
  }
  margin-bottom: 23px;
`
const Button = styled.button`
  border-radius:500px;
  width:220px;
  height:73px;
  background-color:#FAD34F;
  border-width: 0;
  color:#FFFFFF;
  @media (max-width: 850px) {
    width: 65%;
  }
`

const Title = styled.h1`
  width:560px;
  height:60px;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3E3E3E;
  margin-bottom: 30px;
  @media (max-width: 850px) {
    width: 80%;
  }
`
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left:150px;
  padding-top:100px;
`

const Map = styled.div`
position:absolute;
  right: 100px;
  top: 150px;
  width: 200px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  display:inline-block;
  vertical-align:middle;
  transform: scale(5,4);
  @media (max-width: 1500px) {
    transform: scale(4,3);
  }
  @media (max-width: 1150px) {
    transform: scale(3,2);
  }
  @media (max-width: 920px) {
    transform: scale(2,1.5);
  }
  @media (max-width: 850px) {
    visibility: hidden
  }
`
const Footer = styled.footer`
  width:105%; 
  height:200px;
  position: fixed;
  bottom: 0px;
  background-color: #D8D8D8;
  opacity:50%;
  margin-left: -160px;
`
const SocialLinks = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
  margin-left: 450px;
  margin-top: 50px;
`

const FunnyCircle = styled.div`
  position: absolute;
  top: ${props => props.style?.top || 0};
  left: ${props => props.style?.left || 0};
  @media (max-width: 1150px) {
    visibility: hidden
  }
`

function App() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<IFeedback>({name: useAppSelector(getName), email: useAppSelector(getEmail), message: useAppSelector(getMessage)});

  const onFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await dispatch(sendMessage(formData));
    console.log(response);
  }

  const isEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const isEmailValid = isEmail(formData.email);



  

  return (
    <Wrapper>
      <Title>Reach out of us</Title>
      <form onSubmit={onFormSubmit}>
        <div>
          <Input type="text"
          id='name' 
          name='name' 
          required 
          placeholder='Your name*' 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        </div>
        <div>
          <Input type="text" 
          id='email' 
          name='email'  
          required 
          placeholder='Your e-mail*' 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        </div>
        <div>
          <Textarea id='message' 
          name='message'  
          required 
          placeholder='Your message*' 
          value={formData.message} 
          onChange={(e) => setFormData({...formData, message: e.target.value})}/>
        </div>
        
        <Button type='submit' disabled={!isEmailValid}>Send message</Button>
      </form>
      <Map>
        <img style={{
          width:'100%'
        }} 
        src="/assets/Map.png" 
        alt="" />
      </Map>
      <Footer>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/andrii-bondariev-855b07249/">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.88053 13.2364H0.212521V4.59092H2.88053V13.2364ZM1.54509 3.41159C0.692131 3.41159 0 2.70053 0 1.84205C0 0.983569 0.692131 0.286957 1.54509 0.286957C2.39805 0.286957 3.09018 0.983569 3.09018 1.84205C3.09018 2.70053 2.39805 3.41159 1.54509 3.41159ZM12.8662 13.2364H10.2039V9.02785C10.2039 8.02484 10.1838 6.73857 8.81677 6.73857C7.42964 6.73857 7.21711 7.82829 7.21711 8.95558V13.2364H4.55198V4.59092H7.11085V5.77025H7.14819C7.5043 5.09098 8.37449 4.37413 9.6726 4.37413C12.3722 4.37413 12.869 6.16336 12.869 8.48732V13.2364H12.8662Z" fill="#696969"/>
            </svg>
          </a>
          <a href="https://twitter.com/">
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0399 3.49415C15.0501 3.6349 15.0501 3.77568 15.0501 3.91643C15.0501 8.20944 11.7328 13.156 5.66983 13.156C3.80192 13.156 2.06673 12.6231 0.607117 11.6982C0.87251 11.7283 1.12766 11.7384 1.40327 11.7384C2.94451 11.7384 4.36331 11.2257 5.4963 10.351C4.0469 10.3208 2.83225 9.38577 2.41375 8.09886C2.61791 8.129 2.82204 8.14912 3.03641 8.14912C3.3324 8.14912 3.62843 8.10889 3.904 8.03855C2.39336 7.7369 1.26034 6.4299 1.26034 4.85144V4.81124C1.69923 5.05253 2.20963 5.20334 2.75056 5.22342C1.86254 4.64028 1.28076 3.64496 1.28076 2.51891C1.28076 1.91568 1.44405 1.36272 1.72986 0.880124C3.35279 2.85069 5.7923 4.13758 8.52776 4.27835C8.47674 4.03706 8.44611 3.78574 8.44611 3.53438C8.44611 1.74476 9.91593 0.286957 11.743 0.286957C12.6922 0.286957 13.5496 0.679059 14.1519 1.31246C14.897 1.17171 15.6114 0.90024 16.2443 0.528253C15.9993 1.28232 15.4788 1.91571 14.7949 2.31784C15.4584 2.2475 16.1014 2.06649 16.6934 1.81517C16.2444 2.45859 15.683 3.03164 15.0399 3.49415Z" fill="#696969"/>
            </svg>
          </a>
          <a href="https://facebook.com/">
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.86171 16.0863V8.89145H0.431458V6.03236H2.86171V3.77965C2.86171 1.33215 4.36992 0 6.57203 0C7.62715 0 8.53334 0.0785464 8.79633 0.113107V2.67058H7.26911C6.07141 2.67058 5.84011 3.23611 5.84011 4.06242V6.03236H8.54285L8.17213 8.89145H5.84011V16.0863" fill="#696969"/>
            </svg>
          </a>
          <a href="https://pinterest.com/">
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.02927 0.286957C3.76274 0.286957 0.534424 2.31513 0.534424 5.59758C0.534424 7.68506 1.79519 8.87112 2.55929 8.87112C2.87448 8.87112 3.05595 8.05274 3.05595 7.82145C3.05595 7.54569 2.3014 6.95859 2.3014 5.81107C2.3014 3.42707 4.24986 1.73692 6.77138 1.73692C8.93951 1.73692 10.5441 2.88445 10.5441 4.99268C10.5441 6.56719 9.86598 9.52049 7.6692 9.52049C6.87645 9.52049 6.19831 8.98676 6.19831 8.22175C6.19831 7.10092 7.03882 6.01566 7.03882 4.85925C7.03882 2.89631 4.04928 3.25213 4.04928 5.62426C4.04928 6.12241 4.11614 6.67393 4.35492 7.1276C3.91556 8.88891 3.01775 11.5131 3.01775 13.3278C3.01775 13.8882 3.10371 14.4397 3.16101 15.0001C3.26926 15.1128 3.21514 15.1009 3.38069 15.0446C4.9853 12.9986 4.92799 12.5983 5.65389 9.92079C6.04549 10.6146 7.05792 10.9883 7.86022 10.9883C11.2414 10.9883 12.76 7.9193 12.76 5.1528C12.76 2.20839 10.0284 0.286957 7.02927 0.286957Z" fill="#696969"/>
            </svg>
          </a>
        </SocialLinks>
      </Footer>
      <FunnyCircle style={{
        top: '85%',
        left: '95.8%'
      }}>
        <svg width="84" height="122" viewBox="0 0 84 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
        <path d="M85.6544 95.4833C105.586 81.4273 110.668 54.3283 97.0059 34.9559C83.344 15.5835 56.1114 11.2738 36.1802 25.3298C16.249 39.3859 11.1668 66.4849 24.8287 85.8573C38.4906 105.23 65.7232 109.539 85.6544 95.4833Z" fill="#FAD34F"/>
        <path d="M57.1683 40.788C58.0918 42.0975 56.639 42.2187 55.2917 43.1688C53.9444 44.119 53.2143 45.5408 52.2891 44.2289C51.3639 42.917 51.7092 41.0874 53.0565 40.1372C54.4021 39.1847 56.2431 39.4761 57.1683 40.788Z" fill="white"/>
        <path d="M66.4913 34.2131C67.4148 35.5226 65.962 35.6438 64.6147 36.594C63.2674 37.5441 62.5373 38.9659 61.6121 37.654C60.6869 36.3422 61.0322 34.5125 62.3795 33.5624C63.7251 32.6099 65.5661 32.9012 66.4913 34.2131Z" fill="white"/>
        <path d="M68.467 41.9342C70.2711 44.4925 69.5999 48.0717 66.9678 49.9279C64.3358 51.7841 60.7389 51.2149 58.9348 48.6566C57.1306 46.0983 61.1942 47.3293 63.8262 45.4731C66.4583 43.6169 66.6628 39.376 68.467 41.9342Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_81">
        <rect width="88.3204" height="85.8441" fill="white" transform="translate(0 50.9014) rotate(-35.1926)"/>
        </clipPath>
        </defs>
        </svg>
      </FunnyCircle>
      <FunnyCircle style={{
        top: '40px',
        left: '40px'
      }}>
          <svg width="122" height="121" viewBox="0 0 122 121" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M85.6544 95.4833C105.586 81.4273 110.668 54.3283 97.0059 34.9559C83.344 15.5835 56.1114 11.2738 36.1802 25.3298C16.249 39.3859 11.1668 66.4849 24.8287 85.8573C38.4906 105.23 65.7232 109.539 85.6544 95.4833Z" fill="#FAD34F"/>
          <path d="M57.1683 40.788C58.0918 42.0975 56.639 42.2187 55.2917 43.1688C53.9444 44.119 53.2143 45.5408 52.2891 44.2289C51.3639 42.917 51.7092 41.0874 53.0565 40.1372C54.4021 39.1847 56.2431 39.4761 57.1683 40.788Z" fill="white"/>
          <path d="M66.4913 34.2131C67.4148 35.5226 65.962 35.6438 64.6147 36.594C63.2674 37.5441 62.5373 38.9659 61.6121 37.654C60.6869 36.3422 61.0322 34.5125 62.3795 33.5624C63.7251 32.6099 65.5661 32.9012 66.4913 34.2131Z" fill="white"/>
          <path d="M68.467 41.9342C70.2711 44.4925 69.5999 48.0717 66.9678 49.9279C64.3358 51.7841 60.7389 51.2149 58.9348 48.6566C57.1306 46.0983 61.1942 47.3293 63.8262 45.4731C66.4583 43.6169 66.6628 39.376 68.467 41.9342Z" fill="white"/>
          </svg>
      </FunnyCircle>
      <FunnyCircle style={{
        top:'50%',
        left: '65%'
      }}>
        <svg width="299" height="298" viewBox="0 0 299 298" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_29)">
        <path d="M218.884 225.942C175.22 265.761 108.448 263.637 69.7446 221.198C31.0414 178.758 35.0629 112.073 78.727 72.2535C122.391 32.4338 189.163 34.5579 227.866 76.9977C266.569 119.438 262.548 186.122 218.884 225.942Z" fill="#F472B7"/>
        <path d="M104.344 129.984C106.96 132.853 108.005 129.478 110.957 126.787C113.909 124.095 117.654 123.11 115.033 120.236C112.412 117.362 107.903 117.223 104.951 119.915C101.995 122.602 101.723 127.11 104.344 129.984Z" fill="white"/>
        <path d="M83.9193 148.61C86.5356 151.479 87.5808 148.105 90.5324 145.413C93.484 142.721 97.2293 141.736 94.6084 138.862C91.9874 135.988 87.4781 135.85 84.5265 138.541C81.5703 141.228 81.2984 145.736 83.9193 148.61Z" fill="white"/>
        <path d="M101.157 157.316C106.268 162.92 115.087 163.201 120.853 157.942C126.619 152.684 127.15 143.876 122.039 138.272C116.928 132.667 117.719 142.925 111.953 148.183C106.187 153.442 96.0457 151.711 101.157 157.316Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_29">
        <rect width="214" height="208" fill="white" transform="matrix(-0.738886 0.673831 0.673831 0.738886 158.121 0)"/>
        </clipPath>
        </defs>
        </svg>
      </FunnyCircle>
      <FunnyCircle style={{
        top: '76%',
        left: ''
      }}>
        <svg width="299" height="238" viewBox="0 0 299 238" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_137)" filter="url(#filter0_d_1_137)">
        <path d="M218.884 225.942C175.22 265.761 108.448 263.637 69.745 221.198C31.0418 178.758 35.0633 112.073 78.7274 72.2535C122.391 32.4338 189.163 34.5579 227.867 76.9977C266.57 119.438 262.548 186.122 218.884 225.942Z" fill="#F472B7"/>
        <path d="M104.344 129.984C106.961 132.853 108.006 129.478 110.957 126.787C113.909 124.095 117.654 123.11 115.033 120.236C112.412 117.362 107.903 117.223 104.951 119.915C101.995 122.602 101.723 127.11 104.344 129.984Z" fill="white"/>
        <path d="M83.9197 148.61C86.536 151.479 87.5813 148.105 90.5329 145.413C93.4845 142.721 97.2297 141.736 94.6088 138.862C91.9878 135.988 87.4786 135.85 84.527 138.541C81.5707 141.228 81.2988 145.736 83.9197 148.61Z" fill="white"/>
        <path d="M101.157 157.316C106.268 162.92 115.087 163.201 120.853 157.942C126.62 152.684 127.151 143.876 122.04 138.272C116.929 132.667 117.72 142.925 111.953 148.183C106.187 153.442 96.0461 151.711 101.157 157.316Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_1_137" x="-4" y="0" width="306.278" height="305.888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_137"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_137" result="shape"/>
        </filter>
        <clipPath id="clip0_1_137">
        <rect width="214" height="208" fill="white" transform="matrix(-0.738886 0.673831 0.673831 0.738886 158.122 0)"/>
        </clipPath>
        </defs>
        </svg>

      </FunnyCircle>
      <FunnyCircle style={{
        top:'45%',
        left:'65%'
      }}>
        <svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_35)">
        <path d="M63.7073 126.932C98.7774 126.932 127.207 98.5023 127.207 63.4323C127.207 28.3622 98.7774 -0.0677452 63.7073 -0.0677452C28.6372 -0.0677452 0.207314 28.3622 0.207314 63.4323C0.207314 98.5023 28.6372 126.932 63.7073 126.932Z" fill="#FAD34F"/>
        <path d="M80.8142 83.1596C80.8142 87.7062 77.127 83.1596 72.5762 83.1596C68.0296 83.1596 64.3381 87.7062 64.3381 83.1596C64.3381 78.613 68.0253 74.9215 72.5762 74.9215C77.127 74.9215 80.8142 78.6087 80.8142 83.1596Z" fill="white"/>
        <path d="M106.752 83.1596C106.752 87.7062 103.065 83.1596 98.5138 83.1596C93.9672 83.1596 90.2758 87.7062 90.2758 83.1596C90.2758 78.613 93.963 74.9215 98.5138 74.9215C103.065 74.9215 106.752 78.6087 106.752 83.1596Z" fill="white"/>
        <path d="M98.4969 100.614C98.4969 108.979 91.7151 115.756 83.3543 115.756C74.9935 115.756 68.2117 108.974 68.2117 100.614C68.2117 92.2528 74.9935 101.198 83.3543 101.198C91.7151 101.198 98.4969 92.2528 98.4969 100.614Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_35">
        <rect width="127" height="127" fill="white"/>
        </clipPath>
        </defs>
        </svg>

      </FunnyCircle>
      <FunnyCircle style={{
        top: '79.5%',
        left: '89%'
      }}>
      <svg width="79" height="97" viewBox="0 0 79 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78.465 57.7675C78.465 79.435 60.9 97 39.2325 97C17.565 97 0 79.435 0 57.7675V0H78.465V57.7675Z" fill="#46EBB0"/>
      <path d="M38.0118 69.05C38.0118 66.241 40.2899 69.05 43.1016 69.05C45.9106 69.05 48.1913 66.241 48.1913 69.05C48.1913 71.8591 45.9132 74.1398 43.1016 74.1398C40.2899 74.1398 38.0118 71.8617 38.0118 69.05Z" fill="white"/>
      <path d="M21.9868 69.05C21.9868 66.241 24.2649 69.05 27.0766 69.05C29.8856 69.05 32.1663 66.241 32.1663 69.05C32.1663 71.8591 29.8882 74.1398 27.0766 74.1398C24.2649 74.1398 21.9868 71.8617 21.9868 69.05Z" fill="white"/>
      <path d="M27.0872 58.2664C27.0872 53.0982 31.2772 48.9108 36.4428 48.9108C41.6084 48.9108 45.7985 53.1008 45.7985 58.2664C45.7985 63.4321 41.6084 57.9055 36.4428 57.9055C31.2772 57.9055 27.0872 63.4321 27.0872 58.2664Z" fill="white"/>
      </svg>

      </FunnyCircle>
    </Wrapper>
  )
}

export default App
