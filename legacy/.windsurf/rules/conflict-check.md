---
trigger: always_on
---

# Windsurf HTML/CSS/JS Rules

## Conservative Changes
- ONLY change the specific property requested
- Never modify functionality unless explicitly asked
- Preserve all existing behavior and styling
- Make minimal, targeted changes only

## Override Detection Protocol
**Before making ANY CSS change:**
1. Search ALL .css files for conflicting selectors
2. Check .html files for inline styles (`style=""`)
3. Search .js files for dynamic style changes
4. Look for `!important` declarations
5. Verify CSS loading order in HTML

**Common conflicts to check:**
- Higher specificity selectors (`#id .class` beats `.class`)
- Inline styles (highest priority)
- `!important` declarations
- JavaScript setting styles dynamically
- CSS loaded later in document

## Resolution Strategy
When conflicts found:
1. Increase specificity of new rule
2. Remove/modify conflicting rule
3. Use `!important` only as last resort
4. Move CSS to load after conflicting stylesheets

## Required Response Format
Always include:
- "Searching for overrides..."
- List any conflicts found
- Explain resolution method
- Confirm change will be effective
- List all files modified

## Search Patterns
**Font changes:** Search for `font-family`, `font-size`, `font-weight`, class names, parent containers
**Color changes:** Search for `color`, `background-color`, hex codes, CSS variables
**Layout changes:** Search for `margin`, `padding`, `width`, `height`, parent constraints

## Verification
- Confirm change is visually effective
- Test responsive behavior if applicable
- Verify no unintended side effects