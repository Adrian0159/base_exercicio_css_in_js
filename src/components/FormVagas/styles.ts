import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #f9f5e7;
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const CampoInput = styled.input`
  padding: 0 16px;
  outline-color: #a7727d;

  @media (max-width: 480px) {
    padding: 10px 5px;
  }
`

export const Botao = styled.button`
  background-color: #a7727d;
  border: 1px solid #a7727d;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: #f9f5e7;
  margin-left: 8px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #a7727d;
    background-color: #f9f5e7;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`
