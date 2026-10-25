/**
 * checkers-pdn-openings — Official Entry Point (Node.js & Bundlers)
 * Open-source Portable Draughts Notation (PDN 3.0) utilities & classical openings dataset
 * Maintained by Next Checkers Move (https://nextcheckersmove.com/)
 */

'use strict';

const PDNUtils = require('./pdn-utils.js');
const OPENINGS_PDN = require('./openings-pdn.json');
const PUZZLES_PDN_SAMPLE = require('./puzzles-pdn-sample.json');

/**
 * Look up a classical checkers opening by its ID (e.g. "old-faithful", "dyke", "glasgow").
 * @param {string} id
 * @returns {object|null}
 */
function getOpeningById(id) {
  if (!id || !OPENINGS_PDN || !Array.isArray(OPENINGS_PDN.openings)) return null;
  const target = String(id).trim().toLowerCase();
  return OPENINGS_PDN.openings.find(o => o.id.toLowerCase() === target) || null;
}

/**
 * Search classical checkers openings by name or ECO code.
 * @param {string} query
 * @returns {Array<object>}
 */
function searchOpenings(query) {
  if (!OPENINGS_PDN || !Array.isArray(OPENINGS_PDN.openings)) return [];
  if (!query) return OPENINGS_PDN.openings;
  const q = String(query).trim().toLowerCase();
  return OPENINGS_PDN.openings.filter(
    o =>
      o.name.toLowerCase().includes(q) ||
      o.eco.toLowerCase().includes(q) ||
      o.pdn.toLowerCase().includes(q)
  );
}

module.exports = {
  ...PDNUtils,
  PDNUtils,
  OPENINGS_PDN,
  PUZZLES_PDN_SAMPLE,
  getOpeningById,
  searchOpenings
};
