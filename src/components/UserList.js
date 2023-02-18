import React, {useState, useEffect} from "react";
import axios from "axios";
import {User} from "./User";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export const UserList = () => {
    const USERS_GET_API_URI = "http://localhost:3000/users";
    const USERS_POST_API_URI = "http://localhost:3000/users/add";
    const USERS_DELETE_API_URI = "http://localhost:3000/users/delete/";
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");


    const handleDeleteUser = async (username) => {
        const res = await axios.delete(USERS_DELETE_API_URI + username)
            .then(() => {
                console.log(`User '${username}' deleted.`);
                setUsers(currentUsers => currentUsers.filter(user => user.username !== username));
            })
        console.log(res);
    }

    const getUsers = async () => {
        try {
            const res = await axios.get(USERS_GET_API_URI, {
                headers: {
                    authorization: "Bearer JWT Token",
                },
            });
            setUsers(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (username.length < 1) {
            console.log("Didn't create user, no username specified.");
            return;
        }
        const user = {
            username
        };
        axios.post(USERS_POST_API_URI, user)
            .then(res => {
                setUsername("");
                console.log(res.data);
                setUsers(currentUsers => [...currentUsers, user]);
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <Card className={"text-center m-3 rounded-2 p-2"}>
                <Form onSubmit={event => {
                    handleCreateUser(event);
                }}>
                    <Form.Text>
                        Create User
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={event => setUsername(event.target.value)}
                            value={username}
                        />
                        <Form.Text className="text-muted">
                            Note, Anybody on your network will be able to enter your planner.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create User
                    </Button>
                </Form>
            </Card>
            <h1 className={"text-center mt-5"}>Users</h1>
            {users.map((user) => {
                    return (
                        <div key={user.username}>
                            <User username={user.username} onDeleteUser={handleDeleteUser}/>
                        </div>
                    )
                }
            )}
        </div>
    )
}