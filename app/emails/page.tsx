import React from "react";
import { PrismaClient } from "@/app/generated/prisma/client";

function Emails() {
  const prisma = new PrismaClient();
  const data = prisma.contact_emails.findMany();
  console.log(data);
  return <div>Hello</div>;
}

export default Emails;
