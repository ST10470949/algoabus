<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use TanStack file routes for each content page and a shared root shell; this preserves accessible navigation and unique page metadata.
- Keep demonstration transport data in the browser-safe Algoa data module, with no simulated official-service claims; the concept has no authorised company systems.
- Keep all brand styling in semantic global tokens and reusable Algoa components; this maintains a consistent design across pages.
- Use CDN pointer imports for uploaded media and real square icons for the favicon/PWA; this keeps media lightweight without losing branding.
- Enquiry forms produce downloadable local drafts only and never transmit personal data; delivery requires an authorised integration.
