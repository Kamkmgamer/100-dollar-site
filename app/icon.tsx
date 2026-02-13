import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
          borderRadius: "6px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        <span style={{ fontSize: 20 }}>🍕</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
