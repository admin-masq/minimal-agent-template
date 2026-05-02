# minimal-agent-template

Low-latency starter kit for building Claude-powered agents.

## Overview

This repository provides a streamlined foundation for building high-performance AI agents powered by Anthropic's Claude. It leverages `meta-scalpel-masq-v1` for aggressive prompt optimization, ensuring minimal latency and maximum token efficiency.

## Features

- **Low Latency**: Optimized prompt preparation pipeline.
- **Prompt Cleaning**: Built-in integration with `meta-scalpel-masq-v1` for `trim` and `strip` utilities.
- **Claude Ready**: Designed specifically for the nuances of Claude's context window.

## Quick Start

### 1. Installation
Clone the repository and install dependencies. This setup automatically pulls the core `meta-scalpel-masq-v1` engine to handle the heavy lifting.

```bash
git clone [https://github.com/admin-masq/minimal-agent-template.git](https://github.com/admin-masq/minimal-agent-template.git)
cd minimal-agent-template
npm install

2. **Configure environment**:
   Create a `.env` file and add your configuration.

3. **Run the server**:
   ```bash
   npm start
   ```

## Prompt Optimization

The core logic uses `trim` and `strip` to remove redundant metadata and whitespace from user inputs before they reach the LLM, reducing cost and improving response speed.

## Usage Example

```javascript
import { trim, strip } from 'meta-scalpel-masq-v1';

// Clean a user prompt before sending to Claude
const rawPrompt = "   User: What is the weather?   \n\n ";
const cleanPrompt = trim(rawPrompt); 

console.log(`Optimized payload sent to Anthropic: ${cleanPrompt}`);
