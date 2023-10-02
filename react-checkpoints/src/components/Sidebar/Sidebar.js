import React from 'react'
import styled from "styled-components";
import logo from '../../assets/logo_cafe.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const SidebarContainer = styled.div`
  width: 300px;
  height: 800px;
  background: #452c15;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 90px;
  left: 0; 
  right: 900px; 
  margin-left: auto; 
  margin-right: auto;
  z-index: 999;
`

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    margin-right: 15px;
`;

const LogoImage = styled.img`
  width: 150px; 
  height: 150px;
  margin-bottom: 20px; 
  align-items: center;
  justify-content: center;
`;

const SidebarText = styled.p`
    color: #f2d7b1;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding: 0;
  margin: 0;
  color: #f2d7b1;
  font-size: 18px;
  margin-top: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 6px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  cursor: pointer;
  svg {
    font-size: 28px; 
    color: #f2d7b1;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>

        <SidebarContent>
            <LogoImage src={logo} alt="Logo do Café" />

            <SidebarText>
                A Coffee Corner é uma cafeteria e torrefação de cafés especiais, localizada no centro de São Paulo.
            </SidebarText>
            <br></br>
            <SidebarText>
                Por aqui você vai encontrar:
            </SidebarText>
                <List>
                    <ListItem>Comidinhas e docinhos</ListItem>
                    <ListItem>Bebidas quentes e geladas</ListItem>
                    <ListItem>Pacotes de café</ListItem>
                    <ListItem>Utensílios para café</ListItem>
                </List>
            <SidebarText>
                Venha nos visitar!
            </SidebarText>

            <SidebarText>
            R. Maj. Sertório, 553 - Vila Buarque, São Paulo - SP
            </SidebarText>

            <SidebarText>
            Horário de funcionamento: Segunda à sábado, das 8h às 18h
            </SidebarText>

            <SocialMedia>
                <SocialIcons>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </SocialIcons>
            </SocialMedia>

        </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar