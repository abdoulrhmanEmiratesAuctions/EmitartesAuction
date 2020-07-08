import styled from 'styled-components';

export const FormStyle = styled.div`
right-margin : {

    margin-right: 7px;
}
.header{
    margin-top: 100px;
    @media(max-width: 900px) {
        margin-top: 100px;
      }
    h2{
        margin: 10px 0px;
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
        font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: -0.45px;
  text-align: center;
  color: #595f6f;
  margin: 10px 0px;
  margin-bottom: 50px;
    }
}

}

}
.image-video{
    background-image: url(${require(`../../assets/images/ferrada_red_matte_bmw_m4_5k-t2.jpg`)});
    width: 100%;
    min-height: 330px;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 10px;
    @media(max-width: 900px){
        margin-bottom: 40px;
    }
    .Bg-Circle {
        width: 50px;
        height: 50px;
        border-radius: 67px;
        box-shadow: 20px 20px 60px 0 rgba(0, 0, 0, 0.4);
        background-color: #ec1c24;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        .icon-play{
            font-family: Roboto;
            text-align: center;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: 15px;
            height: 16px;
            object-fit: contain;
        }
  
}

}
.video-desc{
    width: 100%;
    margin-top: 40px;
    @media (max-width: 900px) {
   text-align: center;
   margin: auto 30px;
}
    h1{
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.58px;
  color: #000000;
  margin: 10px 0px;
    }
    h6{
        font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.37px;
  color: #595f6f;
  margin: 10px 0px;
  font-weight: bold;


    }
    h5{
        font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.33px;
  color: #595f6f;


    }
    p{
        font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.33px;
  color: #595f6f;
  font-weight: bold;

    }
}
.inputs{
    width: 100%;
@media(max-width: 900px) {
    padding: 0px 30px;
}
@media(max-width: 400px) {
    padding: 0px ;
}
 .header-input{
    font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  color: #595f6f;
  font-weight: bold;
  @media(max-width: 750px){
      display: none;
  }
 

 }
}
.container{
    padding: 0px 100px;
    width: 100%;
    @media (max-width: 900px) {
    padding: 0px 10px;
}
}
.label{
    margin-top: 30px;
    width: 100%;
    font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #595f6f;
}
.input{
    width: 80%;
    height: 50px;
  border: solid 1px #bfc4ce;
  background-color: #ffffff;
  margin-top: 15px;
  padding: 0px 30px;
  font-size: 16px;
  border-radius: 5px 5px;
  box-sizing: border-box;
  color: #595f6f;
  @media(max-width: 900px) {
    width: 100%;
}
}
.btn-submit{
    margin-top: 50px;
    @media (max-width: 900px) {
       display:flex;
       justify-content:center;

        }
    .btn-send{
        box-shadow: 20px 20px 60px 0 rgba(0, 0, 0, 0.4);
        text-transform: none;
        padding: 0px 30px;
        width: auto;
        height: 50px;
        border-radius: 5px;
        background-color: #ec1c24;
        border: 1px solid #ec1c24;
        color: #fff;
        font-size: 18px;
        font-family: Almarai;
        align-self: center;
       

    }
}
.fa-angle-right{
    margin: 5px 10px;

}
.fa-angle-left{
    margin: 5px 10px;

}
.error-toast{
  border-radius: 5px;
  background-color: #ec1c24;
  width: 80%;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  padding: 10px 0px;
  margin-bottom: 30px;
  @media(max-width: 900px) {
    width: 100%;
}
  p{
      margin: 0px 30px;
  }
}
.card-success{
    min-height: 500px;
  box-shadow: 20px 20px 80px 0 rgba(2, 8, 22, 0.1);
  background-color: #ffffff;
}
.card-header{
    text-align: center;
    img{
        margin-top: 100px;
        margin-bottom: 20px;
        height: 50px;
        object-fit: contain;
    }
}

.done-desc{
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: center;
  color: #000000;
    }
    .done-content{
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.33px;
  text-align: center;
  color: #595f6f;
  @media(max-width: 900px){
      padding: 0px 20px;
  }
    }


.btn-submit-resend{
    display: flex;
    justify-content: center;
    margin-top: 50px;
  
    .btn-send{
        box-shadow: 20px 20px 60px 0 rgba(0, 0, 0, 0.4);
        text-transform: none;
    width: 250px;
        height: 50px;
        border-radius: 5px;
        background-color: #ec1c24;
        border: 1px solid #ec1c24;
        color: #fff;
        font-size: 18px;
        font-family: Almarai;
        align-self: center;
       

    }

   
}
.error-validation{
    
    background-color: #ec1c24;
    width: 80%;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    justify-content: flex-end;
    padding: 0px 30px;
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    padding: 10px 0px;
    @media(max-width: 900px) {
        width: 100%;
    }
    p{
        margin: 0px 30px;

    }
}

.foucs:focus {
    box-shadow:  0 0 20px 0 rgba(0, 0, 0, 0.1) ;
    border-color: transparent ;
    border: 0px;
    outline: none;
  }
.video-react .video-react-big-play-button.video-react-big-play-button-center {
    background-color: red;
    background-image: url(${require(`../../assets/images/18225C47-54D9-4099-94F6-94E2EC837565.svg`)});
    background-repeat: no-repeat;
    background-position: 50% calc(50% - 10px);
    border: none !important; 
    box-shadow: none !important; 
    border: none !important;
    box-shadow: none !important;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-position: center;
    &:before {
      content: "";
      display: none;
    }
    &:hover {
      background-color: red;
      opacity: .7;
    }
  }
  .video-react .video-react-poster{
    background-size: cover;
    border-radius: 10px;
  }
  .video-react-video{
  }
  .video-react{
    border-radius: 10px;
    direction: ltr;
  }
`