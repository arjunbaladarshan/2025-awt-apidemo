import React from "react";

import User from "@/types/User";

async function UserList() {
  const ans: any = await (
    await fetch("http://localhost:3000/api/users")
  ).json();

  if (ans.status) {
    const data = ans.data;
    return (
      <div>
        {data.map((u: User) => (
          <h1>{u.username}</h1>
        ))}
      </div>
    );
  } else {
    return <h1>Some Error Occured</h1>;
  }
}

export default UserList;
