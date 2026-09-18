import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#FAFAF6",
          color: "#4A4E51",
        }}
      >
        <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#E8A63D",
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#2E9C89",
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#D9713C",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: 18,
            textTransform: "uppercase",
          }}
        >
          Tiiwa
        </div>
        <div style={{ fontSize: 32, marginTop: 16, color: "#8B8F92" }}>
          for the hours between sleeps
        </div>
        <div style={{ fontSize: 28, marginTop: 36, maxWidth: 760 }}>
          Feeds, sleep, and nappies — logged in one tap, even at 3am.
        </div>
      </div>
    ),
    size,
  );
}
