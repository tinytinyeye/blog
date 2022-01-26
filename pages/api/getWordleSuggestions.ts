import type { NextApiRequest, NextApiResponse } from 'next';

import WordleSolverService, {
    GetWordleSuggestionsRawQuery,
} from 'services/WordleSolverService';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (
        !req.query?.placedLetters ||
        !req.query?.validLetters ||
        !req.query?.badLetters
    ) {
        res.statusCode = 500;
        res.json({ error: 'missing parameters', query: req.query });
    } else {
        res.statusCode = 200;
        const { suggestions, mostLikelyVowels, mostLikelyLetters } =
            WordleSolverService.getReport(
                req.query as unknown as GetWordleSuggestionsRawQuery
            );
        res.json({ suggestions, mostLikelyVowels, mostLikelyLetters });
    }
};

export default handler;
