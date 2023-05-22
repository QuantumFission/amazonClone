/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "cdn.discordapp.com","lh3.googleusercontent.com", "avatars.githubusercontent.com", "drive.google.com", "amazon-clone-silk-one.vercel.app", "amazon-clone-cftg9tkym-codeandcoffie.vercel.app"]
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
};

module.exports = nextConfig
