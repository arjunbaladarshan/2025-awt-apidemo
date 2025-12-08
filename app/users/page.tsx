import React from "react";
import mysql from "mysql2/promise";
import User from "@/types/User";

async function UserList() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "address_book",
  });

  const [result, fields] = await connection.query("select * from users");

  const data = result as User[];

  return (
    <div>
      {data.map((u: User) => (
        <h1>{u.username}</h1>
      ))}
    </div>
  );
}

export default UserList;
