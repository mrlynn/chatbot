import createMessage from "../createMessage";
import { ConversationState } from "../useConversation";

export type Role = "user" | "assistant" | "system";

export type MessageData = {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
  rating?: boolean;
};

type ConversationServiceConfig = {
  serverUrl: string;
};

export default class ConversationService {
  private serverUrl: string;

  constructor(config: ConversationServiceConfig) {
    this.serverUrl = config.serverUrl;
  }

  private getUrl(path: string) {
    if (!path.startsWith("/")) {
      throw new Error(
        `Invalid path: ${path} - ConversationService paths must start with /`
      );
    }
    return this.serverUrl + path;
  }

  async createConversation(): Promise<Required<ConversationState>> {
    console.log("services/conversations::createConversation");
    // const path = `/conversations`;
    // const resp = await fetch(this.getUrl(path), {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await resp.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          conversationId: "42",
          messages: [],
        });
      }, 300);
    });
    // return {
    //   conversationId: "42",
    //   messages: [],
    // };
  }

  async addMessage({
    conversationId,
    message,
  }: {
    conversationId: string;
    message: string;
  }): Promise<MessageData> {
    console.log("services/conversations::addMessage", conversationId, message);
    // const path = `/conversations/${conversationId}/messages`;
    // const resp = await fetch(this.getUrl(path), {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message }),
    // });
    // const data = await resp.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(createMessage("user", message));
      }, 1900);
    });
  }

  async rateMessage({
    conversationId,
    messageId,
    rating,
  }: {
    conversationId: string;
    messageId: string;
    rating: boolean;
  }): Promise<void> {
    console.log(
      "services/conversations::rateMessage",
      conversationId,
      messageId,
      rating
    );
    // const path = `/conversations/${conversationId}/messages/${messageId}/rating}`;
    // await fetch(this.getUrl(path), {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ rating }),
    // });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  }
}

export const conversationService = new ConversationService({
  serverUrl: "http://localhost:3000",
});
