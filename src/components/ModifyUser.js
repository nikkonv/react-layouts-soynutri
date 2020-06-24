import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "../utils/StyledComponents";
const AddUserStyled = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  .form-group {
    margin-right: 10px;
  }
`;

export default function AddUser() {
  return (
    <AddUserStyled className="container">
      <form action="">
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="">Nombres</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Apellido Paterno</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Apellido Materno</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Tipo de alimentación</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Estado</label>
              <select class="form-control">
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="">Ciudad</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Teléfono</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Fecha de nacimiento</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Sexo</label>
              <select class="form-control">
                <option>Femenino</option>
                <option>Masculino</option>
              </select>
            </div>
          </div>
        </div>
        <ButtonStyled>Modificar</ButtonStyled>
      </form>
    </AddUserStyled>
  );
}
