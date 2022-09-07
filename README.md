
# Log


```
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:847:27: warning: the variable "Promise" was not declared in anonymous function " 26#"
    return new (P || (P = Promise))(function (resolve, reject) {
                          ^~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:1060:7: warning: the variable "clearTimeout" was not declared in anonymous function " 34#"
      clearTimeout(automateTimeout);
      ^~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:1061:25: warning: the variable "setTimeout" was not declared in anonymous function " 34#"
      automateTimeout = setTimeout(function () {
                        ^~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:1185:13: warning: the variable "clearInterval" was not declared in anonymous function " 43#"
            clearInterval(checkInterval);
            ^~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:1188:31: warning: the variable "setInterval" was not declared in anonymous function " 42#"
          var checkInterval = setInterval(function () {
                              ^~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:2854:23: warning: the variable "DebuggerInternal" was not declared in function "__shouldPauseOnThrow"
        return typeof DebuggerInternal !== 'undefined' && DebuggerInternal.shouldPauseOnThrow === true;
                      ^~~~~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:9650:30: warning: the variable "__REACT_DEVTOOLS_GLOBAL_HOOK__" was not declared in anonymous function " 147#"
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:9668:146: warning: the variable "nativeFabricUIManager" was not declared in anonymous function " 176#"
    null != handle._nativeTag && (null != handle._internalInstanceHandle ? (handle = handle._internalInstanceHandle.stateNode, null != handle && nativeFabricUIManager.dispatchCommand(handle.node, command, args)) : _$$_REQUIRE(_dependencyMap[2]).UIManager.dispatchViewManagerCommand(handle._nativeTag, command, args));
                                                                                                                                                 ^~~~~~~~~~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:10631:5: warning: the variable "setImmediate" was not declared in function "handleResolved"
    setImmediate(function () {
    ^~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14167:12: warning: the variable "fetch" was not declared in anonymous function " 348#"
    fetch: fetch,
           ^~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14168:14: warning: the variable "Headers" was not declared in anonymous function " 348#"
    Headers: Headers,
             ^~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14169:14: warning: the variable "Request" was not declared in anonymous function " 348#"
    Request: Request,
             ^~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14170:15: warning: the variable "Response" was not declared in anonymous function " 348#"
    Response: Response
              ^~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14346:24: warning: the variable "FileReader" was not declared in function "readBlobAsArrayBuffer"
      var reader = new FileReader();
                       ^~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14391:36: warning: the variable "Blob" was not declared in anonymous function " 359#"
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                                   ^~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14393:40: warning: the variable "FormData" was not declared in anonymous function " 359#"
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                                       ^~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14395:44: warning: the variable "URLSearchParams" was not declared in anonymous function " 359#"
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                                           ^~~~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14672:23: warning: the variable "XMLHttpRequest" was not declared in anonymous function " 368#"
        var xhr = new XMLHttpRequest();
                      ^~~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:14179:76: warning: the variable "self" was not declared in anonymous function " 351#"
    var global = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof global !== 'undefined' && global;
                                                                           ^~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:22803:27: warning: the variable "performance" was not declared in anonymous function " 516#"
  if ("object" === typeof performance && "function" === typeof performance.now) {
                          ^~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:22829:26: warning: the variable "navigator" was not declared in anonymous function " 516#"
  "undefined" !== typeof navigator && undefined !== navigator.scheduling && undefined !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                         ^~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:22909:37: warning: the variable "MessageChannel" was not declared in anonymous function " 516#"
  };else if ("undefined" !== typeof MessageChannel) {
                                    ^~~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:31604:32: warning: the variable "requestAnimationFrame" was not declared in function "onUpdate"
        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
                               ^~~~~~~~~~~~~~~~~~~~~
../rnOwl/android/app/build/generated/assets/react/release/index.android.bundle:45152:18: warning: the variable "WebSocket" was not declared in function "initWebSocket"
    var ws = new WebSocket("ws://" + ipAddress + ":" + _$$_REQUIRE(_dependencyMap[1]).WEBSOCKET_PORT);
                 ^~~~~~~~~
[OWL - CLI] Successfully built for the android platform.
```

```
$ ../rnOwl/node_modules/.bin/owl test --platform android -u --detectOpenHandles
[OWL - CLI] Starting websocket server.
[OWL - CLI] Running tests on android.
Performing Streamed Install
[OWL - WebSocket] Listening on port 8123.
Success
  bash arg: -p
  bash arg: com.rnowl
  bash arg: -c
  bash arg: android.intent.category.LAUNCHER
  bash arg: 1
args: [-p, com.rnowl, -c, android.intent.category.LAUNCHER, 1]
 arg: "-p"
 arg: "com.rnowl"
 arg: "-c"
 arg: "android.intent.category.LAUNCHER"
 arg: "1"
data="com.rnowl"
data="android.intent.category.LAUNCHER"
Events injected: 1
## Network stats: elapsed time=9ms (0ms mobile, 0ms wifi, 9ms not connected)
[OWL - CLI] (Update mode) Updating baseline images.
[OWL - CLI] Will use the jest config localed at ../rnOwl/node_modules/react-native-owl/dist/jest-config.json.
[OWL - CLI] Will set the jest root to ../rnOwl.
  console.info
    [OWL - CLI] Will run the screenshot command: adb exec-out screencap -p > initial.png.

      at Logger.Object.<anonymous>.Logger.info (logger.js:25:26)

  console.info
    [OWL - CLI] Screenshot saved to ../rnOwl/.owl/baseline/android/initial.png.

      at Logger.Object.<anonymous>.Logger.info (logger.js:25:26)


```

### Test Result

```
 FAIL  __tests__/App.owl.tsx (30.404 s)
  App.tsx
    ✓ takes a screenshot of the initial screen (152 ms)
    ✕ show loading, then takes a screenshot (30006 ms)

  ● App.tsx › show loading, then takes a screenshot

    : Timeout - Async callback was not invoked within the 30000 ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 30000 ms timeout specified by jest.setTimeout.Error:

      10 |   });
      11 |
    > 12 |   it('show loading, then takes a screenshot', async () => {
         |   ^
      13 |     await press('showLoading');
      14 |     const screen = await takeScreenshot('show-loading');
      15 |     expect(screen).toMatchBaseline();

      at new Spec (../../jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.<anonymous> (../../../__tests__/App.owl.tsx:12:3)
      at Object.<anonymous> (../../../__tests__/App.owl.tsx:5:1)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        30.604 s, estimated 31 s
Ran all test suites.
Test results written to: .owl/report/jest-report.json
Jest did not exit one second after the test run has completed.
```
