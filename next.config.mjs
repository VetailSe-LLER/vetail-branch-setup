/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "branchSetup",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./branchSetup": "./src/pages/branch-setup/index.tsx",
          "./createBranch": "./src/pages/branch-setup/create-new-branch.tsx",
          "./editMainBranch": "./src/pages/branch-setup/edit-main-branch.tsx",
          "./editSubBranch": "./src/pages/branch-setup/edit-sub-branch.tsx",
          "./branchProvider": "./src/components/providers/MfProvider.tsx",
          "./pages-map": "./pages-map.ts",
        },
        extraOptions: {
          debug: true,
          exposePages: true,
          enableImageLoaderFix:
            process.env.NODE_ENV === "production" ? true : false,
          enableUrlLoaderFix:
            process.env.NODE_ENV === "production" ? true : false,
        },
      })
    );
    return config;
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
