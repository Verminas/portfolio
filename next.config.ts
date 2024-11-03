// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
//   // i18n: {
//   //   locales: ["en", "ru"],
//   //   defaultLocale: "ru",
//   // },
// };
//
// export default nextConfig;

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
