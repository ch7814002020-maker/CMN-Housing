const multipliers = {
  k: 1_000,
  lac: 100_000,
  lakh: 100_000,
  cr: 10_000_000,
  crore: 10_000_000,
};

function parsePriceRange(price) {
  if (typeof price !== 'string' || !price.trim()) return null;

  // Only total prices are comparable to the budget; reject per-area quotes.
  const normalized = price.trim().replace(/,/g, '').replace(/^\u20b9\s*/, '');
  const match = normalized.match(
    /^(\d+(?:\.\d+)?)\s*(k|lac|lakh|cr|crore)?(?:\s*[-\u2013\u2014]\s*(\d+(?:\.\d+)?)\s*(k|lac|lakh|cr|crore)?)?$/i
  );
  if (!match) return null;

  const firstUnit = (match[2] || match[4] || '').toLowerCase();
  const secondUnit = (match[4] || match[2] || '').toLowerCase();
  const min = Number(match[1]) * (multipliers[firstUnit] || 1);
  const max = match[3] === undefined
    ? min
    : Number(match[3]) * (multipliers[secondUnit] || 1);

  if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) return null;
  return { min, max };
}

export function matchesBudget(price, budget) {
  if (!budget) return true;
  const range = parsePriceRange(price);
  if (!range) return false;

  // A listing matches when any part of its price range falls in the budget.
  switch (budget) {
    case 'below-25':
      return range.min < 2_500_000;
    case '25-50':
      return range.max >= 2_500_000 && range.min < 5_000_000;
    case '50-100':
      return range.max >= 5_000_000 && range.min <= 10_000_000;
    case 'above-100':
      return range.max > 10_000_000;
    default:
      return false;
  }
}
