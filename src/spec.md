# Specification

## Summary
**Goal:** Replace the current warm/red-leaning site theme with a calm green palette while keeping all content and layout unchanged.

**Planned changes:**
- Update Tailwind OKLCH theme tokens in `frontend/src/index.css` for both `:root` and `.dark` to shift `--primary`, `--secondary`, `--accent`, `--ring`, background-related tokens, and any warm-biased chart/shadow tokens from red/orange tones to calm green tones.
- Ensure muted/neutral section backgrounds remain subtle and readable after the palette update, with interactive states (buttons/links/focus rings) reflecting the new calm green theme.

**User-visible outcome:** The site displays a calm green visual theme (buttons, links, highlights, focus rings, and backgrounds) instead of warm red/pink, with no changes to page copy, routing, or component structure.
