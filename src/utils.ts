// import anime from "theme-shokax-anime";
import anime from "./anime";
import BaseEntity from "./entity/BaseEntity";
import { EmitOptions, ParticleOptions, RotateOptions } from "./types";

export const sample = (raw: number | [number, number]): number => {
  return Array.isArray(raw) ? anime.random(raw[0], raw[1]) : raw;
};

export const hasAncestor = (node: Element, name: string): boolean => {
  name = name.toUpperCase();
  do {
    if (node === null || node === undefined) break;
    if (node.nodeName === name) return true;
  } while ((node = <Element>node.parentNode) !== null);
  return false;
};

export const setEndPos = (p: BaseEntity, particle: ParticleOptions) => {
  if (particle.move.includes("emit")) {
    let { emitRadius = [50, 180] } =
      (particle.moveOptions as EmitOptions) ?? {};
    const angle = (anime.random(0, 360) * Math.PI) / 180;
    emitRadius = sample(emitRadius);
    const radius = [-1, 1][anime.random(0, 1)] * emitRadius;
    p.endPos = {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle),
    };
  }
};

export const setEndRotation = (p: BaseEntity, particle: ParticleOptions) => {
  if (particle.move.includes("rotate")) {
    const { angle = [-180, 180] } =
      (particle.moveOptions as RotateOptions) ?? {};
    p.endRotation = sample(angle);
  }
};
