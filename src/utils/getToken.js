import uuidv4 from 'uuidv4';

const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT || 'https://webw2wje9f.execute-api.ap-south-1.amazonaws.com/';
const room_id = process.env.REACT_APP_ROOM_ID || '61962136af3188df33e6935e';

export default async function getToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: uuidv4(), // User ID assigned by you (different from 100ms' assigned id)
      role: role, // listener , speaker , moderator
      room_id,
    }),
  });

  const { token } = await response.json();

  return token;
}
