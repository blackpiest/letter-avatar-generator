import { getColor } from "./lib/getColor";

interface FontSettings {
  ratio?: number;
  family?: string;
  weight?: number;
}

export interface LetterAvatarConfig {
  content: string;
  backgroundColor?: string;
  color?: string;
  backgroundGradient?: string[];
  size?: number;
  font?: FontSettings
}

export function generateLetterAvatar({ content, backgroundColor, backgroundGradient, color, size = 120, font }: LetterAvatarConfig): string {
  if (!content) return '';

  let src = '';
  const letter = content.split('')[0] || '';
  let canvas: HTMLCanvasElement | null = document?.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  let gradient: CanvasGradient | null  = null;

  if (backgroundGradient?.length) {
    gradient = ctx.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, canvas.height);

    for (let i = 0; i < backgroundGradient.length; i++) {
      gradient.addColorStop(i === 0 ? 0 : (i + 1) / backgroundGradient.length, backgroundGradient[i]);
    }
  }

  // Background
  ctx.fillStyle = gradient || backgroundColor || getColor(letter);
  ctx.fillRect(0, 0, canvas.width, canvas.width);

  // Letter
  const defaultRatio = 0.5, defaultFamily = 'Arial', defaultWeight = 400;
  const fontSize = Math.round((font?.ratio || defaultRatio) * canvas.width);
  ctx.font = `${font?.weight || defaultWeight} ${fontSize}px ${font?.family || defaultFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color || '#FFF';
  ctx.fillText(letter.toUpperCase(), canvas.width / 2, canvas.width / 2);

  // Render
  src = canvas.toDataURL('image/jpeg');

  // Clear canvas
  canvas = null;

  return `${src}`;
}