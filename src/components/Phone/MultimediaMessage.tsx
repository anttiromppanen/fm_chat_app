import { MessageType } from "../../types/types";
import Message from "./Message";

function MultimediaMessage({ chatMessage }: { chatMessage: MessageType }) {
  const { message } = chatMessage;
  const messages = Array.isArray(message) ? message : [message];

  return (
    <Message chatMessage={chatMessage}>
      <div className="flex gap-x-2">
        {messages.map((x) => (
          <img src={x} alt="multimedia sent" className="h-10 w-10 rounded-md" />
        ))}
      </div>
    </Message>
  );
}

export default MultimediaMessage;
