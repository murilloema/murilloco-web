import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          background: "#1D3461",
          borderRadius: 96,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 280,
            fontWeight: 800,
            fontFamily: "serif",
            lineHeight: 1,
            marginTop: 20,
          }}
        >
          M
        </span>
      </div>
    ),
    { ...size }
  );
}
