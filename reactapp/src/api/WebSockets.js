export default function getChatSocket(roomName, user, code) {
  const chatSocket = new WebSocket(
    "ws://" +
      window.location.host +
      "/chat/ws/chat/" +
      params.room_name +
      "/" +
      params.user +
      "/" +
      params.code +
      "/"
  );
  return chatSocket;
}
