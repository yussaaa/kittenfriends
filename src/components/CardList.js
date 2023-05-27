import React, { Fragment } from "react";
import Card from './Card'

const CardList = ({ kittens }) => {

    // const cardComponent = kittens.map((user, i) => {
    //     return <Card
    //         key={i}
    //         id={kittens[i].id}
    //         name={kittens[i].name}
    //         email={kittens[i].email} />
    // })


    return (
        <Fragment>
            {(kittens.map((user, i) => {
                return <Card
                    key={i}
                    id={kittens[i].id}
                    name={kittens[i].name}
                    email={kittens[i].email} />
            })
            )}
        </Fragment>

    )
}

export default CardList;
