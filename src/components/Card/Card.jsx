import React, { useState } from "react";
import { Button, Card } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './Card.css'

export default function CardComponent(props) {
  const [like, setLike] = useState(false);

  const handlerLike = () => {
    setLike(!like);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.movie.portada} />
      <Card.Body>
        {like ? <FaHeart onClick={handlerLike} className="likeActive" /> : <FaRegHeart onClick={handlerLike} />}

        <Card.Title>{props.movie.titulo}</Card.Title>
        <Card.Text>
          {props.movie.sinopsis}
        </Card.Text>
        <Link to={`/${props.movie.genero}/${props.movie.titulo}`} state={props.movie} > { }
          Ver detalle
        </Link>
      </Card.Body>
    </Card>
  )
}
