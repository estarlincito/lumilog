#!/usr/bin/env node
import {
  assert,
  clear,
  count,
  countReset,
  debug,
  dir,
  error,
  group,
  groupCollapsed,
  groupEnd,
  info,
  log,
  success,
  table,
  time,
  timeEnd,
  timeLog,
  timeStamp,
  trace,
  warn,
} from './index.js';
import { version } from './utils/pkg.js';

const args = process.argv.slice(2);

const printHelp = () => {
  console.log(`
Usage: lumilog <command> [message] [options]

Commands:
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

Examples:
  lumilog warn "Be careful, something is not right"
  lumilog error "Operation failed: something went wrong!"
  lumilog success "Task completed"
  lumilog log "Hello world"
  lumilog --version
  lumilog --help
`);
};

const run = async () => {
  try {
    if (args.length === 0) {
      error('No command provided');
      process.exit(1);
    }

    const command = args[0];
    const message = args.slice(1).join(' ');

    switch (command) {
      case '--help':
        printHelp();
        break;
      case '--version':
        console.log(`lumilog v${version}`);
        break;
      case 'log':
        log(message);
        break;
      case 'warn':
        warn(message);
        break;
      case 'success':
        success(message);
        break;
      case 'error':
        error(message);
        break;
      case 'info':
        info(message);
        break;
      case 'debug':
        debug(message);
        break;
      case 'dir':
        dir(JSON.parse(message));
        break;
      case 'table':
        table(JSON.parse(message));
        break;
      case 'assert': {
        const [condition, ...assertMessage] = args.slice(1);
        if (!condition) {
          error('No condition provided');
          process.exit(1);
        }
        const isTrue =
          condition === 'true' ||
          condition === '1' ||
          Boolean(Number(condition));
        assert(isTrue, assertMessage.join(' ') || 'Assertion failed');
        break;
      }
      case 'clear':
        clear();
        break;
      case 'count':
        count(message || 'default');
        break;
      case 'countReset':
        countReset(message || 'default');
        break;
      case 'group':
        group(message);
        break;
      case 'groupCollapsed':
        groupCollapsed(message);
        break;
      case 'groupEnd':
        groupEnd();
        break;
      case 'trace':
        trace();
        break;
      case 'time':
        time(message || 'default');
        break;
      case 'timeLog':
        timeLog(message || 'default');
        break;
      case 'timeEnd':
        timeEnd(message || 'default');
        break;
      case 'timeStamp':
        timeStamp(message || 'default');
        break;
      default:
        error(`Unknown command: ${command}`);
        process.exit(1);
    }
  } catch (err: any) {
    error(err.message);
    printHelp();
    process.exit(1);
  }
};

await run();
