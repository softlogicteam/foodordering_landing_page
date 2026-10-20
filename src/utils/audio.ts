// Synthesizes pleasant chimes using Web Audio API so no audio files are needed

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) audioCtx = new Ctx();
  return audioCtx;
}

export function playKitchenChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    const t = ctx.currentTime;
    // Pleasant 2-tone doorbell chime (E5 -> G5)
    const tones = [659.25, 783.99];
    tones.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.16);

      gain.gain.setValueAtTime(0.001, t + idx * 0.16);
      gain.gain.exponentialRampToValueAtTime(0.2, t + idx * 0.16 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.16 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t + idx * 0.16);
      osc.stop(t + idx * 0.16 + 0.4);
    });
  } catch (err) {
    console.warn('Audio chime unsupported or blocked', err);
  }
}

export function playReadyAlert() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    const t = ctx.currentTime;
    // Cheerful pickup alert (C5 -> E5 -> G5)
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + idx * 0.12);

      gain.gain.setValueAtTime(0.001, t + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.22, t + idx * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.12 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t + idx * 0.12);
      osc.stop(t + idx * 0.12 + 0.35);
    });
  } catch (err) {
    console.warn('Pickup alert sound blocked', err);
  }
}
