export default function getChatSocket(
  roomName,
  user,
  code,
  onMessage,
  onClose
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
  chatSocket.onMessage = onMessage;
  chatSocket.onClose = onClose;
  return chatSocket;
}
