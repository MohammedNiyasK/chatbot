
import Chat from "../chat/chat";
import { TextareaWithButton } from "../form/form";

const ChatContainer = () => {
 
  return (
    <div className="flex flex-col h-screen mt-5">
      <div className="flex-1 overflow-y-auto border p-5">
        <Chat />
      </div>
      <div className="p-5">
        <TextareaWithButton />
      </div>
    </div>
  );
};

export default ChatContainer;
