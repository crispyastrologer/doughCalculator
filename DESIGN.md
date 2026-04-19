# EDEINA Design System

Brand guidelines & design system for EDEINA (Artisan Bakery).

## 1. Visual Theme & Atmosphere

**Mood:** Premium, artisanal, natural, warm, elegant, and trustworthy.

**Philosophy:** A harmonious blend of tradition and modernity. Deep navy serves as a grounding color to convey trust and elegance, while soft cream backgrounds provide a tactile, natural warmth. Gold accents bring a touch of premium quality and draw attention to key interactions. The overall aesthetic should reflect handcrafted care and quality.

**Density:** Comfortable spacing with ample negative space. Elements should feel deliberate, uncrowded, and clearly organized to evoke artisanal attention to detail.

## 2. Color Palette & Roles

### CSS Variables Pattern
```css
:root {
    /* Brand Foundation Colors */
    --brand-navy: #192F4D;    /* Primary Dark */
    --brand-cream: #F4F1EA;   /* Primary Light */
    --brand-white: #FFFFFF;   /* Pure Neutral */
    --brand-gold: #D9A043;    /* Accent */
    
    /* Semantic Roles (Default / Light Mode) */
    --bg-primary: var(--brand-cream);
    --bg-card: var(--brand-white);
    --text-primary: var(--brand-navy);
    --text-secondary: #4A5B73; /* Subdued Navy for readability */
    --accent: var(--brand-gold);
    --accent-hover: #C58B30;
    --border: #E0DDD6;
}

[data-theme="dark"] {
    /* Optional Dark Mode Roles */
    --bg-primary: var(--brand-navy);
    --bg-card: #142742;
    --text-primary: var(--brand-cream);
    --text-secondary: #A0B0C4;
    --accent: var(--brand-gold);
    --accent-hover: #E8B661;
    --border: #284063;
}
```

### Color Token Reference

| Token | Light Mode (Default) | Dark Mode | Usage |
|-------|----------------------|-----------|-------|
| `bg-primary` | `#F4F1EA` (Cream) | `#192F4D` (Navy) | Base page background |
| `bg-card` | `#FFFFFF` | `#142742` | Surfaces, containers, or cards |
| `text-primary` | `#192F4D` | `#F4F1EA` | Headlines, primary text, logos |
| `text-secondary`| `#4A5B73` | `#A0B0C4` | Body text, paragraph content |
| `accent` | `#D9A043` (Gold) | `#D9A043` | Calls-to-action, active states, buttons |
| `border` | `#E0DDD6` | `#284063` | Separators, subtle outlines |

## 3. Typography Rules

The branding specifies three distinct font families to marry modern aesthetics with traditional bakery charm.

**Font Stack:**
```css
/* Primary Font (Main Headings, Taglines) */
--font-primary: 'Dallas PS', sans-serif;

/* Secondary Font (Body Text, Secondary Headings) */
--font-secondary: 'Josefin Slab', serif;

/* Accent Font (Script details, special accents) */
--font-accent: 'Brittania', cursive;
```

**Type Scale:**

| Element | Font Family | Size | Weight | Color | Transform |
|---------|-------------|------|--------|-------|-----------|
| Page Hero (H1) | Primary (Dallas PS) | 48px+ | 400 (Regular) | `var(--text-primary)` | uppercase |
| Section (H2) | Secondary (Josefin Slab)| 32px | 700 (Bold) | `var(--text-primary)` | none |
| Script Accent  | Accent (Brittania) | 40px | 400 (Regular) | `var(--accent)` | none |
| Body Text | Secondary (Josefin Slab)| 16px | 400 (Regular) | `var(--text-secondary)`| none, line-height 1.6+ |
| Tagline | Primary (Dallas PS) | 14px | 400 (Regular) | `var(--text-primary)` | uppercase, tracking 2px |
| Button/Label | Primary (Dallas PS) | 14px | 400 (Regular) | `var(--brand-white)` | uppercase, tracking 1px |

## 4. Component Stylings

### Page Layout
```
Container Max Width: 1200px
Alignment: Center
Background: var(--bg-primary)
Corners: Slightly soft (e.g., 4px - 8px border-radius) to feel organic and approachable.
```

### Buttons & Interactive Elements
```
Background: var(--accent)
Color: var(--brand-white)
Padding: 14px 28px
Border-radius: 4px
Font: Primary, 14px, uppercase, letter-spacing: 1px
Hover State: 
  - Background darkens to var(--accent-hover)
  - Subtle lift (e.g., transform: translateY(-1px))
```

### Brand Applications & Imagery
```
Vibe: Warm, beautifully lit, highlighting natural textures (linen, wood grain, flour dust).
Logo application: Use the Navy version on Cream items, and Cream version on Navy items. Ensure the wheat stalk motif remains distinct.
```

## 5. Layout Principles

**Spacing & Grid System:**
- Implement a generous spacing system to allow typography to be the focal point.
- Avoid cluttered rows; use wide columns or a broken/asymmetric grid for lifestyle imagery.

**Base Spacing Scale:**
```
xs: 8px, sm: 16px, md: 24px, lg: 40px, xl: 64px, xxl: 96px
```

## 6. Depth & Elevation

**Shadows:** 
- Maintain a flat or very softly elevated design approach.
- If shadows are used, they should be extremely gentle and subtly tint-matched to the navy.
- Example: `box-shadow: 0 8px 30px rgba(25, 47, 77, 0.05);`

**Borders:** 
- Keep borders thin (1px) and use the subtle `--border` color to divide sections without overwhelming the content.

## 7. Do's and Don'ts

### Do
- Utilize pure Navy (`#192F4D`) and Cream (`#F4F1EA`) as the primary dominant colors.
- Use generous padding specifically on light cream backgrounds.
- Employ Gold (`#D9A043`) mindfully, ensuring it effectively draws the eye to important elements.
- Match typography pairing correctly (Dallas PS for primary/headings, Josefin Slab for body, Brittania for accents).

### Don't
- Use generic placeholders or garish, unapproved colors.
- Overcrowd the layout or remove whitespace—the artisanal design relies on "breathing room."
- Apply harsh dropshadows or heavy rounded corners (pill buttons).
- Use pure black `#000000` text elements as it clashes with the Navy's warmth.
