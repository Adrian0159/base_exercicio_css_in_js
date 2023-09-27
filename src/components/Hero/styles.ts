import styled from 'styled-components'

export const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a7727d;
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const ContainerForm = styled.div`
  position: relative;
  color: #eee;
`

export const HeroTitulo = styled.h2`
  font-family: Gloock, serif;
  font-size: 40px;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
