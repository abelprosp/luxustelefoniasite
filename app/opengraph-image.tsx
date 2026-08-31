import { ImageResponse } from "next/og";

export const alt = "Luxus Telefonia — Telefonia, do jeito que deveria ser.";
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
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: 72,
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#1B4DFF",
            fontWeight: 500,
          }}
        >
          Luxus Telefonia
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: -2,
            }}
          >
            <div style={{ display: "flex" }}>Telefonia.</div>
            <div style={{ display: "flex" }}>Do jeito que deveria ser.</div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 24,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Planos, linhas, suporte e gestão. Tudo em um só lugar.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
