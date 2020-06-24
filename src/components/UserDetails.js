import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "../utils/StyledComponents";

const UserDetailsStyled = styled.div`
  margin-top: 20px;
  .center {
    vertical-align: center;
  }
`;

export default function UserDetails() {
  return (
    <UserDetailsStyled className="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-5">Gonzalo Alejando Jimenez Nuñez</h1>
          <p class="lead">
            <p>
              <strong>Rut: </strong>18.756.748-8
            </p>
            <p>
              <strong>Ciudad: </strong>Talca
            </p>
            <p>
              <strong>Estado: </strong>activo
            </p>
            <p>
              <strong>Fecha de ingreso: </strong>18/07/2019
            </p>
            <p>
              <strong>Email: </strong>gajimenu@gmail.com
            </p>
            <p>
              <strong>Teléfono: </strong>+56945876347
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong>02/07/1998
            </p>
            <p>
              <strong>Sexo: </strong>masculino
            </p>
            <p>
              <strong>Tipo de alimentación: </strong>Vegetariana
            </p>
          </p>
          <div className="row center">
            <div className="col-4 text-left">
              <ButtonStyled>Ver documentos nutricionales</ButtonStyled>
            </div>
            <div className="col-4 text-right">
              <ButtonStyled>Modificar usuario</ButtonStyled>
            </div>

            <div className="col-4 text-center">
              <ButtonStyled
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Eliminar usuario
              </ButtonStyled>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ¿Realmente desea eliminar a este usuario?
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Gonzalo Alejando Jimenez Nuñez será eliminado permanentemente
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <ButtonStyled type="button">Eliminar usuario</ButtonStyled>
            </div>
          </div>
        </div>
      </div>
    </UserDetailsStyled>
  );
}
