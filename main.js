const authors = [
    "Vivekananda", "Robert A. Heinlein", "Edison", "Krishna", "Thiruvalluvar"
];

const quotes = {
    "Vivekananda": [
        "Arise! Awake! And stop not till the goal is reached.",
        "The greatest sin is to think yourself weak",
        "You cannot believe in God until you believe in yourself.",
        "Strength is Life, Weakness is Death.",
        "Comfort is no test of truth. Truth is often far from being comfortable.",
        "The greatest religion is to be true to your own nature. Have faith in yourselves."
    ],
    "Robert A. Heinlein": [
        "A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.",
        "Love is that condition in which the happiness of another person is essential to your own.",
        "Women and cats will do as they please, and men and dogs should relax and get used to the idea.",
        "Never attempt to teach a pig to sing; it wastes your time and annoys the pig.",
        "Don't handicap your children by making their lives easy."
    ],
    "Edison": [
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "I have not failed. I've just found 10,000 ways that won't work.",
        "When you have exhausted all possibilities, remember this - you haven't.",
        "I find out what the world needs. Then I go ahead and try to invent it"
    ],
    "Krishna": [
        "There is neither this world nor the world beyond nor happiness for the one who doubts.",
        "Maam ekam charanam vraja!",
        "You have the right to perform your duties, but you are not entitled to the fruits of your actions.",
        "When consciousness is unified, however, all vain anxiety is left behind. There is no cause for worry, whether things go well or ill.",
        "Cultivate vigour, patience, will, purity; avoid malice and pride.",
        "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye."
    ],
    "Thiruvalluvar": [
        "Those are fools however learned who have not learned to walk with the world.",
        "It is compassion, the most gracious of virtues, Which moves the world.",
        "Even more than the time when she gave birth, a mother feels her greatest joy when she hears others refer to her son as a wise learned one.",
        "Uttering foul words, while there are the sweetest of words, is like going for the unripe fruits while there are a lot of ripe ones.",
        "Think wisely before you exercise an action. Having done so however, never look back and regret. That would be a shame"
    ]
}

const rand = (max) => Math.floor(Math.random() * max);

const uniqueIndex = (existingIndices, max) => {
    let index = rand(max);
    let indicesCopy = existingIndices.map(x => x);

    // Existing indices don't have this, so just return
    if (!indicesCopy.includes(index)) {
        return index;
    }

    while (indicesCopy.includes(index)) {
        index = rand(max);
    }
    
    return index;
}

const threeRandomQuotes = (author) => {
    const allQuotes = quotes[author];
    const max = allQuotes.length;
    const index1 = uniqueIndex([], max);
    const index2 = uniqueIndex([index1], max);
    const index3 = uniqueIndex([index1, index2], max);

    return allQuotes.filter((quote, index) => [index1, index2, index3].includes(index));

}

const randomAuthor = authors[rand(5)];
console.log(`Here are 3 random messages for you by ${randomAuthor}:\n`);

threeRandomQuotes(randomAuthor).forEach(quote => console.log(`* ${quote}`));
