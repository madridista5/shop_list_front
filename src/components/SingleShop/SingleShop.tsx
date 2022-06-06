import React from "react";

interface Props {
    id: string,
}

export const SingleShop = (props: Props) => {
  return <h2>ID: {props.id}.</h2>
};