// Lazy load Tinode
let TinodePromise = null;

export const getTinode = async () => {
  if (!TinodePromise) {
    TinodePromise = import(
      /* webpackChunkName: "tinode" */ "@Itgalaxy1/itgalaxychat"
    ).then((module) => {
      const Tinode = module.default;
      // Initialize Tinode with your configuration
      const tinode = new Tinode({
        appName: "ITGalaxy Chat",
        host: process.env.REACT_APP_TINODE_HOST,
        apiKey: process.env.REACT_APP_TINODE_API_KEY,
        transport: "ws",
      });
      return tinode;
    });
  }
  return TinodePromise;
};

// Export specific chat operations
export const initializeChat = async (username, authToken) => {
  const tinode = await getTinode();
  await tinode.connect();
  await tinode.loginToken(authToken, username);
  return tinode;
};

export const createChannel = async (topic, description) => {
  const tinode = await getTinode();
  return tinode.newTopic(topic, description);
};

export const subscribeToChannel = async (channelId, onMessage) => {
  const tinode = await getTinode();
  const topic = tinode.getTopic(channelId);
  await topic.subscribe();
  topic.onMessage = onMessage;
  return topic;
};

// Add more chat operations as needed
