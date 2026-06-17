import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          padding: "80px",
          backgroundColor: "#fbf9f5",
          color: "#1c1a17",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 600 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 28, color: "#6b6358", maxWidth: 900 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    size
  );
}
