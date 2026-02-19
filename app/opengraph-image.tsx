import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'その挑戦を、世界が信じる形へ - Sidekick | 長崎から起業家・スタートアップを支えるWeb制作'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
          padding: '80px',
          fontFamily: 'Noto Sans JP, sans-serif',
        }}
      >
        {/* Main Content */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* Subheading */}
          <h2 
            style={{ 
              fontSize: 72, 
              fontWeight: 700, 
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            その挑戦を
          </h2>
          
          {/* Main Heading */}
          <h1 
            style={{ 
              fontSize: 120, 
              fontWeight: 700, 
              margin: 0,
              lineHeight: 1.1,
              color: '#1a1a1a',
            }}
          >
            <span style={{ color: '#E50012' }}>世界</span>が信じる形へ
          </h1>
        </div>

        {/* Description */}
        <p 
          style={{ 
            fontSize: 32, 
            marginTop: 50, 
            textAlign: 'center',
            color: '#333',
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          長崎から挑戦者を支える
          <br />
          起業家・スタートアップのためのWebサイト制作
        </p>

        {/* Decorative Image Replacement */}
        <div
          style={{
            marginTop: 50,
            width: 300,
            height: 300,
            backgroundImage: 'url(/svgs/hero-image.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />

        {/* Branding */}
        <div 
          style={{ 
            position: 'absolute', 
            bottom: 50, 
            fontSize: 36, 
            color: '#E50012',
            fontWeight: 700,
            fontFamily: 'system-ui',
            letterSpacing: '0.05em',
          }}
        >
          Sidekick
        </div>

        {/* Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #8B0000 0%, #E50012 50%, #8B0000 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
