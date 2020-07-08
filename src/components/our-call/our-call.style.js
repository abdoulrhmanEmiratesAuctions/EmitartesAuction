import styled from 'styled-components';

export const OurCallStyle = styled.div`
margin: 100px 0px;
@media (max-width: 900px) {
  margin: 100px 0px;

}
.header-call{
  @media (max-width: 750px) {
    margin: 0px 15px;
  }
 h1{
    font-family: Roboto;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: -0.73px;
  text-align: center;
  color: #000000;
  margin: 10px 0px;
 }
 p{
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.45px;
    text-align: center;
    color: #595f6f;
    margin: 10px 0px;
    margin-bottom: 50px;
 }
}
.container{
    padding: 0px 100px;
    width: 100%;
    @media (max-width: 600px) {
    padding: 0px 10px;
}
}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding-left: 1em; 
  padding-right: 1em;
  line-height: 22px;

  text-indent: -2.1em;
  margin-bottom: 20px;
  color: #595f6f;
  font-size: 18px;

}
ul li::before {
  content: "⬤";
  color: #ec1c24;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 12px;
}
.list-box{
  padding:  20px;
  @media(max-width: 900px){
    padding: 0px 20px;
  }
}


${'' /* .list{
    list-style: none;
    margin: 0px;

    li{
        font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.5px;
  color: #595f6f;
  margin-bottom: 20px;
  &:before{
    content: "⬤";
    display: block;
    float: left;
    width: 1.2em;
    color: #f91c3d;
    margin: 0px 10px;
  }

    }
} */}



`