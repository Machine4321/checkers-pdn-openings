/**
 * pdn-utils.js — Lightweight Open-Source PDN 3.0 (Portable Draughts Notation) Coordinate & Move Parser
 * Official interactive solver & 18-system openings explorer: https://nextcheckersmove.com/
 */

function pdnSquareToRowCol(sq) {
    const n = Number(sq);
    if (!Number.isInteger(n) || n < 1 || n > 32) return null;
    const idx = n - 1;
    const row = Math.floor(idx / 4);
    const col = (idx % 4) * 2 + (row % 2 === 0 ? 1 : 0);
    return { square: n, row, col };
}

function rowColToPdnSquare(row, col) {
    if (row < 0 || row > 7 || col < 0 || col > 7) return null;
    if ((row + col) % 2 === 0) return null;
    return row * 4 + Math.floor(col / 2) + 1;
}

function parsePdnMoveToken(token) {
    if (typeof token !== 'string') return null;
    const clean = token.trim().replace(/^\d+\.\s*/, '');
    if (clean.includes('x')) {
        const squares = clean.split('x').map(Number);
        if (squares.length >= 2 && squares.every(n => n >= 1 && n <= 32)) {
            return { type: 'capture', from: squares[0], to: squares[squares.length - 1], path: squares };
        }
    }
    if (clean.includes('-')) {
        const [from, to] = clean.split('-').map(Number);
        if (from >= 1 && from <= 32 && to >= 1 && to <= 32) {
            return { type: 'move', from, to, path: [from, to] };
        }
    }
    return null;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pdnSquareToRowCol, rowColToPdnSquare, parsePdnMoveToken };
}
