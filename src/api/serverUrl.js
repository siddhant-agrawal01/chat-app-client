const ServerUrl = {
  // Base URLs
  BASE_URL: "http://127.0.0.1:8000/",
  WS_BASE_URL: "ws://127.0.0.1:8000/",
  
  // API Endpoints
  API: {
    USERS: "api/v1/users/",
    SIGNUP: "api/v1/signup/",
    USER_CHATS: (userId) => `api/v1/users/${userId}/chats/`,
    CHAT_MESSAGES: (chatId) => `api/v1/chats/${chatId}/messages/`,
  },

  // WebSocket Endpoints
  WS: {
    USER_CHAT: (userId) => `ws/users/${userId}/chat/`,
  },

  // Media URLs
  MEDIA: {
    USER: "media/user/",
  }
};

export default ServerUrl;