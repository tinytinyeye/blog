import dictionary from './dictionary.json';

export interface GetWordleSuggestionsRawQuery {
    placedLetters: string;
    validLetters: string;
    badLetters: string;
}

interface GetWordleSuggestionsQuery {
    placedLetters: string[];
    validLetters: string[];
    badLetters: string[];
}

const parseRawQuery = (
    query: GetWordleSuggestionsRawQuery
): GetWordleSuggestionsQuery => {
    const { placedLetters, validLetters, badLetters } = query;

    return {
        placedLetters: placedLetters.split(','),
        validLetters: validLetters.split(','),
        badLetters: badLetters.split(',').filter((char) => !!char),
    };
};

const alphabets = 'abcdefghijklmnopqrstuvwxyz,'.split('');

const validateQuery = (query: GetWordleSuggestionsQuery) => {
    const { placedLetters, validLetters, badLetters } = query;

    const hasInvalidCharacters = ![
        ...placedLetters,
        ...validLetters,
        ...badLetters,
    ]
        .filter((char) => !!char)
        .every((char) => alphabets.includes(char));
    const hasInvalidLength =
        placedLetters.length !== 5 || validLetters.length !== 5;

    return !(hasInvalidCharacters || hasInvalidLength);
};

const buildFilter = (query: GetWordleSuggestionsQuery) => {
    const { placedLetters, validLetters, badLetters } = query;

    const placedLettersFilters = placedLetters
        .map((char, i) => (char ? (word: string) => word[i] === char : null))
        .filter(Boolean);
    const validLettersFilters = validLetters
        .map((char, i) =>
            char
                ? (word: string) => word[i] !== char && word.includes(char)
                : null
        )
        .filter(Boolean);
    const badLettersFilters = badLetters.map(
        (char) => (word: string) => !word.includes(char)
    );

    const filters = [
        ...placedLettersFilters,
        ...validLettersFilters,
        ...badLettersFilters,
    ];

    return (word: string) => filters.map((filter) => filter(word)).every(Boolean);
};

class WordleSolverService {
    dictionary: string[];
    constructor() {
        this.dictionary = dictionary;
    }

    getSuggestions(rawQuery: GetWordleSuggestionsRawQuery) {
        const query = parseRawQuery(rawQuery);
        if (!validateQuery(query)) {
            return [];
        }

        const filter = buildFilter(query);

        return dictionary.filter(filter);
    }
}

const singleton = new WordleSolverService();

export default singleton;
