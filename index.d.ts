/**
 * TypeScript Definitions for checkers-pdn-openings
 * Official PDN 3.0 Coordinate Parser & 18 Classical Master Openings Dataset
 * @see https://nextcheckersmove.com/
 * @see https://nextcheckersmove.com/openings.html
 */

export interface BoardCoordinate {
  square: number;
  row: number;
  col: number;
}

export interface ParsedPDNMove {
  raw: string;
  isCapture: boolean;
  squares: number[];
  from: number;
  to: number;
}

export interface CheckersOpening {
  id: string;
  name: string;
  eco: string;
  tier: string;
  evaluation: string;
  style: string;
  pdn: string;
  moves: number[][];
  description: string;
  keyIdeas: string[];
  interactiveUrl: string;
}

export interface CheckersOpeningsDataset {
  name: string;
  version: string;
  license: string;
  publisher: {
    name: string;
    url: string;
    openingsExplorerUrl: string;
    puzzleArenaUrl: string;
    rulesReferenceUrl: string;
  };
  standard: string;
  boardNumbering: string;
  openings: CheckersOpening[];
}

export function isValidSquare(sq: number): boolean;
export function squareToRowCol(sq: number): BoardCoordinate | null;
export function rowColToSquare(row: number, col: number): number | null;
export function parsePDNMove(token: string): ParsedPDNMove | null;
export function getStartingFEN(turn?: 'B' | 'W'): string;
export function getOpeningById(id: string): CheckersOpening | null;
export function searchOpenings(query?: string): CheckersOpening[];

export const OPENINGS_PDN: CheckersOpeningsDataset;
export const PUZZLES_PDN_SAMPLE: Record<string, unknown>;
