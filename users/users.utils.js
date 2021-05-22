import jwt from "jsonwebtoken";
import client from "../client";

//token을 확인하고 user나 null 둘 중 하나를 리턴하는 context에서 쓰일 함수
export const getUser = async (token) => {
  try {
    //token이 없을 수도 있음
    if (!token) {
      return null;
    }
    //token에 해당하는 id를 찾는다.
    const { id } = await jwt.verify(token, process.env.SECRET_KEY);
    //찾은 id에 해당하는 user를 찾는다.
    const user = await client.user.findUnique({ where: { id } });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const protectResolver = (user) => {
  if (!user) {
    throw new Error("You need to login.");
  }
};
