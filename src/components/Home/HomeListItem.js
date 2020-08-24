import React from 'react';
import { object } from 'prop-types';

import './HomeListItem.css';
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';

const HomeListItem = ({ libro }) => (
  <div className="HomeListItem">
    <Card>
      <CardImg top width="100%" src="http://covers.openlibrary.org/b/isbn/9780385533225-M.jpg" alt="Card image cap" />
      <CardBody >
        <CardTitle>Titulo: {libro.titulo}</CardTitle>
        <CardSubtitle>Autor: Juan Perez</CardSubtitle>
        <CardText className="description">Precio: {libro.precio}</CardText>
        <Link className="btn btn-primary" to={`/libros/${libro.id}`}>
          Go to Book
        </Link>
      </CardBody>
    </Card>
  </div>
);

HomeListItem.propTypes = {
    libro: object,
};

export default HomeListItem;
