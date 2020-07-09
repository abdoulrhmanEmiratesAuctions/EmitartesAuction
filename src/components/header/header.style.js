import styled from 'styled-components';

export const HeaderStyle = styled.div`
display: flex;
justify-content: space-between;
padding: 30px 140px;
@media (max-width: 600px) {
    padding: 15px 10px;
}
img{
    width: 250px;
    height: 75px;
    object-fit: contain;
    @media (max-width: 600px) {
    width: 200px;
    height: 75px;
    object-fit: contain;
}

}
.btn-lng{
    width: 108px;
    text-transform: none;
    height: 48px;
    border-radius: 5px;
    background-color: #ec1c24;
    border: 1px solid #ec1c24;
    color: #fff;
    font-size: 18px;
    font-family: Almarai;
    align-self: center;
    &:hover{
      background: #ec1c24;
    }
  @media (max-width: 600px) {
    width: 80px;
    height: 48px;
}

}
`