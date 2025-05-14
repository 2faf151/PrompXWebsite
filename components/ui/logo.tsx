import Link from 'next/link'

interface LogoProps {
  trace?: boolean;
  className?: string;
}

export default function Logo({ trace = false }: LogoProps) {
  const boomerangPoints = "-50,-20 0,-10 30,0 0,10 -50,20 -40,0";
  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  return (
    <Link href="/" className="inline-flex" aria-label="Boomerang Logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="-60 -60 120 120"
      >
        {/* Multiple traces that follow the boomerang */}
        {trace && (
          <>
            {[...Array(8)].map((_, i) => (
              <polygon
                key={i}
                points={boomerangPoints}
                fill="none"
                stroke="black"
                strokeWidth={2}
                opacity={0.1}
                strokeDasharray={circumference}
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 0 0"
                  to="360 0 0"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${-(i * 0.25)}s`}
                />
                <animate
                  attributeName="opacity"
                  from="0.3"
                  to="0"
                  dur="0.5s"
                  repeatCount="indefinite"
                  begin={`${-(i * 0.25)}s`}
                />
              </polygon>
            ))}
          </>
        )}
        {/* Main boomerang */}
        {[...Array(20)].map((_, i) => (
          <polygon
            key={i}
            points={boomerangPoints}
            fill="none"
            stroke="black"
            strokeWidth={2}
            opacity={0.5}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${i * 18} 0 0`}
              to={`${i * 18 + 360} 0 0`}
              dur="2s"
              repeatCount="indefinite"
            />
          </polygon>
        ))}
      </svg>
    </Link>
  );
}