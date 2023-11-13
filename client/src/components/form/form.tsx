import  { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BASE_URL } from "@/constants";
import axios from "axios";


export function TextareaWithButton() {
  const [input, setInput] = useState("");
  const apiUrl = `${BASE_URL}/chat`;

  const handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = () => {
    
    axios
      .post(apiUrl, { input })
      .then((res) => console.log(res.data))
      .catch((error: any) => {
        console.log(`Error:${error.message}`);
      });

    setInput("");
  };

  return (
    <div className="grid w-full gap-2 mt-10">
      <Textarea
        placeholder="Type your message here."
        onChange={handleChange}
        value={input}
      />
      <Button onClick={sendMessage}>Send message</Button>
    </div>
  );
}
