import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "../utils/StyledComponents";
import { Link } from "react-router-dom";
import details from "../resources/details.png";

const SearchUserStyled = styled.div`
  margin-top: 20px;
  table {
    margin-top: 20px;
  }
  img {
    height: 20px;
    width: 20px;
  }
  .td-details {
    text-align: center;
  }
  .search {
    text-align: center;
  }
`;

export default function SearchUser() {
  return (
    <SearchUserStyled className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form action="" className="form-inline search">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar un usuario"
              aria-label="Search"
            />
            <ButtonStyled>Buscar</ButtonStyled>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Apellido Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Ver detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gonzalo Alejandro</td>
            <td>Jimenez</td>
            <td>Nuñez</td>
            <td className="td-details">
              <Link to="user_details">
                <img src={details} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Juan Carlos</td>
            <td>Miquel</td>
            <td>Tormo</td>
            <td className="td-details">
              <Link>
                <img src={details} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Maria Rosario</td>
            <td>Puerta</td>
            <td>Gonzalez</td>
            <td className="td-details">
              <Link>
                <img src={details} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Eva Rosa</td>
            <td>Nieves</td>
            <td>Vivanco</td>
            <td className="td-details">
              <Link>
                <img src={details} alt="" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </SearchUserStyled>
  );
}
