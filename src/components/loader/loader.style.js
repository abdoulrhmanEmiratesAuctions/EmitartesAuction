import styled from 'styled-components';

export const LoaderStyle = styled.div`
position: absolute;
    z-index: 999999;
    top: 35%;
    width: 80%;
    display: flex;
    justify-content: center;
    @media(max-width: 600px) {
        width: 100%;
        top: 50%;


    }
.loader {
  border: 16px solid #000; /* Light grey */
  border-top: 16px solid #ec1c24; /* Blue */
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
