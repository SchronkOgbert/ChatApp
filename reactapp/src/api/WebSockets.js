export default function getChatSocket(
  roomName,
  user,
  code
) {
  console.log(roomName);
  const chatSocket = new WebSocket(
    "ws://" +
      window.location.host +
      "/chat/ws/chat/" +
      roomName +
      "/" +
      user +
      "/" +
      code +
      "/"
  );
  return chatSocket;
}
