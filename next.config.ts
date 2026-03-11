// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
	serverExternalPackages: ["pg"],
	transpilePackages: ["react-image-crop"],
};

export default withPayload(nextConfig);
