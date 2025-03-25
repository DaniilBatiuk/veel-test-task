import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Prevents automatic addition of trailing slashes to URLs
  // e.g., '/about/' will not be automatically created from '/about'
  trailingSlash: false,

  // Removes the 'X-Powered-By' header for improved security
  // Prevents revealing technology stack information to potential attackers
  poweredByHeader: false,

  // Creates a standalone output for easier deployment
  // Packages all dependencies for self-contained deployment
  output: 'standalone',

  // Configures security headers for all routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            // Implements HTTP Strict Transport Security (HSTS)
            // Enforces secure HTTPS connections
            // max-age=31536000: Tells browsers to use HTTPS for 1 year
            // includeSubDomains: Applies to all subdomains
            // preload: Allows inclusion in browser preload lists
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },

  experimental: {
    // Optimizes package imports for Tailwind CSS
    optimizePackageImports: ['tailwindcss'],
  },

  // Defines environment variables accessible in the application
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_TODOS_API_URL: process.env.NEXT_PUBLIC_TODOS_API_URL,
  },
}

export default nextConfig
