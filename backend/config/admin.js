module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2de55d79f8ed8d8500a628d0c62e5604'),
  },
});
