import { sendMail } from "@/lib/mailService";


export async function GET(req, res) {
  console.log("hi");
  res.status(200).send(req.auth_data);
}

export async function POST(req, res) {
  await sendMail(
    "TEST",
    "dontkillme@bunnyfiedlabs.com",
    "THI IS A TEST FOR MY MEDIUM USERS"
  );
  res.status(200).send("Success");
}

export async function OPTIONS(req, res) {

  res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}