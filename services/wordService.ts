import { Word } from '@/types';

// List of common words to use as fallbacks if API fails
const words: Word[] = [
  {
    word: 'serendipity',
    partOfSpeech: 'noun',
    definition:
      'The occurrence and development of events by chance in a happy or beneficial way.',
    example:
      'A fortunate stroke of serendipity led to her discovering the perfect job.',
  },
  {
    word: 'ephemeral',
    partOfSpeech: 'adjective',
    definition: 'Lasting for a very short time.',
    example:
      'The ephemeral nature of cherry blossoms makes them more appreciated.',
  },
  {
    word: 'ubiquitous',
    partOfSpeech: 'adjective',
    definition: 'Present, appearing, or found everywhere.',
    example: 'Mobile phones have become ubiquitous in modern society.',
  },
  {
    word: 'eloquent',
    partOfSpeech: 'adjective',
    definition: 'Fluent or persuasive in speaking or writing.',
    example: 'She gave an eloquent speech that moved the entire audience.',
  },
  {
    word: 'resilience',
    partOfSpeech: 'noun',
    definition: 'The capacity to recover quickly from difficulties; toughness.',
    example:
      'The resilience of the human spirit is remarkable in times of adversity.',
  },
  {
    word: 'fortitude',
    partOfSpeech: 'noun',
    definition: 'Courage in facing pain or adversity.',
    example:
      'She showed great fortitude during her long recovery from surgery.',
  },
  {
    word: 'perseverance',
    partOfSpeech: 'noun',
    definition:
      'Persistent effort and determination to achieve something despite difficulties or delay.',
    example: 'His perseverance finally paid off when he passed the bar exam.',
  },
  {
    word: 'adaptability',
    partOfSpeech: 'noun',
    definition: 'The ability to adjust to new conditions or environments.',
    example:
      'Her adaptability made her a valuable asset in the ever-changing tech industry.',
  },
  {
    word: 'grit',
    partOfSpeech: 'noun',
    definition: 'Courage and resolve; strength of character.',
    example: `The team's grit was evident as they fought back from a huge deficit to win the game.`,
  },
  {
    word: 'tenacity',
    partOfSpeech: 'noun',
    definition: 'The quality of being determined and persistent.',
    example: 'His tenacity in pursuing justice inspired everyone around him.',
  },
  {
    word: 'ephemeral',
    partOfSpeech: 'adjective',
    definition: 'Lasting for a very short time.',
    example: 'The beauty of a sunset is ephemeral, fading within minutes.',
  },
  {
    word: 'serendipity',
    partOfSpeech: 'noun',
    definition:
      'The occurrence of events by chance in a happy or beneficial way.',
    example: 'Finding that rare book at the flea market was pure serendipity.',
  },
  {
    word: 'cogent',
    partOfSpeech: 'adjective',
    definition: 'Clear, logical, and convincing.',
    example:
      'Her cogent argument persuaded even the most skeptical audience members.',
  },
  {
    word: 'lucid',
    partOfSpeech: 'adjective',
    definition: 'Expressed clearly; easy to understand.',
    example: 'He gave a lucid explanation of quantum mechanics for beginners.',
  },
  {
    word: 'audacity',
    partOfSpeech: 'noun',
    definition:
      'A willingness to take bold risks; rude or disrespectful behavior.',
    example:
      'She had the audacity to challenge the status quo in front of the entire board.',
  },
];

// Function to fetch a random word from the list
export const fetchRandomWord = async (): Promise<Word> => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};
