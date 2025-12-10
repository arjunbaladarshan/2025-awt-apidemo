import mysql from "mysql2/promise";
import wait from "wait";
export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "adress_book",
    });
    const [result, fields] = await connection.query("select * from users");
    await wait(2000);
    return Response.json({ status: true, data: result });
  } catch (err: any) {
    return Response.json({ status: false, error: err.message });
  }
}
