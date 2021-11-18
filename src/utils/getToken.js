import {uuid} from 'uuidv4';

const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT || 'https://webw2wje9f.execute-api.ap-south-1.amazonaws.com/';
const room_id = process.env.REACT_APP_ROOM_ID || '61962f65af3188df33e69396';

export default async function getToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: uuid(), // User ID assigned by you (different from 100ms' assigned id)
      role: role, // listener , speaker , moderator
      room_id,
    }),
    headers: {
      'content-type': 'application/json'
    }
  });

  const { token } = await response.json();

  return token;
}
