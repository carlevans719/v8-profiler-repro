# Reproduction instructions

- Run `npm i`
- Then run `meteor`

Observe the following message in the server console:
```
W20170918-12:46:06.216(1)? (STDERR) /home/carl/.meteor/packages/meteor-tool/.1.6.0-beta.27.nkpjtl++os.linux.x86_64+web.browser+web.cordova/mt-os.linux.x86_64/dev_bundle/server-lib/node_modules/fibers/future.js:280
W20170918-12:46:06.217(1)? (STDERR) 						throw(ex);
W20170918-12:46:06.217(1)? (STDERR) 						^
W20170918-12:46:06.217(1)? (STDERR) 
W20170918-12:46:06.217(1)? (STDERR) Error: Cannot find module './build/profiler/v5.7.0/node-v57-linux-x64/profiler.node'
W20170918-12:46:06.217(1)? (STDERR)     at Function.Module._resolveFilename (module.js:527:15)
W20170918-12:46:06.218(1)? (STDERR)     at Function.Module._load (module.js:476:23)
W20170918-12:46:06.218(1)? (STDERR)     at Module.require (module.js:568:17)
W20170918-12:46:06.218(1)? (STDERR)     at require (internal/module.js:11:18)
W20170918-12:46:06.218(1)? (STDERR)     at Object.<anonymous> (/home/carl/Repos/v8-profiler-repro/node_modules/v8-profiler/v8-profiler.js:2:15)
W20170918-12:46:06.218(1)? (STDERR)     at Module._compile (module.js:624:30)
W20170918-12:46:06.218(1)? (STDERR)     at Object.Module._extensions..js (module.js:635:10)
W20170918-12:46:06.218(1)? (STDERR)     at Module.load (module.js:545:32)
W20170918-12:46:06.218(1)? (STDERR)     at tryModuleLoad (module.js:508:12)
W20170918-12:46:06.219(1)? (STDERR)     at Function.Module._load (module.js:500:3)
=> Exited with code: 1
=> Your application is crashing. Waiting for file change.
```
