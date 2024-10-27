import { ImageResponse } from 'next/og'

import { fetchAPIData } from '@/data'
import { IMetadata } from '@/lib/types'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Kyle Chapman'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default async function Image (): Promise<ImageResponse> {
  const metadata = await fetchAPIData('metadata') as IMetadata
  return new ImageResponse(
    (
      <div style={{ display: 'flex', background: 'white', color: 'black', width: '100%', height: '100%', padding: '60px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
          <h1 style={{ fontSize: 100, lineHeight: '130px' }}>
            {metadata.name}
          </h1>
          <p style={{ fontSize: 60, lineHeight: '80px', color: '#AAA' }}>{metadata.title}</p>
          <div style={{ display: 'flex', gap: 20, color: '#AAA', alignItems: 'center', marginTop: 40 }}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' color='currentColor' style={{ width: 30, height: 30 }}><path d='M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z' stroke='currentColor' /><path d='M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z' stroke='currentColor' /></svg>
            <p style={{ fontSize: 32, lineHeight: '40px' }}>{metadata.location}</p>
          </div>
          <div style={{ display: 'flex', gap: 20, color: '#AAA', alignItems: 'center', marginTop: 20 }}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' color='currentColor' style={{ width: 30, height: 30 }}><path d='M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15' stroke='currentColor' /><path d='M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15' stroke='currentColor' /><path d='M14.5 4L9.5 20' stroke='currentColor' /></svg>
            <p style={{ fontSize: 32, lineHeight: '40px' }}>{metadata.languages.join(', ')}</p>
          </div>
        </div>
        <span style={{ display: 'flex', position: 'relative', flexShrink: '0', overflow: 'hidden', borderRadius: '50%', width: '300px', height: '300px' }}>
          <img style={{ aspectRatio: '1 / 1', width: '100%', height: '100%' }} alt='Kyle Chapman' src='https://kylechapman.dev/me.jpg' />
        </span>
      </div>
    ),
    { ...size }
  )
}
