import { getColor } from "./lib/getColor";

export interface LetterAvatarConfig {
  content: string;
  backgroundColor?: string;
  color?: string;
  backgroundGradient?: string[];
  size?: number;
}

export function generateLetterAvatar({ content, backgroundColor, backgroundGradient, color, size = 120 }: LetterAvatarConfig): string {
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
  ctx.font = `${Math.round(canvas.width / 2)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillStyle = color || '#FFF';
  ctx.fillText(letter.toUpperCase(), canvas.width / 2, canvas.width / 1.5);

  // Render
  src = canvas.toDataURL('image/jpeg');

  // Clear canvas
  canvas = null;

  return `${src}`;
}