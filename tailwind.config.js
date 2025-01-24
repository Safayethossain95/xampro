/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    variants: {
      extend: {
        backdropBlur: ['responsive', 'hover', 'focus'],
      },
    },
    extend: {
      backdropBlur: {
        '160': '160px',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      screens: {
        'xlg': '1280px', // Define xlg breakpoint if you need a custom one
        '2xl': '1280px', // Define xlg breakpoint if you need a custom one
      },
      container: {
        center: true, // Ensure the container is centered
        padding: {
          DEFAULT: '2rem', // Add padding if needed
          'lg': '4rem', // Customize padding at lg and above
          'xlg': '4rem', // Customize padding at lg and above
        },
        // Customizing the container's max-width for each breakpoint
        maxWidth: {
          DEFAULT: '100%', // Default max-width
          'sm': '100%', // Small screens
          'md': '100%', // Medium screens
          'lg': '1180px', // Apply max-width of 1180px at lg breakpoint
          'xlg': '1280px',
          '2xl': '1280px', // Apply max-width of 1180px at xlg breakpoint
        },
      },
    },
  },
  plugins: [],
}

