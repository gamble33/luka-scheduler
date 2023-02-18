import React from "react";
import {Button, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

export const User = ({username, onDeleteUser}) => {

    return (
        <div>
            <Card className={"me-4 ms-4 mb-2 text-center rounded-5 pt-2"}>
                <Card.Title>
                    {username}
                </Card.Title>
                <Link to={`/planner/${username}}`}>
                    <Button className={"m-3"} variant={"secondary"}>Enter Planner</Button>
                </Link>
                <Button
                    onClick={() => onDeleteUser(username)}
                    className={"m-3"}
                    variant={"danger"}
                >Delete
                </Button>
            </Card>
        </div>
    );
}
