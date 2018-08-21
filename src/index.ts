import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs';

interface LockerKeysTree {
  [k: string]: LockerKeysTree | string;
}

/**
 * Get data of `locker.json`
 */
const getData: (dirname: string) => Promise<LockerKeysTree> = async (
  dirname = __dirname,
) => {
  const filrname = path.resolve(dirname, 'locker.json');
  await fs.stat(filrname);
  return fs.readJson(filrname);
};

/**
 * Recursive regist a commands by `prop` value
 */
const registCommand = (currentYargs: yargs.Argv) => (
  entries: [string, LockerKeysTree | string],
) => {
  currentYargs.command(
    entries[0],
    '',
    childYargs => {
      if (typeof entries[1] === 'object') {
        Object.entries(entries[1]).forEach(registCommand(currentYargs));
      }
      return childYargs;
    },
    () => {
      if (typeof entries[1] === 'object') {
        currentYargs.showHelp();
        process.exit(1);
      }

      console.log(entries[1]);
    },
  );
};

export default {
  async process(dirname: string = __dirname) {
    const data = await getData(dirname);
    Object.entries(data).forEach(registCommand(yargs));

    const argv = yargs.help().argv;
    if (argv._.length === 0) {
      yargs.showHelp();
    }
  },
};
