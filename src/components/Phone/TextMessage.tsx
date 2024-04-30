import { MessageType } from "../../types/types";
import Message from "./Message";

function TextMessage({ chatMessage }: { chatMessage: MessageType }) {
  const { message } = chatMessage;
  return (
    <Message chatMessage={chatMessage}>
      <p>{message}</p>
    </Message>
  );
}

export default TextMessage;
