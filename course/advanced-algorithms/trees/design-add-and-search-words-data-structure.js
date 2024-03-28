class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let cur = this.root;
        for (const char of word) {
            if (!cur.children.has(char))
                cur.children.set(char, new TrieNode());
            cur = cur.children.get(char)
        }
        cur.isWord = true;
    }

    search(word) {
        return this.dfs(word, this.root, 0);
    }

    dfs(word, cur, level) {
        const char = word[level];
        const isLastChar = level === word.length - 1;
        const isWildCard = char === ".";


        if (isWildCard) {
            for (const value of cur.children.values()) {
                if (isLastChar && value.isWord)
                    return true;
                if (this.dfs(word, value, level + 1))
                    return true;
            }
        }

        if (cur.children.has(char)) {
            const child = cur.children.get(char);
            if (isLastChar) return child.isWord;
            return this.dfs(word, child, level + 1);
        }
        else return false;
    }
}

const main = () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");
    console.log(wordDictionary.search("pad")); // return False
    console.log(wordDictionary.search("bad")); // return True
    console.log(wordDictionary.search(".ad")); // return True
    console.log(wordDictionary.search("b..")); // return True
}

main();
