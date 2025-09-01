// theme.ts - DigibtYe Digital Solutions Theme Configuration

export const theme = {
  colors: {
    // Primary Brand Colors
    primary: {
      orange: '#f26d26',
      blue: '#048ccc',
      DEFAULT: '#f26d26', // Main brand color
      50: '#fef7f0',
      100: '#fdeee0',
      200: '#fad9bf',
      300: '#f7bf94',
      400: '#f39a67',
      500: '#f26d26', // Your brand orange
      600: '#e55a0f',
      700: '#c44510',
      800: '#9c3816',
      900: '#7e3015',
    },

    // Secondary Brand Colors
    secondary: {
      blue: '#048ccc',
      DEFAULT: '#048ccc', // Your brand blue
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#048ccc', // Your brand blue
      600: '#0369a1',
      700: '#0c4a6e',
      800: '#075985',
      900: '#0c4a6e',
    },

    // Neutral Colors
    neutral: {
      gray: '#787878',
      DEFAULT: '#787878', // Your brand gray
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#787878', // Your brand gray
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },

    // System Colors
    black: '#000000',
    white: '#ffffff',
    
    // Success, Warning, Error states
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },

    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },

    // Background variants
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      dark: '#000000',
      muted: '#f9fafb',
    },

    // Text variants
    text: {
      primary: '#000000',
      secondary: '#787878',
      muted: '#9ca3af',
      inverse: '#ffffff',
      accent: '#f26d26',
      link: '#048ccc',
    },

    // Border colors
    border: {
      light: '#e5e7eb',
      DEFAULT: '#d1d5db',
      dark: '#9ca3af',
      accent: '#f26d26',
    },

    // Gradient combinations
    gradients: {
      primary: 'linear-gradient(135deg, #f26d26 0%, #048ccc 100%)',
      primarySoft: 'linear-gradient(135deg, #f26d2615 0%, #048ccc15 100%)',
      dark: 'linear-gradient(135deg, #000000 0%, #787878 100%)',
      light: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Fira Code', 'monospace'],
      heading: ['Poppins', 'system-ui', 'sans-serif'],
    },
    
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },

  // Spacing
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    brand: '0 4px 14px 0 rgba(242, 109, 38, 0.25)',
    brandBlue: '0 4px 14px 0 rgba(4, 140, 204, 0.25)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    DEFAULT: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Component-specific themes
  components: {
    button: {
      primary: {
        background: '#f26d26',
        hover: '#e55a0f',
        text: '#ffffff',
        shadow: '0 4px 14px 0 rgba(242, 109, 38, 0.25)',
      },
      secondary: {
        background: '#048ccc',
        hover: '#0369a1',
        text: '#ffffff',
        shadow: '0 4px 14px 0 rgba(4, 140, 204, 0.25)',
      },
      outline: {
        background: 'transparent',
        border: '#f26d26',
        text: '#f26d26',
        hover: '#f26d26',
      },
    },

    card: {
      background: '#ffffff',
      border: '#e5e7eb',
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      hover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },

    navbar: {
      background: '#ffffff',
      backdrop: 'rgba(255, 255, 255, 0.8)',
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },

    footer: {
      background: '#000000',
      text: '#ffffff',
      accent: '#787878',
    },
  },
} as const;

// Type definitions for theme
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;

// Helper functions for theme usage
export const getColor = (colorPath: string): string => {
  const keys = colorPath.split('.');
  let value: any = theme.colors;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || '#000000';
};

// CSS Custom Properties for dynamic theming
export const cssVariables = {
  '--color-primary': theme.colors.primary.DEFAULT,
  '--color-secondary': theme.colors.secondary.DEFAULT,
  '--color-neutral': theme.colors.neutral.DEFAULT,
  '--color-black': theme.colors.black,
  '--color-white': theme.colors.white,
  '--gradient-primary': theme.colors.gradients.primary,
  '--shadow-brand': theme.shadows.brand,
  '--transition-default': theme.transitions.DEFAULT,
} as const;

export default theme;