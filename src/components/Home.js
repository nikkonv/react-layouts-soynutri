import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../utils/StyledComponents";

const HomeStyled = styled.div`
  margin-top: 10px;

  button {
    background-color: var(--mainPurple);
    border-color: var(--mainPurple);
    :hover {
      background-color: white;
      border-color: var(--mainPurple);
      color: var(--mainPurple);
    }
  }
`;

export default function Home() {
  return (
    <HomeStyled className="container">
      <div className="row ">
        <div class="col-4">
          <p>Usuario</p>
          <Link to="add_user">
            <ButtonStyled>Agregar Usuario</ButtonStyled>
          </Link>
          <Link to="search_user">
            <ButtonStyled>Buscar Usuario</ButtonStyled>
          </Link>
          <Link to="modify_user">
            <ButtonStyled>Modificar Usuario</ButtonStyled>
          </Link>
          <Link to="delete_user">
            <ButtonStyled>Eliminar Usuario</ButtonStyled>
          </Link>
        </div>
        <div class="col-4">
          <p>Documentos</p>
          <Link to="adduser">
            <ButtonStyled>Agregar control</ButtonStyled>
          </Link>
          <Link to="adduser">
            <ButtonStyled>Buscar carnet de control</ButtonStyled>
          </Link>
          <Link to="adduser">
            <ButtonStyled>Modificar un control</ButtonStyled>
          </Link>
          <Link to="adduser">
            <ButtonStyled>Eliminar control </ButtonStyled>
          </Link>
        </div>
      </div>
    </HomeStyled>
  );
}
