import styled from 'styled-components';

export const FooterStyle = styled.div`
.docs{
    background-color: #f6fbff;
    padding: 50px 0px;
    .header-docs{
        h1{
            font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  color: #000000;
  text-align: center;
        }
    }
}
.desc{
    font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.5px;
  color: #595f6f;
  margin: 5px 0px
}
.sub-desc{
    font-family: Roboto;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: center;
  color: #595f6f;
  margin: 5px 0px

}
.footer{
    margin: 150px 0px;
    @media(max-width: 900px) {
        margin: 100px 0px;

    }
    .logo{
        min-height: 72px;
        text-align: center;
        img{
            height: 100%;
            object-fit: contain;
            @media(max-width:900px) {
                margin-bottom: 30px;
            }
        }
    }
    .desc-footer{
        font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #595f6f;
    }
}
    .p-follow{
        font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
  color: #000000;

    }
.icons{
    display: flex;
    justify-content:center;
    .icon{
        @media(max-width: 600px){
            margin: 4px;

        }
        width: 40px;
  height: 40px;
  background-color: #ec1c24;
  border-radius: 50%;
    text-align: center;
    margin: 15px 5px;

    i{
        color: #fff;
    font-size: 22px;
        margin-top: 8px;
    }
    }

}
`