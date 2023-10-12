import React, { useState, useEffect } from "react";
import "./GitUsers.css";

const GitUsers = () => {
  const API_LINK = "https://api.github.com/users";

  // State variables
  const [users, setUsers] = useState([]);

  // // Making API call
  useEffect(() => {
    const getGitHubUsers = async () => {
      try {
        const response = await fetch(API_LINK);
        if (response.ok) {
          const userData = await response.json();
          setUsers(userData);
        } else {
          throw new Error("error while fetching ddata");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getGitHubUsers();
  }, []);

  return (
    <>
      <h4 className="heading text-center">GitHub Users </h4>
      <div className="main-container">
        {users.map((user) => (
          <div className="inner-col" key={user.id}>
            <div className="left">
              <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className="right">
              <p>
                <b>Name: </b>
                {user.login}
              </p>
              <p>
                <b>Followers: </b>
                {/* {user.followers_url} */}
              </p>
              <p>
                <b>Following: </b>
                {/* {user.following_url} */}
              </p>
              <br />
              <p>
                <b>Username: </b>
                {user.login}
              </p>
              <p>
                <b>Repositories: </b>
                {user.public_repos}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h4 className="heading">
        Created By <strong>Abrar Balti</strong> On {new Date().toLocaleString()}
      </h4>{" "}
    </>
  );
};

export default GitUsers;
