import { MessageType } from "../../types/types";
import Message from "./Message";

function MultimediaMessage({ chatMessage }: { chatMessage: MessageType }) {
  const { message } = chatMessage;
  return (
    <Message chatMessage={chatMessage}>
      <div className="flex gap-x-2">
        {message.map((x) => (
          <img src={x} alt="multimedia sent" className="h-10 w-10 rounded-md" />
        ))}
      </div>
    </Message>
  );
}

export default MultimediaMessage;
