# Lumilog

[![NPM version](https://img.shields.io/npm/v/lumilog.svg?style=flat)](https://npmjs.org/package/lumilog)

> A modern logging library for Node.js, browsers, and CLI apps, with styled console messages and enhanced developer utilities.

`Lumilog` is a TypeScript-friendly logging library that wraps `console` methods with extra features, emojis, timers, and assertions. It works both programmatically via an API and directly in the terminal as a CLI.

---

## Features ✨

- 🔹 **Styled Logging**: Log messages with ⚠️, ✅, ❌, and other visual cues.
- 🚀 **CLI Ready**: Use from the command line with clear commands and options.
- 🌐 **Cross-Platform**: Works in Node.js and modern browsers.
- ⚡ **Enhanced Console**: Timers, counters, assertions, groups, tables, and traces.
- 🛠️ **Developer Friendly**: TypeScript types, minimal footprint, and easy integration.

---

## Installation 💿

```bash
# Using npm
npm install lumilog

# Using pnpm
pnpm add lumilog

# Using yarn
yarn add lumilog
```

---

## Usage 📦

### API \</>

```typescript
import { log, warn, error, success, info, table, count, time } from 'lumilog';

// Basic logs
log('Hello world');
warn('Be careful!');
error('Something went wrong');
success('Task completed');

// Timers and counters
time('process');
setTimeout(() => {
  timeEnd('process'); // logs elapsed time
}, 1000);

count('requests');
count('requests');
countReset('requests');

// Table and object display
table([
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
]);
```

#### API Details

- Each method mirrors `console` functionality but can include **prefix emojis** (`warn: ⚠️`, `success: ✅`, `error: ❌`).
- Supports **TypeScript types** for all methods.
- Works in **Node.js and browsers**.

---

### CLI 🖥️

```bash
#!/usr/bin/env node
lumilog <command> [message] [options]
```

#### Commands

```
  log <message>            Log a message (like console.log)
  warn <message>           Log a warning with ⚠️
  success <message>        Log a success message with ✅
  error <message>          Log an error with ❌
  info <message>           Log an info message
  debug <message>          Log a debug message
  dir <object>             Display an object
  table <object>           Display tabular data
  assert <condition> <message> Assert a condition
  clear                    Clear the console
  count [label]            Log count of calls
  countReset [label]       Reset count
  group <label>            Start a group
  groupCollapsed <label>   Start a collapsed group
  groupEnd                 End a group
  trace                    Log a stack trace
  time <label>             Start a timer
  timeLog <label>          Log timer duration
  timeEnd <label>          End timer and log
  timeStamp [label]        Add a timestamp
  --help                   Show this help message
  --version                Show version
```

#### Example Commands

```bash
lumilog log "Hello world"
lumilog error "Operation failed: something went wrong!"
lumilog warn "This might be dangerous"
lumilog success "Task finished"
lumilog --version
lumilog --help
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
