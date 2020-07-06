import styled from 'styled-components';

export const InstructionStyle = styled.div`
.sell-now-image{
    background-image: url(${require(`../../assets/images/70ACAFB2-5CFA-46D9-96B5-A9F08C7BA796.png`)});
    width: 100%;
    min-height: 594px;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .words{
        position: absolute;
        width: 100%;
        text-align: center;
        top: 75%;
        .header{
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        color: #ffffff;
        text-transform: uppercase;
        font-family: Roboto;
        margin: 10px 0px;
        @media (max-width: 600px) {
            font-size: 30px;
        }

    }
    .contain{
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        color: #ffffff;
        text-transform: uppercase;
        margin: 10px 0px;
        font-family: Roboto;
        @media (max-width: 600px) {
            font-size: 20px;
        }
    }
  
    }
    .div-btn{
        position: absolute;
        width: 100%;
        text-align: center;
        top: 96%;
        z-index: 99999999;

    .btn-start{
        width: 180px;
        height: 48px;
        border-radius: 5px;
        box-shadow: 20px 20px 60px 0 rgba(0, 0, 0, 0.4);
        background-color: #ec1c24;
        border: 1px solid #ec1c24;
        align-self: center;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #ffffff;

    }
    }
}
}
.grid-works{
  min-height: 703px;
  
  .work{
    background-color: #323e47;
    width: 100%;
    height: 100%;
    padding: 0px;
    padding: 0px 140px;
    @media (max-width: 600px) {
    padding: 50px 10px;
}

    .how-header{
        font-size: 35px;
        margin-top: 150px;
        color: #fff;
        font-family: Roboto; 
        letter-spacing: -0.97px;
        margin-bottom: 10px;
    }
    .Sell-Your-Car-in-Thr{
        font-family: Roboto;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.5px;
        color: #ffffff;
        margin-bottom: 50px;
    }
  }
 
}
.image-red{
    height: 703px;
    background-image: url(${require(`../../assets/images/93A8DE00-9E11-4364-A50E-EA943C180139.png`)});
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    @media (max-width: 900px) {
    padding: 50px 10px;
    height: 365px;
}
      }

.Bg-Circle{
    width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 20px 20px 60px 0 rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(225deg, #ec1c24, #f91c3d);
  position: relative;
  p{
    font-family: Roboto;
    font-size: 24px;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 0%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
  }
    
}
.header-sell{
    display: flex;
    margin-bottom: 60px
}
.content-sell{
    margin: -11px 0px;
    p{
        margin: 8px 20px;
        height: 21px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
  color: #ffffff;
    }
    .content-smaller{
        font-size: 14px;

    }
}
.content-sold{
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;

    .Bid_ic{
        width: 59px;
  height: 60px;
  object-fit: contain;
 
    }
    .header-sold{
        font-family: Roboto;
        font-size: 30px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.63px;
        text-align: center;
        color: #ffffff;
    }
    .desc-sold{
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.42px;
        text-align: center;
        color: #ffffff;
    }
}

.fa-angle-down{
    color: #FFFFFF;
    margin-left: 8px;
    
}
`
