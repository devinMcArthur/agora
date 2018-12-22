const config = {
  mongoURL:
    process.env.MONGO_URL ||
    "mongodb://devinMcArthur:chaos1@ds139934.mlab.com:39934/agora-dev",
  port: process.env.PORT || 8000
};

export default config;
