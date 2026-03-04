import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LabaBersih — Kelola Keuangan Toko Online Jadi Mudah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Green accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#00674F",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#00674F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <span style={{ fontSize: 48, fontWeight: 700, color: "#171717" }}>
            LabaBersih
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#4b5563",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Kelola keuangan toko online jadi mudah.
          <br />
          Satu dashboard, langsung tau laba bersih.
        </p>

        {/* URL */}
        <p
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#00674F",
            fontWeight: 600,
          }}
        >
          lababersih.com
        </p>
      </div>
    ),
    { ...size }
  );
}
