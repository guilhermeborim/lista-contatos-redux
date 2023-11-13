import styled from "styled-components";

export const ContactFormContainer = styled.div`
  text-align: center;
  padding-top: 50px;
`;

export const FormContainer = styled.form`
  padding-top: 20px;
  width: 500px;
  margin: 0 auto;
  
  div {
    display: flex;
    flex-direction: column;
    padding: 10px;

    label {
      padding-bottom: 5px;
    }
  }

  .divButton {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    button {
      margin-top: 10px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
`;