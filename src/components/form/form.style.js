import styled from 'styled-components';

export const FormStyle = styled.div`
.header{
    margin-top: 150px;
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
    margin-bottom: 50px;
    

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
    @media (max-width: 900px) {
   text-align: center;
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

 .header-input{
    font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  color: #595f6f;
  font-weight: bold;

 }
}
.container{
    padding: 0px 100px;
    width: 100%;
    @media (max-width: 900px) {
    padding: 50px 10px;
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
  border-radius: 5px;
  border: solid 1px #bfc4ce;
  background-color: #ffffff;
  margin-top: 15px;
  padding: 0px 30px;
  font-size: 16px;
}
.btn-submit{
    margin-top: 50px;
    @media (max-width: 900px) {
        margin: 50px auto;

        }
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
.fa-angle-right{
    margin: 5px 10px;

}
`