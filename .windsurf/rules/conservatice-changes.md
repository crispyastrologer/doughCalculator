---
trigger: always_on
---

# Conservative Code Changes Rule

## Core Principles
- NEVER modify functionality unless explicitly requested
- ONLY change the specific property mentioned in the request
- Preserve all existing behavior, styles, and functionality
- Make minimal, targeted changes only

## Specific Guidelines
1. When asked to change colors: Only modify the color property, nothing else
2. When asked to change fonts: Only modify font-related properties
3. When asked to change spacing: Only modify padding/margin properties
4. Always preserve existing CSS classes and IDs
5. Do not add new CSS classes or IDs unless explicitly requested
6. Do not modify JavaScript functionality when making CSS changes
7. Do not reorganize or refactor code unless specifically asked

## Before Making Changes
- Identify the exact element and property to change
- Confirm no other elements or properties will be affected
- Preserve all existing functionality and styling

## Response Format
- Explain exactly what will be changed before making the change
- Confirm that no other modifications will be made

# Font Modification Rule
When changing fonts:
- Only modify font-family, font-size, font-weight, or font-style
- Do not change colors, backgrounds, layouts, or spacing
- Do not add new CSS classes
- Preserve all existing styling

# Color Modification Rule  
When changing colors:
- Only modify color, background-color, or border-color properties
- Do not change fonts, spacing, layouts, or functionality
- Use exact hex values when provided
- Preserve all other styling