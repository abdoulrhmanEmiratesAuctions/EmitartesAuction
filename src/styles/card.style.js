import styled from 'styled-components';

export const CardStyle = styled.div`
  border-radius: 5px;
  border: solid 1px #dddfe7;
  background-color: #ffffff;
  width: 100%;
  min-height: 247px;
  padding: 0px 30px;
  margin-top: 50px;
  @media(max-width: 900px){
    padding-bottom: 20px;
    margin-top: 30px;

    text-align: center;
  }

.card-header{
    font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #595f6f;
  margin-top: 50px;
  width: 100%;
  @media (max-width: 900px) {
    text-align: center;
}
}
.card-content{
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #595f6f;
  margin-top: 15px;

}
`