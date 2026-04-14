const STYLES = {
  bg: "#111113",
  surface: "#1a1a1f",
  accent: "#00E8C8",
  text: "#e8e8ed",
  textSecondary: "#8a8a9a",
  fontStack: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
};

function layout(content: string, unsubscribeUrl?: string): string {
  const unsubscribeBlock = unsubscribeUrl
    ? `<tr>
        <td style="padding: 24px 40px; text-align: center;">
          <a href="${unsubscribeUrl}" style="color: ${STYLES.textSecondary}; font-size: 12px; text-decoration: underline;">Unsubscribe</a>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>PrivDNA</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${STYLES.bg}; font-family: ${STYLES.fontStack}; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: ${STYLES.bg};">
    <tr>
      <td align="center" style="padding: 48px 16px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%;">

          <!-- Logo -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <span style="font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">
                <span style="color: ${STYLES.text};">Priv</span><span style="color: ${STYLES.accent};">DNA</span>
              </span>
            </td>
          </tr>

          <!-- Content card -->
          <tr>
            <td style="background-color: ${STYLES.surface}; border-radius: 12px; padding: 48px 40px;">
              ${content}
            </td>
          </tr>

          ${unsubscribeBlock}

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; text-align: center;">
              <p style="color: ${STYLES.textSecondary}; font-size: 12px; margin: 0; line-height: 1.6;">
                <em style="color: ${STYLES.accent};">Privacy is not a feature. It's the architecture.</em>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildConfirmationEmail(unsubscribeUrl: string): { html: string; text: string } {
  const html = layout(
    `
    <h1 style="color: ${STYLES.text}; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.02em;">
      You're on the list.
    </h1>
    <p style="color: ${STYLES.textSecondary}; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
      We'll reach out when the glass wall goes up.
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 16px 0; border-top: 1px solid rgba(255,255,255,0.06);">
          <p style="color: ${STYLES.textSecondary}; font-size: 13px; line-height: 1.6; margin: 0;">
            Your email is encrypted at rest with AES-256-GCM.<br>
            Our signup system is open source.<br>
            No spam. No data sharing.
          </p>
        </td>
      </tr>
    </table>`,
    unsubscribeUrl
  );

  const text = `You're on the list.

We'll reach out when the glass wall goes up.

Your email is encrypted at rest with AES-256-GCM.
Our signup system is open source.
No spam. No data sharing.

Unsubscribe: ${unsubscribeUrl}

---
PrivDNA — Privacy is not a feature. It's the architecture.`;

  return { html, text };
}

export function buildUnsubscribeConfirmationEmail(): { html: string; text: string } {
  const html = layout(
    `
    <h1 style="color: ${STYLES.text}; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.02em;">
      You've been removed.
    </h1>
    <p style="color: ${STYLES.textSecondary}; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
      Your email has been unsubscribed from the PrivDNA waitlist.
    </p>
    <p style="color: ${STYLES.textSecondary}; font-size: 13px; line-height: 1.6; margin: 0;">
      If this was a mistake, you can sign up again at any time.
    </p>`
  );

  const text = `You've been removed.

Your email has been unsubscribed from the PrivDNA waitlist.

If this was a mistake, you can sign up again at any time.

---
PrivDNA — Privacy is not a feature. It's the architecture.`;

  return { html, text };
}
