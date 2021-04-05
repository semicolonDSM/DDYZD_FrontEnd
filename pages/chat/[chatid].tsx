import Chat from "@/src/components/Chat/Chat";
import { ChatProvider } from "@/src/utils/context/chatProvider";
import { useRouter } from "next/router";
const chat = () => {
    const router = useRouter();
    return (
        <ChatProvider>
            <Chat chat_id={Number(router.query.chatid)} />
        </ChatProvider>
    );
};

export default chat;
