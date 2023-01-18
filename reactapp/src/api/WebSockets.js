export default function getChatSocket(
  roomName,
  user,
  code
) {
  const chatSocket = new WebSocket(
    "ws://vacabaltata.ddns.net:8000/chat/ws/chat/" +
      roomName +
      "/" +
      user +
      "/" +
      code +
      "/"
  );
  return chatSocket;
}
