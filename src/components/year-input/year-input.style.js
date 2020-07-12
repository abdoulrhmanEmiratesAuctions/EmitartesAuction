import styled from 'styled-components';

export const YearStyle = styled.div`

.MuiFormControl-root{
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
  input{
      
    padding: 15px 0px;

  }
  .MuiInput-underline:hover:not(.Mui-disabled):before{
    border: 0px;

  }
  .MuiInput-underline:before{
    border: 0px;
   

  }


  @media(max-width: 900px) {
    width: 100%;
}
}

`