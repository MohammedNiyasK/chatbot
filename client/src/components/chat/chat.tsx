import  {  useEffect, useState } from "react";
import { socket } from "@/socket";
import { BASE_URL } from "@/constants";
import axios from "axios";

interface ChatItem {
  query: string | undefined; // Replace with the actual type of context.input
  result: string;
}

const Chat = () => {
  
  const [chatResult, setChatResult] = useState<ChatItem[]>([]);

  const apiUrl = `${BASE_URL}/chat`;
  

  const handleChatData = (data: ChatItem[]) => {
    console.log(data);
    setChatResult(data);
  };

  useEffect(() => {

    axios
      .get(apiUrl)
      .then((res) => setChatResult(res.data))
      .catch((error: any) => {
        console.log(`Error:${error.message}`);
      });

  },[])

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("chatMsg", handleChatData);

    return () => {
      socket.off("chatMsg", handleChatData);
    };
  }, []);

  return (
    <div>
      {chatResult?.map((data) => (
        <>
          <p className="bg-primary text-primary-foreground rounded-md text-base p-3 my-5">
            {data.query}
          </p>
          <p className="bg-gray-400 rounded-md text-base p-3">{data.result}</p>
        </>
      ))}
    </div>
  );
};

export default Chat;
