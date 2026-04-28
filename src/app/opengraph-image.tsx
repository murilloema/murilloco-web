import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Murillo Co — Agencia digital en Costa Rica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1D3461",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Círculo decorativo top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        {/* Círculo decorativo bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              color: "#93c5fd",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Agencia Digital · Costa Rica
          </span>
        </div>

        {/* Nombre empresa */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: -1,
          }}
        >
          Murillo Co
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#bfdbfe",
            fontSize: 36,
            fontWeight: 500,
            lineHeight: 1.3,
            maxWidth: 700,
            marginBottom: 56,
          }}
        >
          Páginas web que generan clientes
        </div>

        {/* Servicios */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Diseño Web", "Google Business", "SEO"].map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8,
                padding: "10px 20px",
                color: "#e0f2fe",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            color: "rgba(255,255,255,0.4)",
            fontSize: 22,
            fontWeight: 400,
          }}
        >
          murilloco.cr
        </div>
      </div>
    ),
    { ...size }
  );
}
