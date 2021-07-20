#!/usr/bin/env zx

// Copyright 2021 Google LLC

import { $, ProcessOutput, ProcessPromise } from "zx";

void async function () {
    let p: ProcessPromise<ProcessOutput> = $`cat`
    p.pipe(process.stderr);

    p.stdin.write('Hello, TS!\n');
    p.stdin.end();

    let out: ProcessOutput = await p;
    console.log(chalk.red(out.exitCode));
}();