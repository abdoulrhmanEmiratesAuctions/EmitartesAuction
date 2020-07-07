import styled from 'styled-components';

export const OurServiceStyle = styled.div`
margin-top: 150px;
background-color: #f6fbff;
padding: 150px 0px;
.header-service{
    h1{
        font-family: Roboto;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.73px;
  text-align: center;
  color: #000000;
    }
    p{
        @media(max-width: 600px){
            margin: 5px;
        }
        font-family: Roboto;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: -0.45px;
        text-align: center;
        color: #595f6f;
        margin: 5px 0px

    }
}
.container{
    padding: 0px 100px;
    width: 100%;
    @media (max-width: 600px) {
    padding: 50px 10px;
}
}
.image-card{
    width: 40px;
    height: 50px;
    object-fit: contain;
    margin-top: 30px;
}
`