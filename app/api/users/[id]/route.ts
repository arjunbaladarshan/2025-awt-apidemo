import mysql from "mysql2/promise";
import wait from "wait";
export async function GET(req: Request) {
  console.log(req.url);
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "address_book",
    });
    const [result, fields] = await connection.query(
      `select * from users where id=1`
    );
    await wait(2000);
    return Response.json({ status: true, data: result });
  } catch (err: any) {
    return Response.json({ status: false, error: err.message });
  }
}
