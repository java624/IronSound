import React from 'react';
import Svg, { Path, Circle as SvgCircle, Rect } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  fill?: string;
}

export function PlayIcon({ size = 24, color = 'white', fill = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M6 4.5v15a1 1 0 001.52.85l12-7.5a1 1 0 000-1.7l-12-7.5A1 1 0 006 4.5z"
        fill={fill || color}
      />
    </Svg>
  );
}

export function PauseIcon({ size = 24, color = 'white', fill = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Rect x="6" y="5" width="4" height="14" rx="1.5" fill={fill || color} />
      <Rect x="14" y="5" width="4" height="14" rx="1.5" fill={fill || color} />
    </Svg>
  );
}

export function SkipNextIcon({ size = 24, color = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M5 5v14l10-7L5 5z"
        fill={color}
      />
      <Rect x="17" y="5" width="2.5" height="14" rx="1" fill={color} />
    </Svg>
  );
}

export function SkipPrevIcon({ size = 24, color = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M19 19V5l-10 7 10 7z"
        fill={color}
      />
      <Rect x="4.5" y="5" width="2.5" height="14" rx="1" fill={color} />
    </Svg>
  );
}

export function ShuffleIcon({ size = 22, color = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M16 3h5v5M4 20l6-6M21 3l-7 7M4 4l16 16M16 21h5v-5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function RepeatIcon({ size = 22, color = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M17 1l4 4-4 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 13v2a4 4 0 01-4 4H3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HeartIcon({ size = 22, color = 'white', fill = 'none' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
      />
    </Svg>
  );
}

export function ChevronDownIcon({ size = 24, color = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SettingsIcon({ size = 22, color = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function GuitarIcon({ size = 26, color = '#60a5fa' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M9 18l3-3M14 6l4 4M13.5 7.5L20 1M18.5 2.5L21.5 5.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 8.5C9.5 8 7 10 5.5 12c-2.5 3-1.5 7 1.5 8.5 3.5 1.5 7-1 8.5-3 1.5-2 1.5-5.5-.5-8z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <SvgCircle cx="9" cy="15" r="1.5" fill={color} />
    </Svg>
  );
}

export function VolumeIcon({ size = 20, color = '#94a3b8' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" pointerEvents="none">
      <Path
        d="M11 5L6 9H2v6h4l5 4V5z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
