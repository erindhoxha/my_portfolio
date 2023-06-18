import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
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
          backgroundColor: '#000',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          enableBackground="new 0 0 1200 630"
          version="1.1"
          viewBox="0 0 1200 630"
          xmlSpace="preserve"
        >
          <path
            style={{ fill: 'white' }}
            d="M641.6 341c-12.3.1-24.7 0-37 .1-1.4 0-1.8-.4-1.7-1.7.1-3.1.1-6.2 0-9.3-.1-1.5.4-1.9 1.9-1.9 12.2.1 24.4 0 36.6.1 1.9 0 2.2-.5 2.2-2.3-.1-7.4-.1-14.7 0-22.1 0-1.6-.3-2.1-2-2-12.3.1-24.5 0-36.8.1-1.6 0-2-.4-1.9-2 .1-3 .1-6.1 0-9.1-.1-1.5.3-2 1.9-2 12.4.1 24.8 0 37.2.1 1.3 0 1.7-.3 1.7-1.6-.1-7.6-.1-15.2 0-22.9 0-1.5-.3-2-1.9-1.9-27.8.1-55.6.1-83.4 0-1.4 0-1.8.3-1.8 1.8.1 16.8 0 33.7 0 50.5v50.7c0 1.4.3 1.9 1.8 1.9 27.9-.1 55.7 0 83.6 0 1.4 0 1.8-.3 1.7-1.7-.1-7.6-.1-15.1 0-22.7-.1-1.7-.5-2.1-2.1-2.1z"
            className="st0"
          ></path>
        </svg>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
