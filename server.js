import { trim, strip } from 'meta-scalpel-masq-v1';
import 'dotenv/config';

/**
 * Minimal Agent Server
 * Logic for cleaning prompts and preparing context for Claude.
 */

async function processPrompt(userPrompt) {
    console.log('--- Original Prompt ---');
    console.log(userPrompt);

    // 1. Strip unwanted characters/metadata
    let cleanPrompt = strip(userPrompt);

    // 2. Trim whitespace and reduce redundancy
    cleanPrompt = trim(cleanPrompt);

    console.log('\n--- Cleaned Prompt (Sent to Claude) ---');
    console.log(cleanPrompt);

    return cleanPrompt;
}

// Example usage
const rawInput = "   \n\n  Hello Claude! [SYSTEM_METADATA_0X23] Please help me with my code.   \t   ";
processPrompt(rawInput);

console.log("\nMinimal Agent Template is running. Use 'processPrompt' to clean your inputs.");
