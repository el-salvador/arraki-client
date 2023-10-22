/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/ (function () {
  var J = [
      "require",
      "exports",
      "vs/editor/common/core/range",
      "vs/editor/common/core/position",
      "vs/base/common/errors",
      "vs/base/common/strings",
      "vs/editor/common/core/offsetRange",
      "vs/base/common/event",
      "vs/editor/common/diff/algorithms/diffAlgorithm",
      "vs/base/common/assert",
      "vs/base/common/lifecycle",
      "vs/base/common/objects",
      "vs/editor/common/core/lineRange",
      "vs/base/common/platform",
      "vs/base/common/uri",
      "vs/nls",
      "vs/base/common/functional",
      "vs/base/common/iterator",
      "vs/base/common/linkedList",
      "vs/base/common/stopwatch",
      "vs/base/common/diff/diff",
      "vs/base/common/types",
      "vs/base/common/uint",
      "vs/editor/common/core/characterClassifier",
      "vs/editor/common/core/wordHelper",
      "vs/editor/common/diff/linesDiffComputer",
      "vs/base/common/arrays",
      "vs/base/common/cache",
      "vs/base/common/color",
      "vs/base/common/diff/diffChange",
      "vs/base/common/keyCodes",
      "vs/base/common/lazy",
      "vs/base/common/cancellation",
      "vs/base/common/hash",
      "vs/base/common/codicons",
      "vs/editor/common/core/selection",
      "vs/editor/common/core/wordCharacterClassifier",
      "vs/editor/common/diff/algorithms/joinSequenceDiffs",
      "vs/editor/common/diff/algorithms/myersDiffAlgorithm",
      "vs/editor/common/diff/algorithms/utils",
      "vs/editor/common/diff/algorithms/dynamicProgrammingDiffing",
      "vs/editor/common/diff/smartLinesDiffComputer",
      "vs/editor/common/diff/standardLinesDiffComputer",
      "vs/editor/common/diff/linesDiffComputers",
      "vs/editor/common/languages/defaultDocumentColorsComputer",
      "vs/editor/common/languages/linkComputer",
      "vs/editor/common/languages/supports/inplaceReplaceSupport",
      "vs/editor/common/model",
      "vs/editor/common/model/prefixSumComputer",
      "vs/editor/common/model/mirrorTextModel",
      "vs/editor/common/model/textModelSearch",
      "vs/editor/common/services/unicodeTextModelHighlighter",
      "vs/editor/common/standalone/standaloneEnums",
      "vs/editor/common/tokenizationRegistry",
      "vs/nls!vs/base/common/platform",
      "vs/nls!vs/base/common/worker/simpleWorker",
      "vs/base/common/process",
      "vs/base/common/path",
      "vs/nls!vs/editor/common/languages",
      "vs/editor/common/languages",
      "vs/editor/common/services/editorBaseApi",
      "vs/base/common/worker/simpleWorker",
      "vs/editor/common/services/editorSimpleWorker",
    ],
    Z = function (O) {
      for (var n = [], M = 0, D = O.length; M < D; M++) n[M] = J[O[M]];
      return n;
    };
  const Ee = this,
    Re = typeof global == "object" ? global : {};
  var ue;
  (function (O) {
    O.global = Ee;
    class n {
      get isWindows() {
        return this._detect(), this._isWindows;
      }
      get isNode() {
        return this._detect(), this._isNode;
      }
      get isElectronRenderer() {
        return this._detect(), this._isElectronRenderer;
      }
      get isWebWorker() {
        return this._detect(), this._isWebWorker;
      }
      get isElectronNodeIntegrationWebWorker() {
        return this._detect(), this._isElectronNodeIntegrationWebWorker;
      }
      constructor() {
        (this._detected = !1),
          (this._isWindows = !1),
          (this._isNode = !1),
          (this._isElectronRenderer = !1),
          (this._isWebWorker = !1),
          (this._isElectronNodeIntegrationWebWorker = !1);
      }
      _detect() {
        this._detected ||
          ((this._detected = !0),
          (this._isWindows = n._isWindows()),
          (this._isNode = typeof module < "u" && !!module.exports),
          (this._isElectronRenderer =
            typeof process < "u" &&
            typeof process.versions < "u" &&
            typeof process.versions.electron < "u" &&
            process.type === "renderer"),
          (this._isWebWorker = typeof O.global.importScripts == "function"),
          (this._isElectronNodeIntegrationWebWorker =
            this._isWebWorker &&
            typeof process < "u" &&
            typeof process.versions < "u" &&
            typeof process.versions.electron < "u" &&
            process.type === "worker"));
      }
      static _isWindows() {
        return typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.indexOf("Windows") >= 0
          ? !0
          : typeof process < "u"
          ? process.platform === "win32"
          : !1;
      }
    }
    O.Environment = n;
  })(ue || (ue = {}));
  var ue;
  (function (O) {
    class n {
      constructor(u, h, w) {
        (this.type = u), (this.detail = h), (this.timestamp = w);
      }
    }
    O.LoaderEvent = n;
    class M {
      constructor(u) {
        this._events = [new n(1, "", u)];
      }
      record(u, h) {
        this._events.push(
          new n(u, h, O.Utilities.getHighPerformanceTimestamp()),
        );
      }
      getEvents() {
        return this._events;
      }
    }
    O.LoaderEventRecorder = M;
    class D {
      record(u, h) {}
      getEvents() {
        return [];
      }
    }
    (D.INSTANCE = new D()), (O.NullLoaderEventRecorder = D);
  })(ue || (ue = {}));
  var ue;
  (function (O) {
    class n {
      static fileUriToFilePath(D, i) {
        if (((i = decodeURI(i).replace(/%23/g, "#")), D)) {
          if (/^file:\/\/\//.test(i)) return i.substr(8);
          if (/^file:\/\//.test(i)) return i.substr(5);
        } else if (/^file:\/\//.test(i)) return i.substr(7);
        return i;
      }
      static startsWith(D, i) {
        return D.length >= i.length && D.substr(0, i.length) === i;
      }
      static endsWith(D, i) {
        return D.length >= i.length && D.substr(D.length - i.length) === i;
      }
      static containsQueryString(D) {
        return /^[^\#]*\?/gi.test(D);
      }
      static isAbsolutePath(D) {
        return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(D);
      }
      static forEachProperty(D, i) {
        if (D) {
          let u;
          for (u in D) D.hasOwnProperty(u) && i(u, D[u]);
        }
      }
      static isEmpty(D) {
        let i = !0;
        return (
          n.forEachProperty(D, () => {
            i = !1;
          }),
          i
        );
      }
      static recursiveClone(D) {
        if (
          !D ||
          typeof D != "object" ||
          D instanceof RegExp ||
          (!Array.isArray(D) && Object.getPrototypeOf(D) !== Object.prototype)
        )
          return D;
        let i = Array.isArray(D) ? [] : {};
        return (
          n.forEachProperty(D, (u, h) => {
            h && typeof h == "object"
              ? (i[u] = n.recursiveClone(h))
              : (i[u] = h);
          }),
          i
        );
      }
      static generateAnonymousModule() {
        return "===anonymous" + n.NEXT_ANONYMOUS_ID++ + "===";
      }
      static isAnonymousModule(D) {
        return n.startsWith(D, "===anonymous");
      }
      static getHighPerformanceTimestamp() {
        return (
          this.PERFORMANCE_NOW_PROBED ||
            ((this.PERFORMANCE_NOW_PROBED = !0),
            (this.HAS_PERFORMANCE_NOW =
              O.global.performance &&
              typeof O.global.performance.now == "function")),
          this.HAS_PERFORMANCE_NOW ? O.global.performance.now() : Date.now()
        );
      }
    }
    (n.NEXT_ANONYMOUS_ID = 1),
      (n.PERFORMANCE_NOW_PROBED = !1),
      (n.HAS_PERFORMANCE_NOW = !1),
      (O.Utilities = n);
  })(ue || (ue = {}));
  var ue;
  (function (O) {
    function n(i) {
      if (i instanceof Error) return i;
      const u = new Error(i.message || String(i) || "Unknown Error");
      return i.stack && (u.stack = i.stack), u;
    }
    O.ensureError = n;
    class M {
      static validateConfigurationOptions(u) {
        function h(w) {
          if (w.phase === "loading") {
            console.error('Loading "' + w.moduleId + '" failed'),
              console.error(w),
              console.error("Here are the modules that depend on it:"),
              console.error(w.neededBy);
            return;
          }
          if (w.phase === "factory") {
            console.error(
              'The factory function of "' +
                w.moduleId +
                '" has thrown an exception',
            ),
              console.error(w),
              console.error("Here are the modules that depend on it:"),
              console.error(w.neededBy);
            return;
          }
        }
        if (
          ((u = u || {}),
          typeof u.baseUrl != "string" && (u.baseUrl = ""),
          typeof u.isBuild != "boolean" && (u.isBuild = !1),
          typeof u.paths != "object" && (u.paths = {}),
          typeof u.config != "object" && (u.config = {}),
          typeof u.catchError > "u" && (u.catchError = !1),
          typeof u.recordStats > "u" && (u.recordStats = !1),
          typeof u.urlArgs != "string" && (u.urlArgs = ""),
          typeof u.onError != "function" && (u.onError = h),
          Array.isArray(u.ignoreDuplicateModules) ||
            (u.ignoreDuplicateModules = []),
          u.baseUrl.length > 0 &&
            (O.Utilities.endsWith(u.baseUrl, "/") || (u.baseUrl += "/")),
          typeof u.cspNonce != "string" && (u.cspNonce = ""),
          typeof u.preferScriptTags > "u" && (u.preferScriptTags = !1),
          u.nodeCachedData &&
            typeof u.nodeCachedData == "object" &&
            (typeof u.nodeCachedData.seed != "string" &&
              (u.nodeCachedData.seed = "seed"),
            (typeof u.nodeCachedData.writeDelay != "number" ||
              u.nodeCachedData.writeDelay < 0) &&
              (u.nodeCachedData.writeDelay = 1e3 * 7),
            !u.nodeCachedData.path || typeof u.nodeCachedData.path != "string"))
        ) {
          const w = n(
            new Error("INVALID cached data configuration, 'path' MUST be set"),
          );
          (w.phase = "configuration"),
            u.onError(w),
            (u.nodeCachedData = void 0);
        }
        return u;
      }
      static mergeConfigurationOptions(u = null, h = null) {
        let w = O.Utilities.recursiveClone(h || {});
        return (
          O.Utilities.forEachProperty(u, (o, s) => {
            o === "ignoreDuplicateModules" &&
            typeof w.ignoreDuplicateModules < "u"
              ? (w.ignoreDuplicateModules = w.ignoreDuplicateModules.concat(s))
              : o === "paths" && typeof w.paths < "u"
              ? O.Utilities.forEachProperty(s, (d, e) => (w.paths[d] = e))
              : o === "config" && typeof w.config < "u"
              ? O.Utilities.forEachProperty(s, (d, e) => (w.config[d] = e))
              : (w[o] = O.Utilities.recursiveClone(s));
          }),
          M.validateConfigurationOptions(w)
        );
      }
    }
    O.ConfigurationOptionsUtil = M;
    class D {
      constructor(u, h) {
        if (
          ((this._env = u),
          (this.options = M.mergeConfigurationOptions(h)),
          this._createIgnoreDuplicateModulesMap(),
          this._createSortedPathsRules(),
          this.options.baseUrl === "" &&
            this.options.nodeRequire &&
            this.options.nodeRequire.main &&
            this.options.nodeRequire.main.filename &&
            this._env.isNode)
        ) {
          let w = this.options.nodeRequire.main.filename,
            o = Math.max(w.lastIndexOf("/"), w.lastIndexOf("\\"));
          this.options.baseUrl = w.substring(0, o + 1);
        }
      }
      _createIgnoreDuplicateModulesMap() {
        this.ignoreDuplicateModulesMap = {};
        for (let u = 0; u < this.options.ignoreDuplicateModules.length; u++)
          this.ignoreDuplicateModulesMap[
            this.options.ignoreDuplicateModules[u]
          ] = !0;
      }
      _createSortedPathsRules() {
        (this.sortedPathsRules = []),
          O.Utilities.forEachProperty(this.options.paths, (u, h) => {
            Array.isArray(h)
              ? this.sortedPathsRules.push({ from: u, to: h })
              : this.sortedPathsRules.push({ from: u, to: [h] });
          }),
          this.sortedPathsRules.sort((u, h) => h.from.length - u.from.length);
      }
      cloneAndMerge(u) {
        return new D(this._env, M.mergeConfigurationOptions(u, this.options));
      }
      getOptionsLiteral() {
        return this.options;
      }
      _applyPaths(u) {
        let h;
        for (let w = 0, o = this.sortedPathsRules.length; w < o; w++)
          if (
            ((h = this.sortedPathsRules[w]), O.Utilities.startsWith(u, h.from))
          ) {
            let s = [];
            for (let d = 0, e = h.to.length; d < e; d++)
              s.push(h.to[d] + u.substr(h.from.length));
            return s;
          }
        return [u];
      }
      _addUrlArgsToUrl(u) {
        return O.Utilities.containsQueryString(u)
          ? u + "&" + this.options.urlArgs
          : u + "?" + this.options.urlArgs;
      }
      _addUrlArgsIfNecessaryToUrl(u) {
        return this.options.urlArgs ? this._addUrlArgsToUrl(u) : u;
      }
      _addUrlArgsIfNecessaryToUrls(u) {
        if (this.options.urlArgs)
          for (let h = 0, w = u.length; h < w; h++)
            u[h] = this._addUrlArgsToUrl(u[h]);
        return u;
      }
      moduleIdToPaths(u) {
        if (
          this._env.isNode &&
          this.options.amdModulesPattern instanceof RegExp &&
          !this.options.amdModulesPattern.test(u)
        )
          return this.isBuild() ? ["empty:"] : ["node|" + u];
        let h = u,
          w;
        if (!O.Utilities.endsWith(h, ".js") && !O.Utilities.isAbsolutePath(h)) {
          w = this._applyPaths(h);
          for (let o = 0, s = w.length; o < s; o++)
            (this.isBuild() && w[o] === "empty:") ||
              (O.Utilities.isAbsolutePath(w[o]) ||
                (w[o] = this.options.baseUrl + w[o]),
              !O.Utilities.endsWith(w[o], ".js") &&
                !O.Utilities.containsQueryString(w[o]) &&
                (w[o] = w[o] + ".js"));
        } else
          !O.Utilities.endsWith(h, ".js") &&
            !O.Utilities.containsQueryString(h) &&
            (h = h + ".js"),
            (w = [h]);
        return this._addUrlArgsIfNecessaryToUrls(w);
      }
      requireToUrl(u) {
        let h = u;
        return (
          O.Utilities.isAbsolutePath(h) ||
            ((h = this._applyPaths(h)[0]),
            O.Utilities.isAbsolutePath(h) || (h = this.options.baseUrl + h)),
          this._addUrlArgsIfNecessaryToUrl(h)
        );
      }
      isBuild() {
        return this.options.isBuild;
      }
      shouldInvokeFactory(u) {
        return !!(
          !this.options.isBuild ||
          O.Utilities.isAnonymousModule(u) ||
          (this.options.buildForceInvokeFactory &&
            this.options.buildForceInvokeFactory[u])
        );
      }
      isDuplicateMessageIgnoredFor(u) {
        return this.ignoreDuplicateModulesMap.hasOwnProperty(u);
      }
      getConfigForModule(u) {
        if (this.options.config) return this.options.config[u];
      }
      shouldCatchError() {
        return this.options.catchError;
      }
      shouldRecordStats() {
        return this.options.recordStats;
      }
      onError(u) {
        this.options.onError(u);
      }
    }
    O.Configuration = D;
  })(ue || (ue = {}));
  var ue;
  (function (O) {
    class n {
      constructor(s) {
        (this._env = s), (this._scriptLoader = null), (this._callbackMap = {});
      }
      load(s, d, e, f) {
        if (!this._scriptLoader)
          if (this._env.isWebWorker) this._scriptLoader = new i();
          else if (this._env.isElectronRenderer) {
            const { preferScriptTags: g } = s.getConfig().getOptionsLiteral();
            g
              ? (this._scriptLoader = new M())
              : (this._scriptLoader = new u(this._env));
          } else
            this._env.isNode
              ? (this._scriptLoader = new u(this._env))
              : (this._scriptLoader = new M());
        let c = { callback: e, errorback: f };
        if (this._callbackMap.hasOwnProperty(d)) {
          this._callbackMap[d].push(c);
          return;
        }
        (this._callbackMap[d] = [c]),
          this._scriptLoader.load(
            s,
            d,
            () => this.triggerCallback(d),
            (g) => this.triggerErrorback(d, g),
          );
      }
      triggerCallback(s) {
        let d = this._callbackMap[s];
        delete this._callbackMap[s];
        for (let e = 0; e < d.length; e++) d[e].callback();
      }
      triggerErrorback(s, d) {
        let e = this._callbackMap[s];
        delete this._callbackMap[s];
        for (let f = 0; f < e.length; f++) e[f].errorback(d);
      }
    }
    class M {
      attachListeners(s, d, e) {
        let f = () => {
            s.removeEventListener("load", c), s.removeEventListener("error", g);
          },
          c = (b) => {
            f(), d();
          },
          g = (b) => {
            f(), e(b);
          };
        s.addEventListener("load", c), s.addEventListener("error", g);
      }
      load(s, d, e, f) {
        if (/^node\|/.test(d)) {
          let c = s.getConfig().getOptionsLiteral(),
            g = h(s.getRecorder(), c.nodeRequire || O.global.nodeRequire),
            b = d.split("|"),
            _ = null;
          try {
            _ = g(b[1]);
          } catch (N) {
            f(N);
            return;
          }
          s.enqueueDefineAnonymousModule([], () => _), e();
        } else {
          let c = document.createElement("script");
          c.setAttribute("async", "async"),
            c.setAttribute("type", "text/javascript"),
            this.attachListeners(c, e, f);
          const { trustedTypesPolicy: g } = s.getConfig().getOptionsLiteral();
          g && (d = g.createScriptURL(d)), c.setAttribute("src", d);
          const { cspNonce: b } = s.getConfig().getOptionsLiteral();
          b && c.setAttribute("nonce", b),
            document.getElementsByTagName("head")[0].appendChild(c);
        }
      }
    }
    function D(o) {
      const { trustedTypesPolicy: s } = o.getConfig().getOptionsLiteral();
      try {
        return (
          (s
            ? self.eval(s.createScript("", "true"))
            : new Function("true")
          ).call(self),
          !0
        );
      } catch {
        return !1;
      }
    }
    class i {
      constructor() {
        this._cachedCanUseEval = null;
      }
      _canUseEval(s) {
        return (
          this._cachedCanUseEval === null && (this._cachedCanUseEval = D(s)),
          this._cachedCanUseEval
        );
      }
      load(s, d, e, f) {
        if (/^node\|/.test(d)) {
          const c = s.getConfig().getOptionsLiteral(),
            g = h(s.getRecorder(), c.nodeRequire || O.global.nodeRequire),
            b = d.split("|");
          let _ = null;
          try {
            _ = g(b[1]);
          } catch (N) {
            f(N);
            return;
          }
          s.enqueueDefineAnonymousModule([], function () {
            return _;
          }),
            e();
        } else {
          const { trustedTypesPolicy: c } = s.getConfig().getOptionsLiteral();
          if (
            !(
              /^((http:)|(https:)|(file:))/.test(d) &&
              d.substring(0, self.origin.length) !== self.origin
            ) &&
            this._canUseEval(s)
          ) {
            fetch(d)
              .then((b) => {
                if (b.status !== 200) throw new Error(b.statusText);
                return b.text();
              })
              .then((b) => {
                (b = `${b}
//# sourceURL=${d}`),
                  (c ? self.eval(c.createScript("", b)) : new Function(b)).call(
                    self,
                  ),
                  e();
              })
              .then(void 0, f);
            return;
          }
          try {
            c && (d = c.createScriptURL(d)), importScripts(d), e();
          } catch (b) {
            f(b);
          }
        }
      }
    }
    class u {
      constructor(s) {
        (this._env = s),
          (this._didInitialize = !1),
          (this._didPatchNodeRequire = !1);
      }
      _init(s) {
        this._didInitialize ||
          ((this._didInitialize = !0),
          (this._fs = s("fs")),
          (this._vm = s("vm")),
          (this._path = s("path")),
          (this._crypto = s("crypto")));
      }
      _initNodeRequire(s, d) {
        const { nodeCachedData: e } = d.getConfig().getOptionsLiteral();
        if (!e || this._didPatchNodeRequire) return;
        this._didPatchNodeRequire = !0;
        const f = this,
          c = s("module");
        function g(b) {
          const _ = b.constructor;
          let N = function (A) {
            try {
              return b.require(A);
            } finally {
            }
          };
          return (
            (N.resolve = function (A, S) {
              return _._resolveFilename(A, b, !1, S);
            }),
            (N.resolve.paths = function (A) {
              return _._resolveLookupPaths(A, b);
            }),
            (N.main = process.mainModule),
            (N.extensions = _._extensions),
            (N.cache = _._cache),
            N
          );
        }
        c.prototype._compile = function (b, _) {
          const N = c.wrap(b.replace(/^#!.*/, "")),
            C = d.getRecorder(),
            A = f._getCachedDataPath(e, _),
            S = { filename: _ };
          let v;
          try {
            const R = f._fs.readFileSync(A);
            (v = R.slice(0, 16)), (S.cachedData = R.slice(16)), C.record(60, A);
          } catch {
            C.record(61, A);
          }
          const r = new f._vm.Script(N, S),
            a = r.runInThisContext(S),
            l = f._path.dirname(_),
            L = g(this),
            m = [this.exports, L, this, _, l, process, Re, Buffer],
            p = a.apply(this.exports, m);
          return (
            f._handleCachedData(r, N, A, !S.cachedData, d),
            f._verifyCachedData(r, N, A, v, d),
            p
          );
        };
      }
      load(s, d, e, f) {
        const c = s.getConfig().getOptionsLiteral(),
          g = h(s.getRecorder(), c.nodeRequire || O.global.nodeRequire),
          b =
            c.nodeInstrumenter ||
            function (N) {
              return N;
            };
        this._init(g), this._initNodeRequire(g, s);
        let _ = s.getRecorder();
        if (/^node\|/.test(d)) {
          let N = d.split("|"),
            C = null;
          try {
            C = g(N[1]);
          } catch (A) {
            f(A);
            return;
          }
          s.enqueueDefineAnonymousModule([], () => C), e();
        } else {
          d = O.Utilities.fileUriToFilePath(this._env.isWindows, d);
          const N = this._path.normalize(d),
            C = this._getElectronRendererScriptPathOrUri(N),
            A = !!c.nodeCachedData,
            S = A ? this._getCachedDataPath(c.nodeCachedData, d) : void 0;
          this._readSourceAndCachedData(N, S, _, (v, r, a, l) => {
            if (v) {
              f(v);
              return;
            }
            let L;
            r.charCodeAt(0) === u._BOM
              ? (L = u._PREFIX + r.substring(1) + u._SUFFIX)
              : (L = u._PREFIX + r + u._SUFFIX),
              (L = b(L, N));
            const m = { filename: C, cachedData: a },
              p = this._createAndEvalScript(s, L, m, e, f);
            this._handleCachedData(p, L, S, A && !a, s),
              this._verifyCachedData(p, L, S, l, s);
          });
        }
      }
      _createAndEvalScript(s, d, e, f, c) {
        const g = s.getRecorder();
        g.record(31, e.filename);
        const b = new this._vm.Script(d, e),
          _ = b.runInThisContext(e),
          N = s.getGlobalAMDDefineFunc();
        let C = !1;
        const A = function () {
          return (C = !0), N.apply(null, arguments);
        };
        return (
          (A.amd = N.amd),
          _.call(
            O.global,
            s.getGlobalAMDRequireFunc(),
            A,
            e.filename,
            this._path.dirname(e.filename),
          ),
          g.record(32, e.filename),
          C
            ? f()
            : c(new Error(`Didn't receive define call in ${e.filename}!`)),
          b
        );
      }
      _getElectronRendererScriptPathOrUri(s) {
        if (!this._env.isElectronRenderer) return s;
        let d = s.match(/^([a-z])\:(.*)/i);
        return d
          ? `file:///${(d[1].toUpperCase() + ":" + d[2]).replace(/\\/g, "/")}`
          : `file://${s}`;
      }
      _getCachedDataPath(s, d) {
        const e = this._crypto
            .createHash("md5")
            .update(d, "utf8")
            .update(s.seed, "utf8")
            .update(process.arch, "")
            .digest("hex"),
          f = this._path.basename(d).replace(/\.js$/, "");
        return this._path.join(s.path, `${f}-${e}.code`);
      }
      _handleCachedData(s, d, e, f, c) {
        s.cachedDataRejected
          ? this._fs.unlink(e, (g) => {
              c.getRecorder().record(62, e),
                this._createAndWriteCachedData(s, d, e, c),
                g && c.getConfig().onError(g);
            })
          : f && this._createAndWriteCachedData(s, d, e, c);
      }
      _createAndWriteCachedData(s, d, e, f) {
        let c = Math.ceil(
            f.getConfig().getOptionsLiteral().nodeCachedData.writeDelay *
              (1 + Math.random()),
          ),
          g = -1,
          b = 0,
          _;
        const N = () => {
          setTimeout(
            () => {
              _ ||
                (_ = this._crypto.createHash("md5").update(d, "utf8").digest());
              const C = s.createCachedData();
              if (!(C.length === 0 || C.length === g || b >= 5)) {
                if (C.length < g) {
                  N();
                  return;
                }
                (g = C.length),
                  this._fs.writeFile(e, Buffer.concat([_, C]), (A) => {
                    A && f.getConfig().onError(A),
                      f.getRecorder().record(63, e),
                      N();
                  });
              }
            },
            c * Math.pow(4, b++),
          );
        };
        N();
      }
      _readSourceAndCachedData(s, d, e, f) {
        if (!d) this._fs.readFile(s, { encoding: "utf8" }, f);
        else {
          let c,
            g,
            b,
            _ = 2;
          const N = (C) => {
            C ? f(C) : --_ === 0 && f(void 0, c, g, b);
          };
          this._fs.readFile(s, { encoding: "utf8" }, (C, A) => {
            (c = A), N(C);
          }),
            this._fs.readFile(d, (C, A) => {
              !C && A && A.length > 0
                ? ((b = A.slice(0, 16)), (g = A.slice(16)), e.record(60, d))
                : e.record(61, d),
                N();
            });
        }
      }
      _verifyCachedData(s, d, e, f, c) {
        f &&
          (s.cachedDataRejected ||
            setTimeout(
              () => {
                const g = this._crypto
                  .createHash("md5")
                  .update(d, "utf8")
                  .digest();
                f.equals(g) ||
                  (c
                    .getConfig()
                    .onError(
                      new Error(
                        `FAILED TO VERIFY CACHED DATA, deleting stale '${e}' now, but a RESTART IS REQUIRED`,
                      ),
                    ),
                  this._fs.unlink(e, (b) => {
                    b && c.getConfig().onError(b);
                  }));
              },
              Math.ceil(5e3 * (1 + Math.random())),
            ));
      }
    }
    (u._BOM = 65279),
      (u._PREFIX = "(function (require, define, __filename, __dirname) { "),
      (u._SUFFIX = `
});`);
    function h(o, s) {
      if (s.__$__isRecorded) return s;
      const d = function (f) {
        o.record(33, f);
        try {
          return s(f);
        } finally {
          o.record(34, f);
        }
      };
      return (d.__$__isRecorded = !0), d;
    }
    O.ensureRecordedNodeRequire = h;
    function w(o) {
      return new n(o);
    }
    O.createScriptLoader = w;
  })(ue || (ue = {}));
  var ue;
  (function (O) {
    class n {
      constructor(o) {
        let s = o.lastIndexOf("/");
        s !== -1
          ? (this.fromModulePath = o.substr(0, s + 1))
          : (this.fromModulePath = "");
      }
      static _normalizeModuleId(o) {
        let s = o,
          d;
        for (d = /\/\.\//; d.test(s); ) s = s.replace(d, "/");
        for (
          s = s.replace(/^\.\//g, ""),
            d =
              /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
          d.test(s);

        )
          s = s.replace(d, "/");
        return (
          (s = s.replace(
            /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
            "",
          )),
          s
        );
      }
      resolveModule(o) {
        let s = o;
        return (
          O.Utilities.isAbsolutePath(s) ||
            ((O.Utilities.startsWith(s, "./") ||
              O.Utilities.startsWith(s, "../")) &&
              (s = n._normalizeModuleId(this.fromModulePath + s))),
          s
        );
      }
    }
    (n.ROOT = new n("")), (O.ModuleIdResolver = n);
    class M {
      constructor(o, s, d, e, f, c) {
        (this.id = o),
          (this.strId = s),
          (this.dependencies = d),
          (this._callback = e),
          (this._errorback = f),
          (this.moduleIdResolver = c),
          (this.exports = {}),
          (this.error = null),
          (this.exportsPassedIn = !1),
          (this.unresolvedDependenciesCount = this.dependencies.length),
          (this._isComplete = !1);
      }
      static _safeInvokeFunction(o, s) {
        try {
          return { returnedValue: o.apply(O.global, s), producedError: null };
        } catch (d) {
          return { returnedValue: null, producedError: d };
        }
      }
      static _invokeFactory(o, s, d, e) {
        return o.shouldInvokeFactory(s)
          ? o.shouldCatchError()
            ? this._safeInvokeFunction(d, e)
            : { returnedValue: d.apply(O.global, e), producedError: null }
          : { returnedValue: null, producedError: null };
      }
      complete(o, s, d, e) {
        this._isComplete = !0;
        let f = null;
        if (this._callback)
          if (typeof this._callback == "function") {
            o.record(21, this.strId);
            let c = M._invokeFactory(s, this.strId, this._callback, d);
            (f = c.producedError),
              o.record(22, this.strId),
              !f &&
                typeof c.returnedValue < "u" &&
                (!this.exportsPassedIn || O.Utilities.isEmpty(this.exports)) &&
                (this.exports = c.returnedValue);
          } else this.exports = this._callback;
        if (f) {
          let c = O.ensureError(f);
          (c.phase = "factory"),
            (c.moduleId = this.strId),
            (c.neededBy = e(this.id)),
            (this.error = c),
            s.onError(c);
        }
        (this.dependencies = null),
          (this._callback = null),
          (this._errorback = null),
          (this.moduleIdResolver = null);
      }
      onDependencyError(o) {
        return (
          (this._isComplete = !0),
          (this.error = o),
          this._errorback ? (this._errorback(o), !0) : !1
        );
      }
      isComplete() {
        return this._isComplete;
      }
    }
    O.Module = M;
    class D {
      constructor() {
        (this._nextId = 0),
          (this._strModuleIdToIntModuleId = new Map()),
          (this._intModuleIdToStrModuleId = []),
          this.getModuleId("exports"),
          this.getModuleId("module"),
          this.getModuleId("require");
      }
      getMaxModuleId() {
        return this._nextId;
      }
      getModuleId(o) {
        let s = this._strModuleIdToIntModuleId.get(o);
        return (
          typeof s > "u" &&
            ((s = this._nextId++),
            this._strModuleIdToIntModuleId.set(o, s),
            (this._intModuleIdToStrModuleId[s] = o)),
          s
        );
      }
      getStrModuleId(o) {
        return this._intModuleIdToStrModuleId[o];
      }
    }
    class i {
      constructor(o) {
        this.id = o;
      }
    }
    (i.EXPORTS = new i(0)),
      (i.MODULE = new i(1)),
      (i.REQUIRE = new i(2)),
      (O.RegularDependency = i);
    class u {
      constructor(o, s, d) {
        (this.id = o), (this.pluginId = s), (this.pluginParam = d);
      }
    }
    O.PluginDependency = u;
    class h {
      constructor(o, s, d, e, f = 0) {
        (this._env = o),
          (this._scriptLoader = s),
          (this._loaderAvailableTimestamp = f),
          (this._defineFunc = d),
          (this._requireFunc = e),
          (this._moduleIdProvider = new D()),
          (this._config = new O.Configuration(this._env)),
          (this._hasDependencyCycle = !1),
          (this._modules2 = []),
          (this._knownModules2 = []),
          (this._inverseDependencies2 = []),
          (this._inversePluginDependencies2 = new Map()),
          (this._currentAnonymousDefineCall = null),
          (this._recorder = null),
          (this._buildInfoPath = []),
          (this._buildInfoDefineStack = []),
          (this._buildInfoDependencies = []);
      }
      reset() {
        return new h(
          this._env,
          this._scriptLoader,
          this._defineFunc,
          this._requireFunc,
          this._loaderAvailableTimestamp,
        );
      }
      getGlobalAMDDefineFunc() {
        return this._defineFunc;
      }
      getGlobalAMDRequireFunc() {
        return this._requireFunc;
      }
      static _findRelevantLocationInStack(o, s) {
        let d = (c) => c.replace(/\\/g, "/"),
          e = d(o),
          f = s.split(/\n/);
        for (let c = 0; c < f.length; c++) {
          let g = f[c].match(/(.*):(\d+):(\d+)\)?$/);
          if (g) {
            let b = g[1],
              _ = g[2],
              N = g[3],
              C = Math.max(b.lastIndexOf(" ") + 1, b.lastIndexOf("(") + 1);
            if (((b = b.substr(C)), (b = d(b)), b === e)) {
              let A = { line: parseInt(_, 10), col: parseInt(N, 10) };
              return A.line === 1 && (A.col -= 53), A;
            }
          }
        }
        throw new Error("Could not correlate define call site for needle " + o);
      }
      getBuildInfo() {
        if (!this._config.isBuild()) return null;
        let o = [],
          s = 0;
        for (let d = 0, e = this._modules2.length; d < e; d++) {
          let f = this._modules2[d];
          if (!f) continue;
          let c = this._buildInfoPath[f.id] || null,
            g = this._buildInfoDefineStack[f.id] || null,
            b = this._buildInfoDependencies[f.id];
          o[s++] = {
            id: f.strId,
            path: c,
            defineLocation:
              c && g ? h._findRelevantLocationInStack(c, g) : null,
            dependencies: b,
            shim: null,
            exports: f.exports,
          };
        }
        return o;
      }
      getRecorder() {
        return (
          this._recorder ||
            (this._config.shouldRecordStats()
              ? (this._recorder = new O.LoaderEventRecorder(
                  this._loaderAvailableTimestamp,
                ))
              : (this._recorder = O.NullLoaderEventRecorder.INSTANCE)),
          this._recorder
        );
      }
      getLoaderEvents() {
        return this.getRecorder().getEvents();
      }
      enqueueDefineAnonymousModule(o, s) {
        if (this._currentAnonymousDefineCall !== null)
          throw new Error(
            "Can only have one anonymous define call per script file",
          );
        let d = null;
        this._config.isBuild() &&
          (d = new Error("StackLocation").stack || null),
          (this._currentAnonymousDefineCall = {
            stack: d,
            dependencies: o,
            callback: s,
          });
      }
      defineModule(o, s, d, e, f, c = new n(o)) {
        let g = this._moduleIdProvider.getModuleId(o);
        if (this._modules2[g]) {
          this._config.isDuplicateMessageIgnoredFor(o) ||
            console.warn("Duplicate definition of module '" + o + "'");
          return;
        }
        let b = new M(g, o, this._normalizeDependencies(s, c), d, e, c);
        (this._modules2[g] = b),
          this._config.isBuild() &&
            ((this._buildInfoDefineStack[g] = f),
            (this._buildInfoDependencies[g] = (b.dependencies || []).map((_) =>
              this._moduleIdProvider.getStrModuleId(_.id),
            ))),
          this._resolve(b);
      }
      _normalizeDependency(o, s) {
        if (o === "exports") return i.EXPORTS;
        if (o === "module") return i.MODULE;
        if (o === "require") return i.REQUIRE;
        let d = o.indexOf("!");
        if (d >= 0) {
          let e = s.resolveModule(o.substr(0, d)),
            f = s.resolveModule(o.substr(d + 1)),
            c = this._moduleIdProvider.getModuleId(e + "!" + f),
            g = this._moduleIdProvider.getModuleId(e);
          return new u(c, g, f);
        }
        return new i(this._moduleIdProvider.getModuleId(s.resolveModule(o)));
      }
      _normalizeDependencies(o, s) {
        let d = [],
          e = 0;
        for (let f = 0, c = o.length; f < c; f++)
          d[e++] = this._normalizeDependency(o[f], s);
        return d;
      }
      _relativeRequire(o, s, d, e) {
        if (typeof s == "string") return this.synchronousRequire(s, o);
        this.defineModule(
          O.Utilities.generateAnonymousModule(),
          s,
          d,
          e,
          null,
          o,
        );
      }
      synchronousRequire(o, s = new n(o)) {
        let d = this._normalizeDependency(o, s),
          e = this._modules2[d.id];
        if (!e)
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              o +
              "'. This is the first mention of this module!",
          );
        if (!e.isComplete())
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              o +
              "'. This module has not been resolved completely yet.",
          );
        if (e.error) throw e.error;
        return e.exports;
      }
      configure(o, s) {
        let d = this._config.shouldRecordStats();
        s
          ? (this._config = new O.Configuration(this._env, o))
          : (this._config = this._config.cloneAndMerge(o)),
          this._config.shouldRecordStats() && !d && (this._recorder = null);
      }
      getConfig() {
        return this._config;
      }
      _onLoad(o) {
        if (this._currentAnonymousDefineCall !== null) {
          let s = this._currentAnonymousDefineCall;
          (this._currentAnonymousDefineCall = null),
            this.defineModule(
              this._moduleIdProvider.getStrModuleId(o),
              s.dependencies,
              s.callback,
              null,
              s.stack,
            );
        }
      }
      _createLoadError(o, s) {
        let d = this._moduleIdProvider.getStrModuleId(o),
          e = (this._inverseDependencies2[o] || []).map((c) =>
            this._moduleIdProvider.getStrModuleId(c),
          );
        const f = O.ensureError(s);
        return (f.phase = "loading"), (f.moduleId = d), (f.neededBy = e), f;
      }
      _onLoadError(o, s) {
        const d = this._createLoadError(o, s);
        this._modules2[o] ||
          (this._modules2[o] = new M(
            o,
            this._moduleIdProvider.getStrModuleId(o),
            [],
            () => {},
            null,
            null,
          ));
        let e = [];
        for (let g = 0, b = this._moduleIdProvider.getMaxModuleId(); g < b; g++)
          e[g] = !1;
        let f = !1,
          c = [];
        for (c.push(o), e[o] = !0; c.length > 0; ) {
          let g = c.shift(),
            b = this._modules2[g];
          b && (f = b.onDependencyError(d) || f);
          let _ = this._inverseDependencies2[g];
          if (_)
            for (let N = 0, C = _.length; N < C; N++) {
              let A = _[N];
              e[A] || (c.push(A), (e[A] = !0));
            }
        }
        f || this._config.onError(d);
      }
      _hasDependencyPath(o, s) {
        let d = this._modules2[o];
        if (!d) return !1;
        let e = [];
        for (let c = 0, g = this._moduleIdProvider.getMaxModuleId(); c < g; c++)
          e[c] = !1;
        let f = [];
        for (f.push(d), e[o] = !0; f.length > 0; ) {
          let g = f.shift().dependencies;
          if (g)
            for (let b = 0, _ = g.length; b < _; b++) {
              let N = g[b];
              if (N.id === s) return !0;
              let C = this._modules2[N.id];
              C && !e[N.id] && ((e[N.id] = !0), f.push(C));
            }
        }
        return !1;
      }
      _findCyclePath(o, s, d) {
        if (o === s || d === 50) return [o];
        let e = this._modules2[o];
        if (!e) return null;
        let f = e.dependencies;
        if (f)
          for (let c = 0, g = f.length; c < g; c++) {
            let b = this._findCyclePath(f[c].id, s, d + 1);
            if (b !== null) return b.push(o), b;
          }
        return null;
      }
      _createRequire(o) {
        let s = (d, e, f) => this._relativeRequire(o, d, e, f);
        return (
          (s.toUrl = (d) => this._config.requireToUrl(o.resolveModule(d))),
          (s.getStats = () => this.getLoaderEvents()),
          (s.hasDependencyCycle = () => this._hasDependencyCycle),
          (s.config = (d, e = !1) => {
            this.configure(d, e);
          }),
          (s.__$__nodeRequire = O.global.nodeRequire),
          s
        );
      }
      _loadModule(o) {
        if (this._modules2[o] || this._knownModules2[o]) return;
        this._knownModules2[o] = !0;
        let s = this._moduleIdProvider.getStrModuleId(o),
          d = this._config.moduleIdToPaths(s),
          e = /^@[^\/]+\/[^\/]+$/;
        this._env.isNode &&
          (s.indexOf("/") === -1 || e.test(s)) &&
          d.push("node|" + s);
        let f = -1,
          c = (g) => {
            if ((f++, f >= d.length)) this._onLoadError(o, g);
            else {
              let b = d[f],
                _ = this.getRecorder();
              if (this._config.isBuild() && b === "empty:") {
                (this._buildInfoPath[o] = b),
                  this.defineModule(
                    this._moduleIdProvider.getStrModuleId(o),
                    [],
                    null,
                    null,
                    null,
                  ),
                  this._onLoad(o);
                return;
              }
              _.record(10, b),
                this._scriptLoader.load(
                  this,
                  b,
                  () => {
                    this._config.isBuild() && (this._buildInfoPath[o] = b),
                      _.record(11, b),
                      this._onLoad(o);
                  },
                  (N) => {
                    _.record(12, b), c(N);
                  },
                );
            }
          };
        c(null);
      }
      _loadPluginDependency(o, s) {
        if (this._modules2[s.id] || this._knownModules2[s.id]) return;
        this._knownModules2[s.id] = !0;
        let d = (e) => {
          this.defineModule(
            this._moduleIdProvider.getStrModuleId(s.id),
            [],
            e,
            null,
            null,
          );
        };
        (d.error = (e) => {
          this._config.onError(this._createLoadError(s.id, e));
        }),
          o.load(
            s.pluginParam,
            this._createRequire(n.ROOT),
            d,
            this._config.getOptionsLiteral(),
          );
      }
      _resolve(o) {
        let s = o.dependencies;
        if (s)
          for (let d = 0, e = s.length; d < e; d++) {
            let f = s[d];
            if (f === i.EXPORTS) {
              (o.exportsPassedIn = !0), o.unresolvedDependenciesCount--;
              continue;
            }
            if (f === i.MODULE) {
              o.unresolvedDependenciesCount--;
              continue;
            }
            if (f === i.REQUIRE) {
              o.unresolvedDependenciesCount--;
              continue;
            }
            let c = this._modules2[f.id];
            if (c && c.isComplete()) {
              if (c.error) {
                o.onDependencyError(c.error);
                return;
              }
              o.unresolvedDependenciesCount--;
              continue;
            }
            if (this._hasDependencyPath(f.id, o.id)) {
              (this._hasDependencyCycle = !0),
                console.warn(
                  "There is a dependency cycle between '" +
                    this._moduleIdProvider.getStrModuleId(f.id) +
                    "' and '" +
                    this._moduleIdProvider.getStrModuleId(o.id) +
                    "'. The cyclic path follows:",
                );
              let g = this._findCyclePath(f.id, o.id, 0) || [];
              g.reverse(),
                g.push(f.id),
                console.warn(
                  g.map((b) => this._moduleIdProvider.getStrModuleId(b))
                    .join(` => 
`),
                ),
                o.unresolvedDependenciesCount--;
              continue;
            }
            if (
              ((this._inverseDependencies2[f.id] =
                this._inverseDependencies2[f.id] || []),
              this._inverseDependencies2[f.id].push(o.id),
              f instanceof u)
            ) {
              let g = this._modules2[f.pluginId];
              if (g && g.isComplete()) {
                this._loadPluginDependency(g.exports, f);
                continue;
              }
              let b = this._inversePluginDependencies2.get(f.pluginId);
              b ||
                ((b = []), this._inversePluginDependencies2.set(f.pluginId, b)),
                b.push(f),
                this._loadModule(f.pluginId);
              continue;
            }
            this._loadModule(f.id);
          }
        o.unresolvedDependenciesCount === 0 && this._onModuleComplete(o);
      }
      _onModuleComplete(o) {
        let s = this.getRecorder();
        if (o.isComplete()) return;
        let d = o.dependencies,
          e = [];
        if (d)
          for (let b = 0, _ = d.length; b < _; b++) {
            let N = d[b];
            if (N === i.EXPORTS) {
              e[b] = o.exports;
              continue;
            }
            if (N === i.MODULE) {
              e[b] = {
                id: o.strId,
                config: () => this._config.getConfigForModule(o.strId),
              };
              continue;
            }
            if (N === i.REQUIRE) {
              e[b] = this._createRequire(o.moduleIdResolver);
              continue;
            }
            let C = this._modules2[N.id];
            if (C) {
              e[b] = C.exports;
              continue;
            }
            e[b] = null;
          }
        const f = (b) =>
          (this._inverseDependencies2[b] || []).map((_) =>
            this._moduleIdProvider.getStrModuleId(_),
          );
        o.complete(s, this._config, e, f);
        let c = this._inverseDependencies2[o.id];
        if (((this._inverseDependencies2[o.id] = null), c))
          for (let b = 0, _ = c.length; b < _; b++) {
            let N = c[b],
              C = this._modules2[N];
            C.unresolvedDependenciesCount--,
              C.unresolvedDependenciesCount === 0 && this._onModuleComplete(C);
          }
        let g = this._inversePluginDependencies2.get(o.id);
        if (g) {
          this._inversePluginDependencies2.delete(o.id);
          for (let b = 0, _ = g.length; b < _; b++)
            this._loadPluginDependency(o.exports, g[b]);
        }
      }
    }
    O.ModuleManager = h;
  })(ue || (ue = {}));
  var X, ue;
  (function (O) {
    const n = new O.Environment();
    let M = null;
    const D = function (w, o, s) {
      typeof w != "string" && ((s = o), (o = w), (w = null)),
        (typeof o != "object" || !Array.isArray(o)) && ((s = o), (o = null)),
        o || (o = ["require", "exports", "module"]),
        w
          ? M.defineModule(w, o, s, null, null)
          : M.enqueueDefineAnonymousModule(o, s);
    };
    D.amd = { jQuery: !0 };
    const i = function (w, o = !1) {
        M.configure(w, o);
      },
      u = function () {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
            i(arguments[0]);
            return;
          }
          if (typeof arguments[0] == "string")
            return M.synchronousRequire(arguments[0]);
        }
        if (
          (arguments.length === 2 || arguments.length === 3) &&
          Array.isArray(arguments[0])
        ) {
          M.defineModule(
            O.Utilities.generateAnonymousModule(),
            arguments[0],
            arguments[1],
            arguments[2],
            null,
          );
          return;
        }
        throw new Error("Unrecognized require call");
      };
    (u.config = i),
      (u.getConfig = function () {
        return M.getConfig().getOptionsLiteral();
      }),
      (u.reset = function () {
        M = M.reset();
      }),
      (u.getBuildInfo = function () {
        return M.getBuildInfo();
      }),
      (u.getStats = function () {
        return M.getLoaderEvents();
      }),
      (u.define = D);
    function h() {
      if (typeof O.global.require < "u" || typeof require < "u") {
        const w = O.global.require || require;
        if (typeof w == "function" && typeof w.resolve == "function") {
          const o = O.ensureRecordedNodeRequire(M.getRecorder(), w);
          (O.global.nodeRequire = o),
            (u.nodeRequire = o),
            (u.__$__nodeRequire = o);
        }
      }
      n.isNode && !n.isElectronRenderer && !n.isElectronNodeIntegrationWebWorker
        ? (module.exports = u)
        : (n.isElectronRenderer || (O.global.define = D),
          (O.global.require = u));
    }
    (O.init = h),
      (typeof O.global.define != "function" || !O.global.define.amd) &&
        ((M = new O.ModuleManager(
          n,
          O.createScriptLoader(n),
          D,
          u,
          O.Utilities.getHighPerformanceTimestamp(),
        )),
        typeof O.global.require < "u" &&
          typeof O.global.require != "function" &&
          u.config(O.global.require),
        (X = function () {
          return D.apply(null, arguments);
        }),
        (X.amd = D.amd),
        typeof doNotInitLoader > "u" && h());
  })(ue || (ue = {}));
  var ge =
    (this && this.__awaiter) ||
    function (O, n, M, D) {
      function i(u) {
        return u instanceof M
          ? u
          : new M(function (h) {
              h(u);
            });
      }
      return new (M || (M = Promise))(function (u, h) {
        function w(d) {
          try {
            s(D.next(d));
          } catch (e) {
            h(e);
          }
        }
        function o(d) {
          try {
            s(D.throw(d));
          } catch (e) {
            h(e);
          }
        }
        function s(d) {
          d.done ? u(d.value) : i(d.value).then(w, o);
        }
        s((D = D.apply(O, n || [])).next());
      });
    };
  X(J[15], Z([0, 1]), function (O, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.load =
        n.create =
        n.setPseudoTranslation =
        n.getConfiguredDefaultLocale =
        n.localize =
          void 0);
    let M =
      typeof document < "u" &&
      document.location &&
      document.location.hash.indexOf("pseudo=true") >= 0;
    const D = "i-default";
    function i(g, b) {
      let _;
      return (
        b.length === 0
          ? (_ = g)
          : (_ = g.replace(/\{(\d+)\}/g, (N, C) => {
              const A = C[0],
                S = b[A];
              let v = N;
              return (
                typeof S == "string"
                  ? (v = S)
                  : (typeof S == "number" ||
                      typeof S == "boolean" ||
                      S === void 0 ||
                      S === null) &&
                    (v = String(S)),
                v
              );
            })),
        M && (_ = "\uFF3B" + _.replace(/[aouei]/g, "$&$&") + "\uFF3D"),
        _
      );
    }
    function u(g, b) {
      let _ = g[b];
      return _ || ((_ = g["*"]), _) ? _ : null;
    }
    function h(g) {
      return g.charAt(g.length - 1) === "/" ? g : g + "/";
    }
    function w(g, b, _) {
      return ge(this, void 0, void 0, function* () {
        const N = h(g) + h(b) + "vscode/" + h(_),
          C = yield fetch(N);
        if (C.ok) return yield C.json();
        throw new Error(`${C.status} - ${C.statusText}`);
      });
    }
    function o(g) {
      return function (b, _) {
        const N = Array.prototype.slice.call(arguments, 2);
        return i(g[b], N);
      };
    }
    function s(g, b, ..._) {
      return i(b, _);
    }
    n.localize = s;
    function d(g) {}
    n.getConfiguredDefaultLocale = d;
    function e(g) {
      M = g;
    }
    n.setPseudoTranslation = e;
    function f(g, b) {
      var _;
      return {
        localize: o(b[g]),
        getConfiguredDefaultLocale:
          (_ = b.getConfiguredDefaultLocale) !== null && _ !== void 0
            ? _
            : (N) => {},
      };
    }
    n.create = f;
    function c(g, b, _, N) {
      var C;
      const A = (C = N["vs/nls"]) !== null && C !== void 0 ? C : {};
      if (!g || g.length === 0)
        return _({
          localize: s,
          getConfiguredDefaultLocale: () => {
            var l;
            return (l = A.availableLanguages) === null || l === void 0
              ? void 0
              : l["*"];
          },
        });
      const S = A.availableLanguages ? u(A.availableLanguages, g) : null,
        v = S === null || S === D;
      let r = ".nls";
      v || (r = r + "." + S);
      const a = (l) => {
        Array.isArray(l) ? (l.localize = o(l)) : (l.localize = o(l[g])),
          (l.getConfiguredDefaultLocale = () => {
            var L;
            return (L = A.availableLanguages) === null || L === void 0
              ? void 0
              : L["*"];
          }),
          _(l);
      };
      typeof A.loadBundle == "function"
        ? A.loadBundle(g, S, (l, L) => {
            l ? b([g + ".nls"], a) : a(L);
          })
        : A.translationServiceUrl && !v
        ? ge(this, void 0, void 0, function* () {
            var l;
            try {
              const L = yield w(A.translationServiceUrl, S, g);
              return a(L);
            } catch (L) {
              if (!S.includes("-")) return console.error(L), b([g + ".nls"], a);
              try {
                const m = S.split("-")[0],
                  p = yield w(A.translationServiceUrl, m, g);
                return (
                  ((l = A.availableLanguages) !== null && l !== void 0) ||
                    (A.availableLanguages = {}),
                  (A.availableLanguages["*"] = m),
                  a(p)
                );
              } catch (m) {
                return console.error(m), b([g + ".nls"], a);
              }
            }
          })
        : b([g + r], a, (l) => {
            if (r === ".nls") {
              console.error(
                "Failed trying to load default language strings",
                l,
              );
              return;
            }
            console.error(
              `Failed to load message bundle for language ${S}. Falling back to the default language:`,
              l,
            ),
              b([g + ".nls"], a);
          });
    }
    n.load = c;
  }),
    (function () {
      const O = globalThis.MonacoEnvironment,
        n = O && O.baseUrl ? O.baseUrl : "../../../";
      function M(d, e) {
        var f;
        if (O?.createTrustedTypesPolicy)
          try {
            return O.createTrustedTypesPolicy(d, e);
          } catch (c) {
            console.warn(c);
            return;
          }
        try {
          return (f = self.trustedTypes) === null || f === void 0
            ? void 0
            : f.createPolicy(d, e);
        } catch (c) {
          console.warn(c);
          return;
        }
      }
      const D = M("amdLoader", {
        createScriptURL: (d) => d,
        createScript: (d, ...e) => {
          const f = e.slice(0, -1).join(","),
            c = e.pop().toString();
          return `(function anonymous(${f}) { ${c}
})`;
        },
      });
      function i() {
        try {
          return (
            (D
              ? globalThis.eval(D.createScript("", "true"))
              : new Function("true")
            ).call(globalThis),
            !0
          );
        } catch {
          return !1;
        }
      }
      function u() {
        return new Promise((d, e) => {
          if (typeof globalThis.define == "function" && globalThis.define.amd)
            return d();
          const f = n + "vs/loader.js";
          if (
            !(
              /^((http:)|(https:)|(file:))/.test(f) &&
              f.substring(0, globalThis.origin.length) !== globalThis.origin
            ) &&
            i()
          ) {
            fetch(f)
              .then((g) => {
                if (g.status !== 200) throw new Error(g.statusText);
                return g.text();
              })
              .then((g) => {
                (g = `${g}
//# sourceURL=${f}`),
                  (D
                    ? globalThis.eval(D.createScript("", g))
                    : new Function(g)
                  ).call(globalThis),
                  d();
              })
              .then(void 0, e);
            return;
          }
          D ? importScripts(D.createScriptURL(f)) : importScripts(f), d();
        });
      }
      function h() {
        require.config({
          baseUrl: n,
          catchError: !0,
          trustedTypesPolicy: D,
          amdModulesPattern: /^vs\//,
        });
      }
      function w(d) {
        u().then(() => {
          h(),
            require([d], function (e) {
              setTimeout(function () {
                const f = e.create((c, g) => {
                  globalThis.postMessage(c, g);
                }, null);
                for (
                  globalThis.onmessage = (c) => f.onmessage(c.data, c.ports);
                  s.length > 0;

                ) {
                  const c = s.shift();
                  f.onmessage(c.data, c.ports);
                }
              }, 0);
            });
        });
      }
      typeof globalThis.define == "function" && globalThis.define.amd && h();
      let o = !0;
      const s = [];
      globalThis.onmessage = (d) => {
        if (!o) {
          s.push(d);
          return;
        }
        (o = !1), w(d.data);
      };
    })(),
    X(J[26], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.CallbackIterable =
          n.ArrayQueue =
          n.findMinBy =
          n.findLastMaxBy =
          n.findMaxBy =
          n.numberComparator =
          n.compareBy =
          n.CompareResult =
          n.splice =
          n.insertInto =
          n.mapFind =
          n.asArray =
          n.pushMany =
          n.pushToEnd =
          n.pushToStart =
          n.arrayInsert =
          n.range =
          n.firstOrDefault =
          n.lastIndex =
          n.findLast =
          n.distinct =
          n.isNonEmptyArray =
          n.isFalsyOrEmpty =
          n.coalesceInPlace =
          n.coalesce =
          n.groupBy =
          n.quickSelect =
          n.findFirstInSorted =
          n.binarySearch2 =
          n.binarySearch =
          n.removeFastWithoutKeepingOrder =
          n.equals =
          n.tail2 =
          n.tail =
            void 0);
      function M(I, x = 0) {
        return I[I.length - (1 + x)];
      }
      n.tail = M;
      function D(I) {
        if (I.length === 0) throw new Error("Invalid tail call");
        return [I.slice(0, I.length - 1), I[I.length - 1]];
      }
      n.tail2 = D;
      function i(I, x, q = (j, t) => j === t) {
        if (I === x) return !0;
        if (!I || !x || I.length !== x.length) return !1;
        for (let j = 0, t = I.length; j < t; j++) if (!q(I[j], x[j])) return !1;
        return !0;
      }
      n.equals = i;
      function u(I, x) {
        const q = I.length - 1;
        x < q && (I[x] = I[q]), I.pop();
      }
      n.removeFastWithoutKeepingOrder = u;
      function h(I, x, q) {
        return w(I.length, (j) => q(I[j], x));
      }
      n.binarySearch = h;
      function w(I, x) {
        let q = 0,
          j = I - 1;
        for (; q <= j; ) {
          const t = ((q + j) / 2) | 0,
            ne = x(t);
          if (ne < 0) q = t + 1;
          else if (ne > 0) j = t - 1;
          else return t;
        }
        return -(q + 1);
      }
      n.binarySearch2 = w;
      function o(I, x) {
        let q = 0,
          j = I.length;
        if (j === 0) return 0;
        for (; q < j; ) {
          const t = Math.floor((q + j) / 2);
          x(I[t]) ? (j = t) : (q = t + 1);
        }
        return q;
      }
      n.findFirstInSorted = o;
      function s(I, x, q) {
        if (((I = I | 0), I >= x.length)) throw new TypeError("invalid index");
        const j = x[Math.floor(x.length * Math.random())],
          t = [],
          ne = [],
          re = [];
        for (const he of x) {
          const me = q(he, j);
          me < 0 ? t.push(he) : me > 0 ? ne.push(he) : re.push(he);
        }
        return I < t.length
          ? s(I, t, q)
          : I < t.length + re.length
          ? re[0]
          : s(I - (t.length + re.length), ne, q);
      }
      n.quickSelect = s;
      function d(I, x) {
        const q = [];
        let j;
        for (const t of I.slice(0).sort(x))
          !j || x(j[0], t) !== 0 ? ((j = [t]), q.push(j)) : j.push(t);
        return q;
      }
      n.groupBy = d;
      function e(I) {
        return I.filter((x) => !!x);
      }
      n.coalesce = e;
      function f(I) {
        let x = 0;
        for (let q = 0; q < I.length; q++) I[q] && ((I[x] = I[q]), (x += 1));
        I.length = x;
      }
      n.coalesceInPlace = f;
      function c(I) {
        return !Array.isArray(I) || I.length === 0;
      }
      n.isFalsyOrEmpty = c;
      function g(I) {
        return Array.isArray(I) && I.length > 0;
      }
      n.isNonEmptyArray = g;
      function b(I, x = (q) => q) {
        const q = new Set();
        return I.filter((j) => {
          const t = x(j);
          return q.has(t) ? !1 : (q.add(t), !0);
        });
      }
      n.distinct = b;
      function _(I, x) {
        const q = N(I, x);
        if (q !== -1) return I[q];
      }
      n.findLast = _;
      function N(I, x) {
        for (let q = I.length - 1; q >= 0; q--) {
          const j = I[q];
          if (x(j)) return q;
        }
        return -1;
      }
      n.lastIndex = N;
      function C(I, x) {
        return I.length > 0 ? I[0] : x;
      }
      n.firstOrDefault = C;
      function A(I, x) {
        let q = typeof x == "number" ? I : 0;
        typeof x == "number" ? (q = I) : ((q = 0), (x = I));
        const j = [];
        if (q <= x) for (let t = q; t < x; t++) j.push(t);
        else for (let t = q; t > x; t--) j.push(t);
        return j;
      }
      n.range = A;
      function S(I, x, q) {
        const j = I.slice(0, x),
          t = I.slice(x);
        return j.concat(q, t);
      }
      n.arrayInsert = S;
      function v(I, x) {
        const q = I.indexOf(x);
        q > -1 && (I.splice(q, 1), I.unshift(x));
      }
      n.pushToStart = v;
      function r(I, x) {
        const q = I.indexOf(x);
        q > -1 && (I.splice(q, 1), I.push(x));
      }
      n.pushToEnd = r;
      function a(I, x) {
        for (const q of x) I.push(q);
      }
      n.pushMany = a;
      function l(I) {
        return Array.isArray(I) ? I : [I];
      }
      n.asArray = l;
      function L(I, x) {
        for (const q of I) {
          const j = x(q);
          if (j !== void 0) return j;
        }
      }
      n.mapFind = L;
      function m(I, x, q) {
        const j = R(I, x),
          t = I.length,
          ne = q.length;
        I.length = t + ne;
        for (let re = t - 1; re >= j; re--) I[re + ne] = I[re];
        for (let re = 0; re < ne; re++) I[re + j] = q[re];
      }
      n.insertInto = m;
      function p(I, x, q, j) {
        const t = R(I, x),
          ne = I.splice(t, q);
        return m(I, t, j), ne;
      }
      n.splice = p;
      function R(I, x) {
        return x < 0 ? Math.max(x + I.length, 0) : Math.min(x, I.length);
      }
      var y;
      (function (I) {
        function x(t) {
          return t < 0;
        }
        I.isLessThan = x;
        function q(t) {
          return t > 0;
        }
        I.isGreaterThan = q;
        function j(t) {
          return t === 0;
        }
        (I.isNeitherLessOrGreaterThan = j),
          (I.greaterThan = 1),
          (I.lessThan = -1),
          (I.neitherLessOrGreaterThan = 0);
      })(y || (n.CompareResult = y = {}));
      function E(I, x) {
        return (q, j) => x(I(q), I(j));
      }
      n.compareBy = E;
      const P = (I, x) => I - x;
      n.numberComparator = P;
      function T(I, x) {
        if (I.length === 0) return;
        let q = I[0];
        for (let j = 1; j < I.length; j++) {
          const t = I[j];
          x(t, q) > 0 && (q = t);
        }
        return q;
      }
      n.findMaxBy = T;
      function F(I, x) {
        if (I.length === 0) return;
        let q = I[0];
        for (let j = 1; j < I.length; j++) {
          const t = I[j];
          x(t, q) >= 0 && (q = t);
        }
        return q;
      }
      n.findLastMaxBy = F;
      function U(I, x) {
        return T(I, (q, j) => -x(q, j));
      }
      n.findMinBy = U;
      class W {
        constructor(x) {
          (this.items = x),
            (this.firstIdx = 0),
            (this.lastIdx = this.items.length - 1);
        }
        get length() {
          return this.lastIdx - this.firstIdx + 1;
        }
        takeWhile(x) {
          let q = this.firstIdx;
          for (; q < this.items.length && x(this.items[q]); ) q++;
          const j =
            q === this.firstIdx ? null : this.items.slice(this.firstIdx, q);
          return (this.firstIdx = q), j;
        }
        takeFromEndWhile(x) {
          let q = this.lastIdx;
          for (; q >= 0 && x(this.items[q]); ) q--;
          const j =
            q === this.lastIdx
              ? null
              : this.items.slice(q + 1, this.lastIdx + 1);
          return (this.lastIdx = q), j;
        }
        peek() {
          if (this.length !== 0) return this.items[this.firstIdx];
        }
        dequeue() {
          const x = this.items[this.firstIdx];
          return this.firstIdx++, x;
        }
        takeCount(x) {
          const q = this.items.slice(this.firstIdx, this.firstIdx + x);
          return (this.firstIdx += x), q;
        }
      }
      n.ArrayQueue = W;
      class V {
        constructor(x) {
          this.iterate = x;
        }
        toArray() {
          const x = [];
          return this.iterate((q) => (x.push(q), !0)), x;
        }
        filter(x) {
          return new V((q) => this.iterate((j) => (x(j) ? q(j) : !0)));
        }
        map(x) {
          return new V((q) => this.iterate((j) => q(x(j))));
        }
        findLast(x) {
          let q;
          return this.iterate((j) => (x(j) && (q = j), !0)), q;
        }
        findLastMaxBy(x) {
          let q,
            j = !0;
          return (
            this.iterate(
              (t) => (
                (j || y.isGreaterThan(x(t, q))) && ((j = !1), (q = t)), !0
              ),
            ),
            q
          );
        }
      }
      (n.CallbackIterable = V), (V.empty = new V((I) => {}));
    }),
    X(J[27], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.CachedFunction = n.LRUCachedFunction = void 0);
      class M {
        constructor(u) {
          (this.fn = u), (this.lastCache = void 0), (this.lastArgKey = void 0);
        }
        get(u) {
          const h = JSON.stringify(u);
          return (
            this.lastArgKey !== h &&
              ((this.lastArgKey = h), (this.lastCache = this.fn(u))),
            this.lastCache
          );
        }
      }
      n.LRUCachedFunction = M;
      class D {
        get cachedValues() {
          return this._map;
        }
        constructor(u) {
          (this.fn = u), (this._map = new Map());
        }
        get(u) {
          if (this._map.has(u)) return this._map.get(u);
          const h = this.fn(u);
          return this._map.set(u, h), h;
        }
      }
      n.CachedFunction = D;
    }),
    X(J[28], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Color = n.HSVA = n.HSLA = n.RGBA = void 0);
      function M(w, o) {
        const s = Math.pow(10, o);
        return Math.round(w * s) / s;
      }
      class D {
        constructor(o, s, d, e = 1) {
          (this._rgbaBrand = void 0),
            (this.r = Math.min(255, Math.max(0, o)) | 0),
            (this.g = Math.min(255, Math.max(0, s)) | 0),
            (this.b = Math.min(255, Math.max(0, d)) | 0),
            (this.a = M(Math.max(Math.min(1, e), 0), 3));
        }
        static equals(o, s) {
          return o.r === s.r && o.g === s.g && o.b === s.b && o.a === s.a;
        }
      }
      n.RGBA = D;
      class i {
        constructor(o, s, d, e) {
          (this._hslaBrand = void 0),
            (this.h = Math.max(Math.min(360, o), 0) | 0),
            (this.s = M(Math.max(Math.min(1, s), 0), 3)),
            (this.l = M(Math.max(Math.min(1, d), 0), 3)),
            (this.a = M(Math.max(Math.min(1, e), 0), 3));
        }
        static equals(o, s) {
          return o.h === s.h && o.s === s.s && o.l === s.l && o.a === s.a;
        }
        static fromRGBA(o) {
          const s = o.r / 255,
            d = o.g / 255,
            e = o.b / 255,
            f = o.a,
            c = Math.max(s, d, e),
            g = Math.min(s, d, e);
          let b = 0,
            _ = 0;
          const N = (g + c) / 2,
            C = c - g;
          if (C > 0) {
            switch (
              ((_ = Math.min(N <= 0.5 ? C / (2 * N) : C / (2 - 2 * N), 1)), c)
            ) {
              case s:
                b = (d - e) / C + (d < e ? 6 : 0);
                break;
              case d:
                b = (e - s) / C + 2;
                break;
              case e:
                b = (s - d) / C + 4;
                break;
            }
            (b *= 60), (b = Math.round(b));
          }
          return new i(b, _, N, f);
        }
        static _hue2rgb(o, s, d) {
          return (
            d < 0 && (d += 1),
            d > 1 && (d -= 1),
            d < 1 / 6
              ? o + (s - o) * 6 * d
              : d < 1 / 2
              ? s
              : d < 2 / 3
              ? o + (s - o) * (2 / 3 - d) * 6
              : o
          );
        }
        static toRGBA(o) {
          const s = o.h / 360,
            { s: d, l: e, a: f } = o;
          let c, g, b;
          if (d === 0) c = g = b = e;
          else {
            const _ = e < 0.5 ? e * (1 + d) : e + d - e * d,
              N = 2 * e - _;
            (c = i._hue2rgb(N, _, s + 1 / 3)),
              (g = i._hue2rgb(N, _, s)),
              (b = i._hue2rgb(N, _, s - 1 / 3));
          }
          return new D(
            Math.round(c * 255),
            Math.round(g * 255),
            Math.round(b * 255),
            f,
          );
        }
      }
      n.HSLA = i;
      class u {
        constructor(o, s, d, e) {
          (this._hsvaBrand = void 0),
            (this.h = Math.max(Math.min(360, o), 0) | 0),
            (this.s = M(Math.max(Math.min(1, s), 0), 3)),
            (this.v = M(Math.max(Math.min(1, d), 0), 3)),
            (this.a = M(Math.max(Math.min(1, e), 0), 3));
        }
        static equals(o, s) {
          return o.h === s.h && o.s === s.s && o.v === s.v && o.a === s.a;
        }
        static fromRGBA(o) {
          const s = o.r / 255,
            d = o.g / 255,
            e = o.b / 255,
            f = Math.max(s, d, e),
            c = Math.min(s, d, e),
            g = f - c,
            b = f === 0 ? 0 : g / f;
          let _;
          return (
            g === 0
              ? (_ = 0)
              : f === s
              ? (_ = ((((d - e) / g) % 6) + 6) % 6)
              : f === d
              ? (_ = (e - s) / g + 2)
              : (_ = (s - d) / g + 4),
            new u(Math.round(_ * 60), b, f, o.a)
          );
        }
        static toRGBA(o) {
          const { h: s, s: d, v: e, a: f } = o,
            c = e * d,
            g = c * (1 - Math.abs(((s / 60) % 2) - 1)),
            b = e - c;
          let [_, N, C] = [0, 0, 0];
          return (
            s < 60
              ? ((_ = c), (N = g))
              : s < 120
              ? ((_ = g), (N = c))
              : s < 180
              ? ((N = c), (C = g))
              : s < 240
              ? ((N = g), (C = c))
              : s < 300
              ? ((_ = g), (C = c))
              : s <= 360 && ((_ = c), (C = g)),
            (_ = Math.round((_ + b) * 255)),
            (N = Math.round((N + b) * 255)),
            (C = Math.round((C + b) * 255)),
            new D(_, N, C, f)
          );
        }
      }
      n.HSVA = u;
      class h {
        static fromHex(o) {
          return h.Format.CSS.parseHex(o) || h.red;
        }
        static equals(o, s) {
          return !o && !s ? !0 : !o || !s ? !1 : o.equals(s);
        }
        get hsla() {
          return this._hsla ? this._hsla : i.fromRGBA(this.rgba);
        }
        get hsva() {
          return this._hsva ? this._hsva : u.fromRGBA(this.rgba);
        }
        constructor(o) {
          if (o)
            if (o instanceof D) this.rgba = o;
            else if (o instanceof i)
              (this._hsla = o), (this.rgba = i.toRGBA(o));
            else if (o instanceof u)
              (this._hsva = o), (this.rgba = u.toRGBA(o));
            else throw new Error("Invalid color ctor argument");
          else throw new Error("Color needs a value");
        }
        equals(o) {
          return (
            !!o &&
            D.equals(this.rgba, o.rgba) &&
            i.equals(this.hsla, o.hsla) &&
            u.equals(this.hsva, o.hsva)
          );
        }
        getRelativeLuminance() {
          const o = h._relativeLuminanceForComponent(this.rgba.r),
            s = h._relativeLuminanceForComponent(this.rgba.g),
            d = h._relativeLuminanceForComponent(this.rgba.b),
            e = 0.2126 * o + 0.7152 * s + 0.0722 * d;
          return M(e, 4);
        }
        static _relativeLuminanceForComponent(o) {
          const s = o / 255;
          return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
        }
        isLighter() {
          return (
            (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >=
            128
          );
        }
        isLighterThan(o) {
          const s = this.getRelativeLuminance(),
            d = o.getRelativeLuminance();
          return s > d;
        }
        isDarkerThan(o) {
          const s = this.getRelativeLuminance(),
            d = o.getRelativeLuminance();
          return s < d;
        }
        lighten(o) {
          return new h(
            new i(
              this.hsla.h,
              this.hsla.s,
              this.hsla.l + this.hsla.l * o,
              this.hsla.a,
            ),
          );
        }
        darken(o) {
          return new h(
            new i(
              this.hsla.h,
              this.hsla.s,
              this.hsla.l - this.hsla.l * o,
              this.hsla.a,
            ),
          );
        }
        transparent(o) {
          const { r: s, g: d, b: e, a: f } = this.rgba;
          return new h(new D(s, d, e, f * o));
        }
        isTransparent() {
          return this.rgba.a === 0;
        }
        isOpaque() {
          return this.rgba.a === 1;
        }
        opposite() {
          return new h(
            new D(
              255 - this.rgba.r,
              255 - this.rgba.g,
              255 - this.rgba.b,
              this.rgba.a,
            ),
          );
        }
        makeOpaque(o) {
          if (this.isOpaque() || o.rgba.a !== 1) return this;
          const { r: s, g: d, b: e, a: f } = this.rgba;
          return new h(
            new D(
              o.rgba.r - f * (o.rgba.r - s),
              o.rgba.g - f * (o.rgba.g - d),
              o.rgba.b - f * (o.rgba.b - e),
              1,
            ),
          );
        }
        toString() {
          return (
            this._toString || (this._toString = h.Format.CSS.format(this)),
            this._toString
          );
        }
        static getLighterColor(o, s, d) {
          if (o.isLighterThan(s)) return o;
          d = d || 0.5;
          const e = o.getRelativeLuminance(),
            f = s.getRelativeLuminance();
          return (d = (d * (f - e)) / f), o.lighten(d);
        }
        static getDarkerColor(o, s, d) {
          if (o.isDarkerThan(s)) return o;
          d = d || 0.5;
          const e = o.getRelativeLuminance(),
            f = s.getRelativeLuminance();
          return (d = (d * (e - f)) / e), o.darken(d);
        }
      }
      (n.Color = h),
        (h.white = new h(new D(255, 255, 255, 1))),
        (h.black = new h(new D(0, 0, 0, 1))),
        (h.red = new h(new D(255, 0, 0, 1))),
        (h.blue = new h(new D(0, 0, 255, 1))),
        (h.green = new h(new D(0, 255, 0, 1))),
        (h.cyan = new h(new D(0, 255, 255, 1))),
        (h.lightgrey = new h(new D(211, 211, 211, 1))),
        (h.transparent = new h(new D(0, 0, 0, 0))),
        (function (w) {
          let o;
          (function (s) {
            let d;
            (function (e) {
              function f(r) {
                return r.rgba.a === 1
                  ? `rgb(${r.rgba.r}, ${r.rgba.g}, ${r.rgba.b})`
                  : w.Format.CSS.formatRGBA(r);
              }
              e.formatRGB = f;
              function c(r) {
                return `rgba(${r.rgba.r}, ${r.rgba.g}, ${
                  r.rgba.b
                }, ${+r.rgba.a.toFixed(2)})`;
              }
              e.formatRGBA = c;
              function g(r) {
                return r.hsla.a === 1
                  ? `hsl(${r.hsla.h}, ${(r.hsla.s * 100).toFixed(2)}%, ${(
                      r.hsla.l * 100
                    ).toFixed(2)}%)`
                  : w.Format.CSS.formatHSLA(r);
              }
              e.formatHSL = g;
              function b(r) {
                return `hsla(${r.hsla.h}, ${(r.hsla.s * 100).toFixed(2)}%, ${(
                  r.hsla.l * 100
                ).toFixed(2)}%, ${r.hsla.a.toFixed(2)})`;
              }
              e.formatHSLA = b;
              function _(r) {
                const a = r.toString(16);
                return a.length !== 2 ? "0" + a : a;
              }
              function N(r) {
                return `#${_(r.rgba.r)}${_(r.rgba.g)}${_(r.rgba.b)}`;
              }
              e.formatHex = N;
              function C(r, a = !1) {
                return a && r.rgba.a === 1
                  ? w.Format.CSS.formatHex(r)
                  : `#${_(r.rgba.r)}${_(r.rgba.g)}${_(r.rgba.b)}${_(
                      Math.round(r.rgba.a * 255),
                    )}`;
              }
              e.formatHexA = C;
              function A(r) {
                return r.isOpaque()
                  ? w.Format.CSS.formatHex(r)
                  : w.Format.CSS.formatRGBA(r);
              }
              e.format = A;
              function S(r) {
                const a = r.length;
                if (a === 0 || r.charCodeAt(0) !== 35) return null;
                if (a === 7) {
                  const l = 16 * v(r.charCodeAt(1)) + v(r.charCodeAt(2)),
                    L = 16 * v(r.charCodeAt(3)) + v(r.charCodeAt(4)),
                    m = 16 * v(r.charCodeAt(5)) + v(r.charCodeAt(6));
                  return new w(new D(l, L, m, 1));
                }
                if (a === 9) {
                  const l = 16 * v(r.charCodeAt(1)) + v(r.charCodeAt(2)),
                    L = 16 * v(r.charCodeAt(3)) + v(r.charCodeAt(4)),
                    m = 16 * v(r.charCodeAt(5)) + v(r.charCodeAt(6)),
                    p = 16 * v(r.charCodeAt(7)) + v(r.charCodeAt(8));
                  return new w(new D(l, L, m, p / 255));
                }
                if (a === 4) {
                  const l = v(r.charCodeAt(1)),
                    L = v(r.charCodeAt(2)),
                    m = v(r.charCodeAt(3));
                  return new w(new D(16 * l + l, 16 * L + L, 16 * m + m));
                }
                if (a === 5) {
                  const l = v(r.charCodeAt(1)),
                    L = v(r.charCodeAt(2)),
                    m = v(r.charCodeAt(3)),
                    p = v(r.charCodeAt(4));
                  return new w(
                    new D(
                      16 * l + l,
                      16 * L + L,
                      16 * m + m,
                      (16 * p + p) / 255,
                    ),
                  );
                }
                return null;
              }
              e.parseHex = S;
              function v(r) {
                switch (r) {
                  case 48:
                    return 0;
                  case 49:
                    return 1;
                  case 50:
                    return 2;
                  case 51:
                    return 3;
                  case 52:
                    return 4;
                  case 53:
                    return 5;
                  case 54:
                    return 6;
                  case 55:
                    return 7;
                  case 56:
                    return 8;
                  case 57:
                    return 9;
                  case 97:
                    return 10;
                  case 65:
                    return 10;
                  case 98:
                    return 11;
                  case 66:
                    return 11;
                  case 99:
                    return 12;
                  case 67:
                    return 12;
                  case 100:
                    return 13;
                  case 68:
                    return 13;
                  case 101:
                    return 14;
                  case 69:
                    return 14;
                  case 102:
                    return 15;
                  case 70:
                    return 15;
                }
                return 0;
              }
            })((d = s.CSS || (s.CSS = {})));
          })((o = w.Format || (w.Format = {})));
        })(h || (n.Color = h = {}));
    }),
    X(J[29], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DiffChange = void 0);
      class M {
        constructor(i, u, h, w) {
          (this.originalStart = i),
            (this.originalLength = u),
            (this.modifiedStart = h),
            (this.modifiedLength = w);
        }
        getOriginalEnd() {
          return this.originalStart + this.originalLength;
        }
        getModifiedEnd() {
          return this.modifiedStart + this.modifiedLength;
        }
      }
      n.DiffChange = M;
    }),
    X(J[4], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.BugIndicatingError =
          n.ErrorNoTelemetry =
          n.NotSupportedError =
          n.illegalState =
          n.illegalArgument =
          n.canceled =
          n.CancellationError =
          n.isCancellationError =
          n.transformErrorForSerialization =
          n.onUnexpectedExternalError =
          n.onUnexpectedError =
          n.errorHandler =
          n.ErrorHandler =
            void 0);
      class M {
        constructor() {
          (this.listeners = []),
            (this.unexpectedErrorHandler = function (_) {
              setTimeout(() => {
                throw _.stack
                  ? c.isErrorNoTelemetry(_)
                    ? new c(
                        _.message +
                          `

` +
                          _.stack,
                      )
                    : new Error(
                        _.message +
                          `

` +
                          _.stack,
                      )
                  : _;
              }, 0);
            });
        }
        emit(_) {
          this.listeners.forEach((N) => {
            N(_);
          });
        }
        onUnexpectedError(_) {
          this.unexpectedErrorHandler(_), this.emit(_);
        }
        onUnexpectedExternalError(_) {
          this.unexpectedErrorHandler(_);
        }
      }
      (n.ErrorHandler = M), (n.errorHandler = new M());
      function D(b) {
        w(b) || n.errorHandler.onUnexpectedError(b);
      }
      n.onUnexpectedError = D;
      function i(b) {
        w(b) || n.errorHandler.onUnexpectedExternalError(b);
      }
      n.onUnexpectedExternalError = i;
      function u(b) {
        if (b instanceof Error) {
          const { name: _, message: N } = b,
            C = b.stacktrace || b.stack;
          return {
            $isError: !0,
            name: _,
            message: N,
            stack: C,
            noTelemetry: c.isErrorNoTelemetry(b),
          };
        }
        return b;
      }
      n.transformErrorForSerialization = u;
      const h = "Canceled";
      function w(b) {
        return b instanceof o
          ? !0
          : b instanceof Error && b.name === h && b.message === h;
      }
      n.isCancellationError = w;
      class o extends Error {
        constructor() {
          super(h), (this.name = this.message);
        }
      }
      n.CancellationError = o;
      function s() {
        const b = new Error(h);
        return (b.name = b.message), b;
      }
      n.canceled = s;
      function d(b) {
        return b
          ? new Error(`Illegal argument: ${b}`)
          : new Error("Illegal argument");
      }
      n.illegalArgument = d;
      function e(b) {
        return b
          ? new Error(`Illegal state: ${b}`)
          : new Error("Illegal state");
      }
      n.illegalState = e;
      class f extends Error {
        constructor(_) {
          super("NotSupported"), _ && (this.message = _);
        }
      }
      n.NotSupportedError = f;
      class c extends Error {
        constructor(_) {
          super(_), (this.name = "CodeExpectedError");
        }
        static fromError(_) {
          if (_ instanceof c) return _;
          const N = new c();
          return (N.message = _.message), (N.stack = _.stack), N;
        }
        static isErrorNoTelemetry(_) {
          return _.name === "CodeExpectedError";
        }
      }
      n.ErrorNoTelemetry = c;
      class g extends Error {
        constructor(_) {
          super(_ || "An unexpected bug occurred."),
            Object.setPrototypeOf(this, g.prototype);
        }
      }
      n.BugIndicatingError = g;
    }),
    X(J[9], Z([0, 1, 4]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.checkAdjacentItems = n.assertFn = n.assertNever = n.ok = void 0);
      function D(w, o) {
        if (!w)
          throw new Error(o ? `Assertion failed (${o})` : "Assertion Failed");
      }
      n.ok = D;
      function i(w, o = "Unreachable") {
        throw new Error(o);
      }
      n.assertNever = i;
      function u(w) {
        if (!w()) {
          debugger;
          w(),
            (0, M.onUnexpectedError)(
              new M.BugIndicatingError("Assertion Failed"),
            );
        }
      }
      n.assertFn = u;
      function h(w, o) {
        let s = 0;
        for (; s < w.length - 1; ) {
          const d = w[s],
            e = w[s + 1];
          if (!o(d, e)) return !1;
          s++;
        }
        return !0;
      }
      n.checkAdjacentItems = h;
    }),
    X(J[16], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.once = void 0);
      function M(D) {
        const i = this;
        let u = !1,
          h;
        return function () {
          return u || ((u = !0), (h = D.apply(i, arguments))), h;
        };
      }
      n.once = M;
    }),
    X(J[17], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Iterable = void 0);
      var M;
      (function (D) {
        function i(S) {
          return (
            S && typeof S == "object" && typeof S[Symbol.iterator] == "function"
          );
        }
        D.is = i;
        const u = Object.freeze([]);
        function h() {
          return u;
        }
        D.empty = h;
        function* w(S) {
          yield S;
        }
        D.single = w;
        function o(S) {
          return i(S) ? S : w(S);
        }
        D.wrap = o;
        function s(S) {
          return S || u;
        }
        D.from = s;
        function d(S) {
          return !S || S[Symbol.iterator]().next().done === !0;
        }
        D.isEmpty = d;
        function e(S) {
          return S[Symbol.iterator]().next().value;
        }
        D.first = e;
        function f(S, v) {
          for (const r of S) if (v(r)) return !0;
          return !1;
        }
        D.some = f;
        function c(S, v) {
          for (const r of S) if (v(r)) return r;
        }
        D.find = c;
        function* g(S, v) {
          for (const r of S) v(r) && (yield r);
        }
        D.filter = g;
        function* b(S, v) {
          let r = 0;
          for (const a of S) yield v(a, r++);
        }
        D.map = b;
        function* _(...S) {
          for (const v of S) for (const r of v) yield r;
        }
        D.concat = _;
        function N(S, v, r) {
          let a = r;
          for (const l of S) a = v(a, l);
          return a;
        }
        D.reduce = N;
        function* C(S, v, r = S.length) {
          for (
            v < 0 && (v += S.length),
              r < 0 ? (r += S.length) : r > S.length && (r = S.length);
            v < r;
            v++
          )
            yield S[v];
        }
        D.slice = C;
        function A(S, v = Number.POSITIVE_INFINITY) {
          const r = [];
          if (v === 0) return [r, S];
          const a = S[Symbol.iterator]();
          for (let l = 0; l < v; l++) {
            const L = a.next();
            if (L.done) return [r, D.empty()];
            r.push(L.value);
          }
          return [
            r,
            {
              [Symbol.iterator]() {
                return a;
              },
            },
          ];
        }
        D.consume = A;
      })(M || (n.Iterable = M = {}));
    }),
    X(J[30], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.KeyChord =
          n.KeyCodeUtils =
          n.IMMUTABLE_KEY_CODE_TO_CODE =
          n.IMMUTABLE_CODE_TO_KEY_CODE =
          n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE =
          n.EVENT_KEY_CODE_MAP =
            void 0);
      class M {
        constructor() {
          (this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null));
        }
        define(f, c) {
          (this._keyCodeToStr[f] = c),
            (this._strToKeyCode[c.toLowerCase()] = f);
        }
        keyCodeToStr(f) {
          return this._keyCodeToStr[f];
        }
        strToKeyCode(f) {
          return this._strToKeyCode[f.toLowerCase()] || 0;
        }
      }
      const D = new M(),
        i = new M(),
        u = new M();
      (n.EVENT_KEY_CODE_MAP = new Array(230)),
        (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE = {});
      const h = [],
        w = Object.create(null),
        o = Object.create(null);
      (n.IMMUTABLE_CODE_TO_KEY_CODE = []), (n.IMMUTABLE_KEY_CODE_TO_CODE = []);
      for (let e = 0; e <= 193; e++) n.IMMUTABLE_CODE_TO_KEY_CODE[e] = -1;
      for (let e = 0; e <= 132; e++) n.IMMUTABLE_KEY_CODE_TO_CODE[e] = -1;
      (function () {
        const e = "",
          f = [
            [1, 0, "None", 0, "unknown", 0, "VK_UNKNOWN", e, e],
            [1, 1, "Hyper", 0, e, 0, e, e, e],
            [1, 2, "Super", 0, e, 0, e, e, e],
            [1, 3, "Fn", 0, e, 0, e, e, e],
            [1, 4, "FnLock", 0, e, 0, e, e, e],
            [1, 5, "Suspend", 0, e, 0, e, e, e],
            [1, 6, "Resume", 0, e, 0, e, e, e],
            [1, 7, "Turbo", 0, e, 0, e, e, e],
            [1, 8, "Sleep", 0, e, 0, "VK_SLEEP", e, e],
            [1, 9, "WakeUp", 0, e, 0, e, e, e],
            [0, 10, "KeyA", 31, "A", 65, "VK_A", e, e],
            [0, 11, "KeyB", 32, "B", 66, "VK_B", e, e],
            [0, 12, "KeyC", 33, "C", 67, "VK_C", e, e],
            [0, 13, "KeyD", 34, "D", 68, "VK_D", e, e],
            [0, 14, "KeyE", 35, "E", 69, "VK_E", e, e],
            [0, 15, "KeyF", 36, "F", 70, "VK_F", e, e],
            [0, 16, "KeyG", 37, "G", 71, "VK_G", e, e],
            [0, 17, "KeyH", 38, "H", 72, "VK_H", e, e],
            [0, 18, "KeyI", 39, "I", 73, "VK_I", e, e],
            [0, 19, "KeyJ", 40, "J", 74, "VK_J", e, e],
            [0, 20, "KeyK", 41, "K", 75, "VK_K", e, e],
            [0, 21, "KeyL", 42, "L", 76, "VK_L", e, e],
            [0, 22, "KeyM", 43, "M", 77, "VK_M", e, e],
            [0, 23, "KeyN", 44, "N", 78, "VK_N", e, e],
            [0, 24, "KeyO", 45, "O", 79, "VK_O", e, e],
            [0, 25, "KeyP", 46, "P", 80, "VK_P", e, e],
            [0, 26, "KeyQ", 47, "Q", 81, "VK_Q", e, e],
            [0, 27, "KeyR", 48, "R", 82, "VK_R", e, e],
            [0, 28, "KeyS", 49, "S", 83, "VK_S", e, e],
            [0, 29, "KeyT", 50, "T", 84, "VK_T", e, e],
            [0, 30, "KeyU", 51, "U", 85, "VK_U", e, e],
            [0, 31, "KeyV", 52, "V", 86, "VK_V", e, e],
            [0, 32, "KeyW", 53, "W", 87, "VK_W", e, e],
            [0, 33, "KeyX", 54, "X", 88, "VK_X", e, e],
            [0, 34, "KeyY", 55, "Y", 89, "VK_Y", e, e],
            [0, 35, "KeyZ", 56, "Z", 90, "VK_Z", e, e],
            [0, 36, "Digit1", 22, "1", 49, "VK_1", e, e],
            [0, 37, "Digit2", 23, "2", 50, "VK_2", e, e],
            [0, 38, "Digit3", 24, "3", 51, "VK_3", e, e],
            [0, 39, "Digit4", 25, "4", 52, "VK_4", e, e],
            [0, 40, "Digit5", 26, "5", 53, "VK_5", e, e],
            [0, 41, "Digit6", 27, "6", 54, "VK_6", e, e],
            [0, 42, "Digit7", 28, "7", 55, "VK_7", e, e],
            [0, 43, "Digit8", 29, "8", 56, "VK_8", e, e],
            [0, 44, "Digit9", 30, "9", 57, "VK_9", e, e],
            [0, 45, "Digit0", 21, "0", 48, "VK_0", e, e],
            [1, 46, "Enter", 3, "Enter", 13, "VK_RETURN", e, e],
            [1, 47, "Escape", 9, "Escape", 27, "VK_ESCAPE", e, e],
            [1, 48, "Backspace", 1, "Backspace", 8, "VK_BACK", e, e],
            [1, 49, "Tab", 2, "Tab", 9, "VK_TAB", e, e],
            [1, 50, "Space", 10, "Space", 32, "VK_SPACE", e, e],
            [0, 51, "Minus", 88, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
            [0, 52, "Equal", 86, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
            [0, 53, "BracketLeft", 92, "[", 219, "VK_OEM_4", "[", "OEM_4"],
            [0, 54, "BracketRight", 94, "]", 221, "VK_OEM_6", "]", "OEM_6"],
            [0, 55, "Backslash", 93, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
            [0, 56, "IntlHash", 0, e, 0, e, e, e],
            [0, 57, "Semicolon", 85, ";", 186, "VK_OEM_1", ";", "OEM_1"],
            [0, 58, "Quote", 95, "'", 222, "VK_OEM_7", "'", "OEM_7"],
            [0, 59, "Backquote", 91, "`", 192, "VK_OEM_3", "`", "OEM_3"],
            [0, 60, "Comma", 87, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
            [0, 61, "Period", 89, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
            [0, 62, "Slash", 90, "/", 191, "VK_OEM_2", "/", "OEM_2"],
            [1, 63, "CapsLock", 8, "CapsLock", 20, "VK_CAPITAL", e, e],
            [1, 64, "F1", 59, "F1", 112, "VK_F1", e, e],
            [1, 65, "F2", 60, "F2", 113, "VK_F2", e, e],
            [1, 66, "F3", 61, "F3", 114, "VK_F3", e, e],
            [1, 67, "F4", 62, "F4", 115, "VK_F4", e, e],
            [1, 68, "F5", 63, "F5", 116, "VK_F5", e, e],
            [1, 69, "F6", 64, "F6", 117, "VK_F6", e, e],
            [1, 70, "F7", 65, "F7", 118, "VK_F7", e, e],
            [1, 71, "F8", 66, "F8", 119, "VK_F8", e, e],
            [1, 72, "F9", 67, "F9", 120, "VK_F9", e, e],
            [1, 73, "F10", 68, "F10", 121, "VK_F10", e, e],
            [1, 74, "F11", 69, "F11", 122, "VK_F11", e, e],
            [1, 75, "F12", 70, "F12", 123, "VK_F12", e, e],
            [1, 76, "PrintScreen", 0, e, 0, e, e, e],
            [1, 77, "ScrollLock", 84, "ScrollLock", 145, "VK_SCROLL", e, e],
            [1, 78, "Pause", 7, "PauseBreak", 19, "VK_PAUSE", e, e],
            [1, 79, "Insert", 19, "Insert", 45, "VK_INSERT", e, e],
            [1, 80, "Home", 14, "Home", 36, "VK_HOME", e, e],
            [1, 81, "PageUp", 11, "PageUp", 33, "VK_PRIOR", e, e],
            [1, 82, "Delete", 20, "Delete", 46, "VK_DELETE", e, e],
            [1, 83, "End", 13, "End", 35, "VK_END", e, e],
            [1, 84, "PageDown", 12, "PageDown", 34, "VK_NEXT", e, e],
            [1, 85, "ArrowRight", 17, "RightArrow", 39, "VK_RIGHT", "Right", e],
            [1, 86, "ArrowLeft", 15, "LeftArrow", 37, "VK_LEFT", "Left", e],
            [1, 87, "ArrowDown", 18, "DownArrow", 40, "VK_DOWN", "Down", e],
            [1, 88, "ArrowUp", 16, "UpArrow", 38, "VK_UP", "Up", e],
            [1, 89, "NumLock", 83, "NumLock", 144, "VK_NUMLOCK", e, e],
            [
              1,
              90,
              "NumpadDivide",
              113,
              "NumPad_Divide",
              111,
              "VK_DIVIDE",
              e,
              e,
            ],
            [
              1,
              91,
              "NumpadMultiply",
              108,
              "NumPad_Multiply",
              106,
              "VK_MULTIPLY",
              e,
              e,
            ],
            [
              1,
              92,
              "NumpadSubtract",
              111,
              "NumPad_Subtract",
              109,
              "VK_SUBTRACT",
              e,
              e,
            ],
            [1, 93, "NumpadAdd", 109, "NumPad_Add", 107, "VK_ADD", e, e],
            [1, 94, "NumpadEnter", 3, e, 0, e, e, e],
            [1, 95, "Numpad1", 99, "NumPad1", 97, "VK_NUMPAD1", e, e],
            [1, 96, "Numpad2", 100, "NumPad2", 98, "VK_NUMPAD2", e, e],
            [1, 97, "Numpad3", 101, "NumPad3", 99, "VK_NUMPAD3", e, e],
            [1, 98, "Numpad4", 102, "NumPad4", 100, "VK_NUMPAD4", e, e],
            [1, 99, "Numpad5", 103, "NumPad5", 101, "VK_NUMPAD5", e, e],
            [1, 100, "Numpad6", 104, "NumPad6", 102, "VK_NUMPAD6", e, e],
            [1, 101, "Numpad7", 105, "NumPad7", 103, "VK_NUMPAD7", e, e],
            [1, 102, "Numpad8", 106, "NumPad8", 104, "VK_NUMPAD8", e, e],
            [1, 103, "Numpad9", 107, "NumPad9", 105, "VK_NUMPAD9", e, e],
            [1, 104, "Numpad0", 98, "NumPad0", 96, "VK_NUMPAD0", e, e],
            [
              1,
              105,
              "NumpadDecimal",
              112,
              "NumPad_Decimal",
              110,
              "VK_DECIMAL",
              e,
              e,
            ],
            [0, 106, "IntlBackslash", 97, "OEM_102", 226, "VK_OEM_102", e, e],
            [1, 107, "ContextMenu", 58, "ContextMenu", 93, e, e, e],
            [1, 108, "Power", 0, e, 0, e, e, e],
            [1, 109, "NumpadEqual", 0, e, 0, e, e, e],
            [1, 110, "F13", 71, "F13", 124, "VK_F13", e, e],
            [1, 111, "F14", 72, "F14", 125, "VK_F14", e, e],
            [1, 112, "F15", 73, "F15", 126, "VK_F15", e, e],
            [1, 113, "F16", 74, "F16", 127, "VK_F16", e, e],
            [1, 114, "F17", 75, "F17", 128, "VK_F17", e, e],
            [1, 115, "F18", 76, "F18", 129, "VK_F18", e, e],
            [1, 116, "F19", 77, "F19", 130, "VK_F19", e, e],
            [1, 117, "F20", 78, "F20", 131, "VK_F20", e, e],
            [1, 118, "F21", 79, "F21", 132, "VK_F21", e, e],
            [1, 119, "F22", 80, "F22", 133, "VK_F22", e, e],
            [1, 120, "F23", 81, "F23", 134, "VK_F23", e, e],
            [1, 121, "F24", 82, "F24", 135, "VK_F24", e, e],
            [1, 122, "Open", 0, e, 0, e, e, e],
            [1, 123, "Help", 0, e, 0, e, e, e],
            [1, 124, "Select", 0, e, 0, e, e, e],
            [1, 125, "Again", 0, e, 0, e, e, e],
            [1, 126, "Undo", 0, e, 0, e, e, e],
            [1, 127, "Cut", 0, e, 0, e, e, e],
            [1, 128, "Copy", 0, e, 0, e, e, e],
            [1, 129, "Paste", 0, e, 0, e, e, e],
            [1, 130, "Find", 0, e, 0, e, e, e],
            [
              1,
              131,
              "AudioVolumeMute",
              117,
              "AudioVolumeMute",
              173,
              "VK_VOLUME_MUTE",
              e,
              e,
            ],
            [
              1,
              132,
              "AudioVolumeUp",
              118,
              "AudioVolumeUp",
              175,
              "VK_VOLUME_UP",
              e,
              e,
            ],
            [
              1,
              133,
              "AudioVolumeDown",
              119,
              "AudioVolumeDown",
              174,
              "VK_VOLUME_DOWN",
              e,
              e,
            ],
            [
              1,
              134,
              "NumpadComma",
              110,
              "NumPad_Separator",
              108,
              "VK_SEPARATOR",
              e,
              e,
            ],
            [0, 135, "IntlRo", 115, "ABNT_C1", 193, "VK_ABNT_C1", e, e],
            [1, 136, "KanaMode", 0, e, 0, e, e, e],
            [0, 137, "IntlYen", 0, e, 0, e, e, e],
            [1, 138, "Convert", 0, e, 0, e, e, e],
            [1, 139, "NonConvert", 0, e, 0, e, e, e],
            [1, 140, "Lang1", 0, e, 0, e, e, e],
            [1, 141, "Lang2", 0, e, 0, e, e, e],
            [1, 142, "Lang3", 0, e, 0, e, e, e],
            [1, 143, "Lang4", 0, e, 0, e, e, e],
            [1, 144, "Lang5", 0, e, 0, e, e, e],
            [1, 145, "Abort", 0, e, 0, e, e, e],
            [1, 146, "Props", 0, e, 0, e, e, e],
            [1, 147, "NumpadParenLeft", 0, e, 0, e, e, e],
            [1, 148, "NumpadParenRight", 0, e, 0, e, e, e],
            [1, 149, "NumpadBackspace", 0, e, 0, e, e, e],
            [1, 150, "NumpadMemoryStore", 0, e, 0, e, e, e],
            [1, 151, "NumpadMemoryRecall", 0, e, 0, e, e, e],
            [1, 152, "NumpadMemoryClear", 0, e, 0, e, e, e],
            [1, 153, "NumpadMemoryAdd", 0, e, 0, e, e, e],
            [1, 154, "NumpadMemorySubtract", 0, e, 0, e, e, e],
            [1, 155, "NumpadClear", 131, "Clear", 12, "VK_CLEAR", e, e],
            [1, 156, "NumpadClearEntry", 0, e, 0, e, e, e],
            [1, 0, e, 5, "Ctrl", 17, "VK_CONTROL", e, e],
            [1, 0, e, 4, "Shift", 16, "VK_SHIFT", e, e],
            [1, 0, e, 6, "Alt", 18, "VK_MENU", e, e],
            [1, 0, e, 57, "Meta", 91, "VK_COMMAND", e, e],
            [1, 157, "ControlLeft", 5, e, 0, "VK_LCONTROL", e, e],
            [1, 158, "ShiftLeft", 4, e, 0, "VK_LSHIFT", e, e],
            [1, 159, "AltLeft", 6, e, 0, "VK_LMENU", e, e],
            [1, 160, "MetaLeft", 57, e, 0, "VK_LWIN", e, e],
            [1, 161, "ControlRight", 5, e, 0, "VK_RCONTROL", e, e],
            [1, 162, "ShiftRight", 4, e, 0, "VK_RSHIFT", e, e],
            [1, 163, "AltRight", 6, e, 0, "VK_RMENU", e, e],
            [1, 164, "MetaRight", 57, e, 0, "VK_RWIN", e, e],
            [1, 165, "BrightnessUp", 0, e, 0, e, e, e],
            [1, 166, "BrightnessDown", 0, e, 0, e, e, e],
            [1, 167, "MediaPlay", 0, e, 0, e, e, e],
            [1, 168, "MediaRecord", 0, e, 0, e, e, e],
            [1, 169, "MediaFastForward", 0, e, 0, e, e, e],
            [1, 170, "MediaRewind", 0, e, 0, e, e, e],
            [
              1,
              171,
              "MediaTrackNext",
              124,
              "MediaTrackNext",
              176,
              "VK_MEDIA_NEXT_TRACK",
              e,
              e,
            ],
            [
              1,
              172,
              "MediaTrackPrevious",
              125,
              "MediaTrackPrevious",
              177,
              "VK_MEDIA_PREV_TRACK",
              e,
              e,
            ],
            [1, 173, "MediaStop", 126, "MediaStop", 178, "VK_MEDIA_STOP", e, e],
            [1, 174, "Eject", 0, e, 0, e, e, e],
            [
              1,
              175,
              "MediaPlayPause",
              127,
              "MediaPlayPause",
              179,
              "VK_MEDIA_PLAY_PAUSE",
              e,
              e,
            ],
            [
              1,
              176,
              "MediaSelect",
              128,
              "LaunchMediaPlayer",
              181,
              "VK_MEDIA_LAUNCH_MEDIA_SELECT",
              e,
              e,
            ],
            [
              1,
              177,
              "LaunchMail",
              129,
              "LaunchMail",
              180,
              "VK_MEDIA_LAUNCH_MAIL",
              e,
              e,
            ],
            [
              1,
              178,
              "LaunchApp2",
              130,
              "LaunchApp2",
              183,
              "VK_MEDIA_LAUNCH_APP2",
              e,
              e,
            ],
            [1, 179, "LaunchApp1", 0, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e],
            [1, 180, "SelectTask", 0, e, 0, e, e, e],
            [1, 181, "LaunchScreenSaver", 0, e, 0, e, e, e],
            [
              1,
              182,
              "BrowserSearch",
              120,
              "BrowserSearch",
              170,
              "VK_BROWSER_SEARCH",
              e,
              e,
            ],
            [
              1,
              183,
              "BrowserHome",
              121,
              "BrowserHome",
              172,
              "VK_BROWSER_HOME",
              e,
              e,
            ],
            [
              1,
              184,
              "BrowserBack",
              122,
              "BrowserBack",
              166,
              "VK_BROWSER_BACK",
              e,
              e,
            ],
            [
              1,
              185,
              "BrowserForward",
              123,
              "BrowserForward",
              167,
              "VK_BROWSER_FORWARD",
              e,
              e,
            ],
            [1, 186, "BrowserStop", 0, e, 0, "VK_BROWSER_STOP", e, e],
            [1, 187, "BrowserRefresh", 0, e, 0, "VK_BROWSER_REFRESH", e, e],
            [1, 188, "BrowserFavorites", 0, e, 0, "VK_BROWSER_FAVORITES", e, e],
            [1, 189, "ZoomToggle", 0, e, 0, e, e, e],
            [1, 190, "MailReply", 0, e, 0, e, e, e],
            [1, 191, "MailForward", 0, e, 0, e, e, e],
            [1, 192, "MailSend", 0, e, 0, e, e, e],
            [1, 0, e, 114, "KeyInComposition", 229, e, e, e],
            [1, 0, e, 116, "ABNT_C2", 194, "VK_ABNT_C2", e, e],
            [1, 0, e, 96, "OEM_8", 223, "VK_OEM_8", e, e],
            [1, 0, e, 0, e, 0, "VK_KANA", e, e],
            [1, 0, e, 0, e, 0, "VK_HANGUL", e, e],
            [1, 0, e, 0, e, 0, "VK_JUNJA", e, e],
            [1, 0, e, 0, e, 0, "VK_FINAL", e, e],
            [1, 0, e, 0, e, 0, "VK_HANJA", e, e],
            [1, 0, e, 0, e, 0, "VK_KANJI", e, e],
            [1, 0, e, 0, e, 0, "VK_CONVERT", e, e],
            [1, 0, e, 0, e, 0, "VK_NONCONVERT", e, e],
            [1, 0, e, 0, e, 0, "VK_ACCEPT", e, e],
            [1, 0, e, 0, e, 0, "VK_MODECHANGE", e, e],
            [1, 0, e, 0, e, 0, "VK_SELECT", e, e],
            [1, 0, e, 0, e, 0, "VK_PRINT", e, e],
            [1, 0, e, 0, e, 0, "VK_EXECUTE", e, e],
            [1, 0, e, 0, e, 0, "VK_SNAPSHOT", e, e],
            [1, 0, e, 0, e, 0, "VK_HELP", e, e],
            [1, 0, e, 0, e, 0, "VK_APPS", e, e],
            [1, 0, e, 0, e, 0, "VK_PROCESSKEY", e, e],
            [1, 0, e, 0, e, 0, "VK_PACKET", e, e],
            [1, 0, e, 0, e, 0, "VK_DBE_SBCSCHAR", e, e],
            [1, 0, e, 0, e, 0, "VK_DBE_DBCSCHAR", e, e],
            [1, 0, e, 0, e, 0, "VK_ATTN", e, e],
            [1, 0, e, 0, e, 0, "VK_CRSEL", e, e],
            [1, 0, e, 0, e, 0, "VK_EXSEL", e, e],
            [1, 0, e, 0, e, 0, "VK_EREOF", e, e],
            [1, 0, e, 0, e, 0, "VK_PLAY", e, e],
            [1, 0, e, 0, e, 0, "VK_ZOOM", e, e],
            [1, 0, e, 0, e, 0, "VK_NONAME", e, e],
            [1, 0, e, 0, e, 0, "VK_PA1", e, e],
            [1, 0, e, 0, e, 0, "VK_OEM_CLEAR", e, e],
          ],
          c = [],
          g = [];
        for (const b of f) {
          const [_, N, C, A, S, v, r, a, l] = b;
          if (
            (g[N] ||
              ((g[N] = !0),
              (h[N] = C),
              (w[C] = N),
              (o[C.toLowerCase()] = N),
              _ &&
                ((n.IMMUTABLE_CODE_TO_KEY_CODE[N] = A),
                A !== 0 &&
                  A !== 3 &&
                  A !== 5 &&
                  A !== 4 &&
                  A !== 6 &&
                  A !== 57 &&
                  (n.IMMUTABLE_KEY_CODE_TO_CODE[A] = N))),
            !c[A])
          ) {
            if (((c[A] = !0), !S))
              throw new Error(
                `String representation missing for key code ${A} around scan code ${C}`,
              );
            D.define(A, S), i.define(A, a || S), u.define(A, l || a || S);
          }
          v && (n.EVENT_KEY_CODE_MAP[v] = A),
            r && (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[r] = A);
        }
        n.IMMUTABLE_KEY_CODE_TO_CODE[3] = 46;
      })();
      var s;
      (function (e) {
        function f(C) {
          return D.keyCodeToStr(C);
        }
        e.toString = f;
        function c(C) {
          return D.strToKeyCode(C);
        }
        e.fromString = c;
        function g(C) {
          return i.keyCodeToStr(C);
        }
        e.toUserSettingsUS = g;
        function b(C) {
          return u.keyCodeToStr(C);
        }
        e.toUserSettingsGeneral = b;
        function _(C) {
          return i.strToKeyCode(C) || u.strToKeyCode(C);
        }
        e.fromUserSettings = _;
        function N(C) {
          if (C >= 98 && C <= 113) return null;
          switch (C) {
            case 16:
              return "Up";
            case 18:
              return "Down";
            case 15:
              return "Left";
            case 17:
              return "Right";
          }
          return D.keyCodeToStr(C);
        }
        e.toElectronAccelerator = N;
      })(s || (n.KeyCodeUtils = s = {}));
      function d(e, f) {
        const c = ((f & 65535) << 16) >>> 0;
        return (e | c) >>> 0;
      }
      n.KeyChord = d;
    }),
    X(J[31], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.Lazy = void 0);
      class M {
        constructor(i) {
          (this.executor = i), (this._didRun = !1);
        }
        get value() {
          if (!this._didRun)
            try {
              this._value = this.executor();
            } catch (i) {
              this._error = i;
            } finally {
              this._didRun = !0;
            }
          if (this._error) throw this._error;
          return this._value;
        }
        get rawValue() {
          return this._value;
        }
      }
      n.Lazy = M;
    }),
    X(J[10], Z([0, 1, 16, 17]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DisposableMap =
          n.ImmortalReference =
          n.RefCountedDisposable =
          n.MutableDisposable =
          n.Disposable =
          n.DisposableStore =
          n.toDisposable =
          n.combinedDisposable =
          n.dispose =
          n.isDisposable =
          n.markAsSingleton =
          n.setDisposableTracker =
            void 0);
      const i = !1;
      let u = null;
      function h(r) {
        u = r;
      }
      if (((n.setDisposableTracker = h), i)) {
        const r = "__is_disposable_tracked__";
        h(
          new (class {
            trackDisposable(a) {
              const l = new Error("Potentially leaked disposable").stack;
              setTimeout(() => {
                a[r] || console.log(l);
              }, 3e3);
            }
            setParent(a, l) {
              if (a && a !== N.None)
                try {
                  a[r] = !0;
                } catch {}
            }
            markAsDisposed(a) {
              if (a && a !== N.None)
                try {
                  a[r] = !0;
                } catch {}
            }
            markAsSingleton(a) {}
          })(),
        );
      }
      function w(r) {
        return u?.trackDisposable(r), r;
      }
      function o(r) {
        u?.markAsDisposed(r);
      }
      function s(r, a) {
        u?.setParent(r, a);
      }
      function d(r, a) {
        if (u) for (const l of r) u.setParent(l, a);
      }
      function e(r) {
        return u?.markAsSingleton(r), r;
      }
      n.markAsSingleton = e;
      function f(r) {
        return typeof r.dispose == "function" && r.dispose.length === 0;
      }
      n.isDisposable = f;
      function c(r) {
        if (D.Iterable.is(r)) {
          const a = [];
          for (const l of r)
            if (l)
              try {
                l.dispose();
              } catch (L) {
                a.push(L);
              }
          if (a.length === 1) throw a[0];
          if (a.length > 1)
            throw new AggregateError(
              a,
              "Encountered errors while disposing of store",
            );
          return Array.isArray(r) ? [] : r;
        } else if (r) return r.dispose(), r;
      }
      n.dispose = c;
      function g(...r) {
        const a = b(() => c(r));
        return d(r, a), a;
      }
      n.combinedDisposable = g;
      function b(r) {
        const a = w({
          dispose: (0, M.once)(() => {
            o(a), r();
          }),
        });
        return a;
      }
      n.toDisposable = b;
      class _ {
        constructor() {
          (this._toDispose = new Set()), (this._isDisposed = !1), w(this);
        }
        dispose() {
          this._isDisposed || (o(this), (this._isDisposed = !0), this.clear());
        }
        get isDisposed() {
          return this._isDisposed;
        }
        clear() {
          if (this._toDispose.size !== 0)
            try {
              c(this._toDispose);
            } finally {
              this._toDispose.clear();
            }
        }
        add(a) {
          if (!a) return a;
          if (a === this)
            throw new Error("Cannot register a disposable on itself!");
          return (
            s(a, this),
            this._isDisposed
              ? _.DISABLE_DISPOSED_WARNING ||
                console.warn(
                  new Error(
                    "Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!",
                  ).stack,
                )
              : this._toDispose.add(a),
            a
          );
        }
      }
      (n.DisposableStore = _), (_.DISABLE_DISPOSED_WARNING = !1);
      class N {
        constructor() {
          (this._store = new _()), w(this), s(this._store, this);
        }
        dispose() {
          o(this), this._store.dispose();
        }
        _register(a) {
          if (a === this)
            throw new Error("Cannot register a disposable on itself!");
          return this._store.add(a);
        }
      }
      (n.Disposable = N), (N.None = Object.freeze({ dispose() {} }));
      class C {
        constructor() {
          (this._isDisposed = !1), w(this);
        }
        get value() {
          return this._isDisposed ? void 0 : this._value;
        }
        set value(a) {
          var l;
          this._isDisposed ||
            a === this._value ||
            ((l = this._value) === null || l === void 0 || l.dispose(),
            a && s(a, this),
            (this._value = a));
        }
        clear() {
          this.value = void 0;
        }
        dispose() {
          var a;
          (this._isDisposed = !0),
            o(this),
            (a = this._value) === null || a === void 0 || a.dispose(),
            (this._value = void 0);
        }
      }
      n.MutableDisposable = C;
      class A {
        constructor(a) {
          (this._disposable = a), (this._counter = 1);
        }
        acquire() {
          return this._counter++, this;
        }
        release() {
          return --this._counter === 0 && this._disposable.dispose(), this;
        }
      }
      n.RefCountedDisposable = A;
      class S {
        constructor(a) {
          this.object = a;
        }
        dispose() {}
      }
      n.ImmortalReference = S;
      class v {
        constructor() {
          (this._store = new Map()), (this._isDisposed = !1), w(this);
        }
        dispose() {
          o(this), (this._isDisposed = !0), this.clearAndDisposeAll();
        }
        clearAndDisposeAll() {
          if (this._store.size)
            try {
              c(this._store.values());
            } finally {
              this._store.clear();
            }
        }
        get(a) {
          return this._store.get(a);
        }
        set(a, l, L = !1) {
          var m;
          this._isDisposed &&
            console.warn(
              new Error(
                "Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!",
              ).stack,
            ),
            L ||
              (m = this._store.get(a)) === null ||
              m === void 0 ||
              m.dispose(),
            this._store.set(a, l);
        }
        deleteAndDispose(a) {
          var l;
          (l = this._store.get(a)) === null || l === void 0 || l.dispose(),
            this._store.delete(a);
        }
        [Symbol.iterator]() {
          return this._store[Symbol.iterator]();
        }
      }
      n.DisposableMap = v;
    }),
    X(J[18], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.LinkedList = void 0);
      class M {
        constructor(u) {
          (this.element = u),
            (this.next = M.Undefined),
            (this.prev = M.Undefined);
        }
      }
      M.Undefined = new M(void 0);
      class D {
        constructor() {
          (this._first = M.Undefined),
            (this._last = M.Undefined),
            (this._size = 0);
        }
        get size() {
          return this._size;
        }
        isEmpty() {
          return this._first === M.Undefined;
        }
        clear() {
          let u = this._first;
          for (; u !== M.Undefined; ) {
            const h = u.next;
            (u.prev = M.Undefined), (u.next = M.Undefined), (u = h);
          }
          (this._first = M.Undefined),
            (this._last = M.Undefined),
            (this._size = 0);
        }
        unshift(u) {
          return this._insert(u, !1);
        }
        push(u) {
          return this._insert(u, !0);
        }
        _insert(u, h) {
          const w = new M(u);
          if (this._first === M.Undefined) (this._first = w), (this._last = w);
          else if (h) {
            const s = this._last;
            (this._last = w), (w.prev = s), (s.next = w);
          } else {
            const s = this._first;
            (this._first = w), (w.next = s), (s.prev = w);
          }
          this._size += 1;
          let o = !1;
          return () => {
            o || ((o = !0), this._remove(w));
          };
        }
        shift() {
          if (this._first !== M.Undefined) {
            const u = this._first.element;
            return this._remove(this._first), u;
          }
        }
        pop() {
          if (this._last !== M.Undefined) {
            const u = this._last.element;
            return this._remove(this._last), u;
          }
        }
        _remove(u) {
          if (u.prev !== M.Undefined && u.next !== M.Undefined) {
            const h = u.prev;
            (h.next = u.next), (u.next.prev = h);
          } else
            u.prev === M.Undefined && u.next === M.Undefined
              ? ((this._first = M.Undefined), (this._last = M.Undefined))
              : u.next === M.Undefined
              ? ((this._last = this._last.prev),
                (this._last.next = M.Undefined))
              : u.prev === M.Undefined &&
                ((this._first = this._first.next),
                (this._first.prev = M.Undefined));
          this._size -= 1;
        }
        *[Symbol.iterator]() {
          let u = this._first;
          for (; u !== M.Undefined; ) yield u.element, (u = u.next);
        }
      }
      n.LinkedList = D;
    }),
    X(J[19], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.StopWatch = void 0);
      const M =
        globalThis.performance &&
        typeof globalThis.performance.now == "function";
      class D {
        static create(u) {
          return new D(u);
        }
        constructor(u) {
          (this._now =
            M && u === !1
              ? Date.now
              : globalThis.performance.now.bind(globalThis.performance)),
            (this._startTime = this._now()),
            (this._stopTime = -1);
        }
        stop() {
          this._stopTime = this._now();
        }
        elapsed() {
          return this._stopTime !== -1
            ? this._stopTime - this._startTime
            : this._now() - this._startTime;
        }
      }
      n.StopWatch = D;
    }),
    X(J[7], Z([0, 1, 4, 16, 10, 18, 19]), function (O, n, M, D, i, u, h) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Relay =
          n.EventBufferer =
          n.EventMultiplexer =
          n.MicrotaskEmitter =
          n.DebounceEmitter =
          n.PauseableEmitter =
          n.createEventDeliveryQueue =
          n.Emitter =
          n.EventProfiling =
          n.Event =
            void 0);
      const w = !1,
        o = !1;
      var s;
      (function (m) {
        m.None = () => i.Disposable.None;
        function p($) {
          if (o) {
            const { onDidAddListener: H } = $,
              Q = c.create();
            let G = 0;
            $.onDidAddListener = () => {
              ++G === 2 &&
                (console.warn(
                  "snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here",
                ),
                Q.print()),
                H?.();
            };
          }
        }
        function R($, H) {
          return I($, () => {}, 0, void 0, !0, void 0, H);
        }
        m.defer = R;
        function y($) {
          return (H, Q = null, G) => {
            let K = !1,
              te;
            return (
              (te = $(
                (ae) => {
                  if (!K) return te ? te.dispose() : (K = !0), H.call(Q, ae);
                },
                null,
                G,
              )),
              K && te.dispose(),
              te
            );
          };
        }
        m.once = y;
        function E($, H, Q) {
          return V(
            (G, K = null, te) => $((ae) => G.call(K, H(ae)), null, te),
            Q,
          );
        }
        m.map = E;
        function P($, H, Q) {
          return V(
            (G, K = null, te) =>
              $(
                (ae) => {
                  H(ae), G.call(K, ae);
                },
                null,
                te,
              ),
            Q,
          );
        }
        m.forEach = P;
        function T($, H, Q) {
          return V(
            (G, K = null, te) => $((ae) => H(ae) && G.call(K, ae), null, te),
            Q,
          );
        }
        m.filter = T;
        function F($) {
          return $;
        }
        m.signal = F;
        function U(...$) {
          return (H, Q = null, G) =>
            (0, i.combinedDisposable)(
              ...$.map((K) => K((te) => H.call(Q, te), null, G)),
            );
        }
        m.any = U;
        function W($, H, Q, G) {
          let K = Q;
          return E($, (te) => ((K = H(K, te)), K), G);
        }
        m.reduce = W;
        function V($, H) {
          let Q;
          const G = {
            onWillAddFirstListener() {
              Q = $(K.fire, K);
            },
            onDidRemoveLastListener() {
              Q?.dispose();
            },
          };
          H || p(G);
          const K = new N(G);
          return H?.add(K), K.event;
        }
        function I($, H, Q = 100, G = !1, K = !1, te, ae) {
          let fe,
            ce,
            _e,
            k = 0,
            B;
          const z = {
            leakWarningThreshold: te,
            onWillAddFirstListener() {
              fe = $((ee) => {
                k++,
                  (ce = H(ce, ee)),
                  G && !_e && (Y.fire(ce), (ce = void 0)),
                  (B = () => {
                    const le = ce;
                    (ce = void 0),
                      (_e = void 0),
                      (!G || k > 1) && Y.fire(le),
                      (k = 0);
                  }),
                  typeof Q == "number"
                    ? (clearTimeout(_e), (_e = setTimeout(B, Q)))
                    : _e === void 0 && ((_e = 0), queueMicrotask(B));
              });
            },
            onWillRemoveListener() {
              K && k > 0 && B?.();
            },
            onDidRemoveLastListener() {
              (B = void 0), fe.dispose();
            },
          };
          ae || p(z);
          const Y = new N(z);
          return ae?.add(Y), Y.event;
        }
        m.debounce = I;
        function x($, H = 0, Q) {
          return m.debounce(
            $,
            (G, K) => (G ? (G.push(K), G) : [K]),
            H,
            void 0,
            !0,
            void 0,
            Q,
          );
        }
        m.accumulate = x;
        function q($, H = (G, K) => G === K, Q) {
          let G = !0,
            K;
          return T(
            $,
            (te) => {
              const ae = G || !H(te, K);
              return (G = !1), (K = te), ae;
            },
            Q,
          );
        }
        m.latch = q;
        function j($, H, Q) {
          return [m.filter($, H, Q), m.filter($, (G) => !H(G), Q)];
        }
        m.split = j;
        function t($, H = !1, Q = []) {
          let G = Q.slice(),
            K = $((fe) => {
              G ? G.push(fe) : ae.fire(fe);
            });
          const te = () => {
              G?.forEach((fe) => ae.fire(fe)), (G = null);
            },
            ae = new N({
              onWillAddFirstListener() {
                K || (K = $((fe) => ae.fire(fe)));
              },
              onDidAddFirstListener() {
                G && (H ? setTimeout(te) : te());
              },
              onDidRemoveLastListener() {
                K && K.dispose(), (K = null);
              },
            });
          return ae.event;
        }
        m.buffer = t;
        class ne {
          constructor(H) {
            (this.event = H), (this.disposables = new i.DisposableStore());
          }
          map(H) {
            return new ne(E(this.event, H, this.disposables));
          }
          forEach(H) {
            return new ne(P(this.event, H, this.disposables));
          }
          filter(H) {
            return new ne(T(this.event, H, this.disposables));
          }
          reduce(H, Q) {
            return new ne(W(this.event, H, Q, this.disposables));
          }
          latch() {
            return new ne(q(this.event, void 0, this.disposables));
          }
          debounce(H, Q = 100, G = !1, K = !1, te) {
            return new ne(I(this.event, H, Q, G, K, te, this.disposables));
          }
          on(H, Q, G) {
            return this.event(H, Q, G);
          }
          once(H, Q, G) {
            return y(this.event)(H, Q, G);
          }
          dispose() {
            this.disposables.dispose();
          }
        }
        function re($) {
          return new ne($);
        }
        m.chain = re;
        function he($, H, Q = (G) => G) {
          const G = (...fe) => ae.fire(Q(...fe)),
            K = () => $.on(H, G),
            te = () => $.removeListener(H, G),
            ae = new N({
              onWillAddFirstListener: K,
              onDidRemoveLastListener: te,
            });
          return ae.event;
        }
        m.fromNodeEventEmitter = he;
        function me($, H, Q = (G) => G) {
          const G = (...fe) => ae.fire(Q(...fe)),
            K = () => $.addEventListener(H, G),
            te = () => $.removeEventListener(H, G),
            ae = new N({
              onWillAddFirstListener: K,
              onDidRemoveLastListener: te,
            });
          return ae.event;
        }
        m.fromDOMEventEmitter = me;
        function be($) {
          return new Promise((H) => y($)(H));
        }
        m.toPromise = be;
        function Le($, H) {
          return H(void 0), $((Q) => H(Q));
        }
        m.runAndSubscribe = Le;
        function ve($, H) {
          let Q = null;
          function G(te) {
            Q?.dispose(), (Q = new i.DisposableStore()), H(te, Q);
          }
          G(void 0);
          const K = $((te) => G(te));
          return (0, i.toDisposable)(() => {
            K.dispose(), Q?.dispose();
          });
        }
        m.runAndSubscribeWithStore = ve;
        class Ce {
          constructor(H, Q) {
            (this._observable = H),
              (this._counter = 0),
              (this._hasChanged = !1);
            const G = {
              onWillAddFirstListener: () => {
                H.addObserver(this);
              },
              onDidRemoveLastListener: () => {
                H.removeObserver(this);
              },
            };
            Q || p(G), (this.emitter = new N(G)), Q && Q.add(this.emitter);
          }
          beginUpdate(H) {
            this._counter++;
          }
          handlePossibleChange(H) {}
          handleChange(H, Q) {
            this._hasChanged = !0;
          }
          endUpdate(H) {
            this._counter--,
              this._counter === 0 &&
                (this._observable.reportChanges(),
                this._hasChanged &&
                  ((this._hasChanged = !1),
                  this.emitter.fire(this._observable.get())));
          }
        }
        function ie($, H) {
          return new Ce($, H).emitter.event;
        }
        m.fromObservable = ie;
        function se($) {
          return (H) => {
            let Q = 0,
              G = !1;
            const K = {
              beginUpdate() {
                Q++;
              },
              endUpdate() {
                Q--, Q === 0 && ($.reportChanges(), G && ((G = !1), H()));
              },
              handlePossibleChange() {},
              handleChange() {
                G = !0;
              },
            };
            return (
              $.addObserver(K),
              $.reportChanges(),
              {
                dispose() {
                  $.removeObserver(K);
                },
              }
            );
          };
        }
        m.fromObservableLight = se;
      })(s || (n.Event = s = {}));
      class d {
        constructor(p) {
          (this.listenerCount = 0),
            (this.invocationCount = 0),
            (this.elapsedOverall = 0),
            (this.durations = []),
            (this.name = `${p}_${d._idPool++}`),
            d.all.add(this);
        }
        start(p) {
          (this._stopWatch = new h.StopWatch()), (this.listenerCount = p);
        }
        stop() {
          if (this._stopWatch) {
            const p = this._stopWatch.elapsed();
            this.durations.push(p),
              (this.elapsedOverall += p),
              (this.invocationCount += 1),
              (this._stopWatch = void 0);
          }
        }
      }
      (n.EventProfiling = d), (d.all = new Set()), (d._idPool = 0);
      let e = -1;
      class f {
        constructor(p, R = Math.random().toString(18).slice(2, 5)) {
          (this.threshold = p), (this.name = R), (this._warnCountdown = 0);
        }
        dispose() {
          var p;
          (p = this._stacks) === null || p === void 0 || p.clear();
        }
        check(p, R) {
          const y = this.threshold;
          if (y <= 0 || R < y) return;
          this._stacks || (this._stacks = new Map());
          const E = this._stacks.get(p.value) || 0;
          if (
            (this._stacks.set(p.value, E + 1),
            (this._warnCountdown -= 1),
            this._warnCountdown <= 0)
          ) {
            this._warnCountdown = y * 0.5;
            let P,
              T = 0;
            for (const [F, U] of this._stacks)
              (!P || T < U) && ((P = F), (T = U));
            console.warn(
              `[${this.name}] potential listener LEAK detected, having ${R} listeners already. MOST frequent listener (${T}):`,
            ),
              console.warn(P);
          }
          return () => {
            const P = this._stacks.get(p.value) || 0;
            this._stacks.set(p.value, P - 1);
          };
        }
      }
      class c {
        static create() {
          var p;
          return new c(
            (p = new Error().stack) !== null && p !== void 0 ? p : "",
          );
        }
        constructor(p) {
          this.value = p;
        }
        print() {
          console.warn(
            this.value
              .split(
                `
`,
              )
              .slice(2).join(`
`),
          );
        }
      }
      class g {
        constructor(p) {
          this.value = p;
        }
      }
      const b = 2,
        _ = (m, p) => {
          if (m instanceof g) p(m);
          else
            for (let R = 0; R < m.length; R++) {
              const y = m[R];
              y && p(y);
            }
        };
      class N {
        constructor(p) {
          var R, y, E, P, T;
          (this._size = 0),
            (this._options = p),
            (this._leakageMon =
              e > 0 ||
              (!((R = this._options) === null || R === void 0) &&
                R.leakWarningThreshold)
                ? new f(
                    (E =
                      (y = this._options) === null || y === void 0
                        ? void 0
                        : y.leakWarningThreshold) !== null && E !== void 0
                      ? E
                      : e,
                  )
                : void 0),
            (this._perfMon =
              !((P = this._options) === null || P === void 0) && P._profName
                ? new d(this._options._profName)
                : void 0),
            (this._deliveryQueue =
              (T = this._options) === null || T === void 0
                ? void 0
                : T.deliveryQueue);
        }
        dispose() {
          var p, R, y, E;
          if (!this._disposed) {
            if (
              ((this._disposed = !0),
              ((p = this._deliveryQueue) === null || p === void 0
                ? void 0
                : p.current) === this && this._deliveryQueue.reset(),
              this._listeners)
            ) {
              if (w) {
                const P = this._listeners;
                queueMicrotask(() => {
                  _(P, (T) => {
                    var F;
                    return (F = T.stack) === null || F === void 0
                      ? void 0
                      : F.print();
                  });
                });
              }
              (this._listeners = void 0), (this._size = 0);
            }
            (y =
              (R = this._options) === null || R === void 0
                ? void 0
                : R.onDidRemoveLastListener) === null ||
              y === void 0 ||
              y.call(R),
              (E = this._leakageMon) === null || E === void 0 || E.dispose();
          }
        }
        get event() {
          var p;
          return (
            ((p = this._event) !== null && p !== void 0) ||
              (this._event = (R, y, E) => {
                var P, T, F, U, W;
                if (
                  this._leakageMon &&
                  this._size > this._leakageMon.threshold * 3
                )
                  return (
                    console.warn(
                      `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far`,
                    ),
                    i.Disposable.None
                  );
                if (this._disposed) return i.Disposable.None;
                y && (R = R.bind(y));
                const V = new g(R);
                let I, x;
                this._leakageMon &&
                  this._size >= Math.ceil(this._leakageMon.threshold * 0.2) &&
                  ((V.stack = c.create()),
                  (I = this._leakageMon.check(V.stack, this._size + 1))),
                  w && (V.stack = x ?? c.create()),
                  this._listeners
                    ? this._listeners instanceof g
                      ? (((W = this._deliveryQueue) !== null && W !== void 0) ||
                          (this._deliveryQueue = new A()),
                        (this._listeners = [this._listeners, V]))
                      : this._listeners.push(V)
                    : ((T =
                        (P = this._options) === null || P === void 0
                          ? void 0
                          : P.onWillAddFirstListener) === null ||
                        T === void 0 ||
                        T.call(P, this),
                      (this._listeners = V),
                      (U =
                        (F = this._options) === null || F === void 0
                          ? void 0
                          : F.onDidAddFirstListener) === null ||
                        U === void 0 ||
                        U.call(F, this)),
                  this._size++;
                const q = (0, i.toDisposable)(() => {
                  I?.(), this._removeListener(V);
                });
                return (
                  E instanceof i.DisposableStore
                    ? E.add(q)
                    : Array.isArray(E) && E.push(q),
                  q
                );
              }),
            this._event
          );
        }
        _removeListener(p) {
          var R, y, E, P;
          if (
            ((y =
              (R = this._options) === null || R === void 0
                ? void 0
                : R.onWillRemoveListener) === null ||
              y === void 0 ||
              y.call(R, this),
            !this._listeners)
          )
            return;
          if (this._size === 1) {
            (this._listeners = void 0),
              (P =
                (E = this._options) === null || E === void 0
                  ? void 0
                  : E.onDidRemoveLastListener) === null ||
                P === void 0 ||
                P.call(E, this),
              (this._size = 0);
            return;
          }
          const T = this._listeners,
            F = T.indexOf(p);
          if (F === -1)
            throw (
              (console.log("disposed?", this._disposed),
              console.log("size?", this._size),
              console.log("arr?", JSON.stringify(this._listeners)),
              new Error("Attempted to dispose unknown listener"))
            );
          this._size--, (T[F] = void 0);
          const U = this._deliveryQueue.current === this;
          if (this._size * b <= T.length) {
            let W = 0;
            for (let V = 0; V < T.length; V++)
              T[V]
                ? (T[W++] = T[V])
                : U &&
                  (this._deliveryQueue.end--,
                  W < this._deliveryQueue.i && this._deliveryQueue.i--);
            T.length = W;
          }
        }
        _deliver(p, R) {
          var y;
          if (!p) return;
          const E =
            ((y = this._options) === null || y === void 0
              ? void 0
              : y.onListenerError) || M.onUnexpectedError;
          if (!E) {
            p.value(R);
            return;
          }
          try {
            p.value(R);
          } catch (P) {
            E(P);
          }
        }
        _deliverQueue(p) {
          const R = p.current._listeners;
          for (; p.i < p.end; ) this._deliver(R[p.i++], p.value);
          p.reset();
        }
        fire(p) {
          var R, y, E, P;
          if (
            (!((R = this._deliveryQueue) === null || R === void 0) &&
              R.current &&
              (this._deliverQueue(this._deliveryQueue),
              (y = this._perfMon) === null || y === void 0 || y.stop()),
            (E = this._perfMon) === null || E === void 0 || E.start(this._size),
            this._listeners)
          )
            if (this._listeners instanceof g) this._deliver(this._listeners, p);
            else {
              const T = this._deliveryQueue;
              T.enqueue(this, p, this._listeners.length), this._deliverQueue(T);
            }
          (P = this._perfMon) === null || P === void 0 || P.stop();
        }
        hasListeners() {
          return this._size > 0;
        }
      }
      n.Emitter = N;
      const C = () => new A();
      n.createEventDeliveryQueue = C;
      class A {
        constructor() {
          (this.i = -1), (this.end = 0);
        }
        enqueue(p, R, y) {
          (this.i = 0), (this.end = y), (this.current = p), (this.value = R);
        }
        reset() {
          (this.i = this.end), (this.current = void 0), (this.value = void 0);
        }
      }
      class S extends N {
        constructor(p) {
          super(p),
            (this._isPaused = 0),
            (this._eventQueue = new u.LinkedList()),
            (this._mergeFn = p?.merge);
        }
        pause() {
          this._isPaused++;
        }
        resume() {
          if (this._isPaused !== 0 && --this._isPaused === 0)
            if (this._mergeFn) {
              if (this._eventQueue.size > 0) {
                const p = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(p));
              }
            } else
              for (; !this._isPaused && this._eventQueue.size !== 0; )
                super.fire(this._eventQueue.shift());
        }
        fire(p) {
          this._size &&
            (this._isPaused !== 0 ? this._eventQueue.push(p) : super.fire(p));
        }
      }
      n.PauseableEmitter = S;
      class v extends S {
        constructor(p) {
          var R;
          super(p),
            (this._delay = (R = p.delay) !== null && R !== void 0 ? R : 100);
        }
        fire(p) {
          this._handle ||
            (this.pause(),
            (this._handle = setTimeout(() => {
              (this._handle = void 0), this.resume();
            }, this._delay))),
            super.fire(p);
        }
      }
      n.DebounceEmitter = v;
      class r extends N {
        constructor(p) {
          super(p), (this._queuedEvents = []), (this._mergeFn = p?.merge);
        }
        fire(p) {
          this.hasListeners() &&
            (this._queuedEvents.push(p),
            this._queuedEvents.length === 1 &&
              queueMicrotask(() => {
                this._mergeFn
                  ? super.fire(this._mergeFn(this._queuedEvents))
                  : this._queuedEvents.forEach((R) => super.fire(R)),
                  (this._queuedEvents = []);
              }));
        }
      }
      n.MicrotaskEmitter = r;
      class a {
        constructor() {
          (this.hasListeners = !1),
            (this.events = []),
            (this.emitter = new N({
              onWillAddFirstListener: () => this.onFirstListenerAdd(),
              onDidRemoveLastListener: () => this.onLastListenerRemove(),
            }));
        }
        get event() {
          return this.emitter.event;
        }
        add(p) {
          const R = { event: p, listener: null };
          this.events.push(R), this.hasListeners && this.hook(R);
          const y = () => {
            this.hasListeners && this.unhook(R);
            const E = this.events.indexOf(R);
            this.events.splice(E, 1);
          };
          return (0, i.toDisposable)((0, D.once)(y));
        }
        onFirstListenerAdd() {
          (this.hasListeners = !0), this.events.forEach((p) => this.hook(p));
        }
        onLastListenerRemove() {
          (this.hasListeners = !1), this.events.forEach((p) => this.unhook(p));
        }
        hook(p) {
          p.listener = p.event((R) => this.emitter.fire(R));
        }
        unhook(p) {
          p.listener && p.listener.dispose(), (p.listener = null);
        }
        dispose() {
          this.emitter.dispose();
        }
      }
      n.EventMultiplexer = a;
      class l {
        constructor() {
          this.buffers = [];
        }
        wrapEvent(p) {
          return (R, y, E) =>
            p(
              (P) => {
                const T = this.buffers[this.buffers.length - 1];
                T ? T.push(() => R.call(y, P)) : R.call(y, P);
              },
              void 0,
              E,
            );
        }
        bufferEvents(p) {
          const R = [];
          this.buffers.push(R);
          const y = p();
          return this.buffers.pop(), R.forEach((E) => E()), y;
        }
      }
      n.EventBufferer = l;
      class L {
        constructor() {
          (this.listening = !1),
            (this.inputEvent = s.None),
            (this.inputEventListener = i.Disposable.None),
            (this.emitter = new N({
              onDidAddFirstListener: () => {
                (this.listening = !0),
                  (this.inputEventListener = this.inputEvent(
                    this.emitter.fire,
                    this.emitter,
                  ));
              },
              onDidRemoveLastListener: () => {
                (this.listening = !1), this.inputEventListener.dispose();
              },
            })),
            (this.event = this.emitter.event);
        }
        set input(p) {
          (this.inputEvent = p),
            this.listening &&
              (this.inputEventListener.dispose(),
              (this.inputEventListener = p(this.emitter.fire, this.emitter)));
        }
        dispose() {
          this.inputEventListener.dispose(), this.emitter.dispose();
        }
      }
      n.Relay = L;
    }),
    X(J[32], Z([0, 1, 7]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.CancellationTokenSource = n.CancellationToken = void 0);
      const D = Object.freeze(function (w, o) {
        const s = setTimeout(w.bind(o), 0);
        return {
          dispose() {
            clearTimeout(s);
          },
        };
      });
      var i;
      (function (w) {
        function o(s) {
          return s === w.None || s === w.Cancelled || s instanceof u
            ? !0
            : !s || typeof s != "object"
            ? !1
            : typeof s.isCancellationRequested == "boolean" &&
              typeof s.onCancellationRequested == "function";
        }
        (w.isCancellationToken = o),
          (w.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: M.Event.None,
          })),
          (w.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: D,
          }));
      })(i || (n.CancellationToken = i = {}));
      class u {
        constructor() {
          (this._isCancelled = !1), (this._emitter = null);
        }
        cancel() {
          this._isCancelled ||
            ((this._isCancelled = !0),
            this._emitter && (this._emitter.fire(void 0), this.dispose()));
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get onCancellationRequested() {
          return this._isCancelled
            ? D
            : (this._emitter || (this._emitter = new M.Emitter()),
              this._emitter.event);
        }
        dispose() {
          this._emitter && (this._emitter.dispose(), (this._emitter = null));
        }
      }
      class h {
        constructor(o) {
          (this._token = void 0),
            (this._parentListener = void 0),
            (this._parentListener =
              o && o.onCancellationRequested(this.cancel, this));
        }
        get token() {
          return this._token || (this._token = new u()), this._token;
        }
        cancel() {
          this._token
            ? this._token instanceof u && this._token.cancel()
            : (this._token = i.Cancelled);
        }
        dispose(o = !1) {
          var s;
          o && this.cancel(),
            (s = this._parentListener) === null || s === void 0 || s.dispose(),
            this._token
              ? this._token instanceof u && this._token.dispose()
              : (this._token = i.None);
        }
      }
      n.CancellationTokenSource = h;
    }),
    X(J[5], Z([0, 1, 27, 31]), function (O, n, M, D) {
      "use strict";
      var i;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.InvisibleCharacters =
          n.AmbiguousCharacters =
          n.noBreakWhitespace =
          n.getLeftDeleteOffset =
          n.singleLetterHash =
          n.containsUppercaseCharacter =
          n.startsWithUTF8BOM =
          n.UTF8_BOM_CHARACTER =
          n.isEmojiImprecise =
          n.isFullWidthCharacter =
          n.containsUnusualLineTerminators =
          n.UNUSUAL_LINE_TERMINATORS =
          n.isBasicASCII =
          n.containsRTL =
          n.getCharContainingOffset =
          n.prevCharLength =
          n.nextCharLength =
          n.GraphemeIterator =
          n.CodePointIterator =
          n.getNextCodePoint =
          n.computeCodePoint =
          n.isLowSurrogate =
          n.isHighSurrogate =
          n.commonSuffixLength =
          n.commonPrefixLength =
          n.startsWithIgnoreCase =
          n.equalsIgnoreCase =
          n.isUpperAsciiLetter =
          n.isLowerAsciiLetter =
          n.isAsciiDigit =
          n.compareSubstringIgnoreCase =
          n.compareIgnoreCase =
          n.compareSubstring =
          n.compare =
          n.lastNonWhitespaceIndex =
          n.getLeadingWhitespace =
          n.firstNonWhitespaceIndex =
          n.splitLines =
          n.regExpFlags =
          n.regExpLeadsToEndlessLoop =
          n.createRegExp =
          n.stripWildcards =
          n.convertSimple2RegExpPattern =
          n.rtrim =
          n.ltrim =
          n.trim =
          n.escapeRegExpCharacters =
          n.escape =
          n.format =
          n.isFalsyOrWhitespace =
            void 0);
      function u(k) {
        return !k || typeof k != "string" ? !0 : k.trim().length === 0;
      }
      n.isFalsyOrWhitespace = u;
      const h = /{(\d+)}/g;
      function w(k, ...B) {
        return B.length === 0
          ? k
          : k.replace(h, function (z, Y) {
              const ee = parseInt(Y, 10);
              return isNaN(ee) || ee < 0 || ee >= B.length ? z : B[ee];
            });
      }
      n.format = w;
      function o(k) {
        return k.replace(/[<>&]/g, function (B) {
          switch (B) {
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case "&":
              return "&amp;";
            default:
              return B;
          }
        });
      }
      n.escape = o;
      function s(k) {
        return k.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
      }
      n.escapeRegExpCharacters = s;
      function d(k, B = " ") {
        const z = e(k, B);
        return f(z, B);
      }
      n.trim = d;
      function e(k, B) {
        if (!k || !B) return k;
        const z = B.length;
        if (z === 0 || k.length === 0) return k;
        let Y = 0;
        for (; k.indexOf(B, Y) === Y; ) Y = Y + z;
        return k.substring(Y);
      }
      n.ltrim = e;
      function f(k, B) {
        if (!k || !B) return k;
        const z = B.length,
          Y = k.length;
        if (z === 0 || Y === 0) return k;
        let ee = Y,
          le = -1;
        for (
          ;
          (le = k.lastIndexOf(B, ee - 1)), !(le === -1 || le + z !== ee);

        ) {
          if (le === 0) return "";
          ee = le;
        }
        return k.substring(0, ee);
      }
      n.rtrim = f;
      function c(k) {
        return k
          .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
          .replace(/[\*]/g, ".*");
      }
      n.convertSimple2RegExpPattern = c;
      function g(k) {
        return k.replace(/\*/g, "");
      }
      n.stripWildcards = g;
      function b(k, B, z = {}) {
        if (!k) throw new Error("Cannot create regex from empty string");
        B || (k = s(k)),
          z.wholeWord &&
            (/\B/.test(k.charAt(0)) || (k = "\\b" + k),
            /\B/.test(k.charAt(k.length - 1)) || (k = k + "\\b"));
        let Y = "";
        return (
          z.global && (Y += "g"),
          z.matchCase || (Y += "i"),
          z.multiline && (Y += "m"),
          z.unicode && (Y += "u"),
          new RegExp(k, Y)
        );
      }
      n.createRegExp = b;
      function _(k) {
        return k.source === "^" ||
          k.source === "^$" ||
          k.source === "$" ||
          k.source === "^\\s*$"
          ? !1
          : !!(k.exec("") && k.lastIndex === 0);
      }
      n.regExpLeadsToEndlessLoop = _;
      function N(k) {
        return (
          (k.global ? "g" : "") +
          (k.ignoreCase ? "i" : "") +
          (k.multiline ? "m" : "") +
          (k.unicode ? "u" : "")
        );
      }
      n.regExpFlags = N;
      function C(k) {
        return k.split(/\r\n|\r|\n/);
      }
      n.splitLines = C;
      function A(k) {
        for (let B = 0, z = k.length; B < z; B++) {
          const Y = k.charCodeAt(B);
          if (Y !== 32 && Y !== 9) return B;
        }
        return -1;
      }
      n.firstNonWhitespaceIndex = A;
      function S(k, B = 0, z = k.length) {
        for (let Y = B; Y < z; Y++) {
          const ee = k.charCodeAt(Y);
          if (ee !== 32 && ee !== 9) return k.substring(B, Y);
        }
        return k.substring(B, z);
      }
      n.getLeadingWhitespace = S;
      function v(k, B = k.length - 1) {
        for (let z = B; z >= 0; z--) {
          const Y = k.charCodeAt(z);
          if (Y !== 32 && Y !== 9) return z;
        }
        return -1;
      }
      n.lastNonWhitespaceIndex = v;
      function r(k, B) {
        return k < B ? -1 : k > B ? 1 : 0;
      }
      n.compare = r;
      function a(k, B, z = 0, Y = k.length, ee = 0, le = B.length) {
        for (; z < Y && ee < le; z++, ee++) {
          const we = k.charCodeAt(z),
            oe = B.charCodeAt(ee);
          if (we < oe) return -1;
          if (we > oe) return 1;
        }
        const de = Y - z,
          ye = le - ee;
        return de < ye ? -1 : de > ye ? 1 : 0;
      }
      n.compareSubstring = a;
      function l(k, B) {
        return L(k, B, 0, k.length, 0, B.length);
      }
      n.compareIgnoreCase = l;
      function L(k, B, z = 0, Y = k.length, ee = 0, le = B.length) {
        for (; z < Y && ee < le; z++, ee++) {
          let we = k.charCodeAt(z),
            oe = B.charCodeAt(ee);
          if (we === oe) continue;
          if (we >= 128 || oe >= 128)
            return a(k.toLowerCase(), B.toLowerCase(), z, Y, ee, le);
          p(we) && (we -= 32), p(oe) && (oe -= 32);
          const pe = we - oe;
          if (pe !== 0) return pe;
        }
        const de = Y - z,
          ye = le - ee;
        return de < ye ? -1 : de > ye ? 1 : 0;
      }
      n.compareSubstringIgnoreCase = L;
      function m(k) {
        return k >= 48 && k <= 57;
      }
      n.isAsciiDigit = m;
      function p(k) {
        return k >= 97 && k <= 122;
      }
      n.isLowerAsciiLetter = p;
      function R(k) {
        return k >= 65 && k <= 90;
      }
      n.isUpperAsciiLetter = R;
      function y(k, B) {
        return k.length === B.length && L(k, B) === 0;
      }
      n.equalsIgnoreCase = y;
      function E(k, B) {
        const z = B.length;
        return B.length > k.length ? !1 : L(k, B, 0, z) === 0;
      }
      n.startsWithIgnoreCase = E;
      function P(k, B) {
        const z = Math.min(k.length, B.length);
        let Y;
        for (Y = 0; Y < z; Y++)
          if (k.charCodeAt(Y) !== B.charCodeAt(Y)) return Y;
        return z;
      }
      n.commonPrefixLength = P;
      function T(k, B) {
        const z = Math.min(k.length, B.length);
        let Y;
        const ee = k.length - 1,
          le = B.length - 1;
        for (Y = 0; Y < z; Y++)
          if (k.charCodeAt(ee - Y) !== B.charCodeAt(le - Y)) return Y;
        return z;
      }
      n.commonSuffixLength = T;
      function F(k) {
        return 55296 <= k && k <= 56319;
      }
      n.isHighSurrogate = F;
      function U(k) {
        return 56320 <= k && k <= 57343;
      }
      n.isLowSurrogate = U;
      function W(k, B) {
        return ((k - 55296) << 10) + (B - 56320) + 65536;
      }
      n.computeCodePoint = W;
      function V(k, B, z) {
        const Y = k.charCodeAt(z);
        if (F(Y) && z + 1 < B) {
          const ee = k.charCodeAt(z + 1);
          if (U(ee)) return W(Y, ee);
        }
        return Y;
      }
      n.getNextCodePoint = V;
      function I(k, B) {
        const z = k.charCodeAt(B - 1);
        if (U(z) && B > 1) {
          const Y = k.charCodeAt(B - 2);
          if (F(Y)) return W(Y, z);
        }
        return z;
      }
      class x {
        get offset() {
          return this._offset;
        }
        constructor(B, z = 0) {
          (this._str = B), (this._len = B.length), (this._offset = z);
        }
        setOffset(B) {
          this._offset = B;
        }
        prevCodePoint() {
          const B = I(this._str, this._offset);
          return (this._offset -= B >= 65536 ? 2 : 1), B;
        }
        nextCodePoint() {
          const B = V(this._str, this._len, this._offset);
          return (this._offset += B >= 65536 ? 2 : 1), B;
        }
        eol() {
          return this._offset >= this._len;
        }
      }
      n.CodePointIterator = x;
      class q {
        get offset() {
          return this._iterator.offset;
        }
        constructor(B, z = 0) {
          this._iterator = new x(B, z);
        }
        nextGraphemeLength() {
          const B = G.getInstance(),
            z = this._iterator,
            Y = z.offset;
          let ee = B.getGraphemeBreakType(z.nextCodePoint());
          for (; !z.eol(); ) {
            const le = z.offset,
              de = B.getGraphemeBreakType(z.nextCodePoint());
            if (Q(ee, de)) {
              z.setOffset(le);
              break;
            }
            ee = de;
          }
          return z.offset - Y;
        }
        prevGraphemeLength() {
          const B = G.getInstance(),
            z = this._iterator,
            Y = z.offset;
          let ee = B.getGraphemeBreakType(z.prevCodePoint());
          for (; z.offset > 0; ) {
            const le = z.offset,
              de = B.getGraphemeBreakType(z.prevCodePoint());
            if (Q(de, ee)) {
              z.setOffset(le);
              break;
            }
            ee = de;
          }
          return Y - z.offset;
        }
        eol() {
          return this._iterator.eol();
        }
      }
      n.GraphemeIterator = q;
      function j(k, B) {
        return new q(k, B).nextGraphemeLength();
      }
      n.nextCharLength = j;
      function t(k, B) {
        return new q(k, B).prevGraphemeLength();
      }
      n.prevCharLength = t;
      function ne(k, B) {
        B > 0 && U(k.charCodeAt(B)) && B--;
        const z = B + j(k, B);
        return [z - t(k, z), z];
      }
      n.getCharContainingOffset = ne;
      let re;
      function he() {
        return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      }
      function me(k) {
        return re || (re = he()), re.test(k);
      }
      n.containsRTL = me;
      const be = /^[\t\n\r\x20-\x7E]*$/;
      function Le(k) {
        return be.test(k);
      }
      (n.isBasicASCII = Le), (n.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/);
      function ve(k) {
        return n.UNUSUAL_LINE_TERMINATORS.test(k);
      }
      n.containsUnusualLineTerminators = ve;
      function Ce(k) {
        return (
          (k >= 11904 && k <= 55215) ||
          (k >= 63744 && k <= 64255) ||
          (k >= 65281 && k <= 65374)
        );
      }
      n.isFullWidthCharacter = Ce;
      function ie(k) {
        return (
          (k >= 127462 && k <= 127487) ||
          k === 8986 ||
          k === 8987 ||
          k === 9200 ||
          k === 9203 ||
          (k >= 9728 && k <= 10175) ||
          k === 11088 ||
          k === 11093 ||
          (k >= 127744 && k <= 128591) ||
          (k >= 128640 && k <= 128764) ||
          (k >= 128992 && k <= 129008) ||
          (k >= 129280 && k <= 129535) ||
          (k >= 129648 && k <= 129782)
        );
      }
      (n.isEmojiImprecise = ie),
        (n.UTF8_BOM_CHARACTER = String.fromCharCode(65279));
      function se(k) {
        return !!(k && k.length > 0 && k.charCodeAt(0) === 65279);
      }
      n.startsWithUTF8BOM = se;
      function $(k, B = !1) {
        return k
          ? (B && (k = k.replace(/\\./g, "")), k.toLowerCase() !== k)
          : !1;
      }
      n.containsUppercaseCharacter = $;
      function H(k) {
        return (
          (k = k % (2 * 26)),
          k < 26
            ? String.fromCharCode(97 + k)
            : String.fromCharCode(65 + k - 26)
        );
      }
      n.singleLetterHash = H;
      function Q(k, B) {
        return k === 0
          ? B !== 5 && B !== 7
          : k === 2 && B === 3
          ? !1
          : k === 4 || k === 2 || k === 3 || B === 4 || B === 2 || B === 3
          ? !0
          : !(
              (k === 8 && (B === 8 || B === 9 || B === 11 || B === 12)) ||
              ((k === 11 || k === 9) && (B === 9 || B === 10)) ||
              ((k === 12 || k === 10) && B === 10) ||
              B === 5 ||
              B === 13 ||
              B === 7 ||
              k === 1 ||
              (k === 13 && B === 14) ||
              (k === 6 && B === 6)
            );
      }
      class G {
        static getInstance() {
          return G._INSTANCE || (G._INSTANCE = new G()), G._INSTANCE;
        }
        constructor() {
          this._data = K();
        }
        getGraphemeBreakType(B) {
          if (B < 32) return B === 10 ? 3 : B === 13 ? 2 : 4;
          if (B < 127) return 0;
          const z = this._data,
            Y = z.length / 3;
          let ee = 1;
          for (; ee <= Y; )
            if (B < z[3 * ee]) ee = 2 * ee;
            else if (B > z[3 * ee + 1]) ee = 2 * ee + 1;
            else return z[3 * ee + 2];
          return 0;
        }
      }
      G._INSTANCE = null;
      function K() {
        return JSON.parse(
          "[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]",
        );
      }
      function te(k, B) {
        if (k === 0) return 0;
        const z = ae(k, B);
        if (z !== void 0) return z;
        const Y = new x(B, k);
        return Y.prevCodePoint(), Y.offset;
      }
      n.getLeftDeleteOffset = te;
      function ae(k, B) {
        const z = new x(B, k);
        let Y = z.prevCodePoint();
        for (; fe(Y) || Y === 65039 || Y === 8419; ) {
          if (z.offset === 0) return;
          Y = z.prevCodePoint();
        }
        if (!ie(Y)) return;
        let ee = z.offset;
        return ee > 0 && z.prevCodePoint() === 8205 && (ee = z.offset), ee;
      }
      function fe(k) {
        return 127995 <= k && k <= 127999;
      }
      n.noBreakWhitespace = "\xA0";
      class ce {
        static getInstance(B) {
          return ce.cache.get(Array.from(B));
        }
        static getLocales() {
          return ce._locales.value;
        }
        constructor(B) {
          this.confusableDictionary = B;
        }
        isAmbiguous(B) {
          return this.confusableDictionary.has(B);
        }
        getPrimaryConfusable(B) {
          return this.confusableDictionary.get(B);
        }
        getConfusableCodePoints() {
          return new Set(this.confusableDictionary.keys());
        }
      }
      (n.AmbiguousCharacters = ce),
        (i = ce),
        (ce.ambiguousCharacterData = new D.Lazy(() =>
          JSON.parse(
            '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
          ),
        )),
        (ce.cache = new M.LRUCachedFunction((k) => {
          function B(oe) {
            const pe = new Map();
            for (let Se = 0; Se < oe.length; Se += 2)
              pe.set(oe[Se], oe[Se + 1]);
            return pe;
          }
          function z(oe, pe) {
            const Se = new Map(oe);
            for (const [Ne, Ae] of pe) Se.set(Ne, Ae);
            return Se;
          }
          function Y(oe, pe) {
            if (!oe) return pe;
            const Se = new Map();
            for (const [Ne, Ae] of oe) pe.has(Ne) && Se.set(Ne, Ae);
            return Se;
          }
          const ee = i.ambiguousCharacterData.value;
          let le = k.filter((oe) => !oe.startsWith("_") && oe in ee);
          le.length === 0 && (le = ["_default"]);
          let de;
          for (const oe of le) {
            const pe = B(ee[oe]);
            de = Y(de, pe);
          }
          const ye = B(ee._common),
            we = z(ye, de);
          return new ce(we);
        })),
        (ce._locales = new D.Lazy(() =>
          Object.keys(ce.ambiguousCharacterData.value).filter(
            (k) => !k.startsWith("_"),
          ),
        ));
      class _e {
        static getRawData() {
          return JSON.parse(
            "[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]",
          );
        }
        static getData() {
          return (
            this._data || (this._data = new Set(_e.getRawData())), this._data
          );
        }
        static isInvisibleCharacter(B) {
          return _e.getData().has(B);
        }
        static get codePoints() {
          return _e.getData();
        }
      }
      (n.InvisibleCharacters = _e), (_e._data = void 0);
    }),
    X(J[33], Z([0, 1, 5]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.StringSHA1 =
          n.toHexString =
          n.stringHash =
          n.numberHash =
          n.doHash =
          n.hash =
            void 0);
      function D(b) {
        return i(b, 0);
      }
      n.hash = D;
      function i(b, _) {
        switch (typeof b) {
          case "object":
            return b === null
              ? u(349, _)
              : Array.isArray(b)
              ? o(b, _)
              : s(b, _);
          case "string":
            return w(b, _);
          case "boolean":
            return h(b, _);
          case "number":
            return u(b, _);
          case "undefined":
            return u(937, _);
          default:
            return u(617, _);
        }
      }
      n.doHash = i;
      function u(b, _) {
        return ((_ << 5) - _ + b) | 0;
      }
      n.numberHash = u;
      function h(b, _) {
        return u(b ? 433 : 863, _);
      }
      function w(b, _) {
        _ = u(149417, _);
        for (let N = 0, C = b.length; N < C; N++) _ = u(b.charCodeAt(N), _);
        return _;
      }
      n.stringHash = w;
      function o(b, _) {
        return (_ = u(104579, _)), b.reduce((N, C) => i(C, N), _);
      }
      function s(b, _) {
        return (
          (_ = u(181387, _)),
          Object.keys(b)
            .sort()
            .reduce((N, C) => ((N = w(C, N)), i(b[C], N)), _)
        );
      }
      function d(b, _, N = 32) {
        const C = N - _,
          A = ~((1 << C) - 1);
        return ((b << _) | ((A & b) >>> C)) >>> 0;
      }
      function e(b, _ = 0, N = b.byteLength, C = 0) {
        for (let A = 0; A < N; A++) b[_ + A] = C;
      }
      function f(b, _, N = "0") {
        for (; b.length < _; ) b = N + b;
        return b;
      }
      function c(b, _ = 32) {
        return b instanceof ArrayBuffer
          ? Array.from(new Uint8Array(b))
              .map((N) => N.toString(16).padStart(2, "0"))
              .join("")
          : f((b >>> 0).toString(16), _ / 4);
      }
      n.toHexString = c;
      class g {
        constructor() {
          (this._h0 = 1732584193),
            (this._h1 = 4023233417),
            (this._h2 = 2562383102),
            (this._h3 = 271733878),
            (this._h4 = 3285377520),
            (this._buff = new Uint8Array(64 + 3)),
            (this._buffDV = new DataView(this._buff.buffer)),
            (this._buffLen = 0),
            (this._totalLen = 0),
            (this._leftoverHighSurrogate = 0),
            (this._finished = !1);
        }
        update(_) {
          const N = _.length;
          if (N === 0) return;
          const C = this._buff;
          let A = this._buffLen,
            S = this._leftoverHighSurrogate,
            v,
            r;
          for (
            S !== 0
              ? ((v = S), (r = -1), (S = 0))
              : ((v = _.charCodeAt(0)), (r = 0));
            ;

          ) {
            let a = v;
            if (M.isHighSurrogate(v))
              if (r + 1 < N) {
                const l = _.charCodeAt(r + 1);
                M.isLowSurrogate(l)
                  ? (r++, (a = M.computeCodePoint(v, l)))
                  : (a = 65533);
              } else {
                S = v;
                break;
              }
            else M.isLowSurrogate(v) && (a = 65533);
            if (((A = this._push(C, A, a)), r++, r < N)) v = _.charCodeAt(r);
            else break;
          }
          (this._buffLen = A), (this._leftoverHighSurrogate = S);
        }
        _push(_, N, C) {
          return (
            C < 128
              ? (_[N++] = C)
              : C < 2048
              ? ((_[N++] = 192 | ((C & 1984) >>> 6)),
                (_[N++] = 128 | ((C & 63) >>> 0)))
              : C < 65536
              ? ((_[N++] = 224 | ((C & 61440) >>> 12)),
                (_[N++] = 128 | ((C & 4032) >>> 6)),
                (_[N++] = 128 | ((C & 63) >>> 0)))
              : ((_[N++] = 240 | ((C & 1835008) >>> 18)),
                (_[N++] = 128 | ((C & 258048) >>> 12)),
                (_[N++] = 128 | ((C & 4032) >>> 6)),
                (_[N++] = 128 | ((C & 63) >>> 0))),
            N >= 64 &&
              (this._step(),
              (N -= 64),
              (this._totalLen += 64),
              (_[0] = _[64 + 0]),
              (_[1] = _[64 + 1]),
              (_[2] = _[64 + 2])),
            N
          );
        }
        digest() {
          return (
            this._finished ||
              ((this._finished = !0),
              this._leftoverHighSurrogate &&
                ((this._leftoverHighSurrogate = 0),
                (this._buffLen = this._push(this._buff, this._buffLen, 65533))),
              (this._totalLen += this._buffLen),
              this._wrapUp()),
            c(this._h0) + c(this._h1) + c(this._h2) + c(this._h3) + c(this._h4)
          );
        }
        _wrapUp() {
          (this._buff[this._buffLen++] = 128),
            e(this._buff, this._buffLen),
            this._buffLen > 56 && (this._step(), e(this._buff));
          const _ = 8 * this._totalLen;
          this._buffDV.setUint32(56, Math.floor(_ / 4294967296), !1),
            this._buffDV.setUint32(60, _ % 4294967296, !1),
            this._step();
        }
        _step() {
          const _ = g._bigBlock32,
            N = this._buffDV;
          for (let m = 0; m < 64; m += 4)
            _.setUint32(m, N.getUint32(m, !1), !1);
          for (let m = 64; m < 320; m += 4)
            _.setUint32(
              m,
              d(
                _.getUint32(m - 12, !1) ^
                  _.getUint32(m - 32, !1) ^
                  _.getUint32(m - 56, !1) ^
                  _.getUint32(m - 64, !1),
                1,
              ),
              !1,
            );
          let C = this._h0,
            A = this._h1,
            S = this._h2,
            v = this._h3,
            r = this._h4,
            a,
            l,
            L;
          for (let m = 0; m < 80; m++)
            m < 20
              ? ((a = (A & S) | (~A & v)), (l = 1518500249))
              : m < 40
              ? ((a = A ^ S ^ v), (l = 1859775393))
              : m < 60
              ? ((a = (A & S) | (A & v) | (S & v)), (l = 2400959708))
              : ((a = A ^ S ^ v), (l = 3395469782)),
              (L = (d(C, 5) + a + r + l + _.getUint32(m * 4, !1)) & 4294967295),
              (r = v),
              (v = S),
              (S = d(A, 30)),
              (A = C),
              (C = L);
          (this._h0 = (this._h0 + C) & 4294967295),
            (this._h1 = (this._h1 + A) & 4294967295),
            (this._h2 = (this._h2 + S) & 4294967295),
            (this._h3 = (this._h3 + v) & 4294967295),
            (this._h4 = (this._h4 + r) & 4294967295);
        }
      }
      (n.StringSHA1 = g), (g._bigBlock32 = new DataView(new ArrayBuffer(320)));
    }),
    X(J[20], Z([0, 1, 29, 33]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.LcsDiff = n.stringDiff = n.StringDiffSequence = void 0);
      class i {
        constructor(e) {
          this.source = e;
        }
        getElements() {
          const e = this.source,
            f = new Int32Array(e.length);
          for (let c = 0, g = e.length; c < g; c++) f[c] = e.charCodeAt(c);
          return f;
        }
      }
      n.StringDiffSequence = i;
      function u(d, e, f) {
        return new s(new i(d), new i(e)).ComputeDiff(f).changes;
      }
      n.stringDiff = u;
      class h {
        static Assert(e, f) {
          if (!e) throw new Error(f);
        }
      }
      class w {
        static Copy(e, f, c, g, b) {
          for (let _ = 0; _ < b; _++) c[g + _] = e[f + _];
        }
        static Copy2(e, f, c, g, b) {
          for (let _ = 0; _ < b; _++) c[g + _] = e[f + _];
        }
      }
      class o {
        constructor() {
          (this.m_changes = []),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0);
        }
        MarkNextChange() {
          (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.m_changes.push(
              new M.DiffChange(
                this.m_originalStart,
                this.m_originalCount,
                this.m_modifiedStart,
                this.m_modifiedCount,
              ),
            ),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824);
        }
        AddOriginalElement(e, f) {
          (this.m_originalStart = Math.min(this.m_originalStart, e)),
            (this.m_modifiedStart = Math.min(this.m_modifiedStart, f)),
            this.m_originalCount++;
        }
        AddModifiedElement(e, f) {
          (this.m_originalStart = Math.min(this.m_originalStart, e)),
            (this.m_modifiedStart = Math.min(this.m_modifiedStart, f)),
            this.m_modifiedCount++;
        }
        getChanges() {
          return (
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.MarkNextChange(),
            this.m_changes
          );
        }
        getReverseChanges() {
          return (
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.MarkNextChange(),
            this.m_changes.reverse(),
            this.m_changes
          );
        }
      }
      class s {
        constructor(e, f, c = null) {
          (this.ContinueProcessingPredicate = c),
            (this._originalSequence = e),
            (this._modifiedSequence = f);
          const [g, b, _] = s._getElements(e),
            [N, C, A] = s._getElements(f);
          (this._hasStrings = _ && A),
            (this._originalStringElements = g),
            (this._originalElementsOrHash = b),
            (this._modifiedStringElements = N),
            (this._modifiedElementsOrHash = C),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = []);
        }
        static _isStringArray(e) {
          return e.length > 0 && typeof e[0] == "string";
        }
        static _getElements(e) {
          const f = e.getElements();
          if (s._isStringArray(f)) {
            const c = new Int32Array(f.length);
            for (let g = 0, b = f.length; g < b; g++)
              c[g] = (0, D.stringHash)(f[g], 0);
            return [f, c, !0];
          }
          return f instanceof Int32Array
            ? [[], f, !1]
            : [[], new Int32Array(f), !1];
        }
        ElementsAreEqual(e, f) {
          return this._originalElementsOrHash[e] !==
            this._modifiedElementsOrHash[f]
            ? !1
            : this._hasStrings
            ? this._originalStringElements[e] ===
              this._modifiedStringElements[f]
            : !0;
        }
        ElementsAreStrictEqual(e, f) {
          if (!this.ElementsAreEqual(e, f)) return !1;
          const c = s._getStrictElement(this._originalSequence, e),
            g = s._getStrictElement(this._modifiedSequence, f);
          return c === g;
        }
        static _getStrictElement(e, f) {
          return typeof e.getStrictElement == "function"
            ? e.getStrictElement(f)
            : null;
        }
        OriginalElementsAreEqual(e, f) {
          return this._originalElementsOrHash[e] !==
            this._originalElementsOrHash[f]
            ? !1
            : this._hasStrings
            ? this._originalStringElements[e] ===
              this._originalStringElements[f]
            : !0;
        }
        ModifiedElementsAreEqual(e, f) {
          return this._modifiedElementsOrHash[e] !==
            this._modifiedElementsOrHash[f]
            ? !1
            : this._hasStrings
            ? this._modifiedStringElements[e] ===
              this._modifiedStringElements[f]
            : !0;
        }
        ComputeDiff(e) {
          return this._ComputeDiff(
            0,
            this._originalElementsOrHash.length - 1,
            0,
            this._modifiedElementsOrHash.length - 1,
            e,
          );
        }
        _ComputeDiff(e, f, c, g, b) {
          const _ = [!1];
          let N = this.ComputeDiffRecursive(e, f, c, g, _);
          return (
            b && (N = this.PrettifyChanges(N)), { quitEarly: _[0], changes: N }
          );
        }
        ComputeDiffRecursive(e, f, c, g, b) {
          for (b[0] = !1; e <= f && c <= g && this.ElementsAreEqual(e, c); )
            e++, c++;
          for (; f >= e && g >= c && this.ElementsAreEqual(f, g); ) f--, g--;
          if (e > f || c > g) {
            let v;
            return (
              c <= g
                ? (h.Assert(
                    e === f + 1,
                    "originalStart should only be one more than originalEnd",
                  ),
                  (v = [new M.DiffChange(e, 0, c, g - c + 1)]))
                : e <= f
                ? (h.Assert(
                    c === g + 1,
                    "modifiedStart should only be one more than modifiedEnd",
                  ),
                  (v = [new M.DiffChange(e, f - e + 1, c, 0)]))
                : (h.Assert(
                    e === f + 1,
                    "originalStart should only be one more than originalEnd",
                  ),
                  h.Assert(
                    c === g + 1,
                    "modifiedStart should only be one more than modifiedEnd",
                  ),
                  (v = [])),
              v
            );
          }
          const _ = [0],
            N = [0],
            C = this.ComputeRecursionPoint(e, f, c, g, _, N, b),
            A = _[0],
            S = N[0];
          if (C !== null) return C;
          if (!b[0]) {
            const v = this.ComputeDiffRecursive(e, A, c, S, b);
            let r = [];
            return (
              b[0]
                ? (r = [
                    new M.DiffChange(
                      A + 1,
                      f - (A + 1) + 1,
                      S + 1,
                      g - (S + 1) + 1,
                    ),
                  ])
                : (r = this.ComputeDiffRecursive(A + 1, f, S + 1, g, b)),
              this.ConcatenateChanges(v, r)
            );
          }
          return [new M.DiffChange(e, f - e + 1, c, g - c + 1)];
        }
        WALKTRACE(e, f, c, g, b, _, N, C, A, S, v, r, a, l, L, m, p, R) {
          let y = null,
            E = null,
            P = new o(),
            T = f,
            F = c,
            U = a[0] - m[0] - g,
            W = -1073741824,
            V = this.m_forwardHistory.length - 1;
          do {
            const I = U + e;
            I === T || (I < F && A[I - 1] < A[I + 1])
              ? ((v = A[I + 1]),
                (l = v - U - g),
                v < W && P.MarkNextChange(),
                (W = v),
                P.AddModifiedElement(v + 1, l),
                (U = I + 1 - e))
              : ((v = A[I - 1] + 1),
                (l = v - U - g),
                v < W && P.MarkNextChange(),
                (W = v - 1),
                P.AddOriginalElement(v, l + 1),
                (U = I - 1 - e)),
              V >= 0 &&
                ((A = this.m_forwardHistory[V]),
                (e = A[0]),
                (T = 1),
                (F = A.length - 1));
          } while (--V >= -1);
          if (((y = P.getReverseChanges()), R[0])) {
            let I = a[0] + 1,
              x = m[0] + 1;
            if (y !== null && y.length > 0) {
              const q = y[y.length - 1];
              (I = Math.max(I, q.getOriginalEnd())),
                (x = Math.max(x, q.getModifiedEnd()));
            }
            E = [new M.DiffChange(I, r - I + 1, x, L - x + 1)];
          } else {
            (P = new o()),
              (T = _),
              (F = N),
              (U = a[0] - m[0] - C),
              (W = 1073741824),
              (V = p
                ? this.m_reverseHistory.length - 1
                : this.m_reverseHistory.length - 2);
            do {
              const I = U + b;
              I === T || (I < F && S[I - 1] >= S[I + 1])
                ? ((v = S[I + 1] - 1),
                  (l = v - U - C),
                  v > W && P.MarkNextChange(),
                  (W = v + 1),
                  P.AddOriginalElement(v + 1, l + 1),
                  (U = I + 1 - b))
                : ((v = S[I - 1]),
                  (l = v - U - C),
                  v > W && P.MarkNextChange(),
                  (W = v),
                  P.AddModifiedElement(v + 1, l + 1),
                  (U = I - 1 - b)),
                V >= 0 &&
                  ((S = this.m_reverseHistory[V]),
                  (b = S[0]),
                  (T = 1),
                  (F = S.length - 1));
            } while (--V >= -1);
            E = P.getChanges();
          }
          return this.ConcatenateChanges(y, E);
        }
        ComputeRecursionPoint(e, f, c, g, b, _, N) {
          let C = 0,
            A = 0,
            S = 0,
            v = 0,
            r = 0,
            a = 0;
          e--,
            c--,
            (b[0] = 0),
            (_[0] = 0),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = []);
          const l = f - e + (g - c),
            L = l + 1,
            m = new Int32Array(L),
            p = new Int32Array(L),
            R = g - c,
            y = f - e,
            E = e - c,
            P = f - g,
            F = (y - R) % 2 === 0;
          (m[R] = e), (p[y] = f), (N[0] = !1);
          for (let U = 1; U <= l / 2 + 1; U++) {
            let W = 0,
              V = 0;
            (S = this.ClipDiagonalBound(R - U, U, R, L)),
              (v = this.ClipDiagonalBound(R + U, U, R, L));
            for (let x = S; x <= v; x += 2) {
              x === S || (x < v && m[x - 1] < m[x + 1])
                ? (C = m[x + 1])
                : (C = m[x - 1] + 1),
                (A = C - (x - R) - E);
              const q = C;
              for (; C < f && A < g && this.ElementsAreEqual(C + 1, A + 1); )
                C++, A++;
              if (
                ((m[x] = C),
                C + A > W + V && ((W = C), (V = A)),
                !F && Math.abs(x - y) <= U - 1 && C >= p[x])
              )
                return (
                  (b[0] = C),
                  (_[0] = A),
                  q <= p[x] && 1447 > 0 && U <= 1447 + 1
                    ? this.WALKTRACE(
                        R,
                        S,
                        v,
                        E,
                        y,
                        r,
                        a,
                        P,
                        m,
                        p,
                        C,
                        f,
                        b,
                        A,
                        g,
                        _,
                        F,
                        N,
                      )
                    : null
                );
            }
            const I = (W - e + (V - c) - U) / 2;
            if (
              this.ContinueProcessingPredicate !== null &&
              !this.ContinueProcessingPredicate(W, I)
            )
              return (
                (N[0] = !0),
                (b[0] = W),
                (_[0] = V),
                I > 0 && 1447 > 0 && U <= 1447 + 1
                  ? this.WALKTRACE(
                      R,
                      S,
                      v,
                      E,
                      y,
                      r,
                      a,
                      P,
                      m,
                      p,
                      C,
                      f,
                      b,
                      A,
                      g,
                      _,
                      F,
                      N,
                    )
                  : (e++, c++, [new M.DiffChange(e, f - e + 1, c, g - c + 1)])
              );
            (r = this.ClipDiagonalBound(y - U, U, y, L)),
              (a = this.ClipDiagonalBound(y + U, U, y, L));
            for (let x = r; x <= a; x += 2) {
              x === r || (x < a && p[x - 1] >= p[x + 1])
                ? (C = p[x + 1] - 1)
                : (C = p[x - 1]),
                (A = C - (x - y) - P);
              const q = C;
              for (; C > e && A > c && this.ElementsAreEqual(C, A); ) C--, A--;
              if (((p[x] = C), F && Math.abs(x - R) <= U && C <= m[x]))
                return (
                  (b[0] = C),
                  (_[0] = A),
                  q >= m[x] && 1447 > 0 && U <= 1447 + 1
                    ? this.WALKTRACE(
                        R,
                        S,
                        v,
                        E,
                        y,
                        r,
                        a,
                        P,
                        m,
                        p,
                        C,
                        f,
                        b,
                        A,
                        g,
                        _,
                        F,
                        N,
                      )
                    : null
                );
            }
            if (U <= 1447) {
              let x = new Int32Array(v - S + 2);
              (x[0] = R - S + 1),
                w.Copy2(m, S, x, 1, v - S + 1),
                this.m_forwardHistory.push(x),
                (x = new Int32Array(a - r + 2)),
                (x[0] = y - r + 1),
                w.Copy2(p, r, x, 1, a - r + 1),
                this.m_reverseHistory.push(x);
            }
          }
          return this.WALKTRACE(
            R,
            S,
            v,
            E,
            y,
            r,
            a,
            P,
            m,
            p,
            C,
            f,
            b,
            A,
            g,
            _,
            F,
            N,
          );
        }
        PrettifyChanges(e) {
          for (let f = 0; f < e.length; f++) {
            const c = e[f],
              g =
                f < e.length - 1
                  ? e[f + 1].originalStart
                  : this._originalElementsOrHash.length,
              b =
                f < e.length - 1
                  ? e[f + 1].modifiedStart
                  : this._modifiedElementsOrHash.length,
              _ = c.originalLength > 0,
              N = c.modifiedLength > 0;
            for (
              ;
              c.originalStart + c.originalLength < g &&
              c.modifiedStart + c.modifiedLength < b &&
              (!_ ||
                this.OriginalElementsAreEqual(
                  c.originalStart,
                  c.originalStart + c.originalLength,
                )) &&
              (!N ||
                this.ModifiedElementsAreEqual(
                  c.modifiedStart,
                  c.modifiedStart + c.modifiedLength,
                ));

            ) {
              const A = this.ElementsAreStrictEqual(
                c.originalStart,
                c.modifiedStart,
              );
              if (
                this.ElementsAreStrictEqual(
                  c.originalStart + c.originalLength,
                  c.modifiedStart + c.modifiedLength,
                ) &&
                !A
              )
                break;
              c.originalStart++, c.modifiedStart++;
            }
            const C = [null];
            if (f < e.length - 1 && this.ChangesOverlap(e[f], e[f + 1], C)) {
              (e[f] = C[0]), e.splice(f + 1, 1), f--;
              continue;
            }
          }
          for (let f = e.length - 1; f >= 0; f--) {
            const c = e[f];
            let g = 0,
              b = 0;
            if (f > 0) {
              const v = e[f - 1];
              (g = v.originalStart + v.originalLength),
                (b = v.modifiedStart + v.modifiedLength);
            }
            const _ = c.originalLength > 0,
              N = c.modifiedLength > 0;
            let C = 0,
              A = this._boundaryScore(
                c.originalStart,
                c.originalLength,
                c.modifiedStart,
                c.modifiedLength,
              );
            for (let v = 1; ; v++) {
              const r = c.originalStart - v,
                a = c.modifiedStart - v;
              if (
                r < g ||
                a < b ||
                (_ &&
                  !this.OriginalElementsAreEqual(r, r + c.originalLength)) ||
                (N && !this.ModifiedElementsAreEqual(a, a + c.modifiedLength))
              )
                break;
              const L =
                (r === g && a === b ? 5 : 0) +
                this._boundaryScore(r, c.originalLength, a, c.modifiedLength);
              L > A && ((A = L), (C = v));
            }
            (c.originalStart -= C), (c.modifiedStart -= C);
            const S = [null];
            if (f > 0 && this.ChangesOverlap(e[f - 1], e[f], S)) {
              (e[f - 1] = S[0]), e.splice(f, 1), f++;
              continue;
            }
          }
          if (this._hasStrings)
            for (let f = 1, c = e.length; f < c; f++) {
              const g = e[f - 1],
                b = e[f],
                _ = b.originalStart - g.originalStart - g.originalLength,
                N = g.originalStart,
                C = b.originalStart + b.originalLength,
                A = C - N,
                S = g.modifiedStart,
                v = b.modifiedStart + b.modifiedLength,
                r = v - S;
              if (_ < 5 && A < 20 && r < 20) {
                const a = this._findBetterContiguousSequence(N, A, S, r, _);
                if (a) {
                  const [l, L] = a;
                  (l !== g.originalStart + g.originalLength ||
                    L !== g.modifiedStart + g.modifiedLength) &&
                    ((g.originalLength = l - g.originalStart),
                    (g.modifiedLength = L - g.modifiedStart),
                    (b.originalStart = l + _),
                    (b.modifiedStart = L + _),
                    (b.originalLength = C - b.originalStart),
                    (b.modifiedLength = v - b.modifiedStart));
                }
              }
            }
          return e;
        }
        _findBetterContiguousSequence(e, f, c, g, b) {
          if (f < b || g < b) return null;
          const _ = e + f - b + 1,
            N = c + g - b + 1;
          let C = 0,
            A = 0,
            S = 0;
          for (let v = e; v < _; v++)
            for (let r = c; r < N; r++) {
              const a = this._contiguousSequenceScore(v, r, b);
              a > 0 && a > C && ((C = a), (A = v), (S = r));
            }
          return C > 0 ? [A, S] : null;
        }
        _contiguousSequenceScore(e, f, c) {
          let g = 0;
          for (let b = 0; b < c; b++) {
            if (!this.ElementsAreEqual(e + b, f + b)) return 0;
            g += this._originalStringElements[e + b].length;
          }
          return g;
        }
        _OriginalIsBoundary(e) {
          return e <= 0 || e >= this._originalElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._originalStringElements[e]);
        }
        _OriginalRegionIsBoundary(e, f) {
          if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1))
            return !0;
          if (f > 0) {
            const c = e + f;
            if (this._OriginalIsBoundary(c - 1) || this._OriginalIsBoundary(c))
              return !0;
          }
          return !1;
        }
        _ModifiedIsBoundary(e) {
          return e <= 0 || e >= this._modifiedElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]);
        }
        _ModifiedRegionIsBoundary(e, f) {
          if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1))
            return !0;
          if (f > 0) {
            const c = e + f;
            if (this._ModifiedIsBoundary(c - 1) || this._ModifiedIsBoundary(c))
              return !0;
          }
          return !1;
        }
        _boundaryScore(e, f, c, g) {
          const b = this._OriginalRegionIsBoundary(e, f) ? 1 : 0,
            _ = this._ModifiedRegionIsBoundary(c, g) ? 1 : 0;
          return b + _;
        }
        ConcatenateChanges(e, f) {
          const c = [];
          if (e.length === 0 || f.length === 0) return f.length > 0 ? f : e;
          if (this.ChangesOverlap(e[e.length - 1], f[0], c)) {
            const g = new Array(e.length + f.length - 1);
            return (
              w.Copy(e, 0, g, 0, e.length - 1),
              (g[e.length - 1] = c[0]),
              w.Copy(f, 1, g, e.length, f.length - 1),
              g
            );
          } else {
            const g = new Array(e.length + f.length);
            return (
              w.Copy(e, 0, g, 0, e.length),
              w.Copy(f, 0, g, e.length, f.length),
              g
            );
          }
        }
        ChangesOverlap(e, f, c) {
          if (
            (h.Assert(
              e.originalStart <= f.originalStart,
              "Left change is not less than or equal to right change",
            ),
            h.Assert(
              e.modifiedStart <= f.modifiedStart,
              "Left change is not less than or equal to right change",
            ),
            e.originalStart + e.originalLength >= f.originalStart ||
              e.modifiedStart + e.modifiedLength >= f.modifiedStart)
          ) {
            const g = e.originalStart;
            let b = e.originalLength;
            const _ = e.modifiedStart;
            let N = e.modifiedLength;
            return (
              e.originalStart + e.originalLength >= f.originalStart &&
                (b = f.originalStart + f.originalLength - e.originalStart),
              e.modifiedStart + e.modifiedLength >= f.modifiedStart &&
                (N = f.modifiedStart + f.modifiedLength - e.modifiedStart),
              (c[0] = new M.DiffChange(g, b, _, N)),
              !0
            );
          } else return (c[0] = null), !1;
        }
        ClipDiagonalBound(e, f, c, g) {
          if (e >= 0 && e < g) return e;
          const b = c,
            _ = g - c - 1,
            N = f % 2 === 0;
          if (e < 0) {
            const C = b % 2 === 0;
            return N === C ? 0 : 1;
          } else {
            const C = _ % 2 === 0;
            return N === C ? g - 1 : g - 2;
          }
        }
      }
      n.LcsDiff = s;
    }),
    X(J[21], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.withUndefinedAsNull =
          n.withNullAsUndefined =
          n.validateConstraint =
          n.validateConstraints =
          n.isFunction =
          n.assertIsDefined =
          n.assertType =
          n.isUndefinedOrNull =
          n.isDefined =
          n.isUndefined =
          n.isBoolean =
          n.isIterable =
          n.isNumber =
          n.isTypedArray =
          n.isObject =
          n.isString =
            void 0);
      function M(C) {
        return typeof C == "string";
      }
      n.isString = M;
      function D(C) {
        return (
          typeof C == "object" &&
          C !== null &&
          !Array.isArray(C) &&
          !(C instanceof RegExp) &&
          !(C instanceof Date)
        );
      }
      n.isObject = D;
      function i(C) {
        const A = Object.getPrototypeOf(Uint8Array);
        return typeof C == "object" && C instanceof A;
      }
      n.isTypedArray = i;
      function u(C) {
        return typeof C == "number" && !isNaN(C);
      }
      n.isNumber = u;
      function h(C) {
        return !!C && typeof C[Symbol.iterator] == "function";
      }
      n.isIterable = h;
      function w(C) {
        return C === !0 || C === !1;
      }
      n.isBoolean = w;
      function o(C) {
        return typeof C > "u";
      }
      n.isUndefined = o;
      function s(C) {
        return !d(C);
      }
      n.isDefined = s;
      function d(C) {
        return o(C) || C === null;
      }
      n.isUndefinedOrNull = d;
      function e(C, A) {
        if (!C)
          throw new Error(
            A ? `Unexpected type, expected '${A}'` : "Unexpected type",
          );
      }
      n.assertType = e;
      function f(C) {
        if (d(C))
          throw new Error("Assertion Failed: argument is undefined or null");
        return C;
      }
      n.assertIsDefined = f;
      function c(C) {
        return typeof C == "function";
      }
      n.isFunction = c;
      function g(C, A) {
        const S = Math.min(C.length, A.length);
        for (let v = 0; v < S; v++) b(C[v], A[v]);
      }
      n.validateConstraints = g;
      function b(C, A) {
        if (M(A)) {
          if (typeof C !== A)
            throw new Error(`argument does not match constraint: typeof ${A}`);
        } else if (c(A)) {
          try {
            if (C instanceof A) return;
          } catch {}
          if (
            (!d(C) && C.constructor === A) ||
            (A.length === 1 && A.call(void 0, C) === !0)
          )
            return;
          throw new Error(
            "argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true",
          );
        }
      }
      n.validateConstraint = b;
      function _(C) {
        return C === null ? void 0 : C;
      }
      n.withNullAsUndefined = _;
      function N(C) {
        return typeof C > "u" ? null : C;
      }
      n.withUndefinedAsNull = N;
    }),
    X(J[34], Z([0, 1, 21]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Codicon = n.getCodiconFontCharacters = void 0);
      const D = Object.create(null);
      function i(h, w) {
        if ((0, M.isString)(w)) {
          const o = D[w];
          if (o === void 0)
            throw new Error(`${h} references an unknown codicon: ${w}`);
          w = o;
        }
        return (D[h] = w), { id: h };
      }
      function u() {
        return D;
      }
      (n.getCodiconFontCharacters = u),
        (n.Codicon = {
          add: i("add", 6e4),
          plus: i("plus", 6e4),
          gistNew: i("gist-new", 6e4),
          repoCreate: i("repo-create", 6e4),
          lightbulb: i("lightbulb", 60001),
          lightBulb: i("light-bulb", 60001),
          repo: i("repo", 60002),
          repoDelete: i("repo-delete", 60002),
          gistFork: i("gist-fork", 60003),
          repoForked: i("repo-forked", 60003),
          gitPullRequest: i("git-pull-request", 60004),
          gitPullRequestAbandoned: i("git-pull-request-abandoned", 60004),
          recordKeys: i("record-keys", 60005),
          keyboard: i("keyboard", 60005),
          tag: i("tag", 60006),
          tagAdd: i("tag-add", 60006),
          tagRemove: i("tag-remove", 60006),
          person: i("person", 60007),
          personFollow: i("person-follow", 60007),
          personOutline: i("person-outline", 60007),
          personFilled: i("person-filled", 60007),
          gitBranch: i("git-branch", 60008),
          gitBranchCreate: i("git-branch-create", 60008),
          gitBranchDelete: i("git-branch-delete", 60008),
          sourceControl: i("source-control", 60008),
          mirror: i("mirror", 60009),
          mirrorPublic: i("mirror-public", 60009),
          star: i("star", 60010),
          starAdd: i("star-add", 60010),
          starDelete: i("star-delete", 60010),
          starEmpty: i("star-empty", 60010),
          comment: i("comment", 60011),
          commentAdd: i("comment-add", 60011),
          alert: i("alert", 60012),
          warning: i("warning", 60012),
          search: i("search", 60013),
          searchSave: i("search-save", 60013),
          logOut: i("log-out", 60014),
          signOut: i("sign-out", 60014),
          logIn: i("log-in", 60015),
          signIn: i("sign-in", 60015),
          eye: i("eye", 60016),
          eyeUnwatch: i("eye-unwatch", 60016),
          eyeWatch: i("eye-watch", 60016),
          circleFilled: i("circle-filled", 60017),
          primitiveDot: i("primitive-dot", 60017),
          closeDirty: i("close-dirty", 60017),
          debugBreakpoint: i("debug-breakpoint", 60017),
          debugBreakpointDisabled: i("debug-breakpoint-disabled", 60017),
          debugHint: i("debug-hint", 60017),
          primitiveSquare: i("primitive-square", 60018),
          edit: i("edit", 60019),
          pencil: i("pencil", 60019),
          info: i("info", 60020),
          issueOpened: i("issue-opened", 60020),
          gistPrivate: i("gist-private", 60021),
          gitForkPrivate: i("git-fork-private", 60021),
          lock: i("lock", 60021),
          mirrorPrivate: i("mirror-private", 60021),
          close: i("close", 60022),
          removeClose: i("remove-close", 60022),
          x: i("x", 60022),
          repoSync: i("repo-sync", 60023),
          sync: i("sync", 60023),
          clone: i("clone", 60024),
          desktopDownload: i("desktop-download", 60024),
          beaker: i("beaker", 60025),
          microscope: i("microscope", 60025),
          vm: i("vm", 60026),
          deviceDesktop: i("device-desktop", 60026),
          file: i("file", 60027),
          fileText: i("file-text", 60027),
          more: i("more", 60028),
          ellipsis: i("ellipsis", 60028),
          kebabHorizontal: i("kebab-horizontal", 60028),
          mailReply: i("mail-reply", 60029),
          reply: i("reply", 60029),
          organization: i("organization", 60030),
          organizationFilled: i("organization-filled", 60030),
          organizationOutline: i("organization-outline", 60030),
          newFile: i("new-file", 60031),
          fileAdd: i("file-add", 60031),
          newFolder: i("new-folder", 60032),
          fileDirectoryCreate: i("file-directory-create", 60032),
          trash: i("trash", 60033),
          trashcan: i("trashcan", 60033),
          history: i("history", 60034),
          clock: i("clock", 60034),
          folder: i("folder", 60035),
          fileDirectory: i("file-directory", 60035),
          symbolFolder: i("symbol-folder", 60035),
          logoGithub: i("logo-github", 60036),
          markGithub: i("mark-github", 60036),
          github: i("github", 60036),
          terminal: i("terminal", 60037),
          console: i("console", 60037),
          repl: i("repl", 60037),
          zap: i("zap", 60038),
          symbolEvent: i("symbol-event", 60038),
          error: i("error", 60039),
          stop: i("stop", 60039),
          variable: i("variable", 60040),
          symbolVariable: i("symbol-variable", 60040),
          array: i("array", 60042),
          symbolArray: i("symbol-array", 60042),
          symbolModule: i("symbol-module", 60043),
          symbolPackage: i("symbol-package", 60043),
          symbolNamespace: i("symbol-namespace", 60043),
          symbolObject: i("symbol-object", 60043),
          symbolMethod: i("symbol-method", 60044),
          symbolFunction: i("symbol-function", 60044),
          symbolConstructor: i("symbol-constructor", 60044),
          symbolBoolean: i("symbol-boolean", 60047),
          symbolNull: i("symbol-null", 60047),
          symbolNumeric: i("symbol-numeric", 60048),
          symbolNumber: i("symbol-number", 60048),
          symbolStructure: i("symbol-structure", 60049),
          symbolStruct: i("symbol-struct", 60049),
          symbolParameter: i("symbol-parameter", 60050),
          symbolTypeParameter: i("symbol-type-parameter", 60050),
          symbolKey: i("symbol-key", 60051),
          symbolText: i("symbol-text", 60051),
          symbolReference: i("symbol-reference", 60052),
          goToFile: i("go-to-file", 60052),
          symbolEnum: i("symbol-enum", 60053),
          symbolValue: i("symbol-value", 60053),
          symbolRuler: i("symbol-ruler", 60054),
          symbolUnit: i("symbol-unit", 60054),
          activateBreakpoints: i("activate-breakpoints", 60055),
          archive: i("archive", 60056),
          arrowBoth: i("arrow-both", 60057),
          arrowDown: i("arrow-down", 60058),
          arrowLeft: i("arrow-left", 60059),
          arrowRight: i("arrow-right", 60060),
          arrowSmallDown: i("arrow-small-down", 60061),
          arrowSmallLeft: i("arrow-small-left", 60062),
          arrowSmallRight: i("arrow-small-right", 60063),
          arrowSmallUp: i("arrow-small-up", 60064),
          arrowUp: i("arrow-up", 60065),
          bell: i("bell", 60066),
          bold: i("bold", 60067),
          book: i("book", 60068),
          bookmark: i("bookmark", 60069),
          debugBreakpointConditionalUnverified: i(
            "debug-breakpoint-conditional-unverified",
            60070,
          ),
          debugBreakpointConditional: i("debug-breakpoint-conditional", 60071),
          debugBreakpointConditionalDisabled: i(
            "debug-breakpoint-conditional-disabled",
            60071,
          ),
          debugBreakpointDataUnverified: i(
            "debug-breakpoint-data-unverified",
            60072,
          ),
          debugBreakpointData: i("debug-breakpoint-data", 60073),
          debugBreakpointDataDisabled: i(
            "debug-breakpoint-data-disabled",
            60073,
          ),
          debugBreakpointLogUnverified: i(
            "debug-breakpoint-log-unverified",
            60074,
          ),
          debugBreakpointLog: i("debug-breakpoint-log", 60075),
          debugBreakpointLogDisabled: i("debug-breakpoint-log-disabled", 60075),
          briefcase: i("briefcase", 60076),
          broadcast: i("broadcast", 60077),
          browser: i("browser", 60078),
          bug: i("bug", 60079),
          calendar: i("calendar", 60080),
          caseSensitive: i("case-sensitive", 60081),
          check: i("check", 60082),
          checklist: i("checklist", 60083),
          chevronDown: i("chevron-down", 60084),
          dropDownButton: i("drop-down-button", 60084),
          chevronLeft: i("chevron-left", 60085),
          chevronRight: i("chevron-right", 60086),
          chevronUp: i("chevron-up", 60087),
          chromeClose: i("chrome-close", 60088),
          chromeMaximize: i("chrome-maximize", 60089),
          chromeMinimize: i("chrome-minimize", 60090),
          chromeRestore: i("chrome-restore", 60091),
          circle: i("circle", 60092),
          circleOutline: i("circle-outline", 60092),
          debugBreakpointUnverified: i("debug-breakpoint-unverified", 60092),
          circleSlash: i("circle-slash", 60093),
          circuitBoard: i("circuit-board", 60094),
          clearAll: i("clear-all", 60095),
          clippy: i("clippy", 60096),
          closeAll: i("close-all", 60097),
          cloudDownload: i("cloud-download", 60098),
          cloudUpload: i("cloud-upload", 60099),
          code: i("code", 60100),
          collapseAll: i("collapse-all", 60101),
          colorMode: i("color-mode", 60102),
          commentDiscussion: i("comment-discussion", 60103),
          compareChanges: i("compare-changes", 60157),
          creditCard: i("credit-card", 60105),
          dash: i("dash", 60108),
          dashboard: i("dashboard", 60109),
          database: i("database", 60110),
          debugContinue: i("debug-continue", 60111),
          debugDisconnect: i("debug-disconnect", 60112),
          debugPause: i("debug-pause", 60113),
          debugRestart: i("debug-restart", 60114),
          debugStart: i("debug-start", 60115),
          debugStepInto: i("debug-step-into", 60116),
          debugStepOut: i("debug-step-out", 60117),
          debugStepOver: i("debug-step-over", 60118),
          debugStop: i("debug-stop", 60119),
          debug: i("debug", 60120),
          deviceCameraVideo: i("device-camera-video", 60121),
          deviceCamera: i("device-camera", 60122),
          deviceMobile: i("device-mobile", 60123),
          diffAdded: i("diff-added", 60124),
          diffIgnored: i("diff-ignored", 60125),
          diffModified: i("diff-modified", 60126),
          diffRemoved: i("diff-removed", 60127),
          diffRenamed: i("diff-renamed", 60128),
          diff: i("diff", 60129),
          discard: i("discard", 60130),
          editorLayout: i("editor-layout", 60131),
          emptyWindow: i("empty-window", 60132),
          exclude: i("exclude", 60133),
          extensions: i("extensions", 60134),
          eyeClosed: i("eye-closed", 60135),
          fileBinary: i("file-binary", 60136),
          fileCode: i("file-code", 60137),
          fileMedia: i("file-media", 60138),
          filePdf: i("file-pdf", 60139),
          fileSubmodule: i("file-submodule", 60140),
          fileSymlinkDirectory: i("file-symlink-directory", 60141),
          fileSymlinkFile: i("file-symlink-file", 60142),
          fileZip: i("file-zip", 60143),
          files: i("files", 60144),
          filter: i("filter", 60145),
          flame: i("flame", 60146),
          foldDown: i("fold-down", 60147),
          foldUp: i("fold-up", 60148),
          fold: i("fold", 60149),
          folderActive: i("folder-active", 60150),
          folderOpened: i("folder-opened", 60151),
          gear: i("gear", 60152),
          gift: i("gift", 60153),
          gistSecret: i("gist-secret", 60154),
          gist: i("gist", 60155),
          gitCommit: i("git-commit", 60156),
          gitCompare: i("git-compare", 60157),
          gitMerge: i("git-merge", 60158),
          githubAction: i("github-action", 60159),
          githubAlt: i("github-alt", 60160),
          globe: i("globe", 60161),
          grabber: i("grabber", 60162),
          graph: i("graph", 60163),
          gripper: i("gripper", 60164),
          heart: i("heart", 60165),
          home: i("home", 60166),
          horizontalRule: i("horizontal-rule", 60167),
          hubot: i("hubot", 60168),
          inbox: i("inbox", 60169),
          issueClosed: i("issue-closed", 60324),
          issueReopened: i("issue-reopened", 60171),
          issues: i("issues", 60172),
          italic: i("italic", 60173),
          jersey: i("jersey", 60174),
          json: i("json", 60175),
          bracket: i("bracket", 60175),
          kebabVertical: i("kebab-vertical", 60176),
          key: i("key", 60177),
          law: i("law", 60178),
          lightbulbAutofix: i("lightbulb-autofix", 60179),
          linkExternal: i("link-external", 60180),
          link: i("link", 60181),
          listOrdered: i("list-ordered", 60182),
          listUnordered: i("list-unordered", 60183),
          liveShare: i("live-share", 60184),
          loading: i("loading", 60185),
          location: i("location", 60186),
          mailRead: i("mail-read", 60187),
          mail: i("mail", 60188),
          markdown: i("markdown", 60189),
          megaphone: i("megaphone", 60190),
          mention: i("mention", 60191),
          milestone: i("milestone", 60192),
          mortarBoard: i("mortar-board", 60193),
          move: i("move", 60194),
          multipleWindows: i("multiple-windows", 60195),
          mute: i("mute", 60196),
          noNewline: i("no-newline", 60197),
          note: i("note", 60198),
          octoface: i("octoface", 60199),
          openPreview: i("open-preview", 60200),
          package_: i("package", 60201),
          paintcan: i("paintcan", 60202),
          pin: i("pin", 60203),
          play: i("play", 60204),
          run: i("run", 60204),
          plug: i("plug", 60205),
          preserveCase: i("preserve-case", 60206),
          preview: i("preview", 60207),
          project: i("project", 60208),
          pulse: i("pulse", 60209),
          question: i("question", 60210),
          quote: i("quote", 60211),
          radioTower: i("radio-tower", 60212),
          reactions: i("reactions", 60213),
          references: i("references", 60214),
          refresh: i("refresh", 60215),
          regex: i("regex", 60216),
          remoteExplorer: i("remote-explorer", 60217),
          remote: i("remote", 60218),
          remove: i("remove", 60219),
          replaceAll: i("replace-all", 60220),
          replace: i("replace", 60221),
          repoClone: i("repo-clone", 60222),
          repoForcePush: i("repo-force-push", 60223),
          repoPull: i("repo-pull", 60224),
          repoPush: i("repo-push", 60225),
          report: i("report", 60226),
          requestChanges: i("request-changes", 60227),
          rocket: i("rocket", 60228),
          rootFolderOpened: i("root-folder-opened", 60229),
          rootFolder: i("root-folder", 60230),
          rss: i("rss", 60231),
          ruby: i("ruby", 60232),
          saveAll: i("save-all", 60233),
          saveAs: i("save-as", 60234),
          save: i("save", 60235),
          screenFull: i("screen-full", 60236),
          screenNormal: i("screen-normal", 60237),
          searchStop: i("search-stop", 60238),
          server: i("server", 60240),
          settingsGear: i("settings-gear", 60241),
          settings: i("settings", 60242),
          shield: i("shield", 60243),
          smiley: i("smiley", 60244),
          sortPrecedence: i("sort-precedence", 60245),
          splitHorizontal: i("split-horizontal", 60246),
          splitVertical: i("split-vertical", 60247),
          squirrel: i("squirrel", 60248),
          starFull: i("star-full", 60249),
          starHalf: i("star-half", 60250),
          symbolClass: i("symbol-class", 60251),
          symbolColor: i("symbol-color", 60252),
          symbolCustomColor: i("symbol-customcolor", 60252),
          symbolConstant: i("symbol-constant", 60253),
          symbolEnumMember: i("symbol-enum-member", 60254),
          symbolField: i("symbol-field", 60255),
          symbolFile: i("symbol-file", 60256),
          symbolInterface: i("symbol-interface", 60257),
          symbolKeyword: i("symbol-keyword", 60258),
          symbolMisc: i("symbol-misc", 60259),
          symbolOperator: i("symbol-operator", 60260),
          symbolProperty: i("symbol-property", 60261),
          wrench: i("wrench", 60261),
          wrenchSubaction: i("wrench-subaction", 60261),
          symbolSnippet: i("symbol-snippet", 60262),
          tasklist: i("tasklist", 60263),
          telescope: i("telescope", 60264),
          textSize: i("text-size", 60265),
          threeBars: i("three-bars", 60266),
          thumbsdown: i("thumbsdown", 60267),
          thumbsup: i("thumbsup", 60268),
          tools: i("tools", 60269),
          triangleDown: i("triangle-down", 60270),
          triangleLeft: i("triangle-left", 60271),
          triangleRight: i("triangle-right", 60272),
          triangleUp: i("triangle-up", 60273),
          twitter: i("twitter", 60274),
          unfold: i("unfold", 60275),
          unlock: i("unlock", 60276),
          unmute: i("unmute", 60277),
          unverified: i("unverified", 60278),
          verified: i("verified", 60279),
          versions: i("versions", 60280),
          vmActive: i("vm-active", 60281),
          vmOutline: i("vm-outline", 60282),
          vmRunning: i("vm-running", 60283),
          watch: i("watch", 60284),
          whitespace: i("whitespace", 60285),
          wholeWord: i("whole-word", 60286),
          window: i("window", 60287),
          wordWrap: i("word-wrap", 60288),
          zoomIn: i("zoom-in", 60289),
          zoomOut: i("zoom-out", 60290),
          listFilter: i("list-filter", 60291),
          listFlat: i("list-flat", 60292),
          listSelection: i("list-selection", 60293),
          selection: i("selection", 60293),
          listTree: i("list-tree", 60294),
          debugBreakpointFunctionUnverified: i(
            "debug-breakpoint-function-unverified",
            60295,
          ),
          debugBreakpointFunction: i("debug-breakpoint-function", 60296),
          debugBreakpointFunctionDisabled: i(
            "debug-breakpoint-function-disabled",
            60296,
          ),
          debugStackframeActive: i("debug-stackframe-active", 60297),
          circleSmallFilled: i("circle-small-filled", 60298),
          debugStackframeDot: i("debug-stackframe-dot", 60298),
          debugStackframe: i("debug-stackframe", 60299),
          debugStackframeFocused: i("debug-stackframe-focused", 60299),
          debugBreakpointUnsupported: i("debug-breakpoint-unsupported", 60300),
          symbolString: i("symbol-string", 60301),
          debugReverseContinue: i("debug-reverse-continue", 60302),
          debugStepBack: i("debug-step-back", 60303),
          debugRestartFrame: i("debug-restart-frame", 60304),
          callIncoming: i("call-incoming", 60306),
          callOutgoing: i("call-outgoing", 60307),
          menu: i("menu", 60308),
          expandAll: i("expand-all", 60309),
          feedback: i("feedback", 60310),
          groupByRefType: i("group-by-ref-type", 60311),
          ungroupByRefType: i("ungroup-by-ref-type", 60312),
          account: i("account", 60313),
          bellDot: i("bell-dot", 60314),
          debugConsole: i("debug-console", 60315),
          library: i("library", 60316),
          output: i("output", 60317),
          runAll: i("run-all", 60318),
          syncIgnored: i("sync-ignored", 60319),
          pinned: i("pinned", 60320),
          githubInverted: i("github-inverted", 60321),
          debugAlt: i("debug-alt", 60305),
          serverProcess: i("server-process", 60322),
          serverEnvironment: i("server-environment", 60323),
          pass: i("pass", 60324),
          stopCircle: i("stop-circle", 60325),
          playCircle: i("play-circle", 60326),
          record: i("record", 60327),
          debugAltSmall: i("debug-alt-small", 60328),
          vmConnect: i("vm-connect", 60329),
          cloud: i("cloud", 60330),
          merge: i("merge", 60331),
          exportIcon: i("export", 60332),
          graphLeft: i("graph-left", 60333),
          magnet: i("magnet", 60334),
          notebook: i("notebook", 60335),
          redo: i("redo", 60336),
          checkAll: i("check-all", 60337),
          pinnedDirty: i("pinned-dirty", 60338),
          passFilled: i("pass-filled", 60339),
          circleLargeFilled: i("circle-large-filled", 60340),
          circleLarge: i("circle-large", 60341),
          circleLargeOutline: i("circle-large-outline", 60341),
          combine: i("combine", 60342),
          gather: i("gather", 60342),
          table: i("table", 60343),
          variableGroup: i("variable-group", 60344),
          typeHierarchy: i("type-hierarchy", 60345),
          typeHierarchySub: i("type-hierarchy-sub", 60346),
          typeHierarchySuper: i("type-hierarchy-super", 60347),
          gitPullRequestCreate: i("git-pull-request-create", 60348),
          runAbove: i("run-above", 60349),
          runBelow: i("run-below", 60350),
          notebookTemplate: i("notebook-template", 60351),
          debugRerun: i("debug-rerun", 60352),
          workspaceTrusted: i("workspace-trusted", 60353),
          workspaceUntrusted: i("workspace-untrusted", 60354),
          workspaceUnspecified: i("workspace-unspecified", 60355),
          terminalCmd: i("terminal-cmd", 60356),
          terminalDebian: i("terminal-debian", 60357),
          terminalLinux: i("terminal-linux", 60358),
          terminalPowershell: i("terminal-powershell", 60359),
          terminalTmux: i("terminal-tmux", 60360),
          terminalUbuntu: i("terminal-ubuntu", 60361),
          terminalBash: i("terminal-bash", 60362),
          arrowSwap: i("arrow-swap", 60363),
          copy: i("copy", 60364),
          personAdd: i("person-add", 60365),
          filterFilled: i("filter-filled", 60366),
          wand: i("wand", 60367),
          debugLineByLine: i("debug-line-by-line", 60368),
          inspect: i("inspect", 60369),
          layers: i("layers", 60370),
          layersDot: i("layers-dot", 60371),
          layersActive: i("layers-active", 60372),
          compass: i("compass", 60373),
          compassDot: i("compass-dot", 60374),
          compassActive: i("compass-active", 60375),
          azure: i("azure", 60376),
          issueDraft: i("issue-draft", 60377),
          gitPullRequestClosed: i("git-pull-request-closed", 60378),
          gitPullRequestDraft: i("git-pull-request-draft", 60379),
          debugAll: i("debug-all", 60380),
          debugCoverage: i("debug-coverage", 60381),
          runErrors: i("run-errors", 60382),
          folderLibrary: i("folder-library", 60383),
          debugContinueSmall: i("debug-continue-small", 60384),
          beakerStop: i("beaker-stop", 60385),
          graphLine: i("graph-line", 60386),
          graphScatter: i("graph-scatter", 60387),
          pieChart: i("pie-chart", 60388),
          bracketDot: i("bracket-dot", 60389),
          bracketError: i("bracket-error", 60390),
          lockSmall: i("lock-small", 60391),
          azureDevops: i("azure-devops", 60392),
          verifiedFilled: i("verified-filled", 60393),
          newLine: i("newline", 60394),
          layout: i("layout", 60395),
          layoutActivitybarLeft: i("layout-activitybar-left", 60396),
          layoutActivitybarRight: i("layout-activitybar-right", 60397),
          layoutPanelLeft: i("layout-panel-left", 60398),
          layoutPanelCenter: i("layout-panel-center", 60399),
          layoutPanelJustify: i("layout-panel-justify", 60400),
          layoutPanelRight: i("layout-panel-right", 60401),
          layoutPanel: i("layout-panel", 60402),
          layoutSidebarLeft: i("layout-sidebar-left", 60403),
          layoutSidebarRight: i("layout-sidebar-right", 60404),
          layoutStatusbar: i("layout-statusbar", 60405),
          layoutMenubar: i("layout-menubar", 60406),
          layoutCentered: i("layout-centered", 60407),
          layoutSidebarRightOff: i("layout-sidebar-right-off", 60416),
          layoutPanelOff: i("layout-panel-off", 60417),
          layoutSidebarLeftOff: i("layout-sidebar-left-off", 60418),
          target: i("target", 60408),
          indent: i("indent", 60409),
          recordSmall: i("record-small", 60410),
          errorSmall: i("error-small", 60411),
          arrowCircleDown: i("arrow-circle-down", 60412),
          arrowCircleLeft: i("arrow-circle-left", 60413),
          arrowCircleRight: i("arrow-circle-right", 60414),
          arrowCircleUp: i("arrow-circle-up", 60415),
          heartFilled: i("heart-filled", 60420),
          map: i("map", 60421),
          mapFilled: i("map-filled", 60422),
          circleSmall: i("circle-small", 60423),
          bellSlash: i("bell-slash", 60424),
          bellSlashDot: i("bell-slash-dot", 60425),
          commentUnresolved: i("comment-unresolved", 60426),
          gitPullRequestGoToChanges: i("git-pull-request-go-to-changes", 60427),
          gitPullRequestNewChanges: i("git-pull-request-new-changes", 60428),
          searchFuzzy: i("search-fuzzy", 60429),
          commentDraft: i("comment-draft", 60430),
          send: i("send", 60431),
          sparkle: i("sparkle", 60432),
          insert: i("insert", 60433),
          dialogError: i("dialog-error", "error"),
          dialogWarning: i("dialog-warning", "warning"),
          dialogInfo: i("dialog-info", "info"),
          dialogClose: i("dialog-close", "close"),
          treeItemExpanded: i("tree-item-expanded", "chevron-down"),
          treeFilterOnTypeOn: i("tree-filter-on-type-on", "list-filter"),
          treeFilterOnTypeOff: i("tree-filter-on-type-off", "list-selection"),
          treeFilterClear: i("tree-filter-clear", "close"),
          treeItemLoading: i("tree-item-loading", "loading"),
          menuSelection: i("menu-selection", "check"),
          menuSubmenu: i("menu-submenu", "chevron-right"),
          menuBarMore: i("menubar-more", "more"),
          scrollbarButtonLeft: i("scrollbar-button-left", "triangle-left"),
          scrollbarButtonRight: i("scrollbar-button-right", "triangle-right"),
          scrollbarButtonUp: i("scrollbar-button-up", "triangle-up"),
          scrollbarButtonDown: i("scrollbar-button-down", "triangle-down"),
          toolBarMore: i("toolbar-more", "more"),
          quickInputBack: i("quick-input-back", "arrow-left"),
        });
    }),
    X(J[11], Z([0, 1, 21]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.createProxyObject =
          n.getAllMethodNames =
          n.getAllPropertyNames =
          n.equals =
          n.mixin =
          n.cloneAndChange =
          n.deepFreeze =
          n.deepClone =
            void 0);
      function D(c) {
        if (!c || typeof c != "object" || c instanceof RegExp) return c;
        const g = Array.isArray(c) ? [] : {};
        return (
          Object.entries(c).forEach(([b, _]) => {
            g[b] = _ && typeof _ == "object" ? D(_) : _;
          }),
          g
        );
      }
      n.deepClone = D;
      function i(c) {
        if (!c || typeof c != "object") return c;
        const g = [c];
        for (; g.length > 0; ) {
          const b = g.shift();
          Object.freeze(b);
          for (const _ in b)
            if (u.call(b, _)) {
              const N = b[_];
              typeof N == "object" &&
                !Object.isFrozen(N) &&
                !(0, M.isTypedArray)(N) &&
                g.push(N);
            }
        }
        return c;
      }
      n.deepFreeze = i;
      const u = Object.prototype.hasOwnProperty;
      function h(c, g) {
        return w(c, g, new Set());
      }
      n.cloneAndChange = h;
      function w(c, g, b) {
        if ((0, M.isUndefinedOrNull)(c)) return c;
        const _ = g(c);
        if (typeof _ < "u") return _;
        if (Array.isArray(c)) {
          const N = [];
          for (const C of c) N.push(w(C, g, b));
          return N;
        }
        if ((0, M.isObject)(c)) {
          if (b.has(c))
            throw new Error("Cannot clone recursive data-structure");
          b.add(c);
          const N = {};
          for (const C in c) u.call(c, C) && (N[C] = w(c[C], g, b));
          return b.delete(c), N;
        }
        return c;
      }
      function o(c, g, b = !0) {
        return (0, M.isObject)(c)
          ? ((0, M.isObject)(g) &&
              Object.keys(g).forEach((_) => {
                _ in c
                  ? b &&
                    ((0, M.isObject)(c[_]) && (0, M.isObject)(g[_])
                      ? o(c[_], g[_], b)
                      : (c[_] = g[_]))
                  : (c[_] = g[_]);
              }),
            c)
          : g;
      }
      n.mixin = o;
      function s(c, g) {
        if (c === g) return !0;
        if (
          c == null ||
          g === null ||
          g === void 0 ||
          typeof c != typeof g ||
          typeof c != "object" ||
          Array.isArray(c) !== Array.isArray(g)
        )
          return !1;
        let b, _;
        if (Array.isArray(c)) {
          if (c.length !== g.length) return !1;
          for (b = 0; b < c.length; b++) if (!s(c[b], g[b])) return !1;
        } else {
          const N = [];
          for (_ in c) N.push(_);
          N.sort();
          const C = [];
          for (_ in g) C.push(_);
          if ((C.sort(), !s(N, C))) return !1;
          for (b = 0; b < N.length; b++) if (!s(c[N[b]], g[N[b]])) return !1;
        }
        return !0;
      }
      n.equals = s;
      function d(c) {
        let g = [];
        for (; Object.prototype !== c; )
          (g = g.concat(Object.getOwnPropertyNames(c))),
            (c = Object.getPrototypeOf(c));
        return g;
      }
      n.getAllPropertyNames = d;
      function e(c) {
        const g = [];
        for (const b of d(c)) typeof c[b] == "function" && g.push(b);
        return g;
      }
      n.getAllMethodNames = e;
      function f(c, g) {
        const b = (N) =>
            function () {
              const C = Array.prototype.slice.call(arguments, 0);
              return g(N, C);
            },
          _ = {};
        for (const N of c) _[N] = b(N);
        return _;
      }
      n.createProxyObject = f;
    }),
    X(J[22], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.toUint32 = n.toUint8 = void 0);
      function M(i) {
        return i < 0 ? 0 : i > 255 ? 255 : i | 0;
      }
      n.toUint8 = M;
      function D(i) {
        return i < 0 ? 0 : i > 4294967295 ? 4294967295 : i | 0;
      }
      n.toUint32 = D;
    }),
    X(J[23], Z([0, 1, 22]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.CharacterSet = n.CharacterClassifier = void 0);
      class D {
        constructor(h) {
          const w = (0, M.toUint8)(h);
          (this._defaultValue = w),
            (this._asciiMap = D._createAsciiMap(w)),
            (this._map = new Map());
        }
        static _createAsciiMap(h) {
          const w = new Uint8Array(256);
          return w.fill(h), w;
        }
        set(h, w) {
          const o = (0, M.toUint8)(w);
          h >= 0 && h < 256 ? (this._asciiMap[h] = o) : this._map.set(h, o);
        }
        get(h) {
          return h >= 0 && h < 256
            ? this._asciiMap[h]
            : this._map.get(h) || this._defaultValue;
        }
        clear() {
          this._asciiMap.fill(this._defaultValue), this._map.clear();
        }
      }
      n.CharacterClassifier = D;
      class i {
        constructor() {
          this._actual = new D(0);
        }
        add(h) {
          this._actual.set(h, 1);
        }
        has(h) {
          return this._actual.get(h) === 1;
        }
        clear() {
          return this._actual.clear();
        }
      }
      n.CharacterSet = i;
    }),
    X(J[6], Z([0, 1, 4]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.OffsetRange = void 0);
      class D {
        static addRange(u, h) {
          let w = 0;
          for (; w < h.length && h[w].endExclusive < u.start; ) w++;
          let o = w;
          for (; o < h.length && h[o].start <= u.endExclusive; ) o++;
          if (w === o) h.splice(w, 0, u);
          else {
            const s = Math.min(u.start, h[w].start),
              d = Math.max(u.endExclusive, h[o - 1].endExclusive);
            h.splice(w, o - w, new D(s, d));
          }
        }
        static tryCreate(u, h) {
          if (!(u > h)) return new D(u, h);
        }
        constructor(u, h) {
          if (((this.start = u), (this.endExclusive = h), u > h))
            throw new M.BugIndicatingError(`Invalid range: ${this.toString()}`);
        }
        get isEmpty() {
          return this.start === this.endExclusive;
        }
        delta(u) {
          return new D(this.start + u, this.endExclusive + u);
        }
        get length() {
          return this.endExclusive - this.start;
        }
        toString() {
          return `[${this.start}, ${this.endExclusive})`;
        }
        equals(u) {
          return this.start === u.start && this.endExclusive === u.endExclusive;
        }
        containsRange(u) {
          return this.start <= u.start && u.endExclusive <= this.endExclusive;
        }
        contains(u) {
          return this.start <= u && u < this.endExclusive;
        }
        join(u) {
          return new D(
            Math.min(this.start, u.start),
            Math.max(this.endExclusive, u.endExclusive),
          );
        }
        intersect(u) {
          const h = Math.max(this.start, u.start),
            w = Math.min(this.endExclusive, u.endExclusive);
          if (h <= w) return new D(h, w);
        }
      }
      n.OffsetRange = D;
    }),
    X(J[3], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Position = void 0);
      class M {
        constructor(i, u) {
          (this.lineNumber = i), (this.column = u);
        }
        with(i = this.lineNumber, u = this.column) {
          return i === this.lineNumber && u === this.column
            ? this
            : new M(i, u);
        }
        delta(i = 0, u = 0) {
          return this.with(this.lineNumber + i, this.column + u);
        }
        equals(i) {
          return M.equals(this, i);
        }
        static equals(i, u) {
          return !i && !u
            ? !0
            : !!i &&
                !!u &&
                i.lineNumber === u.lineNumber &&
                i.column === u.column;
        }
        isBefore(i) {
          return M.isBefore(this, i);
        }
        static isBefore(i, u) {
          return i.lineNumber < u.lineNumber
            ? !0
            : u.lineNumber < i.lineNumber
            ? !1
            : i.column < u.column;
        }
        isBeforeOrEqual(i) {
          return M.isBeforeOrEqual(this, i);
        }
        static isBeforeOrEqual(i, u) {
          return i.lineNumber < u.lineNumber
            ? !0
            : u.lineNumber < i.lineNumber
            ? !1
            : i.column <= u.column;
        }
        static compare(i, u) {
          const h = i.lineNumber | 0,
            w = u.lineNumber | 0;
          if (h === w) {
            const o = i.column | 0,
              s = u.column | 0;
            return o - s;
          }
          return h - w;
        }
        clone() {
          return new M(this.lineNumber, this.column);
        }
        toString() {
          return "(" + this.lineNumber + "," + this.column + ")";
        }
        static lift(i) {
          return new M(i.lineNumber, i.column);
        }
        static isIPosition(i) {
          return (
            i && typeof i.lineNumber == "number" && typeof i.column == "number"
          );
        }
      }
      n.Position = M;
    }),
    X(J[2], Z([0, 1, 3]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), (n.Range = void 0);
      class D {
        constructor(u, h, w, o) {
          u > w || (u === w && h > o)
            ? ((this.startLineNumber = w),
              (this.startColumn = o),
              (this.endLineNumber = u),
              (this.endColumn = h))
            : ((this.startLineNumber = u),
              (this.startColumn = h),
              (this.endLineNumber = w),
              (this.endColumn = o));
        }
        isEmpty() {
          return D.isEmpty(this);
        }
        static isEmpty(u) {
          return (
            u.startLineNumber === u.endLineNumber &&
            u.startColumn === u.endColumn
          );
        }
        containsPosition(u) {
          return D.containsPosition(this, u);
        }
        static containsPosition(u, h) {
          return !(
            h.lineNumber < u.startLineNumber ||
            h.lineNumber > u.endLineNumber ||
            (h.lineNumber === u.startLineNumber && h.column < u.startColumn) ||
            (h.lineNumber === u.endLineNumber && h.column > u.endColumn)
          );
        }
        static strictContainsPosition(u, h) {
          return !(
            h.lineNumber < u.startLineNumber ||
            h.lineNumber > u.endLineNumber ||
            (h.lineNumber === u.startLineNumber && h.column <= u.startColumn) ||
            (h.lineNumber === u.endLineNumber && h.column >= u.endColumn)
          );
        }
        containsRange(u) {
          return D.containsRange(this, u);
        }
        static containsRange(u, h) {
          return !(
            h.startLineNumber < u.startLineNumber ||
            h.endLineNumber < u.startLineNumber ||
            h.startLineNumber > u.endLineNumber ||
            h.endLineNumber > u.endLineNumber ||
            (h.startLineNumber === u.startLineNumber &&
              h.startColumn < u.startColumn) ||
            (h.endLineNumber === u.endLineNumber && h.endColumn > u.endColumn)
          );
        }
        strictContainsRange(u) {
          return D.strictContainsRange(this, u);
        }
        static strictContainsRange(u, h) {
          return !(
            h.startLineNumber < u.startLineNumber ||
            h.endLineNumber < u.startLineNumber ||
            h.startLineNumber > u.endLineNumber ||
            h.endLineNumber > u.endLineNumber ||
            (h.startLineNumber === u.startLineNumber &&
              h.startColumn <= u.startColumn) ||
            (h.endLineNumber === u.endLineNumber && h.endColumn >= u.endColumn)
          );
        }
        plusRange(u) {
          return D.plusRange(this, u);
        }
        static plusRange(u, h) {
          let w, o, s, d;
          return (
            h.startLineNumber < u.startLineNumber
              ? ((w = h.startLineNumber), (o = h.startColumn))
              : h.startLineNumber === u.startLineNumber
              ? ((w = h.startLineNumber),
                (o = Math.min(h.startColumn, u.startColumn)))
              : ((w = u.startLineNumber), (o = u.startColumn)),
            h.endLineNumber > u.endLineNumber
              ? ((s = h.endLineNumber), (d = h.endColumn))
              : h.endLineNumber === u.endLineNumber
              ? ((s = h.endLineNumber),
                (d = Math.max(h.endColumn, u.endColumn)))
              : ((s = u.endLineNumber), (d = u.endColumn)),
            new D(w, o, s, d)
          );
        }
        intersectRanges(u) {
          return D.intersectRanges(this, u);
        }
        static intersectRanges(u, h) {
          let w = u.startLineNumber,
            o = u.startColumn,
            s = u.endLineNumber,
            d = u.endColumn;
          const e = h.startLineNumber,
            f = h.startColumn,
            c = h.endLineNumber,
            g = h.endColumn;
          return (
            w < e ? ((w = e), (o = f)) : w === e && (o = Math.max(o, f)),
            s > c ? ((s = c), (d = g)) : s === c && (d = Math.min(d, g)),
            w > s || (w === s && o > d) ? null : new D(w, o, s, d)
          );
        }
        equalsRange(u) {
          return D.equalsRange(this, u);
        }
        static equalsRange(u, h) {
          return !u && !h
            ? !0
            : !!u &&
                !!h &&
                u.startLineNumber === h.startLineNumber &&
                u.startColumn === h.startColumn &&
                u.endLineNumber === h.endLineNumber &&
                u.endColumn === h.endColumn;
        }
        getEndPosition() {
          return D.getEndPosition(this);
        }
        static getEndPosition(u) {
          return new M.Position(u.endLineNumber, u.endColumn);
        }
        getStartPosition() {
          return D.getStartPosition(this);
        }
        static getStartPosition(u) {
          return new M.Position(u.startLineNumber, u.startColumn);
        }
        toString() {
          return (
            "[" +
            this.startLineNumber +
            "," +
            this.startColumn +
            " -> " +
            this.endLineNumber +
            "," +
            this.endColumn +
            "]"
          );
        }
        setEndPosition(u, h) {
          return new D(this.startLineNumber, this.startColumn, u, h);
        }
        setStartPosition(u, h) {
          return new D(u, h, this.endLineNumber, this.endColumn);
        }
        collapseToStart() {
          return D.collapseToStart(this);
        }
        static collapseToStart(u) {
          return new D(
            u.startLineNumber,
            u.startColumn,
            u.startLineNumber,
            u.startColumn,
          );
        }
        collapseToEnd() {
          return D.collapseToEnd(this);
        }
        static collapseToEnd(u) {
          return new D(
            u.endLineNumber,
            u.endColumn,
            u.endLineNumber,
            u.endColumn,
          );
        }
        delta(u) {
          return new D(
            this.startLineNumber + u,
            this.startColumn,
            this.endLineNumber + u,
            this.endColumn,
          );
        }
        static fromPositions(u, h = u) {
          return new D(u.lineNumber, u.column, h.lineNumber, h.column);
        }
        static lift(u) {
          return u
            ? new D(
                u.startLineNumber,
                u.startColumn,
                u.endLineNumber,
                u.endColumn,
              )
            : null;
        }
        static isIRange(u) {
          return (
            u &&
            typeof u.startLineNumber == "number" &&
            typeof u.startColumn == "number" &&
            typeof u.endLineNumber == "number" &&
            typeof u.endColumn == "number"
          );
        }
        static areIntersectingOrTouching(u, h) {
          return !(
            u.endLineNumber < h.startLineNumber ||
            (u.endLineNumber === h.startLineNumber &&
              u.endColumn < h.startColumn) ||
            h.endLineNumber < u.startLineNumber ||
            (h.endLineNumber === u.startLineNumber &&
              h.endColumn < u.startColumn)
          );
        }
        static areIntersecting(u, h) {
          return !(
            u.endLineNumber < h.startLineNumber ||
            (u.endLineNumber === h.startLineNumber &&
              u.endColumn <= h.startColumn) ||
            h.endLineNumber < u.startLineNumber ||
            (h.endLineNumber === u.startLineNumber &&
              h.endColumn <= u.startColumn)
          );
        }
        static compareRangesUsingStarts(u, h) {
          if (u && h) {
            const s = u.startLineNumber | 0,
              d = h.startLineNumber | 0;
            if (s === d) {
              const e = u.startColumn | 0,
                f = h.startColumn | 0;
              if (e === f) {
                const c = u.endLineNumber | 0,
                  g = h.endLineNumber | 0;
                if (c === g) {
                  const b = u.endColumn | 0,
                    _ = h.endColumn | 0;
                  return b - _;
                }
                return c - g;
              }
              return e - f;
            }
            return s - d;
          }
          return (u ? 1 : 0) - (h ? 1 : 0);
        }
        static compareRangesUsingEnds(u, h) {
          return u.endLineNumber === h.endLineNumber
            ? u.endColumn === h.endColumn
              ? u.startLineNumber === h.startLineNumber
                ? u.startColumn - h.startColumn
                : u.startLineNumber - h.startLineNumber
              : u.endColumn - h.endColumn
            : u.endLineNumber - h.endLineNumber;
        }
        static spansMultipleLines(u) {
          return u.endLineNumber > u.startLineNumber;
        }
        toJSON() {
          return this;
        }
      }
      n.Range = D;
    }),
    X(J[12], Z([0, 1, 4, 2]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.LineRange = void 0);
      class i {
        static fromRange(h) {
          return new i(h.startLineNumber, h.endLineNumber);
        }
        static subtract(h, w) {
          return w
            ? h.startLineNumber < w.startLineNumber &&
              w.endLineNumberExclusive < h.endLineNumberExclusive
              ? [
                  new i(h.startLineNumber, w.startLineNumber),
                  new i(w.endLineNumberExclusive, h.endLineNumberExclusive),
                ]
              : w.startLineNumber <= h.startLineNumber &&
                h.endLineNumberExclusive <= w.endLineNumberExclusive
              ? []
              : w.endLineNumberExclusive < h.endLineNumberExclusive
              ? [
                  new i(
                    Math.max(w.endLineNumberExclusive, h.startLineNumber),
                    h.endLineNumberExclusive,
                  ),
                ]
              : [
                  new i(
                    h.startLineNumber,
                    Math.min(w.startLineNumber, h.endLineNumberExclusive),
                  ),
                ]
            : [h];
        }
        static joinMany(h) {
          if (h.length === 0) return [];
          let w = h[0];
          for (let o = 1; o < h.length; o++) w = this.join(w, h[o]);
          return w;
        }
        static join(h, w) {
          if (h.length === 0) return w;
          if (w.length === 0) return h;
          const o = [];
          let s = 0,
            d = 0,
            e = null;
          for (; s < h.length || d < w.length; ) {
            let f = null;
            if (s < h.length && d < w.length) {
              const c = h[s],
                g = w[d];
              c.startLineNumber < g.startLineNumber
                ? ((f = c), s++)
                : ((f = g), d++);
            } else s < h.length ? ((f = h[s]), s++) : ((f = w[d]), d++);
            e === null
              ? (e = f)
              : e.endLineNumberExclusive >= f.startLineNumber
              ? (e = new i(
                  e.startLineNumber,
                  Math.max(e.endLineNumberExclusive, f.endLineNumberExclusive),
                ))
              : (o.push(e), (e = f));
          }
          return e !== null && o.push(e), o;
        }
        static ofLength(h, w) {
          return new i(h, h + w);
        }
        static deserialize(h) {
          return new i(h[0], h[1]);
        }
        constructor(h, w) {
          if (h > w)
            throw new M.BugIndicatingError(
              `startLineNumber ${h} cannot be after endLineNumberExclusive ${w}`,
            );
          (this.startLineNumber = h), (this.endLineNumberExclusive = w);
        }
        contains(h) {
          return this.startLineNumber <= h && h < this.endLineNumberExclusive;
        }
        get isEmpty() {
          return this.startLineNumber === this.endLineNumberExclusive;
        }
        delta(h) {
          return new i(
            this.startLineNumber + h,
            this.endLineNumberExclusive + h,
          );
        }
        get length() {
          return this.endLineNumberExclusive - this.startLineNumber;
        }
        join(h) {
          return new i(
            Math.min(this.startLineNumber, h.startLineNumber),
            Math.max(this.endLineNumberExclusive, h.endLineNumberExclusive),
          );
        }
        toString() {
          return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
        }
        intersect(h) {
          const w = Math.max(this.startLineNumber, h.startLineNumber),
            o = Math.min(this.endLineNumberExclusive, h.endLineNumberExclusive);
          if (w <= o) return new i(w, o);
        }
        intersectsStrict(h) {
          return (
            this.startLineNumber < h.endLineNumberExclusive &&
            h.startLineNumber < this.endLineNumberExclusive
          );
        }
        overlapOrTouch(h) {
          return (
            this.startLineNumber <= h.endLineNumberExclusive &&
            h.startLineNumber <= this.endLineNumberExclusive
          );
        }
        equals(h) {
          return (
            this.startLineNumber === h.startLineNumber &&
            this.endLineNumberExclusive === h.endLineNumberExclusive
          );
        }
        toInclusiveRange() {
          return this.isEmpty
            ? null
            : new D.Range(
                this.startLineNumber,
                1,
                this.endLineNumberExclusive - 1,
                Number.MAX_SAFE_INTEGER,
              );
        }
        toExclusiveRange() {
          return new D.Range(
            this.startLineNumber,
            1,
            this.endLineNumberExclusive,
            1,
          );
        }
        mapToLineArray(h) {
          const w = [];
          for (
            let o = this.startLineNumber;
            o < this.endLineNumberExclusive;
            o++
          )
            w.push(h(o));
          return w;
        }
        forEach(h) {
          for (
            let w = this.startLineNumber;
            w < this.endLineNumberExclusive;
            w++
          )
            h(w);
        }
        serialize() {
          return [this.startLineNumber, this.endLineNumberExclusive];
        }
        includes(h) {
          return this.startLineNumber <= h && h < this.endLineNumberExclusive;
        }
      }
      n.LineRange = i;
    }),
    X(J[35], Z([0, 1, 3, 2]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Selection = void 0);
      class i extends D.Range {
        constructor(h, w, o, s) {
          super(h, w, o, s),
            (this.selectionStartLineNumber = h),
            (this.selectionStartColumn = w),
            (this.positionLineNumber = o),
            (this.positionColumn = s);
        }
        toString() {
          return (
            "[" +
            this.selectionStartLineNumber +
            "," +
            this.selectionStartColumn +
            " -> " +
            this.positionLineNumber +
            "," +
            this.positionColumn +
            "]"
          );
        }
        equalsSelection(h) {
          return i.selectionsEqual(this, h);
        }
        static selectionsEqual(h, w) {
          return (
            h.selectionStartLineNumber === w.selectionStartLineNumber &&
            h.selectionStartColumn === w.selectionStartColumn &&
            h.positionLineNumber === w.positionLineNumber &&
            h.positionColumn === w.positionColumn
          );
        }
        getDirection() {
          return this.selectionStartLineNumber === this.startLineNumber &&
            this.selectionStartColumn === this.startColumn
            ? 0
            : 1;
        }
        setEndPosition(h, w) {
          return this.getDirection() === 0
            ? new i(this.startLineNumber, this.startColumn, h, w)
            : new i(h, w, this.startLineNumber, this.startColumn);
        }
        getPosition() {
          return new M.Position(this.positionLineNumber, this.positionColumn);
        }
        getSelectionStart() {
          return new M.Position(
            this.selectionStartLineNumber,
            this.selectionStartColumn,
          );
        }
        setStartPosition(h, w) {
          return this.getDirection() === 0
            ? new i(h, w, this.endLineNumber, this.endColumn)
            : new i(this.endLineNumber, this.endColumn, h, w);
        }
        static fromPositions(h, w = h) {
          return new i(h.lineNumber, h.column, w.lineNumber, w.column);
        }
        static fromRange(h, w) {
          return w === 0
            ? new i(
                h.startLineNumber,
                h.startColumn,
                h.endLineNumber,
                h.endColumn,
              )
            : new i(
                h.endLineNumber,
                h.endColumn,
                h.startLineNumber,
                h.startColumn,
              );
        }
        static liftSelection(h) {
          return new i(
            h.selectionStartLineNumber,
            h.selectionStartColumn,
            h.positionLineNumber,
            h.positionColumn,
          );
        }
        static selectionsArrEqual(h, w) {
          if ((h && !w) || (!h && w)) return !1;
          if (!h && !w) return !0;
          if (h.length !== w.length) return !1;
          for (let o = 0, s = h.length; o < s; o++)
            if (!this.selectionsEqual(h[o], w[o])) return !1;
          return !0;
        }
        static isISelection(h) {
          return (
            h &&
            typeof h.selectionStartLineNumber == "number" &&
            typeof h.selectionStartColumn == "number" &&
            typeof h.positionLineNumber == "number" &&
            typeof h.positionColumn == "number"
          );
        }
        static createWithDirection(h, w, o, s, d) {
          return d === 0 ? new i(h, w, o, s) : new i(o, s, h, w);
        }
      }
      n.Selection = i;
    }),
    X(J[36], Z([0, 1, 23]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.getMapForWordSeparators = n.WordCharacterClassifier = void 0);
      class D extends M.CharacterClassifier {
        constructor(h) {
          super(0);
          for (let w = 0, o = h.length; w < o; w++)
            this.set(h.charCodeAt(w), 2);
          this.set(32, 1), this.set(9, 1);
        }
      }
      n.WordCharacterClassifier = D;
      function i(u) {
        const h = {};
        return (w) => (h.hasOwnProperty(w) || (h[w] = u(w)), h[w]);
      }
      n.getMapForWordSeparators = i((u) => new D(u));
    }),
    X(J[24], Z([0, 1, 17, 18]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.getWordAtText =
          n.ensureValidWordDefinition =
          n.DEFAULT_WORD_REGEXP =
          n.USUAL_WORD_SEPARATORS =
            void 0),
        (n.USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?");
      function i(s = "") {
        let d = "(-?\\d*\\.\\d\\w*)|([^";
        for (const e of n.USUAL_WORD_SEPARATORS)
          s.indexOf(e) >= 0 || (d += "\\" + e);
        return (d += "\\s]+)"), new RegExp(d, "g");
      }
      n.DEFAULT_WORD_REGEXP = i();
      function u(s) {
        let d = n.DEFAULT_WORD_REGEXP;
        if (s && s instanceof RegExp)
          if (s.global) d = s;
          else {
            let e = "g";
            s.ignoreCase && (e += "i"),
              s.multiline && (e += "m"),
              s.unicode && (e += "u"),
              (d = new RegExp(s.source, e));
          }
        return (d.lastIndex = 0), d;
      }
      n.ensureValidWordDefinition = u;
      const h = new D.LinkedList();
      h.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
      function w(s, d, e, f, c) {
        if ((c || (c = M.Iterable.first(h)), e.length > c.maxLen)) {
          let C = s - c.maxLen / 2;
          return (
            C < 0 ? (C = 0) : (f += C),
            (e = e.substring(C, s + c.maxLen / 2)),
            w(s, d, e, f, c)
          );
        }
        const g = Date.now(),
          b = s - 1 - f;
        let _ = -1,
          N = null;
        for (let C = 1; !(Date.now() - g >= c.timeBudget); C++) {
          const A = b - c.windowSize * C;
          d.lastIndex = Math.max(0, A);
          const S = o(d, e, b, _);
          if ((!S && N) || ((N = S), A <= 0)) break;
          _ = A;
        }
        if (N) {
          const C = {
            word: N[0],
            startColumn: f + 1 + N.index,
            endColumn: f + 1 + N.index + N[0].length,
          };
          return (d.lastIndex = 0), C;
        }
        return null;
      }
      n.getWordAtText = w;
      function o(s, d, e, f) {
        let c;
        for (; (c = s.exec(d)); ) {
          const g = c.index || 0;
          if (g <= e && s.lastIndex >= e) return c;
          if (f > 0 && g > f) return null;
        }
        return null;
      }
    }),
    X(J[8], Z([0, 1, 4, 6]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DateTimeout =
          n.InfiniteTimeout =
          n.SequenceDiff =
          n.DiffAlgorithmResult =
            void 0);
      class i {
        static trivial(s, d) {
          return new i(
            [
              new u(
                new D.OffsetRange(0, s.length),
                new D.OffsetRange(0, d.length),
              ),
            ],
            !1,
          );
        }
        static trivialTimedOut(s, d) {
          return new i(
            [
              new u(
                new D.OffsetRange(0, s.length),
                new D.OffsetRange(0, d.length),
              ),
            ],
            !0,
          );
        }
        constructor(s, d) {
          (this.diffs = s), (this.hitTimeout = d);
        }
      }
      n.DiffAlgorithmResult = i;
      class u {
        constructor(s, d) {
          (this.seq1Range = s), (this.seq2Range = d);
        }
        reverse() {
          return new u(this.seq2Range, this.seq1Range);
        }
        toString() {
          return `${this.seq1Range} <-> ${this.seq2Range}`;
        }
        join(s) {
          return new u(
            this.seq1Range.join(s.seq1Range),
            this.seq2Range.join(s.seq2Range),
          );
        }
        delta(s) {
          return s === 0
            ? this
            : new u(this.seq1Range.delta(s), this.seq2Range.delta(s));
        }
      }
      n.SequenceDiff = u;
      class h {
        isValid() {
          return !0;
        }
      }
      (n.InfiniteTimeout = h), (h.instance = new h());
      class w {
        constructor(s) {
          if (
            ((this.timeout = s),
            (this.startTime = Date.now()),
            (this.valid = !0),
            s <= 0)
          )
            throw new M.BugIndicatingError("timeout must be positive");
        }
        isValid() {
          if (!(Date.now() - this.startTime < this.timeout) && this.valid) {
            this.valid = !1;
            debugger;
          }
          return this.valid;
        }
      }
      n.DateTimeout = w;
    }),
    X(J[37], Z([0, 1, 6, 8]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.shiftSequenceDiffs =
          n.joinSequenceDiffs =
          n.removeRandomMatches =
          n.smoothenSequenceDiffs =
          n.optimizeSequenceDiffs =
            void 0);
      function i(d, e, f) {
        let c = f;
        return (c = w(d, e, c)), (c = o(d, e, c)), c;
      }
      n.optimizeSequenceDiffs = i;
      function u(d, e, f) {
        const c = [];
        for (const g of f) {
          const b = c[c.length - 1];
          if (!b) {
            c.push(g);
            continue;
          }
          g.seq1Range.start - b.seq1Range.endExclusive <= 2 ||
          g.seq2Range.start - b.seq2Range.endExclusive <= 2
            ? (c[c.length - 1] = new D.SequenceDiff(
                b.seq1Range.join(g.seq1Range),
                b.seq2Range.join(g.seq2Range),
              ))
            : c.push(g);
        }
        return c;
      }
      n.smoothenSequenceDiffs = u;
      function h(d, e, f) {
        let c = f;
        if (c.length === 0) return c;
        let g = 0,
          b;
        do {
          b = !1;
          const _ = [c[0]];
          for (let N = 1; N < c.length; N++) {
            let S = function (r, a) {
              const l = new M.OffsetRange(
                A.seq1Range.endExclusive,
                C.seq1Range.start,
              );
              if (d.countLinesIn(l) > 5 || l.length > 500) return !1;
              const m = d.getText(l).trim();
              if (m.length > 20 || m.split(/\r\n|\r|\n/).length > 1) return !1;
              const p = d.countLinesIn(r.seq1Range),
                R = r.seq1Range.length,
                y = e.countLinesIn(r.seq2Range),
                E = r.seq2Range.length,
                P = d.countLinesIn(a.seq1Range),
                T = a.seq1Range.length,
                F = e.countLinesIn(a.seq2Range),
                U = a.seq2Range.length,
                W = 2 * 40 + 50;
              function V(I) {
                return Math.min(I, W);
              }
              return (
                Math.pow(
                  Math.pow(V(p * 40 + R), 1.5) + Math.pow(V(y * 40 + E), 1.5),
                  1.5,
                ) +
                  Math.pow(
                    Math.pow(V(P * 40 + T), 1.5) + Math.pow(V(F * 40 + U), 1.5),
                    1.5,
                  ) >
                Math.pow(Math.pow(W, 1.5), 1.5) * 1.3
              );
            };
            const C = c[N],
              A = _[_.length - 1];
            S(A, C)
              ? ((b = !0), (_[_.length - 1] = _[_.length - 1].join(C)))
              : _.push(C);
          }
          c = _;
        } while (g++ < 10 && b);
        return c;
      }
      n.removeRandomMatches = h;
      function w(d, e, f) {
        if (f.length === 0) return f;
        const c = [];
        c.push(f[0]);
        for (let b = 1; b < f.length; b++) {
          const _ = c[c.length - 1];
          let N = f[b];
          if (N.seq1Range.isEmpty || N.seq2Range.isEmpty) {
            const C = N.seq1Range.start - _.seq1Range.endExclusive;
            let A;
            for (
              A = 1;
              A <= C &&
              !(
                d.getElement(N.seq1Range.start - A) !==
                  d.getElement(N.seq1Range.endExclusive - A) ||
                e.getElement(N.seq2Range.start - A) !==
                  e.getElement(N.seq2Range.endExclusive - A)
              );
              A++
            );
            if ((A--, A === C)) {
              c[c.length - 1] = new D.SequenceDiff(
                new M.OffsetRange(
                  _.seq1Range.start,
                  N.seq1Range.endExclusive - C,
                ),
                new M.OffsetRange(
                  _.seq2Range.start,
                  N.seq2Range.endExclusive - C,
                ),
              );
              continue;
            }
            N = N.delta(-A);
          }
          c.push(N);
        }
        const g = [];
        for (let b = 0; b < c.length - 1; b++) {
          const _ = c[b + 1];
          let N = c[b];
          if (N.seq1Range.isEmpty || N.seq2Range.isEmpty) {
            const C = _.seq1Range.start - N.seq1Range.endExclusive;
            let A;
            for (
              A = 0;
              A < C &&
              !(
                d.getElement(N.seq1Range.start + A) !==
                  d.getElement(N.seq1Range.endExclusive + A) ||
                e.getElement(N.seq2Range.start + A) !==
                  e.getElement(N.seq2Range.endExclusive + A)
              );
              A++
            );
            if (A === C) {
              c[b + 1] = new D.SequenceDiff(
                new M.OffsetRange(
                  N.seq1Range.start + C,
                  _.seq1Range.endExclusive,
                ),
                new M.OffsetRange(
                  N.seq2Range.start + C,
                  _.seq2Range.endExclusive,
                ),
              );
              continue;
            }
            A > 0 && (N = N.delta(A));
          }
          g.push(N);
        }
        return c.length > 0 && g.push(c[c.length - 1]), g;
      }
      n.joinSequenceDiffs = w;
      function o(d, e, f) {
        if (!d.getBoundaryScore || !e.getBoundaryScore) return f;
        for (let c = 0; c < f.length; c++) {
          const g = c > 0 ? f[c - 1] : void 0,
            b = f[c],
            _ = c + 1 < f.length ? f[c + 1] : void 0,
            N = new M.OffsetRange(
              g ? g.seq1Range.start + 1 : 0,
              _ ? _.seq1Range.endExclusive - 1 : d.length,
            ),
            C = new M.OffsetRange(
              g ? g.seq2Range.start + 1 : 0,
              _ ? _.seq2Range.endExclusive - 1 : e.length,
            );
          b.seq1Range.isEmpty
            ? (f[c] = s(b, d, e, N, C))
            : b.seq2Range.isEmpty &&
              (f[c] = s(b.reverse(), e, d, C, N).reverse());
        }
        return f;
      }
      n.shiftSequenceDiffs = o;
      function s(d, e, f, c, g) {
        let _ = 1;
        for (
          ;
          d.seq1Range.start - _ >= c.start &&
          d.seq2Range.start - _ >= g.start &&
          f.getElement(d.seq2Range.start - _) ===
            f.getElement(d.seq2Range.endExclusive - _) &&
          _ < 100;

        )
          _++;
        _--;
        let N = 0;
        for (
          ;
          d.seq1Range.start + N < c.endExclusive &&
          d.seq2Range.endExclusive + N < g.endExclusive &&
          f.getElement(d.seq2Range.start + N) ===
            f.getElement(d.seq2Range.endExclusive + N) &&
          N < 100;

        )
          N++;
        if (_ === 0 && N === 0) return d;
        let C = 0,
          A = -1;
        for (let S = -_; S <= N; S++) {
          const v = d.seq2Range.start + S,
            r = d.seq2Range.endExclusive + S,
            a = d.seq1Range.start + S,
            l =
              e.getBoundaryScore(a) +
              f.getBoundaryScore(v) +
              f.getBoundaryScore(r);
          l > A && ((A = l), (C = S));
        }
        return d.delta(C);
      }
    }),
    X(J[38], Z([0, 1, 6, 8]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MyersDiffAlgorithm = void 0);
      class i {
        compute(s, d, e = D.InfiniteTimeout.instance) {
          if (s.length === 0 || d.length === 0)
            return D.DiffAlgorithmResult.trivial(s, d);
          function f(v, r) {
            for (
              ;
              v < s.length &&
              r < d.length &&
              s.getElement(v) === d.getElement(r);

            )
              v++, r++;
            return v;
          }
          let c = 0;
          const g = new h();
          g.set(0, f(0, 0));
          const b = new w();
          b.set(0, g.get(0) === 0 ? null : new u(null, 0, 0, g.get(0)));
          let _ = 0;
          e: for (;;) {
            if ((c++, !e.isValid()))
              return D.DiffAlgorithmResult.trivialTimedOut(s, d);
            const v = -Math.min(c, d.length + (c % 2)),
              r = Math.min(c, s.length + (c % 2));
            for (_ = v; _ <= r; _ += 2) {
              const a = _ === r ? -1 : g.get(_ + 1),
                l = _ === v ? -1 : g.get(_ - 1) + 1,
                L = Math.min(Math.max(a, l), s.length),
                m = L - _;
              if (L > s.length || m > d.length) continue;
              const p = f(L, m);
              g.set(_, p);
              const R = L === a ? b.get(_ + 1) : b.get(_ - 1);
              if (
                (b.set(_, p !== L ? new u(R, L, m, p - L) : R),
                g.get(_) === s.length && g.get(_) - _ === d.length)
              )
                break e;
            }
          }
          let N = b.get(_);
          const C = [];
          let A = s.length,
            S = d.length;
          for (;;) {
            const v = N ? N.x + N.length : 0,
              r = N ? N.y + N.length : 0;
            if (
              ((v !== A || r !== S) &&
                C.push(
                  new D.SequenceDiff(
                    new M.OffsetRange(v, A),
                    new M.OffsetRange(r, S),
                  ),
                ),
              !N)
            )
              break;
            (A = N.x), (S = N.y), (N = N.prev);
          }
          return C.reverse(), new D.DiffAlgorithmResult(C, !1);
        }
      }
      n.MyersDiffAlgorithm = i;
      class u {
        constructor(s, d, e, f) {
          (this.prev = s), (this.x = d), (this.y = e), (this.length = f);
        }
      }
      class h {
        constructor() {
          (this.positiveArr = new Int32Array(10)),
            (this.negativeArr = new Int32Array(10));
        }
        get(s) {
          return s < 0
            ? ((s = -s - 1), this.negativeArr[s])
            : this.positiveArr[s];
        }
        set(s, d) {
          if (s < 0) {
            if (((s = -s - 1), s >= this.negativeArr.length)) {
              const e = this.negativeArr;
              (this.negativeArr = new Int32Array(e.length * 2)),
                this.negativeArr.set(e);
            }
            this.negativeArr[s] = d;
          } else {
            if (s >= this.positiveArr.length) {
              const e = this.positiveArr;
              (this.positiveArr = new Int32Array(e.length * 2)),
                this.positiveArr.set(e);
            }
            this.positiveArr[s] = d;
          }
        }
      }
      class w {
        constructor() {
          (this.positiveArr = []), (this.negativeArr = []);
        }
        get(s) {
          return s < 0
            ? ((s = -s - 1), this.negativeArr[s])
            : this.positiveArr[s];
        }
        set(s, d) {
          s < 0
            ? ((s = -s - 1), (this.negativeArr[s] = d))
            : (this.positiveArr[s] = d);
        }
      }
    }),
    X(J[39], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Array2D = void 0);
      class M {
        constructor(i, u) {
          (this.width = i),
            (this.height = u),
            (this.array = []),
            (this.array = new Array(i * u));
        }
        get(i, u) {
          return this.array[i + u * this.width];
        }
        set(i, u, h) {
          this.array[i + u * this.width] = h;
        }
      }
      n.Array2D = M;
    }),
    X(J[40], Z([0, 1, 6, 8, 39]), function (O, n, M, D, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DynamicProgrammingDiffing = void 0);
      class u {
        compute(w, o, s = D.InfiniteTimeout.instance, d) {
          if (w.length === 0 || o.length === 0)
            return D.DiffAlgorithmResult.trivial(w, o);
          const e = new i.Array2D(w.length, o.length),
            f = new i.Array2D(w.length, o.length),
            c = new i.Array2D(w.length, o.length);
          for (let S = 0; S < w.length; S++)
            for (let v = 0; v < o.length; v++) {
              if (!s.isValid())
                return D.DiffAlgorithmResult.trivialTimedOut(w, o);
              const r = S === 0 ? 0 : e.get(S - 1, v),
                a = v === 0 ? 0 : e.get(S, v - 1);
              let l;
              w.getElement(S) === o.getElement(v)
                ? (S === 0 || v === 0 ? (l = 0) : (l = e.get(S - 1, v - 1)),
                  S > 0 &&
                    v > 0 &&
                    f.get(S - 1, v - 1) === 3 &&
                    (l += c.get(S - 1, v - 1)),
                  (l += d ? d(S, v) : 1))
                : (l = -1);
              const L = Math.max(r, a, l);
              if (L === l) {
                const m = S > 0 && v > 0 ? c.get(S - 1, v - 1) : 0;
                c.set(S, v, m + 1), f.set(S, v, 3);
              } else
                L === r
                  ? (c.set(S, v, 0), f.set(S, v, 1))
                  : L === a && (c.set(S, v, 0), f.set(S, v, 2));
              e.set(S, v, L);
            }
          const g = [];
          let b = w.length,
            _ = o.length;
          function N(S, v) {
            (S + 1 !== b || v + 1 !== _) &&
              g.push(
                new D.SequenceDiff(
                  new M.OffsetRange(S + 1, b),
                  new M.OffsetRange(v + 1, _),
                ),
              ),
              (b = S),
              (_ = v);
          }
          let C = w.length - 1,
            A = o.length - 1;
          for (; C >= 0 && A >= 0; )
            f.get(C, A) === 3
              ? (N(C, A), C--, A--)
              : f.get(C, A) === 1
              ? C--
              : A--;
          return N(-1, -1), g.reverse(), new D.DiffAlgorithmResult(g, !1);
        }
      }
      n.DynamicProgrammingDiffing = u;
    }),
    X(J[25], Z([0, 1, 12]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MovedText =
          n.SimpleLineRangeMapping =
          n.RangeMapping =
          n.LineRangeMapping =
          n.LinesDiff =
            void 0);
      class D {
        constructor(s, d, e) {
          (this.changes = s), (this.moves = d), (this.hitTimeout = e);
        }
      }
      n.LinesDiff = D;
      class i {
        static inverse(s, d, e) {
          const f = [];
          let c = 1,
            g = 1;
          for (const _ of s) {
            const N = new i(
              new M.LineRange(c, _.originalRange.startLineNumber),
              new M.LineRange(g, _.modifiedRange.startLineNumber),
              void 0,
            );
            N.modifiedRange.isEmpty || f.push(N),
              (c = _.originalRange.endLineNumberExclusive),
              (g = _.modifiedRange.endLineNumberExclusive);
          }
          const b = new i(
            new M.LineRange(c, d + 1),
            new M.LineRange(g, e + 1),
            void 0,
          );
          return b.modifiedRange.isEmpty || f.push(b), f;
        }
        constructor(s, d, e) {
          (this.originalRange = s),
            (this.modifiedRange = d),
            (this.innerChanges = e);
        }
        toString() {
          return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
        }
        get changedLineCount() {
          return Math.max(this.originalRange.length, this.modifiedRange.length);
        }
        flip() {
          var s;
          return new i(
            this.modifiedRange,
            this.originalRange,
            (s = this.innerChanges) === null || s === void 0
              ? void 0
              : s.map((d) => d.flip()),
          );
        }
      }
      n.LineRangeMapping = i;
      class u {
        constructor(s, d) {
          (this.originalRange = s), (this.modifiedRange = d);
        }
        toString() {
          return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
        }
        flip() {
          return new u(this.modifiedRange, this.originalRange);
        }
      }
      n.RangeMapping = u;
      class h {
        constructor(s, d) {
          (this.original = s), (this.modified = d);
        }
        toString() {
          return `{${this.original.toString()}->${this.modified.toString()}}`;
        }
        flip() {
          return new h(this.modified, this.original);
        }
      }
      n.SimpleLineRangeMapping = h;
      class w {
        constructor(s, d) {
          (this.lineRangeMapping = s), (this.changes = d);
        }
        flip() {
          return new w(
            this.lineRangeMapping.flip(),
            this.changes.map((s) => s.flip()),
          );
        }
      }
      n.MovedText = w;
    }),
    X(J[41], Z([0, 1, 20, 25, 5, 2, 9, 12]), function (O, n, M, D, i, u, h, w) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DiffComputer = n.SmartLinesDiffComputer = void 0);
      const o = 3;
      class s {
        computeDiff(v, r, a) {
          var l;
          const m = new _(v, r, {
              maxComputationTime: a.maxComputationTimeMs,
              shouldIgnoreTrimWhitespace: a.ignoreTrimWhitespace,
              shouldComputeCharChanges: !0,
              shouldMakePrettyDiff: !0,
              shouldPostProcessCharChanges: !0,
            }).computeDiff(),
            p = [];
          let R = null;
          for (const y of m.changes) {
            let E;
            y.originalEndLineNumber === 0
              ? (E = new w.LineRange(
                  y.originalStartLineNumber + 1,
                  y.originalStartLineNumber + 1,
                ))
              : (E = new w.LineRange(
                  y.originalStartLineNumber,
                  y.originalEndLineNumber + 1,
                ));
            let P;
            y.modifiedEndLineNumber === 0
              ? (P = new w.LineRange(
                  y.modifiedStartLineNumber + 1,
                  y.modifiedStartLineNumber + 1,
                ))
              : (P = new w.LineRange(
                  y.modifiedStartLineNumber,
                  y.modifiedEndLineNumber + 1,
                ));
            let T = new D.LineRangeMapping(
              E,
              P,
              (l = y.charChanges) === null || l === void 0
                ? void 0
                : l.map(
                    (F) =>
                      new D.RangeMapping(
                        new u.Range(
                          F.originalStartLineNumber,
                          F.originalStartColumn,
                          F.originalEndLineNumber,
                          F.originalEndColumn,
                        ),
                        new u.Range(
                          F.modifiedStartLineNumber,
                          F.modifiedStartColumn,
                          F.modifiedEndLineNumber,
                          F.modifiedEndColumn,
                        ),
                      ),
                  ),
            );
            R &&
              (R.modifiedRange.endLineNumberExclusive ===
                T.modifiedRange.startLineNumber ||
                R.originalRange.endLineNumberExclusive ===
                  T.originalRange.startLineNumber) &&
              ((T = new D.LineRangeMapping(
                R.originalRange.join(T.originalRange),
                R.modifiedRange.join(T.modifiedRange),
                R.innerChanges && T.innerChanges
                  ? R.innerChanges.concat(T.innerChanges)
                  : void 0,
              )),
              p.pop()),
              p.push(T),
              (R = T);
          }
          return (
            (0, h.assertFn)(() =>
              (0, h.checkAdjacentItems)(
                p,
                (y, E) =>
                  E.originalRange.startLineNumber -
                    y.originalRange.endLineNumberExclusive ===
                    E.modifiedRange.startLineNumber -
                      y.modifiedRange.endLineNumberExclusive &&
                  y.originalRange.endLineNumberExclusive <
                    E.originalRange.startLineNumber &&
                  y.modifiedRange.endLineNumberExclusive <
                    E.modifiedRange.startLineNumber,
              ),
            ),
            new D.LinesDiff(p, [], m.quitEarly)
          );
        }
      }
      n.SmartLinesDiffComputer = s;
      function d(S, v, r, a) {
        return new M.LcsDiff(S, v, r).ComputeDiff(a);
      }
      class e {
        constructor(v) {
          const r = [],
            a = [];
          for (let l = 0, L = v.length; l < L; l++)
            (r[l] = N(v[l], 1)), (a[l] = C(v[l], 1));
          (this.lines = v), (this._startColumns = r), (this._endColumns = a);
        }
        getElements() {
          const v = [];
          for (let r = 0, a = this.lines.length; r < a; r++)
            v[r] = this.lines[r].substring(
              this._startColumns[r] - 1,
              this._endColumns[r] - 1,
            );
          return v;
        }
        getStrictElement(v) {
          return this.lines[v];
        }
        getStartLineNumber(v) {
          return v + 1;
        }
        getEndLineNumber(v) {
          return v + 1;
        }
        createCharSequence(v, r, a) {
          const l = [],
            L = [],
            m = [];
          let p = 0;
          for (let R = r; R <= a; R++) {
            const y = this.lines[R],
              E = v ? this._startColumns[R] : 1,
              P = v ? this._endColumns[R] : y.length + 1;
            for (let T = E; T < P; T++)
              (l[p] = y.charCodeAt(T - 1)), (L[p] = R + 1), (m[p] = T), p++;
            !v &&
              R < a &&
              ((l[p] = 10), (L[p] = R + 1), (m[p] = y.length + 1), p++);
          }
          return new f(l, L, m);
        }
      }
      class f {
        constructor(v, r, a) {
          (this._charCodes = v), (this._lineNumbers = r), (this._columns = a);
        }
        toString() {
          return (
            "[" +
            this._charCodes
              .map(
                (v, r) =>
                  (v === 10 ? "\\n" : String.fromCharCode(v)) +
                  `-(${this._lineNumbers[r]},${this._columns[r]})`,
              )
              .join(", ") +
            "]"
          );
        }
        _assertIndex(v, r) {
          if (v < 0 || v >= r.length) throw new Error("Illegal index");
        }
        getElements() {
          return this._charCodes;
        }
        getStartLineNumber(v) {
          return v > 0 && v === this._lineNumbers.length
            ? this.getEndLineNumber(v - 1)
            : (this._assertIndex(v, this._lineNumbers), this._lineNumbers[v]);
        }
        getEndLineNumber(v) {
          return v === -1
            ? this.getStartLineNumber(v + 1)
            : (this._assertIndex(v, this._lineNumbers),
              this._charCodes[v] === 10
                ? this._lineNumbers[v] + 1
                : this._lineNumbers[v]);
        }
        getStartColumn(v) {
          return v > 0 && v === this._columns.length
            ? this.getEndColumn(v - 1)
            : (this._assertIndex(v, this._columns), this._columns[v]);
        }
        getEndColumn(v) {
          return v === -1
            ? this.getStartColumn(v + 1)
            : (this._assertIndex(v, this._columns),
              this._charCodes[v] === 10 ? 1 : this._columns[v] + 1);
        }
      }
      class c {
        constructor(v, r, a, l, L, m, p, R) {
          (this.originalStartLineNumber = v),
            (this.originalStartColumn = r),
            (this.originalEndLineNumber = a),
            (this.originalEndColumn = l),
            (this.modifiedStartLineNumber = L),
            (this.modifiedStartColumn = m),
            (this.modifiedEndLineNumber = p),
            (this.modifiedEndColumn = R);
        }
        static createFromDiffChange(v, r, a) {
          const l = r.getStartLineNumber(v.originalStart),
            L = r.getStartColumn(v.originalStart),
            m = r.getEndLineNumber(v.originalStart + v.originalLength - 1),
            p = r.getEndColumn(v.originalStart + v.originalLength - 1),
            R = a.getStartLineNumber(v.modifiedStart),
            y = a.getStartColumn(v.modifiedStart),
            E = a.getEndLineNumber(v.modifiedStart + v.modifiedLength - 1),
            P = a.getEndColumn(v.modifiedStart + v.modifiedLength - 1);
          return new c(l, L, m, p, R, y, E, P);
        }
      }
      function g(S) {
        if (S.length <= 1) return S;
        const v = [S[0]];
        let r = v[0];
        for (let a = 1, l = S.length; a < l; a++) {
          const L = S[a],
            m = L.originalStart - (r.originalStart + r.originalLength),
            p = L.modifiedStart - (r.modifiedStart + r.modifiedLength);
          Math.min(m, p) < o
            ? ((r.originalLength =
                L.originalStart + L.originalLength - r.originalStart),
              (r.modifiedLength =
                L.modifiedStart + L.modifiedLength - r.modifiedStart))
            : (v.push(L), (r = L));
        }
        return v;
      }
      class b {
        constructor(v, r, a, l, L) {
          (this.originalStartLineNumber = v),
            (this.originalEndLineNumber = r),
            (this.modifiedStartLineNumber = a),
            (this.modifiedEndLineNumber = l),
            (this.charChanges = L);
        }
        static createFromDiffResult(v, r, a, l, L, m, p) {
          let R, y, E, P, T;
          if (
            (r.originalLength === 0
              ? ((R = a.getStartLineNumber(r.originalStart) - 1), (y = 0))
              : ((R = a.getStartLineNumber(r.originalStart)),
                (y = a.getEndLineNumber(
                  r.originalStart + r.originalLength - 1,
                ))),
            r.modifiedLength === 0
              ? ((E = l.getStartLineNumber(r.modifiedStart) - 1), (P = 0))
              : ((E = l.getStartLineNumber(r.modifiedStart)),
                (P = l.getEndLineNumber(
                  r.modifiedStart + r.modifiedLength - 1,
                ))),
            m &&
              r.originalLength > 0 &&
              r.originalLength < 20 &&
              r.modifiedLength > 0 &&
              r.modifiedLength < 20 &&
              L())
          ) {
            const F = a.createCharSequence(
                v,
                r.originalStart,
                r.originalStart + r.originalLength - 1,
              ),
              U = l.createCharSequence(
                v,
                r.modifiedStart,
                r.modifiedStart + r.modifiedLength - 1,
              );
            if (F.getElements().length > 0 && U.getElements().length > 0) {
              let W = d(F, U, L, !0).changes;
              p && (W = g(W)), (T = []);
              for (let V = 0, I = W.length; V < I; V++)
                T.push(c.createFromDiffChange(W[V], F, U));
            }
          }
          return new b(R, y, E, P, T);
        }
      }
      class _ {
        constructor(v, r, a) {
          (this.shouldComputeCharChanges = a.shouldComputeCharChanges),
            (this.shouldPostProcessCharChanges =
              a.shouldPostProcessCharChanges),
            (this.shouldIgnoreTrimWhitespace = a.shouldIgnoreTrimWhitespace),
            (this.shouldMakePrettyDiff = a.shouldMakePrettyDiff),
            (this.originalLines = v),
            (this.modifiedLines = r),
            (this.original = new e(v)),
            (this.modified = new e(r)),
            (this.continueLineDiff = A(a.maxComputationTime)),
            (this.continueCharDiff = A(
              a.maxComputationTime === 0
                ? 0
                : Math.min(a.maxComputationTime, 5e3),
            ));
        }
        computeDiff() {
          if (
            this.original.lines.length === 1 &&
            this.original.lines[0].length === 0
          )
            return this.modified.lines.length === 1 &&
              this.modified.lines[0].length === 0
              ? { quitEarly: !1, changes: [] }
              : {
                  quitEarly: !1,
                  changes: [
                    {
                      originalStartLineNumber: 1,
                      originalEndLineNumber: 1,
                      modifiedStartLineNumber: 1,
                      modifiedEndLineNumber: this.modified.lines.length,
                      charChanges: void 0,
                    },
                  ],
                };
          if (
            this.modified.lines.length === 1 &&
            this.modified.lines[0].length === 0
          )
            return {
              quitEarly: !1,
              changes: [
                {
                  originalStartLineNumber: 1,
                  originalEndLineNumber: this.original.lines.length,
                  modifiedStartLineNumber: 1,
                  modifiedEndLineNumber: 1,
                  charChanges: void 0,
                },
              ],
            };
          const v = d(
              this.original,
              this.modified,
              this.continueLineDiff,
              this.shouldMakePrettyDiff,
            ),
            r = v.changes,
            a = v.quitEarly;
          if (this.shouldIgnoreTrimWhitespace) {
            const p = [];
            for (let R = 0, y = r.length; R < y; R++)
              p.push(
                b.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  r[R],
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges,
                ),
              );
            return { quitEarly: a, changes: p };
          }
          const l = [];
          let L = 0,
            m = 0;
          for (let p = -1, R = r.length; p < R; p++) {
            const y = p + 1 < R ? r[p + 1] : null,
              E = y ? y.originalStart : this.originalLines.length,
              P = y ? y.modifiedStart : this.modifiedLines.length;
            for (; L < E && m < P; ) {
              const T = this.originalLines[L],
                F = this.modifiedLines[m];
              if (T !== F) {
                {
                  let U = N(T, 1),
                    W = N(F, 1);
                  for (; U > 1 && W > 1; ) {
                    const V = T.charCodeAt(U - 2),
                      I = F.charCodeAt(W - 2);
                    if (V !== I) break;
                    U--, W--;
                  }
                  (U > 1 || W > 1) &&
                    this._pushTrimWhitespaceCharChange(
                      l,
                      L + 1,
                      1,
                      U,
                      m + 1,
                      1,
                      W,
                    );
                }
                {
                  let U = C(T, 1),
                    W = C(F, 1);
                  const V = T.length + 1,
                    I = F.length + 1;
                  for (; U < V && W < I; ) {
                    const x = T.charCodeAt(U - 1),
                      q = T.charCodeAt(W - 1);
                    if (x !== q) break;
                    U++, W++;
                  }
                  (U < V || W < I) &&
                    this._pushTrimWhitespaceCharChange(
                      l,
                      L + 1,
                      U,
                      V,
                      m + 1,
                      W,
                      I,
                    );
                }
              }
              L++, m++;
            }
            y &&
              (l.push(
                b.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  y,
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges,
                ),
              ),
              (L += y.originalLength),
              (m += y.modifiedLength));
          }
          return { quitEarly: a, changes: l };
        }
        _pushTrimWhitespaceCharChange(v, r, a, l, L, m, p) {
          if (this._mergeTrimWhitespaceCharChange(v, r, a, l, L, m, p)) return;
          let R;
          this.shouldComputeCharChanges &&
            (R = [new c(r, a, r, l, L, m, L, p)]),
            v.push(new b(r, r, L, L, R));
        }
        _mergeTrimWhitespaceCharChange(v, r, a, l, L, m, p) {
          const R = v.length;
          if (R === 0) return !1;
          const y = v[R - 1];
          return y.originalEndLineNumber === 0 || y.modifiedEndLineNumber === 0
            ? !1
            : y.originalEndLineNumber === r && y.modifiedEndLineNumber === L
            ? (this.shouldComputeCharChanges &&
                y.charChanges &&
                y.charChanges.push(new c(r, a, r, l, L, m, L, p)),
              !0)
            : y.originalEndLineNumber + 1 === r &&
              y.modifiedEndLineNumber + 1 === L
            ? ((y.originalEndLineNumber = r),
              (y.modifiedEndLineNumber = L),
              this.shouldComputeCharChanges &&
                y.charChanges &&
                y.charChanges.push(new c(r, a, r, l, L, m, L, p)),
              !0)
            : !1;
        }
      }
      n.DiffComputer = _;
      function N(S, v) {
        const r = i.firstNonWhitespaceIndex(S);
        return r === -1 ? v : r + 1;
      }
      function C(S, v) {
        const r = i.lastNonWhitespaceIndex(S);
        return r === -1 ? v : r + 2;
      }
      function A(S) {
        if (S === 0) return () => !0;
        const v = Date.now();
        return () => Date.now() - v < S;
      }
    }),
    X(
      J[42],
      Z([0, 1, 9, 12, 6, 3, 2, 8, 40, 37, 38, 25]),
      function (O, n, M, D, i, u, h, w, o, s, d, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.LinesSliceCharSequence =
            n.LineSequence =
            n.getLineRangeMapping =
            n.lineRangeMappingFromRangeMappings =
            n.StandardLinesDiffComputer =
              void 0);
        class f {
          constructor() {
            (this.dynamicProgrammingDiffing =
              new o.DynamicProgrammingDiffing()),
              (this.myersDiffingAlgorithm = new d.MyersDiffAlgorithm());
          }
          computeDiff(E, P, T) {
            if (
              (E.length === 1 && E[0].length === 0) ||
              (P.length === 1 && P[0].length === 0)
            )
              return {
                changes: [
                  new e.LineRangeMapping(
                    new D.LineRange(1, E.length + 1),
                    new D.LineRange(1, P.length + 1),
                    [
                      new e.RangeMapping(
                        new h.Range(1, 1, E.length, E[0].length + 1),
                        new h.Range(1, 1, P.length, P[0].length + 1),
                      ),
                    ],
                  ),
                ],
                hitTimeout: !1,
                moves: [],
              };
            const F =
                T.maxComputationTimeMs === 0
                  ? w.InfiniteTimeout.instance
                  : new w.DateTimeout(T.maxComputationTimeMs),
              U = !T.ignoreTrimWhitespace,
              W = new Map();
            function V(ie) {
              let se = W.get(ie);
              return se === void 0 && ((se = W.size), W.set(ie, se)), se;
            }
            const I = E.map((ie) => V(ie.trim())),
              x = P.map((ie) => V(ie.trim())),
              q = new C(I, E),
              j = new C(x, P),
              t = (() =>
                q.length + j.length < 1500
                  ? this.dynamicProgrammingDiffing.compute(q, j, F, (ie, se) =>
                      E[ie] === P[se]
                        ? P[se].length === 0
                          ? 0.1
                          : 1 + Math.log(1 + P[se].length)
                        : 0.99,
                    )
                  : this.myersDiffingAlgorithm.compute(q, j))();
            let ne = t.diffs,
              re = t.hitTimeout;
            ne = (0, s.optimizeSequenceDiffs)(q, j, ne);
            const he = [],
              me = (ie) => {
                if (U)
                  for (let se = 0; se < ie; se++) {
                    const $ = be + se,
                      H = Le + se;
                    if (E[$] !== P[H]) {
                      const Q = this.refineDiff(
                        E,
                        P,
                        new w.SequenceDiff(
                          new i.OffsetRange($, $ + 1),
                          new i.OffsetRange(H, H + 1),
                        ),
                        F,
                        U,
                      );
                      for (const G of Q.mappings) he.push(G);
                      Q.hitTimeout && (re = !0);
                    }
                  }
              };
            let be = 0,
              Le = 0;
            for (const ie of ne) {
              (0, M.assertFn)(
                () => ie.seq1Range.start - be === ie.seq2Range.start - Le,
              );
              const se = ie.seq1Range.start - be;
              me(se),
                (be = ie.seq1Range.endExclusive),
                (Le = ie.seq2Range.endExclusive);
              const $ = this.refineDiff(E, P, ie, F, U);
              $.hitTimeout && (re = !0);
              for (const H of $.mappings) he.push(H);
            }
            me(E.length - be);
            const ve = b(he, E, P),
              Ce = [];
            if (T.computeMoves) {
              const ie = ve
                  .filter(
                    ($) =>
                      $.modifiedRange.isEmpty && $.originalRange.length >= 3,
                  )
                  .map(($) => new R($.originalRange, E)),
                se = new Set(
                  ve
                    .filter(
                      ($) =>
                        $.originalRange.isEmpty && $.modifiedRange.length >= 3,
                    )
                    .map(($) => new R($.modifiedRange, P)),
                );
              for (const $ of ie) {
                let H = -1,
                  Q;
                for (const G of se) {
                  const K = $.computeSimilarity(G);
                  K > H && ((H = K), (Q = G));
                }
                if (H > 0.9 && Q) {
                  const G = this.refineDiff(
                      E,
                      P,
                      new w.SequenceDiff(
                        new i.OffsetRange(
                          $.range.startLineNumber - 1,
                          $.range.endLineNumberExclusive - 1,
                        ),
                        new i.OffsetRange(
                          Q.range.startLineNumber - 1,
                          Q.range.endLineNumberExclusive - 1,
                        ),
                      ),
                      F,
                      U,
                    ),
                    K = b(G.mappings, E, P, !0);
                  se.delete(Q),
                    Ce.push(
                      new e.MovedText(
                        new e.SimpleLineRangeMapping($.range, Q.range),
                        K,
                      ),
                    );
                }
              }
            }
            return (
              (0, M.assertFn)(() => {
                function ie($, H) {
                  if ($.lineNumber < 1 || $.lineNumber > H.length) return !1;
                  const Q = H[$.lineNumber - 1];
                  return !($.column < 1 || $.column > Q.length + 1);
                }
                function se($, H) {
                  return !(
                    $.startLineNumber < 1 ||
                    $.startLineNumber > H.length + 1 ||
                    $.endLineNumberExclusive < 1 ||
                    $.endLineNumberExclusive > H.length + 1
                  );
                }
                for (const $ of ve) {
                  if (!$.innerChanges) return !1;
                  for (const H of $.innerChanges)
                    if (
                      !(
                        ie(H.modifiedRange.getStartPosition(), P) &&
                        ie(H.modifiedRange.getEndPosition(), P) &&
                        ie(H.originalRange.getStartPosition(), E) &&
                        ie(H.originalRange.getEndPosition(), E)
                      )
                    )
                      return !1;
                  if (!se($.modifiedRange, P) || !se($.originalRange, E))
                    return !1;
                }
                return !0;
              }),
              new e.LinesDiff(ve, Ce, re)
            );
          }
          refineDiff(E, P, T, F, U) {
            const W = new S(E, T.seq1Range, U),
              V = new S(P, T.seq2Range, U),
              I =
                W.length + V.length < 500
                  ? this.dynamicProgrammingDiffing.compute(W, V, F)
                  : this.myersDiffingAlgorithm.compute(W, V, F);
            let x = I.diffs;
            return (
              (x = (0, s.optimizeSequenceDiffs)(W, V, x)),
              (x = c(W, V, x)),
              (x = (0, s.smoothenSequenceDiffs)(W, V, x)),
              (x = (0, s.removeRandomMatches)(W, V, x)),
              {
                mappings: x.map(
                  (j) =>
                    new e.RangeMapping(
                      W.translateRange(j.seq1Range),
                      V.translateRange(j.seq2Range),
                    ),
                ),
                hitTimeout: I.hitTimeout,
              }
            );
          }
        }
        n.StandardLinesDiffComputer = f;
        function c(y, E, P) {
          const T = [];
          let F;
          function U() {
            if (!F) return;
            const V = F.s1Range.length - F.deleted,
              I = F.s2Range.length - F.added;
            Math.max(F.deleted, F.added) + (F.count - 1) > V &&
              T.push(new w.SequenceDiff(F.s1Range, F.s2Range)),
              (F = void 0);
          }
          for (const V of P) {
            let I = function (ne, re) {
              var he, me, be, Le;
              if (
                !F ||
                !F.s1Range.containsRange(ne) ||
                !F.s2Range.containsRange(re)
              )
                if (
                  F &&
                  !(
                    F.s1Range.endExclusive < ne.start &&
                    F.s2Range.endExclusive < re.start
                  )
                ) {
                  const ie = i.OffsetRange.tryCreate(
                      F.s1Range.endExclusive,
                      ne.start,
                    ),
                    se = i.OffsetRange.tryCreate(
                      F.s2Range.endExclusive,
                      re.start,
                    );
                  (F.deleted +=
                    (he = ie?.length) !== null && he !== void 0 ? he : 0),
                    (F.added +=
                      (me = se?.length) !== null && me !== void 0 ? me : 0),
                    (F.s1Range = F.s1Range.join(ne)),
                    (F.s2Range = F.s2Range.join(re));
                } else
                  U(),
                    (F = {
                      added: 0,
                      deleted: 0,
                      count: 0,
                      s1Range: ne,
                      s2Range: re,
                    });
              const ve = ne.intersect(V.seq1Range),
                Ce = re.intersect(V.seq2Range);
              F.count++,
                (F.deleted +=
                  (be = ve?.length) !== null && be !== void 0 ? be : 0),
                (F.added +=
                  (Le = Ce?.length) !== null && Le !== void 0 ? Le : 0);
            };
            const x = y.findWordContaining(V.seq1Range.start - 1),
              q = E.findWordContaining(V.seq2Range.start - 1),
              j = y.findWordContaining(V.seq1Range.endExclusive),
              t = E.findWordContaining(V.seq2Range.endExclusive);
            x && j && q && t && x.equals(j) && q.equals(t)
              ? I(x, q)
              : (x && q && I(x, q), j && t && I(j, t));
          }
          return U(), g(P, T);
        }
        function g(y, E) {
          const P = [];
          for (; y.length > 0 || E.length > 0; ) {
            const T = y[0],
              F = E[0];
            let U;
            T && (!F || T.seq1Range.start < F.seq1Range.start)
              ? (U = y.shift())
              : (U = E.shift()),
              P.length > 0 &&
              P[P.length - 1].seq1Range.endExclusive >= U.seq1Range.start
                ? (P[P.length - 1] = P[P.length - 1].join(U))
                : P.push(U);
          }
          return P;
        }
        function b(y, E, P, T = !1) {
          const F = [];
          for (const U of N(
            y.map((W) => _(W, E, P)),
            (W, V) =>
              W.originalRange.overlapOrTouch(V.originalRange) ||
              W.modifiedRange.overlapOrTouch(V.modifiedRange),
          )) {
            const W = U[0],
              V = U[U.length - 1];
            F.push(
              new e.LineRangeMapping(
                W.originalRange.join(V.originalRange),
                W.modifiedRange.join(V.modifiedRange),
                U.map((I) => I.innerChanges[0]),
              ),
            );
          }
          return (
            (0, M.assertFn)(() =>
              !T &&
              F.length > 0 &&
              F[0].originalRange.startLineNumber !==
                F[0].modifiedRange.startLineNumber
                ? !1
                : (0, M.checkAdjacentItems)(
                    F,
                    (U, W) =>
                      W.originalRange.startLineNumber -
                        U.originalRange.endLineNumberExclusive ===
                        W.modifiedRange.startLineNumber -
                          U.modifiedRange.endLineNumberExclusive &&
                      U.originalRange.endLineNumberExclusive <
                        W.originalRange.startLineNumber &&
                      U.modifiedRange.endLineNumberExclusive <
                        W.modifiedRange.startLineNumber,
                  ),
            ),
            F
          );
        }
        n.lineRangeMappingFromRangeMappings = b;
        function _(y, E, P) {
          let T = 0,
            F = 0;
          y.modifiedRange.endColumn === 1 &&
            y.originalRange.endColumn === 1 &&
            y.originalRange.startLineNumber + T <=
              y.originalRange.endLineNumber &&
            y.modifiedRange.startLineNumber + T <=
              y.modifiedRange.endLineNumber &&
            (F = -1),
            y.modifiedRange.startColumn - 1 >=
              P[y.modifiedRange.startLineNumber - 1].length &&
              y.originalRange.startColumn - 1 >=
                E[y.originalRange.startLineNumber - 1].length &&
              y.originalRange.startLineNumber <=
                y.originalRange.endLineNumber + F &&
              y.modifiedRange.startLineNumber <=
                y.modifiedRange.endLineNumber + F &&
              (T = 1);
          const U = new D.LineRange(
              y.originalRange.startLineNumber + T,
              y.originalRange.endLineNumber + 1 + F,
            ),
            W = new D.LineRange(
              y.modifiedRange.startLineNumber + T,
              y.modifiedRange.endLineNumber + 1 + F,
            );
          return new e.LineRangeMapping(U, W, [y]);
        }
        n.getLineRangeMapping = _;
        function* N(y, E) {
          let P, T;
          for (const F of y)
            T !== void 0 && E(T, F) ? P.push(F) : (P && (yield P), (P = [F])),
              (T = F);
          P && (yield P);
        }
        class C {
          constructor(E, P) {
            (this.trimmedHash = E), (this.lines = P);
          }
          getElement(E) {
            return this.trimmedHash[E];
          }
          get length() {
            return this.trimmedHash.length;
          }
          getBoundaryScore(E) {
            const P = E === 0 ? 0 : A(this.lines[E - 1]),
              T = E === this.lines.length ? 0 : A(this.lines[E]);
            return 1e3 - (P + T);
          }
        }
        n.LineSequence = C;
        function A(y) {
          let E = 0;
          for (
            ;
            E < y.length && (y.charCodeAt(E) === 32 || y.charCodeAt(E) === 9);

          )
            E++;
          return E;
        }
        class S {
          constructor(E, P, T) {
            (this.lines = E),
              (this.considerWhitespaceChanges = T),
              (this.elements = []),
              (this.firstCharOffsetByLineMinusOne = []),
              (this.offsetByLine = []);
            let F = !1;
            P.start > 0 &&
              P.endExclusive >= E.length &&
              ((P = new i.OffsetRange(P.start - 1, P.endExclusive)), (F = !0)),
              (this.lineRange = P);
            for (
              let U = this.lineRange.start;
              U < this.lineRange.endExclusive;
              U++
            ) {
              let W = E[U],
                V = 0;
              if (F) (V = W.length), (W = ""), (F = !1);
              else if (!T) {
                const I = W.trimStart();
                (V = W.length - I.length), (W = I.trimEnd());
              }
              this.offsetByLine.push(V);
              for (let I = 0; I < W.length; I++)
                this.elements.push(W.charCodeAt(I));
              U < E.length - 1 &&
                (this.elements.push(
                  `
`.charCodeAt(0),
                ),
                (this.firstCharOffsetByLineMinusOne[U - this.lineRange.start] =
                  this.elements.length));
            }
            this.offsetByLine.push(0);
          }
          toString() {
            return `Slice: "${this.text}"`;
          }
          get text() {
            return this.getText(new i.OffsetRange(0, this.length));
          }
          getText(E) {
            return this.elements
              .slice(E.start, E.endExclusive)
              .map((P) => String.fromCharCode(P))
              .join("");
          }
          getElement(E) {
            return this.elements[E];
          }
          get length() {
            return this.elements.length;
          }
          getBoundaryScore(E) {
            const P = l(E > 0 ? this.elements[E - 1] : -1),
              T = l(E < this.elements.length ? this.elements[E] : -1);
            if (P === 6 && T === 7) return 0;
            let F = 0;
            return (
              P !== T && ((F += 10), T === 1 && (F += 1)),
              (F += a(P)),
              (F += a(T)),
              F
            );
          }
          translateOffset(E) {
            if (this.lineRange.isEmpty)
              return new u.Position(this.lineRange.start + 1, 1);
            let P = 0,
              T = this.firstCharOffsetByLineMinusOne.length;
            for (; P < T; ) {
              const U = Math.floor((P + T) / 2);
              this.firstCharOffsetByLineMinusOne[U] > E ? (T = U) : (P = U + 1);
            }
            const F = P === 0 ? 0 : this.firstCharOffsetByLineMinusOne[P - 1];
            return new u.Position(
              this.lineRange.start + P + 1,
              E - F + 1 + this.offsetByLine[P],
            );
          }
          translateRange(E) {
            return h.Range.fromPositions(
              this.translateOffset(E.start),
              this.translateOffset(E.endExclusive),
            );
          }
          findWordContaining(E) {
            if (E < 0 || E >= this.elements.length || !v(this.elements[E]))
              return;
            let P = E;
            for (; P > 0 && v(this.elements[P - 1]); ) P--;
            let T = E;
            for (; T < this.elements.length && v(this.elements[T]); ) T++;
            return new i.OffsetRange(P, T);
          }
          countLinesIn(E) {
            return (
              this.translateOffset(E.endExclusive).lineNumber -
              this.translateOffset(E.start).lineNumber
            );
          }
        }
        n.LinesSliceCharSequence = S;
        function v(y) {
          return (
            (y >= 97 && y <= 122) ||
            (y >= 65 && y <= 90) ||
            (y >= 48 && y <= 57)
          );
        }
        const r = {
          [0]: 0,
          [1]: 0,
          [2]: 0,
          [3]: 10,
          [4]: 2,
          [5]: 3,
          [6]: 10,
          [7]: 10,
        };
        function a(y) {
          return r[y];
        }
        function l(y) {
          return y === 10
            ? 7
            : y === 13
            ? 6
            : L(y)
            ? 5
            : y >= 97 && y <= 122
            ? 0
            : y >= 65 && y <= 90
            ? 1
            : y >= 48 && y <= 57
            ? 2
            : y === -1
            ? 3
            : 4;
        }
        function L(y) {
          return y === 32 || y === 9;
        }
        const m = new Map();
        function p(y) {
          let E = m.get(y);
          return E === void 0 && ((E = m.size), m.set(y, E)), E;
        }
        class R {
          constructor(E, P) {
            (this.range = E), (this.lines = P), (this.histogram = []);
            let T = 0;
            for (
              let F = E.startLineNumber - 1;
              F < E.endLineNumberExclusive - 1;
              F++
            ) {
              const U = P[F];
              for (let V = 0; V < U.length; V++) {
                T++;
                const I = U[V],
                  x = p(I);
                this.histogram[x] = (this.histogram[x] || 0) + 1;
              }
              T++;
              const W = p(`
`);
              this.histogram[W] = (this.histogram[W] || 0) + 1;
            }
            this.totalCount = T;
          }
          computeSimilarity(E) {
            var P, T;
            let F = 0;
            const U = Math.max(this.histogram.length, E.histogram.length);
            for (let W = 0; W < U; W++)
              F += Math.abs(
                ((P = this.histogram[W]) !== null && P !== void 0 ? P : 0) -
                  ((T = E.histogram[W]) !== null && T !== void 0 ? T : 0),
              );
            return 1 - F / (this.totalCount + E.totalCount);
          }
        }
      },
    ),
    X(J[43], Z([0, 1, 41, 42]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.linesDiffComputers = void 0),
        (n.linesDiffComputers = {
          getLegacy: () => new M.SmartLinesDiffComputer(),
          getAdvanced: () => new D.StandardLinesDiffComputer(),
        });
    }),
    X(J[44], Z([0, 1, 28]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.computeDefaultDocumentColors = void 0);
      function D(f) {
        const c = [];
        for (const g of f) {
          const b = Number(g);
          (b || (b === 0 && g.replace(/\s/g, "") !== "")) && c.push(b);
        }
        return c;
      }
      function i(f, c, g, b) {
        return { red: f / 255, blue: g / 255, green: c / 255, alpha: b };
      }
      function u(f, c) {
        const g = c.index,
          b = c[0].length;
        if (!g) return;
        const _ = f.positionAt(g);
        return {
          startLineNumber: _.lineNumber,
          startColumn: _.column,
          endLineNumber: _.lineNumber,
          endColumn: _.column + b,
        };
      }
      function h(f, c) {
        if (!f) return;
        const g = M.Color.Format.CSS.parseHex(c);
        if (g)
          return { range: f, color: i(g.rgba.r, g.rgba.g, g.rgba.b, g.rgba.a) };
      }
      function w(f, c, g) {
        if (!f || c.length !== 1) return;
        const _ = c[0].values(),
          N = D(_);
        return { range: f, color: i(N[0], N[1], N[2], g ? N[3] : 1) };
      }
      function o(f, c, g) {
        if (!f || c.length !== 1) return;
        const _ = c[0].values(),
          N = D(_),
          C = new M.Color(
            new M.HSLA(N[0], N[1] / 100, N[2] / 100, g ? N[3] : 1),
          );
        return { range: f, color: i(C.rgba.r, C.rgba.g, C.rgba.b, C.rgba.a) };
      }
      function s(f, c) {
        return typeof f == "string" ? [...f.matchAll(c)] : f.findMatches(c);
      }
      function d(f) {
        const c = [],
          b = s(
            f,
            /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{3})\b|(#)([A-Fa-f0-9]{4})\b|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm,
          );
        if (b.length > 0)
          for (const _ of b) {
            const N = _.filter((v) => v !== void 0),
              C = N[1],
              A = N[2];
            if (!A) continue;
            let S;
            if (C === "rgb") {
              const v =
                /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
              S = w(u(f, _), s(A, v), !1);
            } else if (C === "rgba") {
              const v =
                /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
              S = w(u(f, _), s(A, v), !0);
            } else if (C === "hsl") {
              const v =
                /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
              S = o(u(f, _), s(A, v), !1);
            } else if (C === "hsla") {
              const v =
                /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
              S = o(u(f, _), s(A, v), !0);
            } else C === "#" && (S = h(u(f, _), C + A));
            S && c.push(S);
          }
        return c;
      }
      function e(f) {
        return !f ||
          typeof f.getValue != "function" ||
          typeof f.positionAt != "function"
          ? []
          : d(f);
      }
      n.computeDefaultDocumentColors = e;
    }),
    X(J[45], Z([0, 1, 23]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.computeLinks = n.LinkComputer = n.StateMachine = void 0);
      class D {
        constructor(f, c, g) {
          const b = new Uint8Array(f * c);
          for (let _ = 0, N = f * c; _ < N; _++) b[_] = g;
          (this._data = b), (this.rows = f), (this.cols = c);
        }
        get(f, c) {
          return this._data[f * this.cols + c];
        }
        set(f, c, g) {
          this._data[f * this.cols + c] = g;
        }
      }
      class i {
        constructor(f) {
          let c = 0,
            g = 0;
          for (let _ = 0, N = f.length; _ < N; _++) {
            const [C, A, S] = f[_];
            A > c && (c = A), C > g && (g = C), S > g && (g = S);
          }
          c++, g++;
          const b = new D(g, c, 0);
          for (let _ = 0, N = f.length; _ < N; _++) {
            const [C, A, S] = f[_];
            b.set(C, A, S);
          }
          (this._states = b), (this._maxCharCode = c);
        }
        nextState(f, c) {
          return c < 0 || c >= this._maxCharCode ? 0 : this._states.get(f, c);
        }
      }
      n.StateMachine = i;
      let u = null;
      function h() {
        return (
          u === null &&
            (u = new i([
              [1, 104, 2],
              [1, 72, 2],
              [1, 102, 6],
              [1, 70, 6],
              [2, 116, 3],
              [2, 84, 3],
              [3, 116, 4],
              [3, 84, 4],
              [4, 112, 5],
              [4, 80, 5],
              [5, 115, 9],
              [5, 83, 9],
              [5, 58, 10],
              [6, 105, 7],
              [6, 73, 7],
              [7, 108, 8],
              [7, 76, 8],
              [8, 101, 9],
              [8, 69, 9],
              [9, 58, 10],
              [10, 47, 11],
              [11, 47, 12],
            ])),
          u
        );
      }
      let w = null;
      function o() {
        if (w === null) {
          w = new M.CharacterClassifier(0);
          const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
          for (let c = 0; c < e.length; c++) w.set(e.charCodeAt(c), 1);
          const f = ".,;:";
          for (let c = 0; c < f.length; c++) w.set(f.charCodeAt(c), 2);
        }
        return w;
      }
      class s {
        static _createLink(f, c, g, b, _) {
          let N = _ - 1;
          do {
            const C = c.charCodeAt(N);
            if (f.get(C) !== 2) break;
            N--;
          } while (N > b);
          if (b > 0) {
            const C = c.charCodeAt(b - 1),
              A = c.charCodeAt(N);
            ((C === 40 && A === 41) ||
              (C === 91 && A === 93) ||
              (C === 123 && A === 125)) &&
              N--;
          }
          return {
            range: {
              startLineNumber: g,
              startColumn: b + 1,
              endLineNumber: g,
              endColumn: N + 2,
            },
            url: c.substring(b, N + 1),
          };
        }
        static computeLinks(f, c = h()) {
          const g = o(),
            b = [];
          for (let _ = 1, N = f.getLineCount(); _ <= N; _++) {
            const C = f.getLineContent(_),
              A = C.length;
            let S = 0,
              v = 0,
              r = 0,
              a = 1,
              l = !1,
              L = !1,
              m = !1,
              p = !1;
            for (; S < A; ) {
              let R = !1;
              const y = C.charCodeAt(S);
              if (a === 13) {
                let E;
                switch (y) {
                  case 40:
                    (l = !0), (E = 0);
                    break;
                  case 41:
                    E = l ? 0 : 1;
                    break;
                  case 91:
                    (m = !0), (L = !0), (E = 0);
                    break;
                  case 93:
                    (m = !1), (E = L ? 0 : 1);
                    break;
                  case 123:
                    (p = !0), (E = 0);
                    break;
                  case 125:
                    E = p ? 0 : 1;
                    break;
                  case 39:
                  case 34:
                  case 96:
                    r === y
                      ? (E = 1)
                      : r === 39 || r === 34 || r === 96
                      ? (E = 0)
                      : (E = 1);
                    break;
                  case 42:
                    E = r === 42 ? 1 : 0;
                    break;
                  case 124:
                    E = r === 124 ? 1 : 0;
                    break;
                  case 32:
                    E = m ? 0 : 1;
                    break;
                  default:
                    E = g.get(y);
                }
                E === 1 && (b.push(s._createLink(g, C, _, v, S)), (R = !0));
              } else if (a === 12) {
                let E;
                y === 91 ? ((L = !0), (E = 0)) : (E = g.get(y)),
                  E === 1 ? (R = !0) : (a = 13);
              } else (a = c.nextState(a, y)), a === 0 && (R = !0);
              R &&
                ((a = 1), (l = !1), (L = !1), (p = !1), (v = S + 1), (r = y)),
                S++;
            }
            a === 13 && b.push(s._createLink(g, C, _, v, A));
          }
          return b;
        }
      }
      n.LinkComputer = s;
      function d(e) {
        return !e ||
          typeof e.getLineCount != "function" ||
          typeof e.getLineContent != "function"
          ? []
          : s.computeLinks(e);
      }
      n.computeLinks = d;
    }),
    X(J[46], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.BasicInplaceReplace = void 0);
      class M {
        constructor() {
          this._defaultValueSet = [
            ["true", "false"],
            ["True", "False"],
            [
              "Private",
              "Public",
              "Friend",
              "ReadOnly",
              "Partial",
              "Protected",
              "WriteOnly",
            ],
            ["public", "protected", "private"],
          ];
        }
        navigateValueSet(i, u, h, w, o) {
          if (i && u) {
            const s = this.doNavigateValueSet(u, o);
            if (s) return { range: i, value: s };
          }
          if (h && w) {
            const s = this.doNavigateValueSet(w, o);
            if (s) return { range: h, value: s };
          }
          return null;
        }
        doNavigateValueSet(i, u) {
          const h = this.numberReplace(i, u);
          return h !== null ? h : this.textReplace(i, u);
        }
        numberReplace(i, u) {
          const h = Math.pow(10, i.length - (i.lastIndexOf(".") + 1));
          let w = Number(i);
          const o = parseFloat(i);
          return !isNaN(w) && !isNaN(o) && w === o
            ? w === 0 && !u
              ? null
              : ((w = Math.floor(w * h)), (w += u ? h : -h), String(w / h))
            : null;
        }
        textReplace(i, u) {
          return this.valueSetsReplace(this._defaultValueSet, i, u);
        }
        valueSetsReplace(i, u, h) {
          let w = null;
          for (let o = 0, s = i.length; w === null && o < s; o++)
            w = this.valueSetReplace(i[o], u, h);
          return w;
        }
        valueSetReplace(i, u, h) {
          let w = i.indexOf(u);
          return w >= 0
            ? ((w += h ? 1 : -1),
              w < 0 ? (w = i.length - 1) : (w %= i.length),
              i[w])
            : null;
        }
      }
      (n.BasicInplaceReplace = M), (M.INSTANCE = new M());
    }),
    X(J[47], Z([0, 1, 11]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.shouldSynchronizeModel =
          n.ApplyEditsResult =
          n.SearchData =
          n.ValidAnnotatedEditOperation =
          n.isITextSnapshot =
          n.FindMatch =
          n.TextModelResolvedOptions =
          n.InjectedTextCursorStops =
          n.MinimapPosition =
          n.GlyphMarginLane =
          n.OverviewRulerLane =
            void 0);
      var D;
      (function (g) {
        (g[(g.Left = 1)] = "Left"),
          (g[(g.Center = 2)] = "Center"),
          (g[(g.Right = 4)] = "Right"),
          (g[(g.Full = 7)] = "Full");
      })(D || (n.OverviewRulerLane = D = {}));
      var i;
      (function (g) {
        (g[(g.Left = 1)] = "Left"), (g[(g.Right = 2)] = "Right");
      })(i || (n.GlyphMarginLane = i = {}));
      var u;
      (function (g) {
        (g[(g.Inline = 1)] = "Inline"), (g[(g.Gutter = 2)] = "Gutter");
      })(u || (n.MinimapPosition = u = {}));
      var h;
      (function (g) {
        (g[(g.Both = 0)] = "Both"),
          (g[(g.Right = 1)] = "Right"),
          (g[(g.Left = 2)] = "Left"),
          (g[(g.None = 3)] = "None");
      })(h || (n.InjectedTextCursorStops = h = {}));
      class w {
        get originalIndentSize() {
          return this._indentSizeIsTabSize ? "tabSize" : this.indentSize;
        }
        constructor(b) {
          (this._textModelResolvedOptionsBrand = void 0),
            (this.tabSize = Math.max(1, b.tabSize | 0)),
            b.indentSize === "tabSize"
              ? ((this.indentSize = this.tabSize),
                (this._indentSizeIsTabSize = !0))
              : ((this.indentSize = Math.max(1, b.indentSize | 0)),
                (this._indentSizeIsTabSize = !1)),
            (this.insertSpaces = !!b.insertSpaces),
            (this.defaultEOL = b.defaultEOL | 0),
            (this.trimAutoWhitespace = !!b.trimAutoWhitespace),
            (this.bracketPairColorizationOptions =
              b.bracketPairColorizationOptions);
        }
        equals(b) {
          return (
            this.tabSize === b.tabSize &&
            this._indentSizeIsTabSize === b._indentSizeIsTabSize &&
            this.indentSize === b.indentSize &&
            this.insertSpaces === b.insertSpaces &&
            this.defaultEOL === b.defaultEOL &&
            this.trimAutoWhitespace === b.trimAutoWhitespace &&
            (0, M.equals)(
              this.bracketPairColorizationOptions,
              b.bracketPairColorizationOptions,
            )
          );
        }
        createChangeEvent(b) {
          return {
            tabSize: this.tabSize !== b.tabSize,
            indentSize: this.indentSize !== b.indentSize,
            insertSpaces: this.insertSpaces !== b.insertSpaces,
            trimAutoWhitespace:
              this.trimAutoWhitespace !== b.trimAutoWhitespace,
          };
        }
      }
      n.TextModelResolvedOptions = w;
      class o {
        constructor(b, _) {
          (this._findMatchBrand = void 0), (this.range = b), (this.matches = _);
        }
      }
      n.FindMatch = o;
      function s(g) {
        return g && typeof g.read == "function";
      }
      n.isITextSnapshot = s;
      class d {
        constructor(b, _, N, C, A, S) {
          (this.identifier = b),
            (this.range = _),
            (this.text = N),
            (this.forceMoveMarkers = C),
            (this.isAutoWhitespaceEdit = A),
            (this._isTracked = S);
        }
      }
      n.ValidAnnotatedEditOperation = d;
      class e {
        constructor(b, _, N) {
          (this.regex = b), (this.wordSeparators = _), (this.simpleSearch = N);
        }
      }
      n.SearchData = e;
      class f {
        constructor(b, _, N) {
          (this.reverseEdits = b),
            (this.changes = _),
            (this.trimAutoWhitespaceLineNumbers = N);
        }
      }
      n.ApplyEditsResult = f;
      function c(g) {
        return !g.isTooLargeForSyncing() && !g.isForSimpleWidget;
      }
      n.shouldSynchronizeModel = c;
    }),
    X(J[48], Z([0, 1, 26, 22]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.PrefixSumIndexOfResult =
          n.ConstantTimePrefixSumComputer =
          n.PrefixSumComputer =
            void 0);
      class i {
        constructor(o) {
          (this.values = o),
            (this.prefixSum = new Uint32Array(o.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1);
        }
        insertValues(o, s) {
          o = (0, D.toUint32)(o);
          const d = this.values,
            e = this.prefixSum,
            f = s.length;
          return f === 0
            ? !1
            : ((this.values = new Uint32Array(d.length + f)),
              this.values.set(d.subarray(0, o), 0),
              this.values.set(d.subarray(o), o + f),
              this.values.set(s, o),
              o - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = o - 1),
              (this.prefixSum = new Uint32Array(this.values.length)),
              this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(
                  e.subarray(0, this.prefixSumValidIndex[0] + 1),
                ),
              !0);
        }
        setValue(o, s) {
          return (
            (o = (0, D.toUint32)(o)),
            (s = (0, D.toUint32)(s)),
            this.values[o] === s
              ? !1
              : ((this.values[o] = s),
                o - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = o - 1),
                !0)
          );
        }
        removeValues(o, s) {
          (o = (0, D.toUint32)(o)), (s = (0, D.toUint32)(s));
          const d = this.values,
            e = this.prefixSum;
          if (o >= d.length) return !1;
          const f = d.length - o;
          return (
            s >= f && (s = f),
            s === 0
              ? !1
              : ((this.values = new Uint32Array(d.length - s)),
                this.values.set(d.subarray(0, o), 0),
                this.values.set(d.subarray(o + s), o),
                (this.prefixSum = new Uint32Array(this.values.length)),
                o - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = o - 1),
                this.prefixSumValidIndex[0] >= 0 &&
                  this.prefixSum.set(
                    e.subarray(0, this.prefixSumValidIndex[0] + 1),
                  ),
                !0)
          );
        }
        getTotalSum() {
          return this.values.length === 0
            ? 0
            : this._getPrefixSum(this.values.length - 1);
        }
        getPrefixSum(o) {
          return o < 0 ? 0 : ((o = (0, D.toUint32)(o)), this._getPrefixSum(o));
        }
        _getPrefixSum(o) {
          if (o <= this.prefixSumValidIndex[0]) return this.prefixSum[o];
          let s = this.prefixSumValidIndex[0] + 1;
          s === 0 && ((this.prefixSum[0] = this.values[0]), s++),
            o >= this.values.length && (o = this.values.length - 1);
          for (let d = s; d <= o; d++)
            this.prefixSum[d] = this.prefixSum[d - 1] + this.values[d];
          return (
            (this.prefixSumValidIndex[0] = Math.max(
              this.prefixSumValidIndex[0],
              o,
            )),
            this.prefixSum[o]
          );
        }
        getIndexOf(o) {
          (o = Math.floor(o)), this.getTotalSum();
          let s = 0,
            d = this.values.length - 1,
            e = 0,
            f = 0,
            c = 0;
          for (; s <= d; )
            if (
              ((e = (s + (d - s) / 2) | 0),
              (f = this.prefixSum[e]),
              (c = f - this.values[e]),
              o < c)
            )
              d = e - 1;
            else if (o >= f) s = e + 1;
            else break;
          return new h(e, o - c);
        }
      }
      n.PrefixSumComputer = i;
      class u {
        constructor(o) {
          (this._values = o),
            (this._isValid = !1),
            (this._validEndIndex = -1),
            (this._prefixSum = []),
            (this._indexBySum = []);
        }
        getTotalSum() {
          return this._ensureValid(), this._indexBySum.length;
        }
        getPrefixSum(o) {
          return this._ensureValid(), o === 0 ? 0 : this._prefixSum[o - 1];
        }
        getIndexOf(o) {
          this._ensureValid();
          const s = this._indexBySum[o],
            d = s > 0 ? this._prefixSum[s - 1] : 0;
          return new h(s, o - d);
        }
        removeValues(o, s) {
          this._values.splice(o, s), this._invalidate(o);
        }
        insertValues(o, s) {
          (this._values = (0, M.arrayInsert)(this._values, o, s)),
            this._invalidate(o);
        }
        _invalidate(o) {
          (this._isValid = !1),
            (this._validEndIndex = Math.min(this._validEndIndex, o - 1));
        }
        _ensureValid() {
          if (!this._isValid) {
            for (
              let o = this._validEndIndex + 1, s = this._values.length;
              o < s;
              o++
            ) {
              const d = this._values[o],
                e = o > 0 ? this._prefixSum[o - 1] : 0;
              this._prefixSum[o] = e + d;
              for (let f = 0; f < d; f++) this._indexBySum[e + f] = o;
            }
            (this._prefixSum.length = this._values.length),
              (this._indexBySum.length =
                this._prefixSum[this._prefixSum.length - 1]),
              (this._isValid = !0),
              (this._validEndIndex = this._values.length - 1);
          }
        }
        setValue(o, s) {
          this._values[o] !== s && ((this._values[o] = s), this._invalidate(o));
        }
      }
      n.ConstantTimePrefixSumComputer = u;
      class h {
        constructor(o, s) {
          (this.index = o),
            (this.remainder = s),
            (this._prefixSumIndexOfResultBrand = void 0),
            (this.index = o),
            (this.remainder = s);
        }
      }
      n.PrefixSumIndexOfResult = h;
    }),
    X(J[49], Z([0, 1, 5, 3, 48]), function (O, n, M, D, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MirrorTextModel = void 0);
      class u {
        constructor(w, o, s, d) {
          (this._uri = w),
            (this._lines = o),
            (this._eol = s),
            (this._versionId = d),
            (this._lineStarts = null),
            (this._cachedTextValue = null);
        }
        dispose() {
          this._lines.length = 0;
        }
        get version() {
          return this._versionId;
        }
        getText() {
          return (
            this._cachedTextValue === null &&
              (this._cachedTextValue = this._lines.join(this._eol)),
            this._cachedTextValue
          );
        }
        onEvents(w) {
          w.eol &&
            w.eol !== this._eol &&
            ((this._eol = w.eol), (this._lineStarts = null));
          const o = w.changes;
          for (const s of o)
            this._acceptDeleteRange(s.range),
              this._acceptInsertText(
                new D.Position(s.range.startLineNumber, s.range.startColumn),
                s.text,
              );
          (this._versionId = w.versionId), (this._cachedTextValue = null);
        }
        _ensureLineStarts() {
          if (!this._lineStarts) {
            const w = this._eol.length,
              o = this._lines.length,
              s = new Uint32Array(o);
            for (let d = 0; d < o; d++) s[d] = this._lines[d].length + w;
            this._lineStarts = new i.PrefixSumComputer(s);
          }
        }
        _setLineText(w, o) {
          (this._lines[w] = o),
            this._lineStarts &&
              this._lineStarts.setValue(
                w,
                this._lines[w].length + this._eol.length,
              );
        }
        _acceptDeleteRange(w) {
          if (w.startLineNumber === w.endLineNumber) {
            if (w.startColumn === w.endColumn) return;
            this._setLineText(
              w.startLineNumber - 1,
              this._lines[w.startLineNumber - 1].substring(
                0,
                w.startColumn - 1,
              ) + this._lines[w.startLineNumber - 1].substring(w.endColumn - 1),
            );
            return;
          }
          this._setLineText(
            w.startLineNumber - 1,
            this._lines[w.startLineNumber - 1].substring(0, w.startColumn - 1) +
              this._lines[w.endLineNumber - 1].substring(w.endColumn - 1),
          ),
            this._lines.splice(
              w.startLineNumber,
              w.endLineNumber - w.startLineNumber,
            ),
            this._lineStarts &&
              this._lineStarts.removeValues(
                w.startLineNumber,
                w.endLineNumber - w.startLineNumber,
              );
        }
        _acceptInsertText(w, o) {
          if (o.length === 0) return;
          const s = (0, M.splitLines)(o);
          if (s.length === 1) {
            this._setLineText(
              w.lineNumber - 1,
              this._lines[w.lineNumber - 1].substring(0, w.column - 1) +
                s[0] +
                this._lines[w.lineNumber - 1].substring(w.column - 1),
            );
            return;
          }
          (s[s.length - 1] += this._lines[w.lineNumber - 1].substring(
            w.column - 1,
          )),
            this._setLineText(
              w.lineNumber - 1,
              this._lines[w.lineNumber - 1].substring(0, w.column - 1) + s[0],
            );
          const d = new Uint32Array(s.length - 1);
          for (let e = 1; e < s.length; e++)
            this._lines.splice(w.lineNumber + e - 1, 0, s[e]),
              (d[e - 1] = s[e].length + this._eol.length);
          this._lineStarts && this._lineStarts.insertValues(w.lineNumber, d);
        }
      }
      n.MirrorTextModel = u;
    }),
    X(J[50], Z([0, 1, 5, 36, 3, 2, 47]), function (O, n, M, D, i, u, h) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Searcher =
          n.isValidMatch =
          n.TextModelSearch =
          n.createFindMatch =
          n.isMultilineRegexSource =
          n.SearchParams =
            void 0);
      const w = 999;
      class o {
        constructor(C, A, S, v) {
          (this.searchString = C),
            (this.isRegex = A),
            (this.matchCase = S),
            (this.wordSeparators = v);
        }
        parseSearchRequest() {
          if (this.searchString === "") return null;
          let C;
          this.isRegex
            ? (C = s(this.searchString))
            : (C =
                this.searchString.indexOf(`
`) >= 0);
          let A = null;
          try {
            A = M.createRegExp(this.searchString, this.isRegex, {
              matchCase: this.matchCase,
              wholeWord: !1,
              multiline: C,
              global: !0,
              unicode: !0,
            });
          } catch {
            return null;
          }
          if (!A) return null;
          let S = !this.isRegex && !C;
          return (
            S &&
              this.searchString.toLowerCase() !==
                this.searchString.toUpperCase() &&
              (S = this.matchCase),
            new h.SearchData(
              A,
              this.wordSeparators
                ? (0, D.getMapForWordSeparators)(this.wordSeparators)
                : null,
              S ? this.searchString : null,
            )
          );
        }
      }
      n.SearchParams = o;
      function s(N) {
        if (!N || N.length === 0) return !1;
        for (let C = 0, A = N.length; C < A; C++) {
          const S = N.charCodeAt(C);
          if (S === 10) return !0;
          if (S === 92) {
            if ((C++, C >= A)) break;
            const v = N.charCodeAt(C);
            if (v === 110 || v === 114 || v === 87) return !0;
          }
        }
        return !1;
      }
      n.isMultilineRegexSource = s;
      function d(N, C, A) {
        if (!A) return new h.FindMatch(N, null);
        const S = [];
        for (let v = 0, r = C.length; v < r; v++) S[v] = C[v];
        return new h.FindMatch(N, S);
      }
      n.createFindMatch = d;
      class e {
        constructor(C) {
          const A = [];
          let S = 0;
          for (let v = 0, r = C.length; v < r; v++)
            C.charCodeAt(v) === 10 && (A[S++] = v);
          this._lineFeedsOffsets = A;
        }
        findLineFeedCountBeforeOffset(C) {
          const A = this._lineFeedsOffsets;
          let S = 0,
            v = A.length - 1;
          if (v === -1 || C <= A[0]) return 0;
          for (; S < v; ) {
            const r = S + (((v - S) / 2) >> 0);
            A[r] >= C
              ? (v = r - 1)
              : A[r + 1] >= C
              ? ((S = r), (v = r))
              : (S = r + 1);
          }
          return S + 1;
        }
      }
      class f {
        static findMatches(C, A, S, v, r) {
          const a = A.parseSearchRequest();
          return a
            ? a.regex.multiline
              ? this._doFindMatchesMultiline(
                  C,
                  S,
                  new _(a.wordSeparators, a.regex),
                  v,
                  r,
                )
              : this._doFindMatchesLineByLine(C, S, a, v, r)
            : [];
        }
        static _getMultilineMatchRange(C, A, S, v, r, a) {
          let l,
            L = 0;
          v
            ? ((L = v.findLineFeedCountBeforeOffset(r)), (l = A + r + L))
            : (l = A + r);
          let m;
          if (v) {
            const E = v.findLineFeedCountBeforeOffset(r + a.length) - L;
            m = l + a.length + E;
          } else m = l + a.length;
          const p = C.getPositionAt(l),
            R = C.getPositionAt(m);
          return new u.Range(p.lineNumber, p.column, R.lineNumber, R.column);
        }
        static _doFindMatchesMultiline(C, A, S, v, r) {
          const a = C.getOffsetAt(A.getStartPosition()),
            l = C.getValueInRange(A, 1),
            L =
              C.getEOL() ===
              `\r
`
                ? new e(l)
                : null,
            m = [];
          let p = 0,
            R;
          for (S.reset(0); (R = S.next(l)); )
            if (
              ((m[p++] = d(
                this._getMultilineMatchRange(C, a, l, L, R.index, R[0]),
                R,
                v,
              )),
              p >= r)
            )
              return m;
          return m;
        }
        static _doFindMatchesLineByLine(C, A, S, v, r) {
          const a = [];
          let l = 0;
          if (A.startLineNumber === A.endLineNumber) {
            const m = C.getLineContent(A.startLineNumber).substring(
              A.startColumn - 1,
              A.endColumn - 1,
            );
            return (
              (l = this._findMatchesInLine(
                S,
                m,
                A.startLineNumber,
                A.startColumn - 1,
                l,
                a,
                v,
                r,
              )),
              a
            );
          }
          const L = C.getLineContent(A.startLineNumber).substring(
            A.startColumn - 1,
          );
          l = this._findMatchesInLine(
            S,
            L,
            A.startLineNumber,
            A.startColumn - 1,
            l,
            a,
            v,
            r,
          );
          for (let m = A.startLineNumber + 1; m < A.endLineNumber && l < r; m++)
            l = this._findMatchesInLine(
              S,
              C.getLineContent(m),
              m,
              0,
              l,
              a,
              v,
              r,
            );
          if (l < r) {
            const m = C.getLineContent(A.endLineNumber).substring(
              0,
              A.endColumn - 1,
            );
            l = this._findMatchesInLine(S, m, A.endLineNumber, 0, l, a, v, r);
          }
          return a;
        }
        static _findMatchesInLine(C, A, S, v, r, a, l, L) {
          const m = C.wordSeparators;
          if (!l && C.simpleSearch) {
            const y = C.simpleSearch,
              E = y.length,
              P = A.length;
            let T = -E;
            for (; (T = A.indexOf(y, T + E)) !== -1; )
              if (
                (!m || b(m, A, P, T, E)) &&
                ((a[r++] = new h.FindMatch(
                  new u.Range(S, T + 1 + v, S, T + 1 + E + v),
                  null,
                )),
                r >= L)
              )
                return r;
            return r;
          }
          const p = new _(C.wordSeparators, C.regex);
          let R;
          p.reset(0);
          do
            if (
              ((R = p.next(A)),
              R &&
                ((a[r++] = d(
                  new u.Range(
                    S,
                    R.index + 1 + v,
                    S,
                    R.index + 1 + R[0].length + v,
                  ),
                  R,
                  l,
                )),
                r >= L))
            )
              return r;
          while (R);
          return r;
        }
        static findNextMatch(C, A, S, v) {
          const r = A.parseSearchRequest();
          if (!r) return null;
          const a = new _(r.wordSeparators, r.regex);
          return r.regex.multiline
            ? this._doFindNextMatchMultiline(C, S, a, v)
            : this._doFindNextMatchLineByLine(C, S, a, v);
        }
        static _doFindNextMatchMultiline(C, A, S, v) {
          const r = new i.Position(A.lineNumber, 1),
            a = C.getOffsetAt(r),
            l = C.getLineCount(),
            L = C.getValueInRange(
              new u.Range(r.lineNumber, r.column, l, C.getLineMaxColumn(l)),
              1,
            ),
            m =
              C.getEOL() ===
              `\r
`
                ? new e(L)
                : null;
          S.reset(A.column - 1);
          const p = S.next(L);
          return p
            ? d(this._getMultilineMatchRange(C, a, L, m, p.index, p[0]), p, v)
            : A.lineNumber !== 1 || A.column !== 1
            ? this._doFindNextMatchMultiline(C, new i.Position(1, 1), S, v)
            : null;
        }
        static _doFindNextMatchLineByLine(C, A, S, v) {
          const r = C.getLineCount(),
            a = A.lineNumber,
            l = C.getLineContent(a),
            L = this._findFirstMatchInLine(S, l, a, A.column, v);
          if (L) return L;
          for (let m = 1; m <= r; m++) {
            const p = (a + m - 1) % r,
              R = C.getLineContent(p + 1),
              y = this._findFirstMatchInLine(S, R, p + 1, 1, v);
            if (y) return y;
          }
          return null;
        }
        static _findFirstMatchInLine(C, A, S, v, r) {
          C.reset(v - 1);
          const a = C.next(A);
          return a
            ? d(new u.Range(S, a.index + 1, S, a.index + 1 + a[0].length), a, r)
            : null;
        }
        static findPreviousMatch(C, A, S, v) {
          const r = A.parseSearchRequest();
          if (!r) return null;
          const a = new _(r.wordSeparators, r.regex);
          return r.regex.multiline
            ? this._doFindPreviousMatchMultiline(C, S, a, v)
            : this._doFindPreviousMatchLineByLine(C, S, a, v);
        }
        static _doFindPreviousMatchMultiline(C, A, S, v) {
          const r = this._doFindMatchesMultiline(
            C,
            new u.Range(1, 1, A.lineNumber, A.column),
            S,
            v,
            10 * w,
          );
          if (r.length > 0) return r[r.length - 1];
          const a = C.getLineCount();
          return A.lineNumber !== a || A.column !== C.getLineMaxColumn(a)
            ? this._doFindPreviousMatchMultiline(
                C,
                new i.Position(a, C.getLineMaxColumn(a)),
                S,
                v,
              )
            : null;
        }
        static _doFindPreviousMatchLineByLine(C, A, S, v) {
          const r = C.getLineCount(),
            a = A.lineNumber,
            l = C.getLineContent(a).substring(0, A.column - 1),
            L = this._findLastMatchInLine(S, l, a, v);
          if (L) return L;
          for (let m = 1; m <= r; m++) {
            const p = (r + a - m - 1) % r,
              R = C.getLineContent(p + 1),
              y = this._findLastMatchInLine(S, R, p + 1, v);
            if (y) return y;
          }
          return null;
        }
        static _findLastMatchInLine(C, A, S, v) {
          let r = null,
            a;
          for (C.reset(0); (a = C.next(A)); )
            r = d(
              new u.Range(S, a.index + 1, S, a.index + 1 + a[0].length),
              a,
              v,
            );
          return r;
        }
      }
      n.TextModelSearch = f;
      function c(N, C, A, S, v) {
        if (S === 0) return !0;
        const r = C.charCodeAt(S - 1);
        if (N.get(r) !== 0 || r === 13 || r === 10) return !0;
        if (v > 0) {
          const a = C.charCodeAt(S);
          if (N.get(a) !== 0) return !0;
        }
        return !1;
      }
      function g(N, C, A, S, v) {
        if (S + v === A) return !0;
        const r = C.charCodeAt(S + v);
        if (N.get(r) !== 0 || r === 13 || r === 10) return !0;
        if (v > 0) {
          const a = C.charCodeAt(S + v - 1);
          if (N.get(a) !== 0) return !0;
        }
        return !1;
      }
      function b(N, C, A, S, v) {
        return c(N, C, A, S, v) && g(N, C, A, S, v);
      }
      n.isValidMatch = b;
      class _ {
        constructor(C, A) {
          (this._wordSeparators = C),
            (this._searchRegex = A),
            (this._prevMatchStartIndex = -1),
            (this._prevMatchLength = 0);
        }
        reset(C) {
          (this._searchRegex.lastIndex = C),
            (this._prevMatchStartIndex = -1),
            (this._prevMatchLength = 0);
        }
        next(C) {
          const A = C.length;
          let S;
          do {
            if (
              this._prevMatchStartIndex + this._prevMatchLength === A ||
              ((S = this._searchRegex.exec(C)), !S)
            )
              return null;
            const v = S.index,
              r = S[0].length;
            if (
              v === this._prevMatchStartIndex &&
              r === this._prevMatchLength
            ) {
              if (r === 0) {
                M.getNextCodePoint(C, A, this._searchRegex.lastIndex) > 65535
                  ? (this._searchRegex.lastIndex += 2)
                  : (this._searchRegex.lastIndex += 1);
                continue;
              }
              return null;
            }
            if (
              ((this._prevMatchStartIndex = v),
              (this._prevMatchLength = r),
              !this._wordSeparators || b(this._wordSeparators, C, A, v, r))
            )
              return S;
          } while (S);
          return null;
        }
      }
      n.Searcher = _;
    }),
    X(J[51], Z([0, 1, 2, 50, 5, 9, 24]), function (O, n, M, D, i, u, h) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.UnicodeTextModelHighlighter = void 0);
      class w {
        static computeUnicodeHighlights(f, c, g) {
          const b = g ? g.startLineNumber : 1,
            _ = g ? g.endLineNumber : f.getLineCount(),
            N = new s(c),
            C = N.getCandidateCodePoints();
          let A;
          C === "allNonBasicAscii"
            ? (A = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g"))
            : (A = new RegExp(`${o(Array.from(C))}`, "g"));
          const S = new D.Searcher(null, A),
            v = [];
          let r = !1,
            a,
            l = 0,
            L = 0,
            m = 0;
          e: for (let p = b, R = _; p <= R; p++) {
            const y = f.getLineContent(p),
              E = y.length;
            S.reset(0);
            do
              if (((a = S.next(y)), a)) {
                let P = a.index,
                  T = a.index + a[0].length;
                if (P > 0) {
                  const V = y.charCodeAt(P - 1);
                  i.isHighSurrogate(V) && P--;
                }
                if (T + 1 < E) {
                  const V = y.charCodeAt(T - 1);
                  i.isHighSurrogate(V) && T++;
                }
                const F = y.substring(P, T);
                let U = (0, h.getWordAtText)(
                  P + 1,
                  h.DEFAULT_WORD_REGEXP,
                  y,
                  0,
                );
                U && U.endColumn <= P + 1 && (U = null);
                const W = N.shouldHighlightNonBasicASCII(F, U ? U.word : null);
                if (W !== 0) {
                  W === 3
                    ? l++
                    : W === 2
                    ? L++
                    : W === 1
                    ? m++
                    : (0, u.assertNever)(W);
                  const V = 1e3;
                  if (v.length >= V) {
                    r = !0;
                    break e;
                  }
                  v.push(new M.Range(p, P + 1, p, T + 1));
                }
              }
            while (a);
          }
          return {
            ranges: v,
            hasMore: r,
            ambiguousCharacterCount: l,
            invisibleCharacterCount: L,
            nonBasicAsciiCharacterCount: m,
          };
        }
        static computeUnicodeHighlightReason(f, c) {
          const g = new s(c);
          switch (g.shouldHighlightNonBasicASCII(f, null)) {
            case 0:
              return null;
            case 2:
              return { kind: 1 };
            case 3: {
              const _ = f.codePointAt(0),
                N = g.ambiguousCharacters.getPrimaryConfusable(_),
                C = i.AmbiguousCharacters.getLocales().filter(
                  (A) =>
                    !i.AmbiguousCharacters.getInstance(
                      new Set([...c.allowedLocales, A]),
                    ).isAmbiguous(_),
                );
              return {
                kind: 0,
                confusableWith: String.fromCodePoint(N),
                notAmbiguousInLocales: C,
              };
            }
            case 1:
              return { kind: 2 };
          }
        }
      }
      n.UnicodeTextModelHighlighter = w;
      function o(e, f) {
        return `[${i.escapeRegExpCharacters(
          e.map((g) => String.fromCodePoint(g)).join(""),
        )}]`;
      }
      class s {
        constructor(f) {
          (this.options = f),
            (this.allowedCodePoints = new Set(f.allowedCodePoints)),
            (this.ambiguousCharacters = i.AmbiguousCharacters.getInstance(
              new Set(f.allowedLocales),
            ));
        }
        getCandidateCodePoints() {
          if (this.options.nonBasicASCII) return "allNonBasicAscii";
          const f = new Set();
          if (this.options.invisibleCharacters)
            for (const c of i.InvisibleCharacters.codePoints)
              d(String.fromCodePoint(c)) || f.add(c);
          if (this.options.ambiguousCharacters)
            for (const c of this.ambiguousCharacters.getConfusableCodePoints())
              f.add(c);
          for (const c of this.allowedCodePoints) f.delete(c);
          return f;
        }
        shouldHighlightNonBasicASCII(f, c) {
          const g = f.codePointAt(0);
          if (this.allowedCodePoints.has(g)) return 0;
          if (this.options.nonBasicASCII) return 1;
          let b = !1,
            _ = !1;
          if (c)
            for (const N of c) {
              const C = N.codePointAt(0),
                A = i.isBasicASCII(N);
              (b = b || A),
                !A &&
                  !this.ambiguousCharacters.isAmbiguous(C) &&
                  !i.InvisibleCharacters.isInvisibleCharacter(C) &&
                  (_ = !0);
            }
          return !b && _
            ? 0
            : this.options.invisibleCharacters &&
              !d(f) &&
              i.InvisibleCharacters.isInvisibleCharacter(g)
            ? 2
            : this.options.ambiguousCharacters &&
              this.ambiguousCharacters.isAmbiguous(g)
            ? 3
            : 0;
        }
      }
      function d(e) {
        return (
          e === " " ||
          e ===
            `
` ||
          e === "	"
        );
      }
    }),
    X(J[52], Z([0, 1]), function (O, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.WrappingIndent =
          n.TrackedRangeStickiness =
          n.TextEditorCursorStyle =
          n.TextEditorCursorBlinkingStyle =
          n.SymbolTag =
          n.SymbolKind =
          n.SignatureHelpTriggerKind =
          n.SelectionDirection =
          n.ScrollbarVisibility =
          n.ScrollType =
          n.RenderMinimap =
          n.RenderLineNumbersType =
          n.PositionAffinity =
          n.OverviewRulerLane =
          n.OverlayWidgetPositionPreference =
          n.MouseTargetType =
          n.MinimapPosition =
          n.MarkerTag =
          n.MarkerSeverity =
          n.KeyCode =
          n.InlineCompletionTriggerKind =
          n.InlayHintKind =
          n.InjectedTextCursorStops =
          n.IndentAction =
          n.GlyphMarginLane =
          n.EndOfLineSequence =
          n.EndOfLinePreference =
          n.EditorOption =
          n.EditorAutoIndentStrategy =
          n.DocumentHighlightKind =
          n.DefaultEndOfLine =
          n.CursorChangeReason =
          n.ContentWidgetPositionPreference =
          n.CompletionTriggerKind =
          n.CompletionItemTag =
          n.CompletionItemKind =
          n.CompletionItemInsertTextRule =
          n.CodeActionTriggerType =
          n.AccessibilitySupport =
            void 0);
      var M;
      (function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.Disabled = 1)] = "Disabled"),
          (t[(t.Enabled = 2)] = "Enabled");
      })(M || (n.AccessibilitySupport = M = {}));
      var D;
      (function (t) {
        (t[(t.Invoke = 1)] = "Invoke"), (t[(t.Auto = 2)] = "Auto");
      })(D || (n.CodeActionTriggerType = D = {}));
      var i;
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.KeepWhitespace = 1)] = "KeepWhitespace"),
          (t[(t.InsertAsSnippet = 4)] = "InsertAsSnippet");
      })(i || (n.CompletionItemInsertTextRule = i = {}));
      var u;
      (function (t) {
        (t[(t.Method = 0)] = "Method"),
          (t[(t.Function = 1)] = "Function"),
          (t[(t.Constructor = 2)] = "Constructor"),
          (t[(t.Field = 3)] = "Field"),
          (t[(t.Variable = 4)] = "Variable"),
          (t[(t.Class = 5)] = "Class"),
          (t[(t.Struct = 6)] = "Struct"),
          (t[(t.Interface = 7)] = "Interface"),
          (t[(t.Module = 8)] = "Module"),
          (t[(t.Property = 9)] = "Property"),
          (t[(t.Event = 10)] = "Event"),
          (t[(t.Operator = 11)] = "Operator"),
          (t[(t.Unit = 12)] = "Unit"),
          (t[(t.Value = 13)] = "Value"),
          (t[(t.Constant = 14)] = "Constant"),
          (t[(t.Enum = 15)] = "Enum"),
          (t[(t.EnumMember = 16)] = "EnumMember"),
          (t[(t.Keyword = 17)] = "Keyword"),
          (t[(t.Text = 18)] = "Text"),
          (t[(t.Color = 19)] = "Color"),
          (t[(t.File = 20)] = "File"),
          (t[(t.Reference = 21)] = "Reference"),
          (t[(t.Customcolor = 22)] = "Customcolor"),
          (t[(t.Folder = 23)] = "Folder"),
          (t[(t.TypeParameter = 24)] = "TypeParameter"),
          (t[(t.User = 25)] = "User"),
          (t[(t.Issue = 26)] = "Issue"),
          (t[(t.Snippet = 27)] = "Snippet");
      })(u || (n.CompletionItemKind = u = {}));
      var h;
      (function (t) {
        t[(t.Deprecated = 1)] = "Deprecated";
      })(h || (n.CompletionItemTag = h = {}));
      var w;
      (function (t) {
        (t[(t.Invoke = 0)] = "Invoke"),
          (t[(t.TriggerCharacter = 1)] = "TriggerCharacter"),
          (t[(t.TriggerForIncompleteCompletions = 2)] =
            "TriggerForIncompleteCompletions");
      })(w || (n.CompletionTriggerKind = w = {}));
      var o;
      (function (t) {
        (t[(t.EXACT = 0)] = "EXACT"),
          (t[(t.ABOVE = 1)] = "ABOVE"),
          (t[(t.BELOW = 2)] = "BELOW");
      })(o || (n.ContentWidgetPositionPreference = o = {}));
      var s;
      (function (t) {
        (t[(t.NotSet = 0)] = "NotSet"),
          (t[(t.ContentFlush = 1)] = "ContentFlush"),
          (t[(t.RecoverFromMarkers = 2)] = "RecoverFromMarkers"),
          (t[(t.Explicit = 3)] = "Explicit"),
          (t[(t.Paste = 4)] = "Paste"),
          (t[(t.Undo = 5)] = "Undo"),
          (t[(t.Redo = 6)] = "Redo");
      })(s || (n.CursorChangeReason = s = {}));
      var d;
      (function (t) {
        (t[(t.LF = 1)] = "LF"), (t[(t.CRLF = 2)] = "CRLF");
      })(d || (n.DefaultEndOfLine = d = {}));
      var e;
      (function (t) {
        (t[(t.Text = 0)] = "Text"),
          (t[(t.Read = 1)] = "Read"),
          (t[(t.Write = 2)] = "Write");
      })(e || (n.DocumentHighlightKind = e = {}));
      var f;
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Keep = 1)] = "Keep"),
          (t[(t.Brackets = 2)] = "Brackets"),
          (t[(t.Advanced = 3)] = "Advanced"),
          (t[(t.Full = 4)] = "Full");
      })(f || (n.EditorAutoIndentStrategy = f = {}));
      var c;
      (function (t) {
        (t[(t.acceptSuggestionOnCommitCharacter = 0)] =
          "acceptSuggestionOnCommitCharacter"),
          (t[(t.acceptSuggestionOnEnter = 1)] = "acceptSuggestionOnEnter"),
          (t[(t.accessibilitySupport = 2)] = "accessibilitySupport"),
          (t[(t.accessibilityPageSize = 3)] = "accessibilityPageSize"),
          (t[(t.ariaLabel = 4)] = "ariaLabel"),
          (t[(t.ariaRequired = 5)] = "ariaRequired"),
          (t[(t.autoClosingBrackets = 6)] = "autoClosingBrackets"),
          (t[(t.screenReaderAnnounceInlineSuggestion = 7)] =
            "screenReaderAnnounceInlineSuggestion"),
          (t[(t.autoClosingDelete = 8)] = "autoClosingDelete"),
          (t[(t.autoClosingOvertype = 9)] = "autoClosingOvertype"),
          (t[(t.autoClosingQuotes = 10)] = "autoClosingQuotes"),
          (t[(t.autoIndent = 11)] = "autoIndent"),
          (t[(t.automaticLayout = 12)] = "automaticLayout"),
          (t[(t.autoSurround = 13)] = "autoSurround"),
          (t[(t.bracketPairColorization = 14)] = "bracketPairColorization"),
          (t[(t.guides = 15)] = "guides"),
          (t[(t.codeLens = 16)] = "codeLens"),
          (t[(t.codeLensFontFamily = 17)] = "codeLensFontFamily"),
          (t[(t.codeLensFontSize = 18)] = "codeLensFontSize"),
          (t[(t.colorDecorators = 19)] = "colorDecorators"),
          (t[(t.colorDecoratorsLimit = 20)] = "colorDecoratorsLimit"),
          (t[(t.columnSelection = 21)] = "columnSelection"),
          (t[(t.comments = 22)] = "comments"),
          (t[(t.contextmenu = 23)] = "contextmenu"),
          (t[(t.copyWithSyntaxHighlighting = 24)] =
            "copyWithSyntaxHighlighting"),
          (t[(t.cursorBlinking = 25)] = "cursorBlinking"),
          (t[(t.cursorSmoothCaretAnimation = 26)] =
            "cursorSmoothCaretAnimation"),
          (t[(t.cursorStyle = 27)] = "cursorStyle"),
          (t[(t.cursorSurroundingLines = 28)] = "cursorSurroundingLines"),
          (t[(t.cursorSurroundingLinesStyle = 29)] =
            "cursorSurroundingLinesStyle"),
          (t[(t.cursorWidth = 30)] = "cursorWidth"),
          (t[(t.disableLayerHinting = 31)] = "disableLayerHinting"),
          (t[(t.disableMonospaceOptimizations = 32)] =
            "disableMonospaceOptimizations"),
          (t[(t.domReadOnly = 33)] = "domReadOnly"),
          (t[(t.dragAndDrop = 34)] = "dragAndDrop"),
          (t[(t.dropIntoEditor = 35)] = "dropIntoEditor"),
          (t[(t.emptySelectionClipboard = 36)] = "emptySelectionClipboard"),
          (t[(t.experimentalWhitespaceRendering = 37)] =
            "experimentalWhitespaceRendering"),
          (t[(t.extraEditorClassName = 38)] = "extraEditorClassName"),
          (t[(t.fastScrollSensitivity = 39)] = "fastScrollSensitivity"),
          (t[(t.find = 40)] = "find"),
          (t[(t.fixedOverflowWidgets = 41)] = "fixedOverflowWidgets"),
          (t[(t.folding = 42)] = "folding"),
          (t[(t.foldingStrategy = 43)] = "foldingStrategy"),
          (t[(t.foldingHighlight = 44)] = "foldingHighlight"),
          (t[(t.foldingImportsByDefault = 45)] = "foldingImportsByDefault"),
          (t[(t.foldingMaximumRegions = 46)] = "foldingMaximumRegions"),
          (t[(t.unfoldOnClickAfterEndOfLine = 47)] =
            "unfoldOnClickAfterEndOfLine"),
          (t[(t.fontFamily = 48)] = "fontFamily"),
          (t[(t.fontInfo = 49)] = "fontInfo"),
          (t[(t.fontLigatures = 50)] = "fontLigatures"),
          (t[(t.fontSize = 51)] = "fontSize"),
          (t[(t.fontWeight = 52)] = "fontWeight"),
          (t[(t.fontVariations = 53)] = "fontVariations"),
          (t[(t.formatOnPaste = 54)] = "formatOnPaste"),
          (t[(t.formatOnType = 55)] = "formatOnType"),
          (t[(t.glyphMargin = 56)] = "glyphMargin"),
          (t[(t.gotoLocation = 57)] = "gotoLocation"),
          (t[(t.hideCursorInOverviewRuler = 58)] = "hideCursorInOverviewRuler"),
          (t[(t.hover = 59)] = "hover"),
          (t[(t.inDiffEditor = 60)] = "inDiffEditor"),
          (t[(t.inlineSuggest = 61)] = "inlineSuggest"),
          (t[(t.letterSpacing = 62)] = "letterSpacing"),
          (t[(t.lightbulb = 63)] = "lightbulb"),
          (t[(t.lineDecorationsWidth = 64)] = "lineDecorationsWidth"),
          (t[(t.lineHeight = 65)] = "lineHeight"),
          (t[(t.lineNumbers = 66)] = "lineNumbers"),
          (t[(t.lineNumbersMinChars = 67)] = "lineNumbersMinChars"),
          (t[(t.linkedEditing = 68)] = "linkedEditing"),
          (t[(t.links = 69)] = "links"),
          (t[(t.matchBrackets = 70)] = "matchBrackets"),
          (t[(t.minimap = 71)] = "minimap"),
          (t[(t.mouseStyle = 72)] = "mouseStyle"),
          (t[(t.mouseWheelScrollSensitivity = 73)] =
            "mouseWheelScrollSensitivity"),
          (t[(t.mouseWheelZoom = 74)] = "mouseWheelZoom"),
          (t[(t.multiCursorMergeOverlapping = 75)] =
            "multiCursorMergeOverlapping"),
          (t[(t.multiCursorModifier = 76)] = "multiCursorModifier"),
          (t[(t.multiCursorPaste = 77)] = "multiCursorPaste"),
          (t[(t.multiCursorLimit = 78)] = "multiCursorLimit"),
          (t[(t.occurrencesHighlight = 79)] = "occurrencesHighlight"),
          (t[(t.overviewRulerBorder = 80)] = "overviewRulerBorder"),
          (t[(t.overviewRulerLanes = 81)] = "overviewRulerLanes"),
          (t[(t.padding = 82)] = "padding"),
          (t[(t.pasteAs = 83)] = "pasteAs"),
          (t[(t.parameterHints = 84)] = "parameterHints"),
          (t[(t.peekWidgetDefaultFocus = 85)] = "peekWidgetDefaultFocus"),
          (t[(t.definitionLinkOpensInPeek = 86)] = "definitionLinkOpensInPeek"),
          (t[(t.quickSuggestions = 87)] = "quickSuggestions"),
          (t[(t.quickSuggestionsDelay = 88)] = "quickSuggestionsDelay"),
          (t[(t.readOnly = 89)] = "readOnly"),
          (t[(t.readOnlyMessage = 90)] = "readOnlyMessage"),
          (t[(t.renameOnType = 91)] = "renameOnType"),
          (t[(t.renderControlCharacters = 92)] = "renderControlCharacters"),
          (t[(t.renderFinalNewline = 93)] = "renderFinalNewline"),
          (t[(t.renderLineHighlight = 94)] = "renderLineHighlight"),
          (t[(t.renderLineHighlightOnlyWhenFocus = 95)] =
            "renderLineHighlightOnlyWhenFocus"),
          (t[(t.renderValidationDecorations = 96)] =
            "renderValidationDecorations"),
          (t[(t.renderWhitespace = 97)] = "renderWhitespace"),
          (t[(t.revealHorizontalRightPadding = 98)] =
            "revealHorizontalRightPadding"),
          (t[(t.roundedSelection = 99)] = "roundedSelection"),
          (t[(t.rulers = 100)] = "rulers"),
          (t[(t.scrollbar = 101)] = "scrollbar"),
          (t[(t.scrollBeyondLastColumn = 102)] = "scrollBeyondLastColumn"),
          (t[(t.scrollBeyondLastLine = 103)] = "scrollBeyondLastLine"),
          (t[(t.scrollPredominantAxis = 104)] = "scrollPredominantAxis"),
          (t[(t.selectionClipboard = 105)] = "selectionClipboard"),
          (t[(t.selectionHighlight = 106)] = "selectionHighlight"),
          (t[(t.selectOnLineNumbers = 107)] = "selectOnLineNumbers"),
          (t[(t.showFoldingControls = 108)] = "showFoldingControls"),
          (t[(t.showUnused = 109)] = "showUnused"),
          (t[(t.snippetSuggestions = 110)] = "snippetSuggestions"),
          (t[(t.smartSelect = 111)] = "smartSelect"),
          (t[(t.smoothScrolling = 112)] = "smoothScrolling"),
          (t[(t.stickyScroll = 113)] = "stickyScroll"),
          (t[(t.stickyTabStops = 114)] = "stickyTabStops"),
          (t[(t.stopRenderingLineAfter = 115)] = "stopRenderingLineAfter"),
          (t[(t.suggest = 116)] = "suggest"),
          (t[(t.suggestFontSize = 117)] = "suggestFontSize"),
          (t[(t.suggestLineHeight = 118)] = "suggestLineHeight"),
          (t[(t.suggestOnTriggerCharacters = 119)] =
            "suggestOnTriggerCharacters"),
          (t[(t.suggestSelection = 120)] = "suggestSelection"),
          (t[(t.tabCompletion = 121)] = "tabCompletion"),
          (t[(t.tabIndex = 122)] = "tabIndex"),
          (t[(t.unicodeHighlighting = 123)] = "unicodeHighlighting"),
          (t[(t.unusualLineTerminators = 124)] = "unusualLineTerminators"),
          (t[(t.useShadowDOM = 125)] = "useShadowDOM"),
          (t[(t.useTabStops = 126)] = "useTabStops"),
          (t[(t.wordBreak = 127)] = "wordBreak"),
          (t[(t.wordSeparators = 128)] = "wordSeparators"),
          (t[(t.wordWrap = 129)] = "wordWrap"),
          (t[(t.wordWrapBreakAfterCharacters = 130)] =
            "wordWrapBreakAfterCharacters"),
          (t[(t.wordWrapBreakBeforeCharacters = 131)] =
            "wordWrapBreakBeforeCharacters"),
          (t[(t.wordWrapColumn = 132)] = "wordWrapColumn"),
          (t[(t.wordWrapOverride1 = 133)] = "wordWrapOverride1"),
          (t[(t.wordWrapOverride2 = 134)] = "wordWrapOverride2"),
          (t[(t.wrappingIndent = 135)] = "wrappingIndent"),
          (t[(t.wrappingStrategy = 136)] = "wrappingStrategy"),
          (t[(t.showDeprecated = 137)] = "showDeprecated"),
          (t[(t.inlayHints = 138)] = "inlayHints"),
          (t[(t.editorClassName = 139)] = "editorClassName"),
          (t[(t.pixelRatio = 140)] = "pixelRatio"),
          (t[(t.tabFocusMode = 141)] = "tabFocusMode"),
          (t[(t.layoutInfo = 142)] = "layoutInfo"),
          (t[(t.wrappingInfo = 143)] = "wrappingInfo"),
          (t[(t.defaultColorDecorators = 144)] = "defaultColorDecorators"),
          (t[(t.colorDecoratorsActivatedOn = 145)] =
            "colorDecoratorsActivatedOn");
      })(c || (n.EditorOption = c = {}));
      var g;
      (function (t) {
        (t[(t.TextDefined = 0)] = "TextDefined"),
          (t[(t.LF = 1)] = "LF"),
          (t[(t.CRLF = 2)] = "CRLF");
      })(g || (n.EndOfLinePreference = g = {}));
      var b;
      (function (t) {
        (t[(t.LF = 0)] = "LF"), (t[(t.CRLF = 1)] = "CRLF");
      })(b || (n.EndOfLineSequence = b = {}));
      var _;
      (function (t) {
        (t[(t.Left = 1)] = "Left"), (t[(t.Right = 2)] = "Right");
      })(_ || (n.GlyphMarginLane = _ = {}));
      var N;
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Indent = 1)] = "Indent"),
          (t[(t.IndentOutdent = 2)] = "IndentOutdent"),
          (t[(t.Outdent = 3)] = "Outdent");
      })(N || (n.IndentAction = N = {}));
      var C;
      (function (t) {
        (t[(t.Both = 0)] = "Both"),
          (t[(t.Right = 1)] = "Right"),
          (t[(t.Left = 2)] = "Left"),
          (t[(t.None = 3)] = "None");
      })(C || (n.InjectedTextCursorStops = C = {}));
      var A;
      (function (t) {
        (t[(t.Type = 1)] = "Type"), (t[(t.Parameter = 2)] = "Parameter");
      })(A || (n.InlayHintKind = A = {}));
      var S;
      (function (t) {
        (t[(t.Automatic = 0)] = "Automatic"),
          (t[(t.Explicit = 1)] = "Explicit");
      })(S || (n.InlineCompletionTriggerKind = S = {}));
      var v;
      (function (t) {
        (t[(t.DependsOnKbLayout = -1)] = "DependsOnKbLayout"),
          (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.Backspace = 1)] = "Backspace"),
          (t[(t.Tab = 2)] = "Tab"),
          (t[(t.Enter = 3)] = "Enter"),
          (t[(t.Shift = 4)] = "Shift"),
          (t[(t.Ctrl = 5)] = "Ctrl"),
          (t[(t.Alt = 6)] = "Alt"),
          (t[(t.PauseBreak = 7)] = "PauseBreak"),
          (t[(t.CapsLock = 8)] = "CapsLock"),
          (t[(t.Escape = 9)] = "Escape"),
          (t[(t.Space = 10)] = "Space"),
          (t[(t.PageUp = 11)] = "PageUp"),
          (t[(t.PageDown = 12)] = "PageDown"),
          (t[(t.End = 13)] = "End"),
          (t[(t.Home = 14)] = "Home"),
          (t[(t.LeftArrow = 15)] = "LeftArrow"),
          (t[(t.UpArrow = 16)] = "UpArrow"),
          (t[(t.RightArrow = 17)] = "RightArrow"),
          (t[(t.DownArrow = 18)] = "DownArrow"),
          (t[(t.Insert = 19)] = "Insert"),
          (t[(t.Delete = 20)] = "Delete"),
          (t[(t.Digit0 = 21)] = "Digit0"),
          (t[(t.Digit1 = 22)] = "Digit1"),
          (t[(t.Digit2 = 23)] = "Digit2"),
          (t[(t.Digit3 = 24)] = "Digit3"),
          (t[(t.Digit4 = 25)] = "Digit4"),
          (t[(t.Digit5 = 26)] = "Digit5"),
          (t[(t.Digit6 = 27)] = "Digit6"),
          (t[(t.Digit7 = 28)] = "Digit7"),
          (t[(t.Digit8 = 29)] = "Digit8"),
          (t[(t.Digit9 = 30)] = "Digit9"),
          (t[(t.KeyA = 31)] = "KeyA"),
          (t[(t.KeyB = 32)] = "KeyB"),
          (t[(t.KeyC = 33)] = "KeyC"),
          (t[(t.KeyD = 34)] = "KeyD"),
          (t[(t.KeyE = 35)] = "KeyE"),
          (t[(t.KeyF = 36)] = "KeyF"),
          (t[(t.KeyG = 37)] = "KeyG"),
          (t[(t.KeyH = 38)] = "KeyH"),
          (t[(t.KeyI = 39)] = "KeyI"),
          (t[(t.KeyJ = 40)] = "KeyJ"),
          (t[(t.KeyK = 41)] = "KeyK"),
          (t[(t.KeyL = 42)] = "KeyL"),
          (t[(t.KeyM = 43)] = "KeyM"),
          (t[(t.KeyN = 44)] = "KeyN"),
          (t[(t.KeyO = 45)] = "KeyO"),
          (t[(t.KeyP = 46)] = "KeyP"),
          (t[(t.KeyQ = 47)] = "KeyQ"),
          (t[(t.KeyR = 48)] = "KeyR"),
          (t[(t.KeyS = 49)] = "KeyS"),
          (t[(t.KeyT = 50)] = "KeyT"),
          (t[(t.KeyU = 51)] = "KeyU"),
          (t[(t.KeyV = 52)] = "KeyV"),
          (t[(t.KeyW = 53)] = "KeyW"),
          (t[(t.KeyX = 54)] = "KeyX"),
          (t[(t.KeyY = 55)] = "KeyY"),
          (t[(t.KeyZ = 56)] = "KeyZ"),
          (t[(t.Meta = 57)] = "Meta"),
          (t[(t.ContextMenu = 58)] = "ContextMenu"),
          (t[(t.F1 = 59)] = "F1"),
          (t[(t.F2 = 60)] = "F2"),
          (t[(t.F3 = 61)] = "F3"),
          (t[(t.F4 = 62)] = "F4"),
          (t[(t.F5 = 63)] = "F5"),
          (t[(t.F6 = 64)] = "F6"),
          (t[(t.F7 = 65)] = "F7"),
          (t[(t.F8 = 66)] = "F8"),
          (t[(t.F9 = 67)] = "F9"),
          (t[(t.F10 = 68)] = "F10"),
          (t[(t.F11 = 69)] = "F11"),
          (t[(t.F12 = 70)] = "F12"),
          (t[(t.F13 = 71)] = "F13"),
          (t[(t.F14 = 72)] = "F14"),
          (t[(t.F15 = 73)] = "F15"),
          (t[(t.F16 = 74)] = "F16"),
          (t[(t.F17 = 75)] = "F17"),
          (t[(t.F18 = 76)] = "F18"),
          (t[(t.F19 = 77)] = "F19"),
          (t[(t.F20 = 78)] = "F20"),
          (t[(t.F21 = 79)] = "F21"),
          (t[(t.F22 = 80)] = "F22"),
          (t[(t.F23 = 81)] = "F23"),
          (t[(t.F24 = 82)] = "F24"),
          (t[(t.NumLock = 83)] = "NumLock"),
          (t[(t.ScrollLock = 84)] = "ScrollLock"),
          (t[(t.Semicolon = 85)] = "Semicolon"),
          (t[(t.Equal = 86)] = "Equal"),
          (t[(t.Comma = 87)] = "Comma"),
          (t[(t.Minus = 88)] = "Minus"),
          (t[(t.Period = 89)] = "Period"),
          (t[(t.Slash = 90)] = "Slash"),
          (t[(t.Backquote = 91)] = "Backquote"),
          (t[(t.BracketLeft = 92)] = "BracketLeft"),
          (t[(t.Backslash = 93)] = "Backslash"),
          (t[(t.BracketRight = 94)] = "BracketRight"),
          (t[(t.Quote = 95)] = "Quote"),
          (t[(t.OEM_8 = 96)] = "OEM_8"),
          (t[(t.IntlBackslash = 97)] = "IntlBackslash"),
          (t[(t.Numpad0 = 98)] = "Numpad0"),
          (t[(t.Numpad1 = 99)] = "Numpad1"),
          (t[(t.Numpad2 = 100)] = "Numpad2"),
          (t[(t.Numpad3 = 101)] = "Numpad3"),
          (t[(t.Numpad4 = 102)] = "Numpad4"),
          (t[(t.Numpad5 = 103)] = "Numpad5"),
          (t[(t.Numpad6 = 104)] = "Numpad6"),
          (t[(t.Numpad7 = 105)] = "Numpad7"),
          (t[(t.Numpad8 = 106)] = "Numpad8"),
          (t[(t.Numpad9 = 107)] = "Numpad9"),
          (t[(t.NumpadMultiply = 108)] = "NumpadMultiply"),
          (t[(t.NumpadAdd = 109)] = "NumpadAdd"),
          (t[(t.NUMPAD_SEPARATOR = 110)] = "NUMPAD_SEPARATOR"),
          (t[(t.NumpadSubtract = 111)] = "NumpadSubtract"),
          (t[(t.NumpadDecimal = 112)] = "NumpadDecimal"),
          (t[(t.NumpadDivide = 113)] = "NumpadDivide"),
          (t[(t.KEY_IN_COMPOSITION = 114)] = "KEY_IN_COMPOSITION"),
          (t[(t.ABNT_C1 = 115)] = "ABNT_C1"),
          (t[(t.ABNT_C2 = 116)] = "ABNT_C2"),
          (t[(t.AudioVolumeMute = 117)] = "AudioVolumeMute"),
          (t[(t.AudioVolumeUp = 118)] = "AudioVolumeUp"),
          (t[(t.AudioVolumeDown = 119)] = "AudioVolumeDown"),
          (t[(t.BrowserSearch = 120)] = "BrowserSearch"),
          (t[(t.BrowserHome = 121)] = "BrowserHome"),
          (t[(t.BrowserBack = 122)] = "BrowserBack"),
          (t[(t.BrowserForward = 123)] = "BrowserForward"),
          (t[(t.MediaTrackNext = 124)] = "MediaTrackNext"),
          (t[(t.MediaTrackPrevious = 125)] = "MediaTrackPrevious"),
          (t[(t.MediaStop = 126)] = "MediaStop"),
          (t[(t.MediaPlayPause = 127)] = "MediaPlayPause"),
          (t[(t.LaunchMediaPlayer = 128)] = "LaunchMediaPlayer"),
          (t[(t.LaunchMail = 129)] = "LaunchMail"),
          (t[(t.LaunchApp2 = 130)] = "LaunchApp2"),
          (t[(t.Clear = 131)] = "Clear"),
          (t[(t.MAX_VALUE = 132)] = "MAX_VALUE");
      })(v || (n.KeyCode = v = {}));
      var r;
      (function (t) {
        (t[(t.Hint = 1)] = "Hint"),
          (t[(t.Info = 2)] = "Info"),
          (t[(t.Warning = 4)] = "Warning"),
          (t[(t.Error = 8)] = "Error");
      })(r || (n.MarkerSeverity = r = {}));
      var a;
      (function (t) {
        (t[(t.Unnecessary = 1)] = "Unnecessary"),
          (t[(t.Deprecated = 2)] = "Deprecated");
      })(a || (n.MarkerTag = a = {}));
      var l;
      (function (t) {
        (t[(t.Inline = 1)] = "Inline"), (t[(t.Gutter = 2)] = "Gutter");
      })(l || (n.MinimapPosition = l = {}));
      var L;
      (function (t) {
        (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
          (t[(t.TEXTAREA = 1)] = "TEXTAREA"),
          (t[(t.GUTTER_GLYPH_MARGIN = 2)] = "GUTTER_GLYPH_MARGIN"),
          (t[(t.GUTTER_LINE_NUMBERS = 3)] = "GUTTER_LINE_NUMBERS"),
          (t[(t.GUTTER_LINE_DECORATIONS = 4)] = "GUTTER_LINE_DECORATIONS"),
          (t[(t.GUTTER_VIEW_ZONE = 5)] = "GUTTER_VIEW_ZONE"),
          (t[(t.CONTENT_TEXT = 6)] = "CONTENT_TEXT"),
          (t[(t.CONTENT_EMPTY = 7)] = "CONTENT_EMPTY"),
          (t[(t.CONTENT_VIEW_ZONE = 8)] = "CONTENT_VIEW_ZONE"),
          (t[(t.CONTENT_WIDGET = 9)] = "CONTENT_WIDGET"),
          (t[(t.OVERVIEW_RULER = 10)] = "OVERVIEW_RULER"),
          (t[(t.SCROLLBAR = 11)] = "SCROLLBAR"),
          (t[(t.OVERLAY_WIDGET = 12)] = "OVERLAY_WIDGET"),
          (t[(t.OUTSIDE_EDITOR = 13)] = "OUTSIDE_EDITOR");
      })(L || (n.MouseTargetType = L = {}));
      var m;
      (function (t) {
        (t[(t.TOP_RIGHT_CORNER = 0)] = "TOP_RIGHT_CORNER"),
          (t[(t.BOTTOM_RIGHT_CORNER = 1)] = "BOTTOM_RIGHT_CORNER"),
          (t[(t.TOP_CENTER = 2)] = "TOP_CENTER");
      })(m || (n.OverlayWidgetPositionPreference = m = {}));
      var p;
      (function (t) {
        (t[(t.Left = 1)] = "Left"),
          (t[(t.Center = 2)] = "Center"),
          (t[(t.Right = 4)] = "Right"),
          (t[(t.Full = 7)] = "Full");
      })(p || (n.OverviewRulerLane = p = {}));
      var R;
      (function (t) {
        (t[(t.Left = 0)] = "Left"),
          (t[(t.Right = 1)] = "Right"),
          (t[(t.None = 2)] = "None"),
          (t[(t.LeftOfInjectedText = 3)] = "LeftOfInjectedText"),
          (t[(t.RightOfInjectedText = 4)] = "RightOfInjectedText");
      })(R || (n.PositionAffinity = R = {}));
      var y;
      (function (t) {
        (t[(t.Off = 0)] = "Off"),
          (t[(t.On = 1)] = "On"),
          (t[(t.Relative = 2)] = "Relative"),
          (t[(t.Interval = 3)] = "Interval"),
          (t[(t.Custom = 4)] = "Custom");
      })(y || (n.RenderLineNumbersType = y = {}));
      var E;
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Text = 1)] = "Text"),
          (t[(t.Blocks = 2)] = "Blocks");
      })(E || (n.RenderMinimap = E = {}));
      var P;
      (function (t) {
        (t[(t.Smooth = 0)] = "Smooth"), (t[(t.Immediate = 1)] = "Immediate");
      })(P || (n.ScrollType = P = {}));
      var T;
      (function (t) {
        (t[(t.Auto = 1)] = "Auto"),
          (t[(t.Hidden = 2)] = "Hidden"),
          (t[(t.Visible = 3)] = "Visible");
      })(T || (n.ScrollbarVisibility = T = {}));
      var F;
      (function (t) {
        (t[(t.LTR = 0)] = "LTR"), (t[(t.RTL = 1)] = "RTL");
      })(F || (n.SelectionDirection = F = {}));
      var U;
      (function (t) {
        (t[(t.Invoke = 1)] = "Invoke"),
          (t[(t.TriggerCharacter = 2)] = "TriggerCharacter"),
          (t[(t.ContentChange = 3)] = "ContentChange");
      })(U || (n.SignatureHelpTriggerKind = U = {}));
      var W;
      (function (t) {
        (t[(t.File = 0)] = "File"),
          (t[(t.Module = 1)] = "Module"),
          (t[(t.Namespace = 2)] = "Namespace"),
          (t[(t.Package = 3)] = "Package"),
          (t[(t.Class = 4)] = "Class"),
          (t[(t.Method = 5)] = "Method"),
          (t[(t.Property = 6)] = "Property"),
          (t[(t.Field = 7)] = "Field"),
          (t[(t.Constructor = 8)] = "Constructor"),
          (t[(t.Enum = 9)] = "Enum"),
          (t[(t.Interface = 10)] = "Interface"),
          (t[(t.Function = 11)] = "Function"),
          (t[(t.Variable = 12)] = "Variable"),
          (t[(t.Constant = 13)] = "Constant"),
          (t[(t.String = 14)] = "String"),
          (t[(t.Number = 15)] = "Number"),
          (t[(t.Boolean = 16)] = "Boolean"),
          (t[(t.Array = 17)] = "Array"),
          (t[(t.Object = 18)] = "Object"),
          (t[(t.Key = 19)] = "Key"),
          (t[(t.Null = 20)] = "Null"),
          (t[(t.EnumMember = 21)] = "EnumMember"),
          (t[(t.Struct = 22)] = "Struct"),
          (t[(t.Event = 23)] = "Event"),
          (t[(t.Operator = 24)] = "Operator"),
          (t[(t.TypeParameter = 25)] = "TypeParameter");
      })(W || (n.SymbolKind = W = {}));
      var V;
      (function (t) {
        t[(t.Deprecated = 1)] = "Deprecated";
      })(V || (n.SymbolTag = V = {}));
      var I;
      (function (t) {
        (t[(t.Hidden = 0)] = "Hidden"),
          (t[(t.Blink = 1)] = "Blink"),
          (t[(t.Smooth = 2)] = "Smooth"),
          (t[(t.Phase = 3)] = "Phase"),
          (t[(t.Expand = 4)] = "Expand"),
          (t[(t.Solid = 5)] = "Solid");
      })(I || (n.TextEditorCursorBlinkingStyle = I = {}));
      var x;
      (function (t) {
        (t[(t.Line = 1)] = "Line"),
          (t[(t.Block = 2)] = "Block"),
          (t[(t.Underline = 3)] = "Underline"),
          (t[(t.LineThin = 4)] = "LineThin"),
          (t[(t.BlockOutline = 5)] = "BlockOutline"),
          (t[(t.UnderlineThin = 6)] = "UnderlineThin");
      })(x || (n.TextEditorCursorStyle = x = {}));
      var q;
      (function (t) {
        (t[(t.AlwaysGrowsWhenTypingAtEdges = 0)] =
          "AlwaysGrowsWhenTypingAtEdges"),
          (t[(t.NeverGrowsWhenTypingAtEdges = 1)] =
            "NeverGrowsWhenTypingAtEdges"),
          (t[(t.GrowsOnlyWhenTypingBefore = 2)] = "GrowsOnlyWhenTypingBefore"),
          (t[(t.GrowsOnlyWhenTypingAfter = 3)] = "GrowsOnlyWhenTypingAfter");
      })(q || (n.TrackedRangeStickiness = q = {}));
      var j;
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Same = 1)] = "Same"),
          (t[(t.Indent = 2)] = "Indent"),
          (t[(t.DeepIndent = 3)] = "DeepIndent");
      })(j || (n.WrappingIndent = j = {}));
    }),
    X(J[53], Z([0, 1, 7, 10]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.TokenizationRegistry = void 0);
      class i {
        constructor() {
          (this._tokenizationSupports = new Map()),
            (this._factories = new Map()),
            (this._onDidChange = new M.Emitter()),
            (this.onDidChange = this._onDidChange.event),
            (this._colorMap = null);
        }
        handleChange(w) {
          this._onDidChange.fire({ changedLanguages: w, changedColorMap: !1 });
        }
        register(w, o) {
          return (
            this._tokenizationSupports.set(w, o),
            this.handleChange([w]),
            (0, D.toDisposable)(() => {
              this._tokenizationSupports.get(w) === o &&
                (this._tokenizationSupports.delete(w), this.handleChange([w]));
            })
          );
        }
        get(w) {
          return this._tokenizationSupports.get(w) || null;
        }
        registerFactory(w, o) {
          var s;
          (s = this._factories.get(w)) === null || s === void 0 || s.dispose();
          const d = new u(this, w, o);
          return (
            this._factories.set(w, d),
            (0, D.toDisposable)(() => {
              const e = this._factories.get(w);
              !e || e !== d || (this._factories.delete(w), e.dispose());
            })
          );
        }
        getOrCreate(w) {
          return ge(this, void 0, void 0, function* () {
            const o = this.get(w);
            if (o) return o;
            const s = this._factories.get(w);
            return !s || s.isResolved ? null : (yield s.resolve(), this.get(w));
          });
        }
        isResolved(w) {
          if (this.get(w)) return !0;
          const s = this._factories.get(w);
          return !!(!s || s.isResolved);
        }
        setColorMap(w) {
          (this._colorMap = w),
            this._onDidChange.fire({
              changedLanguages: Array.from(this._tokenizationSupports.keys()),
              changedColorMap: !0,
            });
        }
        getColorMap() {
          return this._colorMap;
        }
        getDefaultBackground() {
          return this._colorMap && this._colorMap.length > 2
            ? this._colorMap[2]
            : null;
        }
      }
      n.TokenizationRegistry = i;
      class u extends D.Disposable {
        get isResolved() {
          return this._isResolved;
        }
        constructor(w, o, s) {
          super(),
            (this._registry = w),
            (this._languageId = o),
            (this._factory = s),
            (this._isDisposed = !1),
            (this._resolvePromise = null),
            (this._isResolved = !1);
        }
        dispose() {
          (this._isDisposed = !0), super.dispose();
        }
        resolve() {
          return ge(this, void 0, void 0, function* () {
            return (
              this._resolvePromise || (this._resolvePromise = this._create()),
              this._resolvePromise
            );
          });
        }
        _create() {
          return ge(this, void 0, void 0, function* () {
            const w = yield this._factory.tokenizationSupport;
            (this._isResolved = !0),
              w &&
                !this._isDisposed &&
                this._register(this._registry.register(this._languageId, w));
          });
        }
      }
    }),
    X(J[54], Z([15, 55]), function (O, n) {
      return O.create("vs/base/common/platform", n);
    }),
    X(J[13], Z([0, 1, 54]), function (O, n, M) {
      "use strict";
      var D;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isAndroid =
          n.isEdge =
          n.isSafari =
          n.isFirefox =
          n.isChrome =
          n.isLittleEndian =
          n.OS =
          n.setTimeout0 =
          n.setTimeout0IsFaster =
          n.language =
          n.userAgent =
          n.isMobile =
          n.isIOS =
          n.isWebWorker =
          n.isWeb =
          n.isNative =
          n.isLinux =
          n.isMacintosh =
          n.isWindows =
          n.globals =
          n.LANGUAGE_DEFAULT =
            void 0),
        (n.LANGUAGE_DEFAULT = "en");
      let i = !1,
        u = !1,
        h = !1,
        w = !1,
        o = !1,
        s = !1,
        d = !1,
        e = !1,
        f = !1,
        c = !1,
        g,
        b = n.LANGUAGE_DEFAULT,
        _ = n.LANGUAGE_DEFAULT,
        N,
        C;
      n.globals =
        typeof self == "object"
          ? self
          : typeof global == "object"
          ? global
          : {};
      let A;
      typeof n.globals.vscode < "u" && typeof n.globals.vscode.process < "u"
        ? (A = n.globals.vscode.process)
        : typeof process < "u" && (A = process);
      const S =
          typeof ((D = A?.versions) === null || D === void 0
            ? void 0
            : D.electron) == "string",
        v = S && A?.type === "renderer";
      if (typeof navigator == "object" && !v)
        (C = navigator.userAgent),
          (i = C.indexOf("Windows") >= 0),
          (u = C.indexOf("Macintosh") >= 0),
          (e =
            (C.indexOf("Macintosh") >= 0 ||
              C.indexOf("iPad") >= 0 ||
              C.indexOf("iPhone") >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0),
          (h = C.indexOf("Linux") >= 0),
          (c = C?.indexOf("Mobi") >= 0),
          (s = !0),
          (g =
            M.getConfiguredDefaultLocale(M.localize(0, null)) ||
            n.LANGUAGE_DEFAULT),
          (b = g),
          (_ = navigator.language);
      else if (typeof A == "object") {
        (i = A.platform === "win32"),
          (u = A.platform === "darwin"),
          (h = A.platform === "linux"),
          (w = h && !!A.env.SNAP && !!A.env.SNAP_REVISION),
          (d = S),
          (f = !!A.env.CI || !!A.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
          (g = n.LANGUAGE_DEFAULT),
          (b = n.LANGUAGE_DEFAULT);
        const m = A.env.VSCODE_NLS_CONFIG;
        if (m)
          try {
            const p = JSON.parse(m),
              R = p.availableLanguages["*"];
            (g = p.locale),
              (_ = p.osLocale),
              (b = R || n.LANGUAGE_DEFAULT),
              (N = p._translationsConfigFile);
          } catch {}
        o = !0;
      } else console.error("Unable to resolve platform.");
      let r = 0;
      u ? (r = 1) : i ? (r = 3) : h && (r = 2),
        (n.isWindows = i),
        (n.isMacintosh = u),
        (n.isLinux = h),
        (n.isNative = o),
        (n.isWeb = s),
        (n.isWebWorker = s && typeof n.globals.importScripts == "function"),
        (n.isIOS = e),
        (n.isMobile = c),
        (n.userAgent = C),
        (n.language = b),
        (n.setTimeout0IsFaster =
          typeof n.globals.postMessage == "function" &&
          !n.globals.importScripts),
        (n.setTimeout0 = (() => {
          if (n.setTimeout0IsFaster) {
            const m = [];
            n.globals.addEventListener("message", (R) => {
              if (R.data && R.data.vscodeScheduleAsyncWork)
                for (let y = 0, E = m.length; y < E; y++) {
                  const P = m[y];
                  if (P.id === R.data.vscodeScheduleAsyncWork) {
                    m.splice(y, 1), P.callback();
                    return;
                  }
                }
            });
            let p = 0;
            return (R) => {
              const y = ++p;
              m.push({ id: y, callback: R }),
                n.globals.postMessage({ vscodeScheduleAsyncWork: y }, "*");
            };
          }
          return (m) => setTimeout(m);
        })()),
        (n.OS = u || e ? 2 : i ? 1 : 3);
      let a = !0,
        l = !1;
      function L() {
        if (!l) {
          l = !0;
          const m = new Uint8Array(2);
          (m[0] = 1),
            (m[1] = 2),
            (a = new Uint16Array(m.buffer)[0] === (2 << 8) + 1);
        }
        return a;
      }
      (n.isLittleEndian = L),
        (n.isChrome = !!(n.userAgent && n.userAgent.indexOf("Chrome") >= 0)),
        (n.isFirefox = !!(n.userAgent && n.userAgent.indexOf("Firefox") >= 0)),
        (n.isSafari = !!(
          !n.isChrome &&
          n.userAgent &&
          n.userAgent.indexOf("Safari") >= 0
        )),
        (n.isEdge = !!(n.userAgent && n.userAgent.indexOf("Edg/") >= 0)),
        (n.isAndroid = !!(n.userAgent && n.userAgent.indexOf("Android") >= 0));
    }),
    X(J[56], Z([0, 1, 13]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.platform = n.env = n.cwd = void 0);
      let D;
      if (
        typeof M.globals.vscode < "u" &&
        typeof M.globals.vscode.process < "u"
      ) {
        const i = M.globals.vscode.process;
        D = {
          get platform() {
            return i.platform;
          },
          get arch() {
            return i.arch;
          },
          get env() {
            return i.env;
          },
          cwd() {
            return i.cwd();
          },
        };
      } else
        typeof process < "u"
          ? (D = {
              get platform() {
                return process.platform;
              },
              get arch() {
                return process.arch;
              },
              get env() {
                return process.env;
              },
              cwd() {
                return process.env.VSCODE_CWD || process.cwd();
              },
            })
          : (D = {
              get platform() {
                return M.isWindows
                  ? "win32"
                  : M.isMacintosh
                  ? "darwin"
                  : "linux";
              },
              get arch() {},
              get env() {
                return {};
              },
              cwd() {
                return "/";
              },
            });
      (n.cwd = D.cwd), (n.env = D.env), (n.platform = D.platform);
    }),
    X(J[57], Z([0, 1, 56]), function (O, n, M) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.sep =
          n.extname =
          n.basename =
          n.dirname =
          n.relative =
          n.resolve =
          n.normalize =
          n.posix =
          n.win32 =
            void 0);
      const D = 65,
        i = 97,
        u = 90,
        h = 122,
        w = 46,
        o = 47,
        s = 92,
        d = 58,
        e = 63;
      class f extends Error {
        constructor(a, l, L) {
          let m;
          typeof l == "string" && l.indexOf("not ") === 0
            ? ((m = "must not be"), (l = l.replace(/^not /, "")))
            : (m = "must be");
          const p = a.indexOf(".") !== -1 ? "property" : "argument";
          let R = `The "${a}" ${p} ${m} of type ${l}`;
          (R += `. Received type ${typeof L}`),
            super(R),
            (this.code = "ERR_INVALID_ARG_TYPE");
        }
      }
      function c(r, a) {
        if (r === null || typeof r != "object") throw new f(a, "Object", r);
      }
      function g(r, a) {
        if (typeof r != "string") throw new f(a, "string", r);
      }
      const b = M.platform === "win32";
      function _(r) {
        return r === o || r === s;
      }
      function N(r) {
        return r === o;
      }
      function C(r) {
        return (r >= D && r <= u) || (r >= i && r <= h);
      }
      function A(r, a, l, L) {
        let m = "",
          p = 0,
          R = -1,
          y = 0,
          E = 0;
        for (let P = 0; P <= r.length; ++P) {
          if (P < r.length) E = r.charCodeAt(P);
          else {
            if (L(E)) break;
            E = o;
          }
          if (L(E)) {
            if (!(R === P - 1 || y === 1))
              if (y === 2) {
                if (
                  m.length < 2 ||
                  p !== 2 ||
                  m.charCodeAt(m.length - 1) !== w ||
                  m.charCodeAt(m.length - 2) !== w
                ) {
                  if (m.length > 2) {
                    const T = m.lastIndexOf(l);
                    T === -1
                      ? ((m = ""), (p = 0))
                      : ((m = m.slice(0, T)),
                        (p = m.length - 1 - m.lastIndexOf(l))),
                      (R = P),
                      (y = 0);
                    continue;
                  } else if (m.length !== 0) {
                    (m = ""), (p = 0), (R = P), (y = 0);
                    continue;
                  }
                }
                a && ((m += m.length > 0 ? `${l}..` : ".."), (p = 2));
              } else
                m.length > 0
                  ? (m += `${l}${r.slice(R + 1, P)}`)
                  : (m = r.slice(R + 1, P)),
                  (p = P - R - 1);
            (R = P), (y = 0);
          } else E === w && y !== -1 ? ++y : (y = -1);
        }
        return m;
      }
      function S(r, a) {
        c(a, "pathObject");
        const l = a.dir || a.root,
          L = a.base || `${a.name || ""}${a.ext || ""}`;
        return l ? (l === a.root ? `${l}${L}` : `${l}${r}${L}`) : L;
      }
      n.win32 = {
        resolve(...r) {
          let a = "",
            l = "",
            L = !1;
          for (let m = r.length - 1; m >= -1; m--) {
            let p;
            if (m >= 0) {
              if (((p = r[m]), g(p, "path"), p.length === 0)) continue;
            } else
              a.length === 0
                ? (p = M.cwd())
                : ((p = M.env[`=${a}`] || M.cwd()),
                  (p === void 0 ||
                    (p.slice(0, 2).toLowerCase() !== a.toLowerCase() &&
                      p.charCodeAt(2) === s)) &&
                    (p = `${a}\\`));
            const R = p.length;
            let y = 0,
              E = "",
              P = !1;
            const T = p.charCodeAt(0);
            if (R === 1) _(T) && ((y = 1), (P = !0));
            else if (_(T))
              if (((P = !0), _(p.charCodeAt(1)))) {
                let F = 2,
                  U = F;
                for (; F < R && !_(p.charCodeAt(F)); ) F++;
                if (F < R && F !== U) {
                  const W = p.slice(U, F);
                  for (U = F; F < R && _(p.charCodeAt(F)); ) F++;
                  if (F < R && F !== U) {
                    for (U = F; F < R && !_(p.charCodeAt(F)); ) F++;
                    (F === R || F !== U) &&
                      ((E = `\\\\${W}\\${p.slice(U, F)}`), (y = F));
                  }
                }
              } else y = 1;
            else
              C(T) &&
                p.charCodeAt(1) === d &&
                ((E = p.slice(0, 2)),
                (y = 2),
                R > 2 && _(p.charCodeAt(2)) && ((P = !0), (y = 3)));
            if (E.length > 0)
              if (a.length > 0) {
                if (E.toLowerCase() !== a.toLowerCase()) continue;
              } else a = E;
            if (L) {
              if (a.length > 0) break;
            } else if (
              ((l = `${p.slice(y)}\\${l}`), (L = P), P && a.length > 0)
            )
              break;
          }
          return (l = A(l, !L, "\\", _)), L ? `${a}\\${l}` : `${a}${l}` || ".";
        },
        normalize(r) {
          g(r, "path");
          const a = r.length;
          if (a === 0) return ".";
          let l = 0,
            L,
            m = !1;
          const p = r.charCodeAt(0);
          if (a === 1) return N(p) ? "\\" : r;
          if (_(p))
            if (((m = !0), _(r.charCodeAt(1)))) {
              let y = 2,
                E = y;
              for (; y < a && !_(r.charCodeAt(y)); ) y++;
              if (y < a && y !== E) {
                const P = r.slice(E, y);
                for (E = y; y < a && _(r.charCodeAt(y)); ) y++;
                if (y < a && y !== E) {
                  for (E = y; y < a && !_(r.charCodeAt(y)); ) y++;
                  if (y === a) return `\\\\${P}\\${r.slice(E)}\\`;
                  y !== E && ((L = `\\\\${P}\\${r.slice(E, y)}`), (l = y));
                }
              }
            } else l = 1;
          else
            C(p) &&
              r.charCodeAt(1) === d &&
              ((L = r.slice(0, 2)),
              (l = 2),
              a > 2 && _(r.charCodeAt(2)) && ((m = !0), (l = 3)));
          let R = l < a ? A(r.slice(l), !m, "\\", _) : "";
          return (
            R.length === 0 && !m && (R = "."),
            R.length > 0 && _(r.charCodeAt(a - 1)) && (R += "\\"),
            L === void 0 ? (m ? `\\${R}` : R) : m ? `${L}\\${R}` : `${L}${R}`
          );
        },
        isAbsolute(r) {
          g(r, "path");
          const a = r.length;
          if (a === 0) return !1;
          const l = r.charCodeAt(0);
          return (
            _(l) ||
            (a > 2 && C(l) && r.charCodeAt(1) === d && _(r.charCodeAt(2)))
          );
        },
        join(...r) {
          if (r.length === 0) return ".";
          let a, l;
          for (let p = 0; p < r.length; ++p) {
            const R = r[p];
            g(R, "path"),
              R.length > 0 && (a === void 0 ? (a = l = R) : (a += `\\${R}`));
          }
          if (a === void 0) return ".";
          let L = !0,
            m = 0;
          if (typeof l == "string" && _(l.charCodeAt(0))) {
            ++m;
            const p = l.length;
            p > 1 &&
              _(l.charCodeAt(1)) &&
              (++m, p > 2 && (_(l.charCodeAt(2)) ? ++m : (L = !1)));
          }
          if (L) {
            for (; m < a.length && _(a.charCodeAt(m)); ) m++;
            m >= 2 && (a = `\\${a.slice(m)}`);
          }
          return n.win32.normalize(a);
        },
        relative(r, a) {
          if ((g(r, "from"), g(a, "to"), r === a)) return "";
          const l = n.win32.resolve(r),
            L = n.win32.resolve(a);
          if (
            l === L ||
            ((r = l.toLowerCase()), (a = L.toLowerCase()), r === a)
          )
            return "";
          let m = 0;
          for (; m < r.length && r.charCodeAt(m) === s; ) m++;
          let p = r.length;
          for (; p - 1 > m && r.charCodeAt(p - 1) === s; ) p--;
          const R = p - m;
          let y = 0;
          for (; y < a.length && a.charCodeAt(y) === s; ) y++;
          let E = a.length;
          for (; E - 1 > y && a.charCodeAt(E - 1) === s; ) E--;
          const P = E - y,
            T = R < P ? R : P;
          let F = -1,
            U = 0;
          for (; U < T; U++) {
            const V = r.charCodeAt(m + U);
            if (V !== a.charCodeAt(y + U)) break;
            V === s && (F = U);
          }
          if (U !== T) {
            if (F === -1) return L;
          } else {
            if (P > T) {
              if (a.charCodeAt(y + U) === s) return L.slice(y + U + 1);
              if (U === 2) return L.slice(y + U);
            }
            R > T && (r.charCodeAt(m + U) === s ? (F = U) : U === 2 && (F = 3)),
              F === -1 && (F = 0);
          }
          let W = "";
          for (U = m + F + 1; U <= p; ++U)
            (U === p || r.charCodeAt(U) === s) &&
              (W += W.length === 0 ? ".." : "\\..");
          return (
            (y += F),
            W.length > 0
              ? `${W}${L.slice(y, E)}`
              : (L.charCodeAt(y) === s && ++y, L.slice(y, E))
          );
        },
        toNamespacedPath(r) {
          if (typeof r != "string" || r.length === 0) return r;
          const a = n.win32.resolve(r);
          if (a.length <= 2) return r;
          if (a.charCodeAt(0) === s) {
            if (a.charCodeAt(1) === s) {
              const l = a.charCodeAt(2);
              if (l !== e && l !== w) return `\\\\?\\UNC\\${a.slice(2)}`;
            }
          } else if (
            C(a.charCodeAt(0)) &&
            a.charCodeAt(1) === d &&
            a.charCodeAt(2) === s
          )
            return `\\\\?\\${a}`;
          return r;
        },
        dirname(r) {
          g(r, "path");
          const a = r.length;
          if (a === 0) return ".";
          let l = -1,
            L = 0;
          const m = r.charCodeAt(0);
          if (a === 1) return _(m) ? r : ".";
          if (_(m)) {
            if (((l = L = 1), _(r.charCodeAt(1)))) {
              let y = 2,
                E = y;
              for (; y < a && !_(r.charCodeAt(y)); ) y++;
              if (y < a && y !== E) {
                for (E = y; y < a && _(r.charCodeAt(y)); ) y++;
                if (y < a && y !== E) {
                  for (E = y; y < a && !_(r.charCodeAt(y)); ) y++;
                  if (y === a) return r;
                  y !== E && (l = L = y + 1);
                }
              }
            }
          } else
            C(m) &&
              r.charCodeAt(1) === d &&
              ((l = a > 2 && _(r.charCodeAt(2)) ? 3 : 2), (L = l));
          let p = -1,
            R = !0;
          for (let y = a - 1; y >= L; --y)
            if (_(r.charCodeAt(y))) {
              if (!R) {
                p = y;
                break;
              }
            } else R = !1;
          if (p === -1) {
            if (l === -1) return ".";
            p = l;
          }
          return r.slice(0, p);
        },
        basename(r, a) {
          a !== void 0 && g(a, "ext"), g(r, "path");
          let l = 0,
            L = -1,
            m = !0,
            p;
          if (
            (r.length >= 2 &&
              C(r.charCodeAt(0)) &&
              r.charCodeAt(1) === d &&
              (l = 2),
            a !== void 0 && a.length > 0 && a.length <= r.length)
          ) {
            if (a === r) return "";
            let R = a.length - 1,
              y = -1;
            for (p = r.length - 1; p >= l; --p) {
              const E = r.charCodeAt(p);
              if (_(E)) {
                if (!m) {
                  l = p + 1;
                  break;
                }
              } else
                y === -1 && ((m = !1), (y = p + 1)),
                  R >= 0 &&
                    (E === a.charCodeAt(R)
                      ? --R === -1 && (L = p)
                      : ((R = -1), (L = y)));
            }
            return (
              l === L ? (L = y) : L === -1 && (L = r.length), r.slice(l, L)
            );
          }
          for (p = r.length - 1; p >= l; --p)
            if (_(r.charCodeAt(p))) {
              if (!m) {
                l = p + 1;
                break;
              }
            } else L === -1 && ((m = !1), (L = p + 1));
          return L === -1 ? "" : r.slice(l, L);
        },
        extname(r) {
          g(r, "path");
          let a = 0,
            l = -1,
            L = 0,
            m = -1,
            p = !0,
            R = 0;
          r.length >= 2 &&
            r.charCodeAt(1) === d &&
            C(r.charCodeAt(0)) &&
            (a = L = 2);
          for (let y = r.length - 1; y >= a; --y) {
            const E = r.charCodeAt(y);
            if (_(E)) {
              if (!p) {
                L = y + 1;
                break;
              }
              continue;
            }
            m === -1 && ((p = !1), (m = y + 1)),
              E === w
                ? l === -1
                  ? (l = y)
                  : R !== 1 && (R = 1)
                : l !== -1 && (R = -1);
          }
          return l === -1 ||
            m === -1 ||
            R === 0 ||
            (R === 1 && l === m - 1 && l === L + 1)
            ? ""
            : r.slice(l, m);
        },
        format: S.bind(null, "\\"),
        parse(r) {
          g(r, "path");
          const a = { root: "", dir: "", base: "", ext: "", name: "" };
          if (r.length === 0) return a;
          const l = r.length;
          let L = 0,
            m = r.charCodeAt(0);
          if (l === 1)
            return _(m)
              ? ((a.root = a.dir = r), a)
              : ((a.base = a.name = r), a);
          if (_(m)) {
            if (((L = 1), _(r.charCodeAt(1)))) {
              let F = 2,
                U = F;
              for (; F < l && !_(r.charCodeAt(F)); ) F++;
              if (F < l && F !== U) {
                for (U = F; F < l && _(r.charCodeAt(F)); ) F++;
                if (F < l && F !== U) {
                  for (U = F; F < l && !_(r.charCodeAt(F)); ) F++;
                  F === l ? (L = F) : F !== U && (L = F + 1);
                }
              }
            }
          } else if (C(m) && r.charCodeAt(1) === d) {
            if (l <= 2) return (a.root = a.dir = r), a;
            if (((L = 2), _(r.charCodeAt(2)))) {
              if (l === 3) return (a.root = a.dir = r), a;
              L = 3;
            }
          }
          L > 0 && (a.root = r.slice(0, L));
          let p = -1,
            R = L,
            y = -1,
            E = !0,
            P = r.length - 1,
            T = 0;
          for (; P >= L; --P) {
            if (((m = r.charCodeAt(P)), _(m))) {
              if (!E) {
                R = P + 1;
                break;
              }
              continue;
            }
            y === -1 && ((E = !1), (y = P + 1)),
              m === w
                ? p === -1
                  ? (p = P)
                  : T !== 1 && (T = 1)
                : p !== -1 && (T = -1);
          }
          return (
            y !== -1 &&
              (p === -1 || T === 0 || (T === 1 && p === y - 1 && p === R + 1)
                ? (a.base = a.name = r.slice(R, y))
                : ((a.name = r.slice(R, p)),
                  (a.base = r.slice(R, y)),
                  (a.ext = r.slice(p, y)))),
            R > 0 && R !== L ? (a.dir = r.slice(0, R - 1)) : (a.dir = a.root),
            a
          );
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null,
      };
      const v = (() => {
        if (b) {
          const r = /\\/g;
          return () => {
            const a = M.cwd().replace(r, "/");
            return a.slice(a.indexOf("/"));
          };
        }
        return () => M.cwd();
      })();
      (n.posix = {
        resolve(...r) {
          let a = "",
            l = !1;
          for (let L = r.length - 1; L >= -1 && !l; L--) {
            const m = L >= 0 ? r[L] : v();
            g(m, "path"),
              m.length !== 0 &&
                ((a = `${m}/${a}`), (l = m.charCodeAt(0) === o));
          }
          return (a = A(a, !l, "/", N)), l ? `/${a}` : a.length > 0 ? a : ".";
        },
        normalize(r) {
          if ((g(r, "path"), r.length === 0)) return ".";
          const a = r.charCodeAt(0) === o,
            l = r.charCodeAt(r.length - 1) === o;
          return (
            (r = A(r, !a, "/", N)),
            r.length === 0
              ? a
                ? "/"
                : l
                ? "./"
                : "."
              : (l && (r += "/"), a ? `/${r}` : r)
          );
        },
        isAbsolute(r) {
          return g(r, "path"), r.length > 0 && r.charCodeAt(0) === o;
        },
        join(...r) {
          if (r.length === 0) return ".";
          let a;
          for (let l = 0; l < r.length; ++l) {
            const L = r[l];
            g(L, "path"),
              L.length > 0 && (a === void 0 ? (a = L) : (a += `/${L}`));
          }
          return a === void 0 ? "." : n.posix.normalize(a);
        },
        relative(r, a) {
          if (
            (g(r, "from"),
            g(a, "to"),
            r === a ||
              ((r = n.posix.resolve(r)), (a = n.posix.resolve(a)), r === a))
          )
            return "";
          const l = 1,
            L = r.length,
            m = L - l,
            p = 1,
            R = a.length - p,
            y = m < R ? m : R;
          let E = -1,
            P = 0;
          for (; P < y; P++) {
            const F = r.charCodeAt(l + P);
            if (F !== a.charCodeAt(p + P)) break;
            F === o && (E = P);
          }
          if (P === y)
            if (R > y) {
              if (a.charCodeAt(p + P) === o) return a.slice(p + P + 1);
              if (P === 0) return a.slice(p + P);
            } else
              m > y &&
                (r.charCodeAt(l + P) === o ? (E = P) : P === 0 && (E = 0));
          let T = "";
          for (P = l + E + 1; P <= L; ++P)
            (P === L || r.charCodeAt(P) === o) &&
              (T += T.length === 0 ? ".." : "/..");
          return `${T}${a.slice(p + E)}`;
        },
        toNamespacedPath(r) {
          return r;
        },
        dirname(r) {
          if ((g(r, "path"), r.length === 0)) return ".";
          const a = r.charCodeAt(0) === o;
          let l = -1,
            L = !0;
          for (let m = r.length - 1; m >= 1; --m)
            if (r.charCodeAt(m) === o) {
              if (!L) {
                l = m;
                break;
              }
            } else L = !1;
          return l === -1
            ? a
              ? "/"
              : "."
            : a && l === 1
            ? "//"
            : r.slice(0, l);
        },
        basename(r, a) {
          a !== void 0 && g(a, "ext"), g(r, "path");
          let l = 0,
            L = -1,
            m = !0,
            p;
          if (a !== void 0 && a.length > 0 && a.length <= r.length) {
            if (a === r) return "";
            let R = a.length - 1,
              y = -1;
            for (p = r.length - 1; p >= 0; --p) {
              const E = r.charCodeAt(p);
              if (E === o) {
                if (!m) {
                  l = p + 1;
                  break;
                }
              } else
                y === -1 && ((m = !1), (y = p + 1)),
                  R >= 0 &&
                    (E === a.charCodeAt(R)
                      ? --R === -1 && (L = p)
                      : ((R = -1), (L = y)));
            }
            return (
              l === L ? (L = y) : L === -1 && (L = r.length), r.slice(l, L)
            );
          }
          for (p = r.length - 1; p >= 0; --p)
            if (r.charCodeAt(p) === o) {
              if (!m) {
                l = p + 1;
                break;
              }
            } else L === -1 && ((m = !1), (L = p + 1));
          return L === -1 ? "" : r.slice(l, L);
        },
        extname(r) {
          g(r, "path");
          let a = -1,
            l = 0,
            L = -1,
            m = !0,
            p = 0;
          for (let R = r.length - 1; R >= 0; --R) {
            const y = r.charCodeAt(R);
            if (y === o) {
              if (!m) {
                l = R + 1;
                break;
              }
              continue;
            }
            L === -1 && ((m = !1), (L = R + 1)),
              y === w
                ? a === -1
                  ? (a = R)
                  : p !== 1 && (p = 1)
                : a !== -1 && (p = -1);
          }
          return a === -1 ||
            L === -1 ||
            p === 0 ||
            (p === 1 && a === L - 1 && a === l + 1)
            ? ""
            : r.slice(a, L);
        },
        format: S.bind(null, "/"),
        parse(r) {
          g(r, "path");
          const a = { root: "", dir: "", base: "", ext: "", name: "" };
          if (r.length === 0) return a;
          const l = r.charCodeAt(0) === o;
          let L;
          l ? ((a.root = "/"), (L = 1)) : (L = 0);
          let m = -1,
            p = 0,
            R = -1,
            y = !0,
            E = r.length - 1,
            P = 0;
          for (; E >= L; --E) {
            const T = r.charCodeAt(E);
            if (T === o) {
              if (!y) {
                p = E + 1;
                break;
              }
              continue;
            }
            R === -1 && ((y = !1), (R = E + 1)),
              T === w
                ? m === -1
                  ? (m = E)
                  : P !== 1 && (P = 1)
                : m !== -1 && (P = -1);
          }
          if (R !== -1) {
            const T = p === 0 && l ? 1 : p;
            m === -1 || P === 0 || (P === 1 && m === R - 1 && m === p + 1)
              ? (a.base = a.name = r.slice(T, R))
              : ((a.name = r.slice(T, m)),
                (a.base = r.slice(T, R)),
                (a.ext = r.slice(m, R)));
          }
          return p > 0 ? (a.dir = r.slice(0, p - 1)) : l && (a.dir = "/"), a;
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null,
      }),
        (n.posix.win32 = n.win32.win32 = n.win32),
        (n.posix.posix = n.win32.posix = n.posix),
        (n.normalize = b ? n.win32.normalize : n.posix.normalize),
        (n.resolve = b ? n.win32.resolve : n.posix.resolve),
        (n.relative = b ? n.win32.relative : n.posix.relative),
        (n.dirname = b ? n.win32.dirname : n.posix.dirname),
        (n.basename = b ? n.win32.basename : n.posix.basename),
        (n.extname = b ? n.win32.extname : n.posix.extname),
        (n.sep = b ? n.win32.sep : n.posix.sep);
    }),
    X(J[14], Z([0, 1, 57, 13]), function (O, n, M, D) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.uriToFsPath = n.URI = void 0);
      const i = /^\w[\w\d+.-]*$/,
        u = /^\//,
        h = /^\/\//;
      function w(l, L) {
        if (!l.scheme && L)
          throw new Error(
            `[UriError]: Scheme is missing: {scheme: "", authority: "${l.authority}", path: "${l.path}", query: "${l.query}", fragment: "${l.fragment}"}`,
          );
        if (l.scheme && !i.test(l.scheme))
          throw new Error("[UriError]: Scheme contains illegal characters.");
        if (l.path) {
          if (l.authority) {
            if (!u.test(l.path))
              throw new Error(
                '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
              );
          } else if (h.test(l.path))
            throw new Error(
              '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
            );
        }
      }
      function o(l, L) {
        return !l && !L ? "file" : l;
      }
      function s(l, L) {
        switch (l) {
          case "https":
          case "http":
          case "file":
            L ? L[0] !== e && (L = e + L) : (L = e);
            break;
        }
        return L;
      }
      const d = "",
        e = "/",
        f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
      class c {
        static isUri(L) {
          return L instanceof c
            ? !0
            : L
            ? typeof L.authority == "string" &&
              typeof L.fragment == "string" &&
              typeof L.path == "string" &&
              typeof L.query == "string" &&
              typeof L.scheme == "string" &&
              typeof L.fsPath == "string" &&
              typeof L.with == "function" &&
              typeof L.toString == "function"
            : !1;
        }
        constructor(L, m, p, R, y, E = !1) {
          typeof L == "object"
            ? ((this.scheme = L.scheme || d),
              (this.authority = L.authority || d),
              (this.path = L.path || d),
              (this.query = L.query || d),
              (this.fragment = L.fragment || d))
            : ((this.scheme = o(L, E)),
              (this.authority = m || d),
              (this.path = s(this.scheme, p || d)),
              (this.query = R || d),
              (this.fragment = y || d),
              w(this, E));
        }
        get fsPath() {
          return A(this, !1);
        }
        with(L) {
          if (!L) return this;
          let { scheme: m, authority: p, path: R, query: y, fragment: E } = L;
          return (
            m === void 0 ? (m = this.scheme) : m === null && (m = d),
            p === void 0 ? (p = this.authority) : p === null && (p = d),
            R === void 0 ? (R = this.path) : R === null && (R = d),
            y === void 0 ? (y = this.query) : y === null && (y = d),
            E === void 0 ? (E = this.fragment) : E === null && (E = d),
            m === this.scheme &&
            p === this.authority &&
            R === this.path &&
            y === this.query &&
            E === this.fragment
              ? this
              : new b(m, p, R, y, E)
          );
        }
        static parse(L, m = !1) {
          const p = f.exec(L);
          return p
            ? new b(
                p[2] || d,
                a(p[4] || d),
                a(p[5] || d),
                a(p[7] || d),
                a(p[9] || d),
                m,
              )
            : new b(d, d, d, d, d);
        }
        static file(L) {
          let m = d;
          if (
            (D.isWindows && (L = L.replace(/\\/g, e)), L[0] === e && L[1] === e)
          ) {
            const p = L.indexOf(e, 2);
            p === -1
              ? ((m = L.substring(2)), (L = e))
              : ((m = L.substring(2, p)), (L = L.substring(p) || e));
          }
          return new b("file", m, L, d, d);
        }
        static from(L, m) {
          return new b(L.scheme, L.authority, L.path, L.query, L.fragment, m);
        }
        static joinPath(L, ...m) {
          if (!L.path)
            throw new Error(
              "[UriError]: cannot call joinPath on URI without path",
            );
          let p;
          return (
            D.isWindows && L.scheme === "file"
              ? (p = c.file(M.win32.join(A(L, !0), ...m)).path)
              : (p = M.posix.join(L.path, ...m)),
            L.with({ path: p })
          );
        }
        toString(L = !1) {
          return S(this, L);
        }
        toJSON() {
          return this;
        }
        static revive(L) {
          var m, p;
          if (L) {
            if (L instanceof c) return L;
            {
              const R = new b(L);
              return (
                (R._formatted =
                  (m = L.external) !== null && m !== void 0 ? m : null),
                (R._fsPath =
                  L._sep === g && (p = L.fsPath) !== null && p !== void 0
                    ? p
                    : null),
                R
              );
            }
          } else return L;
        }
      }
      n.URI = c;
      const g = D.isWindows ? 1 : void 0;
      class b extends c {
        constructor() {
          super(...arguments), (this._formatted = null), (this._fsPath = null);
        }
        get fsPath() {
          return this._fsPath || (this._fsPath = A(this, !1)), this._fsPath;
        }
        toString(L = !1) {
          return L
            ? S(this, !0)
            : (this._formatted || (this._formatted = S(this, !1)),
              this._formatted);
        }
        toJSON() {
          const L = { $mid: 1 };
          return (
            this._fsPath && ((L.fsPath = this._fsPath), (L._sep = g)),
            this._formatted && (L.external = this._formatted),
            this.path && (L.path = this.path),
            this.scheme && (L.scheme = this.scheme),
            this.authority && (L.authority = this.authority),
            this.query && (L.query = this.query),
            this.fragment && (L.fragment = this.fragment),
            L
          );
        }
      }
      const _ = {
        [58]: "%3A",
        [47]: "%2F",
        [63]: "%3F",
        [35]: "%23",
        [91]: "%5B",
        [93]: "%5D",
        [64]: "%40",
        [33]: "%21",
        [36]: "%24",
        [38]: "%26",
        [39]: "%27",
        [40]: "%28",
        [41]: "%29",
        [42]: "%2A",
        [43]: "%2B",
        [44]: "%2C",
        [59]: "%3B",
        [61]: "%3D",
        [32]: "%20",
      };
      function N(l, L, m) {
        let p,
          R = -1;
        for (let y = 0; y < l.length; y++) {
          const E = l.charCodeAt(y);
          if (
            (E >= 97 && E <= 122) ||
            (E >= 65 && E <= 90) ||
            (E >= 48 && E <= 57) ||
            E === 45 ||
            E === 46 ||
            E === 95 ||
            E === 126 ||
            (L && E === 47) ||
            (m && E === 91) ||
            (m && E === 93) ||
            (m && E === 58)
          )
            R !== -1 &&
              ((p += encodeURIComponent(l.substring(R, y))), (R = -1)),
              p !== void 0 && (p += l.charAt(y));
          else {
            p === void 0 && (p = l.substr(0, y));
            const P = _[E];
            P !== void 0
              ? (R !== -1 &&
                  ((p += encodeURIComponent(l.substring(R, y))), (R = -1)),
                (p += P))
              : R === -1 && (R = y);
          }
        }
        return (
          R !== -1 && (p += encodeURIComponent(l.substring(R))),
          p !== void 0 ? p : l
        );
      }
      function C(l) {
        let L;
        for (let m = 0; m < l.length; m++) {
          const p = l.charCodeAt(m);
          p === 35 || p === 63
            ? (L === void 0 && (L = l.substr(0, m)), (L += _[p]))
            : L !== void 0 && (L += l[m]);
        }
        return L !== void 0 ? L : l;
      }
      function A(l, L) {
        let m;
        return (
          l.authority && l.path.length > 1 && l.scheme === "file"
            ? (m = `//${l.authority}${l.path}`)
            : l.path.charCodeAt(0) === 47 &&
              ((l.path.charCodeAt(1) >= 65 && l.path.charCodeAt(1) <= 90) ||
                (l.path.charCodeAt(1) >= 97 && l.path.charCodeAt(1) <= 122)) &&
              l.path.charCodeAt(2) === 58
            ? L
              ? (m = l.path.substr(1))
              : (m = l.path[1].toLowerCase() + l.path.substr(2))
            : (m = l.path),
          D.isWindows && (m = m.replace(/\//g, "\\")),
          m
        );
      }
      n.uriToFsPath = A;
      function S(l, L) {
        const m = L ? C : N;
        let p = "",
          { scheme: R, authority: y, path: E, query: P, fragment: T } = l;
        if (
          (R && ((p += R), (p += ":")),
          (y || R === "file") && ((p += e), (p += e)),
          y)
        ) {
          let F = y.indexOf("@");
          if (F !== -1) {
            const U = y.substr(0, F);
            (y = y.substr(F + 1)),
              (F = U.lastIndexOf(":")),
              F === -1
                ? (p += m(U, !1, !1))
                : ((p += m(U.substr(0, F), !1, !1)),
                  (p += ":"),
                  (p += m(U.substr(F + 1), !1, !0))),
              (p += "@");
          }
          (y = y.toLowerCase()),
            (F = y.lastIndexOf(":")),
            F === -1
              ? (p += m(y, !1, !0))
              : ((p += m(y.substr(0, F), !1, !0)), (p += y.substr(F)));
        }
        if (E) {
          if (
            E.length >= 3 &&
            E.charCodeAt(0) === 47 &&
            E.charCodeAt(2) === 58
          ) {
            const F = E.charCodeAt(1);
            F >= 65 &&
              F <= 90 &&
              (E = `/${String.fromCharCode(F + 32)}:${E.substr(3)}`);
          } else if (E.length >= 2 && E.charCodeAt(1) === 58) {
            const F = E.charCodeAt(0);
            F >= 65 &&
              F <= 90 &&
              (E = `${String.fromCharCode(F + 32)}:${E.substr(2)}`);
          }
          p += m(E, !0, !1);
        }
        return (
          P && ((p += "?"), (p += m(P, !1, !1))),
          T && ((p += "#"), (p += L ? T : N(T, !1, !1))),
          p
        );
      }
      function v(l) {
        try {
          return decodeURIComponent(l);
        } catch {
          return l.length > 3 ? l.substr(0, 3) + v(l.substr(3)) : l;
        }
      }
      const r = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
      function a(l) {
        return l.match(r) ? l.replace(r, (L) => v(L)) : l;
      }
    }),
    X(J[61], Z([0, 1, 4, 7, 10, 11, 13, 5]), function (O, n, M, D, i, u, h, w) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.create =
          n.SimpleWorkerServer =
          n.SimpleWorkerClient =
          n.logOnceWebWorkerWarning =
            void 0);
      const o = "$initialize";
      let s = !1;
      function d(a) {
        h.isWeb &&
          (s ||
            ((s = !0),
            console.warn(
              "Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq",
            )),
          console.warn(a.message));
      }
      n.logOnceWebWorkerWarning = d;
      class e {
        constructor(l, L, m, p) {
          (this.vsWorker = l),
            (this.req = L),
            (this.method = m),
            (this.args = p),
            (this.type = 0);
        }
      }
      class f {
        constructor(l, L, m, p) {
          (this.vsWorker = l),
            (this.seq = L),
            (this.res = m),
            (this.err = p),
            (this.type = 1);
        }
      }
      class c {
        constructor(l, L, m, p) {
          (this.vsWorker = l),
            (this.req = L),
            (this.eventName = m),
            (this.arg = p),
            (this.type = 2);
        }
      }
      class g {
        constructor(l, L, m) {
          (this.vsWorker = l),
            (this.req = L),
            (this.event = m),
            (this.type = 3);
        }
      }
      class b {
        constructor(l, L) {
          (this.vsWorker = l), (this.req = L), (this.type = 4);
        }
      }
      class _ {
        constructor(l) {
          (this._workerId = -1),
            (this._handler = l),
            (this._lastSentReq = 0),
            (this._pendingReplies = Object.create(null)),
            (this._pendingEmitters = new Map()),
            (this._pendingEvents = new Map());
        }
        setWorkerId(l) {
          this._workerId = l;
        }
        sendMessage(l, L) {
          const m = String(++this._lastSentReq);
          return new Promise((p, R) => {
            (this._pendingReplies[m] = { resolve: p, reject: R }),
              this._send(new e(this._workerId, m, l, L));
          });
        }
        listen(l, L) {
          let m = null;
          const p = new D.Emitter({
            onWillAddFirstListener: () => {
              (m = String(++this._lastSentReq)),
                this._pendingEmitters.set(m, p),
                this._send(new c(this._workerId, m, l, L));
            },
            onDidRemoveLastListener: () => {
              this._pendingEmitters.delete(m),
                this._send(new b(this._workerId, m)),
                (m = null);
            },
          });
          return p.event;
        }
        handleMessage(l) {
          !l ||
            !l.vsWorker ||
            (this._workerId !== -1 && l.vsWorker !== this._workerId) ||
            this._handleMessage(l);
        }
        _handleMessage(l) {
          switch (l.type) {
            case 1:
              return this._handleReplyMessage(l);
            case 0:
              return this._handleRequestMessage(l);
            case 2:
              return this._handleSubscribeEventMessage(l);
            case 3:
              return this._handleEventMessage(l);
            case 4:
              return this._handleUnsubscribeEventMessage(l);
          }
        }
        _handleReplyMessage(l) {
          if (!this._pendingReplies[l.seq]) {
            console.warn("Got reply to unknown seq");
            return;
          }
          const L = this._pendingReplies[l.seq];
          if ((delete this._pendingReplies[l.seq], l.err)) {
            let m = l.err;
            l.err.$isError &&
              ((m = new Error()),
              (m.name = l.err.name),
              (m.message = l.err.message),
              (m.stack = l.err.stack)),
              L.reject(m);
            return;
          }
          L.resolve(l.res);
        }
        _handleRequestMessage(l) {
          const L = l.req;
          this._handler.handleMessage(l.method, l.args).then(
            (p) => {
              this._send(new f(this._workerId, L, p, void 0));
            },
            (p) => {
              p.detail instanceof Error &&
                (p.detail = (0, M.transformErrorForSerialization)(p.detail)),
                this._send(
                  new f(
                    this._workerId,
                    L,
                    void 0,
                    (0, M.transformErrorForSerialization)(p),
                  ),
                );
            },
          );
        }
        _handleSubscribeEventMessage(l) {
          const L = l.req,
            m = this._handler.handleEvent(
              l.eventName,
              l.arg,
            )((p) => {
              this._send(new g(this._workerId, L, p));
            });
          this._pendingEvents.set(L, m);
        }
        _handleEventMessage(l) {
          if (!this._pendingEmitters.has(l.req)) {
            console.warn("Got event for unknown req");
            return;
          }
          this._pendingEmitters.get(l.req).fire(l.event);
        }
        _handleUnsubscribeEventMessage(l) {
          if (!this._pendingEvents.has(l.req)) {
            console.warn("Got unsubscribe for unknown req");
            return;
          }
          this._pendingEvents.get(l.req).dispose(),
            this._pendingEvents.delete(l.req);
        }
        _send(l) {
          const L = [];
          if (l.type === 0)
            for (let m = 0; m < l.args.length; m++)
              l.args[m] instanceof ArrayBuffer && L.push(l.args[m]);
          else l.type === 1 && l.res instanceof ArrayBuffer && L.push(l.res);
          this._handler.sendMessage(l, L);
        }
      }
      class N extends i.Disposable {
        constructor(l, L, m) {
          super();
          let p = null;
          (this._worker = this._register(
            l.create(
              "vs/base/common/worker/simpleWorker",
              (F) => {
                this._protocol.handleMessage(F);
              },
              (F) => {
                p?.(F);
              },
            ),
          )),
            (this._protocol = new _({
              sendMessage: (F, U) => {
                this._worker.postMessage(F, U);
              },
              handleMessage: (F, U) => {
                if (typeof m[F] != "function")
                  return Promise.reject(
                    new Error("Missing method " + F + " on main thread host."),
                  );
                try {
                  return Promise.resolve(m[F].apply(m, U));
                } catch (W) {
                  return Promise.reject(W);
                }
              },
              handleEvent: (F, U) => {
                if (A(F)) {
                  const W = m[F].call(m, U);
                  if (typeof W != "function")
                    throw new Error(
                      `Missing dynamic event ${F} on main thread host.`,
                    );
                  return W;
                }
                if (C(F)) {
                  const W = m[F];
                  if (typeof W != "function")
                    throw new Error(`Missing event ${F} on main thread host.`);
                  return W;
                }
                throw new Error(`Malformed event name ${F}`);
              },
            })),
            this._protocol.setWorkerId(this._worker.getId());
          let R = null;
          const y = globalThis.require;
          typeof y < "u" && typeof y.getConfig == "function"
            ? (R = y.getConfig())
            : typeof globalThis.requirejs < "u" &&
              (R = globalThis.requirejs.s.contexts._.config);
          const E = (0, u.getAllMethodNames)(m);
          this._onModuleLoaded = this._protocol.sendMessage(o, [
            this._worker.getId(),
            JSON.parse(JSON.stringify(R)),
            L,
            E,
          ]);
          const P = (F, U) => this._request(F, U),
            T = (F, U) => this._protocol.listen(F, U);
          this._lazyProxy = new Promise((F, U) => {
            (p = U),
              this._onModuleLoaded.then(
                (W) => {
                  F(S(W, P, T));
                },
                (W) => {
                  U(W), this._onError("Worker failed to load " + L, W);
                },
              );
          });
        }
        getProxyObject() {
          return this._lazyProxy;
        }
        _request(l, L) {
          return new Promise((m, p) => {
            this._onModuleLoaded.then(() => {
              this._protocol.sendMessage(l, L).then(m, p);
            }, p);
          });
        }
        _onError(l, L) {
          console.error(l), console.info(L);
        }
      }
      n.SimpleWorkerClient = N;
      function C(a) {
        return (
          a[0] === "o" && a[1] === "n" && w.isUpperAsciiLetter(a.charCodeAt(2))
        );
      }
      function A(a) {
        return /^onDynamic/.test(a) && w.isUpperAsciiLetter(a.charCodeAt(9));
      }
      function S(a, l, L) {
        const m = (y) =>
            function () {
              const E = Array.prototype.slice.call(arguments, 0);
              return l(y, E);
            },
          p = (y) =>
            function (E) {
              return L(y, E);
            },
          R = {};
        for (const y of a) {
          if (A(y)) {
            R[y] = p(y);
            continue;
          }
          if (C(y)) {
            R[y] = L(y, void 0);
            continue;
          }
          R[y] = m(y);
        }
        return R;
      }
      class v {
        constructor(l, L) {
          (this._requestHandlerFactory = L),
            (this._requestHandler = null),
            (this._protocol = new _({
              sendMessage: (m, p) => {
                l(m, p);
              },
              handleMessage: (m, p) => this._handleMessage(m, p),
              handleEvent: (m, p) => this._handleEvent(m, p),
            }));
        }
        onmessage(l) {
          this._protocol.handleMessage(l);
        }
        _handleMessage(l, L) {
          if (l === o) return this.initialize(L[0], L[1], L[2], L[3]);
          if (
            !this._requestHandler ||
            typeof this._requestHandler[l] != "function"
          )
            return Promise.reject(
              new Error("Missing requestHandler or method: " + l),
            );
          try {
            return Promise.resolve(
              this._requestHandler[l].apply(this._requestHandler, L),
            );
          } catch (m) {
            return Promise.reject(m);
          }
        }
        _handleEvent(l, L) {
          if (!this._requestHandler) throw new Error("Missing requestHandler");
          if (A(l)) {
            const m = this._requestHandler[l].call(this._requestHandler, L);
            if (typeof m != "function")
              throw new Error(`Missing dynamic event ${l} on request handler.`);
            return m;
          }
          if (C(l)) {
            const m = this._requestHandler[l];
            if (typeof m != "function")
              throw new Error(`Missing event ${l} on request handler.`);
            return m;
          }
          throw new Error(`Malformed event name ${l}`);
        }
        initialize(l, L, m, p) {
          this._protocol.setWorkerId(l);
          const E = S(
            p,
            (P, T) => this._protocol.sendMessage(P, T),
            (P, T) => this._protocol.listen(P, T),
          );
          return this._requestHandlerFactory
            ? ((this._requestHandler = this._requestHandlerFactory(E)),
              Promise.resolve((0, u.getAllMethodNames)(this._requestHandler)))
            : (L &&
                (typeof L.baseUrl < "u" && delete L.baseUrl,
                typeof L.paths < "u" &&
                  typeof L.paths.vs < "u" &&
                  delete L.paths.vs,
                typeof L.trustedTypesPolicy !== void 0 &&
                  delete L.trustedTypesPolicy,
                (L.catchError = !0),
                globalThis.require.config(L)),
              new Promise((P, T) => {
                (globalThis.require || O)(
                  [m],
                  (U) => {
                    if (
                      ((this._requestHandler = U.create(E)),
                      !this._requestHandler)
                    ) {
                      T(new Error("No RequestHandler!"));
                      return;
                    }
                    P((0, u.getAllMethodNames)(this._requestHandler));
                  },
                  T,
                );
              }));
        }
      }
      n.SimpleWorkerServer = v;
      function r(a) {
        return new v(a, null);
      }
      n.create = r;
    }),
    X(J[58], Z([15, 55]), function (O, n) {
      return O.create("vs/editor/common/languages", n);
    }),
    X(J[59], Z([0, 1, 34, 14, 2, 53, 58]), function (O, n, M, D, i, u, h) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.TokenizationRegistry =
          n.LazyTokenizationSupport =
          n.InlayHintKind =
          n.Command =
          n.FoldingRangeKind =
          n.TextEdit =
          n.SymbolKinds =
          n.getAriaLabelForSymbol =
          n.symbolKindNames =
          n.isLocationLink =
          n.DocumentHighlightKind =
          n.SignatureHelpTriggerKind =
          n.SelectedSuggestionInfo =
          n.InlineCompletionTriggerKind =
          n.CompletionItemKinds =
          n.EncodedTokenizationResult =
          n.TokenizationResult =
          n.Token =
            void 0);
      class w {
        constructor(l, L, m) {
          (this.offset = l),
            (this.type = L),
            (this.language = m),
            (this._tokenBrand = void 0);
        }
        toString() {
          return "(" + this.offset + ", " + this.type + ")";
        }
      }
      n.Token = w;
      class o {
        constructor(l, L) {
          (this.tokens = l),
            (this.endState = L),
            (this._tokenizationResultBrand = void 0);
        }
      }
      n.TokenizationResult = o;
      class s {
        constructor(l, L) {
          (this.tokens = l),
            (this.endState = L),
            (this._encodedTokenizationResultBrand = void 0);
        }
      }
      n.EncodedTokenizationResult = s;
      var d;
      (function (a) {
        const l = new Map();
        l.set(0, M.Codicon.symbolMethod),
          l.set(1, M.Codicon.symbolFunction),
          l.set(2, M.Codicon.symbolConstructor),
          l.set(3, M.Codicon.symbolField),
          l.set(4, M.Codicon.symbolVariable),
          l.set(5, M.Codicon.symbolClass),
          l.set(6, M.Codicon.symbolStruct),
          l.set(7, M.Codicon.symbolInterface),
          l.set(8, M.Codicon.symbolModule),
          l.set(9, M.Codicon.symbolProperty),
          l.set(10, M.Codicon.symbolEvent),
          l.set(11, M.Codicon.symbolOperator),
          l.set(12, M.Codicon.symbolUnit),
          l.set(13, M.Codicon.symbolValue),
          l.set(15, M.Codicon.symbolEnum),
          l.set(14, M.Codicon.symbolConstant),
          l.set(15, M.Codicon.symbolEnum),
          l.set(16, M.Codicon.symbolEnumMember),
          l.set(17, M.Codicon.symbolKeyword),
          l.set(27, M.Codicon.symbolSnippet),
          l.set(18, M.Codicon.symbolText),
          l.set(19, M.Codicon.symbolColor),
          l.set(20, M.Codicon.symbolFile),
          l.set(21, M.Codicon.symbolReference),
          l.set(22, M.Codicon.symbolCustomColor),
          l.set(23, M.Codicon.symbolFolder),
          l.set(24, M.Codicon.symbolTypeParameter),
          l.set(25, M.Codicon.account),
          l.set(26, M.Codicon.issues);
        function L(R) {
          let y = l.get(R);
          return (
            y ||
              (console.info("No codicon found for CompletionItemKind " + R),
              (y = M.Codicon.symbolProperty)),
            y
          );
        }
        a.toIcon = L;
        const m = new Map();
        m.set("method", 0),
          m.set("function", 1),
          m.set("constructor", 2),
          m.set("field", 3),
          m.set("variable", 4),
          m.set("class", 5),
          m.set("struct", 6),
          m.set("interface", 7),
          m.set("module", 8),
          m.set("property", 9),
          m.set("event", 10),
          m.set("operator", 11),
          m.set("unit", 12),
          m.set("value", 13),
          m.set("constant", 14),
          m.set("enum", 15),
          m.set("enum-member", 16),
          m.set("enumMember", 16),
          m.set("keyword", 17),
          m.set("snippet", 27),
          m.set("text", 18),
          m.set("color", 19),
          m.set("file", 20),
          m.set("reference", 21),
          m.set("customcolor", 22),
          m.set("folder", 23),
          m.set("type-parameter", 24),
          m.set("typeParameter", 24),
          m.set("account", 25),
          m.set("issue", 26);
        function p(R, y) {
          let E = m.get(R);
          return typeof E > "u" && !y && (E = 9), E;
        }
        a.fromString = p;
      })(d || (n.CompletionItemKinds = d = {}));
      var e;
      (function (a) {
        (a[(a.Automatic = 0)] = "Automatic"),
          (a[(a.Explicit = 1)] = "Explicit");
      })(e || (n.InlineCompletionTriggerKind = e = {}));
      class f {
        constructor(l, L, m, p) {
          (this.range = l),
            (this.text = L),
            (this.completionKind = m),
            (this.isSnippetText = p);
        }
        equals(l) {
          return (
            i.Range.lift(this.range).equalsRange(l.range) &&
            this.text === l.text &&
            this.completionKind === l.completionKind &&
            this.isSnippetText === l.isSnippetText
          );
        }
      }
      n.SelectedSuggestionInfo = f;
      var c;
      (function (a) {
        (a[(a.Invoke = 1)] = "Invoke"),
          (a[(a.TriggerCharacter = 2)] = "TriggerCharacter"),
          (a[(a.ContentChange = 3)] = "ContentChange");
      })(c || (n.SignatureHelpTriggerKind = c = {}));
      var g;
      (function (a) {
        (a[(a.Text = 0)] = "Text"),
          (a[(a.Read = 1)] = "Read"),
          (a[(a.Write = 2)] = "Write");
      })(g || (n.DocumentHighlightKind = g = {}));
      function b(a) {
        return (
          a &&
          D.URI.isUri(a.uri) &&
          i.Range.isIRange(a.range) &&
          (i.Range.isIRange(a.originSelectionRange) ||
            i.Range.isIRange(a.targetSelectionRange))
        );
      }
      (n.isLocationLink = b),
        (n.symbolKindNames = {
          [17]: (0, h.localize)(0, null),
          [16]: (0, h.localize)(1, null),
          [4]: (0, h.localize)(2, null),
          [13]: (0, h.localize)(3, null),
          [8]: (0, h.localize)(4, null),
          [9]: (0, h.localize)(5, null),
          [21]: (0, h.localize)(6, null),
          [23]: (0, h.localize)(7, null),
          [7]: (0, h.localize)(8, null),
          [0]: (0, h.localize)(9, null),
          [11]: (0, h.localize)(10, null),
          [10]: (0, h.localize)(11, null),
          [19]: (0, h.localize)(12, null),
          [5]: (0, h.localize)(13, null),
          [1]: (0, h.localize)(14, null),
          [2]: (0, h.localize)(15, null),
          [20]: (0, h.localize)(16, null),
          [15]: (0, h.localize)(17, null),
          [18]: (0, h.localize)(18, null),
          [24]: (0, h.localize)(19, null),
          [3]: (0, h.localize)(20, null),
          [6]: (0, h.localize)(21, null),
          [14]: (0, h.localize)(22, null),
          [22]: (0, h.localize)(23, null),
          [25]: (0, h.localize)(24, null),
          [12]: (0, h.localize)(25, null),
        });
      function _(a, l) {
        return (0, h.localize)(26, null, a, n.symbolKindNames[l]);
      }
      n.getAriaLabelForSymbol = _;
      var N;
      (function (a) {
        const l = new Map();
        l.set(0, M.Codicon.symbolFile),
          l.set(1, M.Codicon.symbolModule),
          l.set(2, M.Codicon.symbolNamespace),
          l.set(3, M.Codicon.symbolPackage),
          l.set(4, M.Codicon.symbolClass),
          l.set(5, M.Codicon.symbolMethod),
          l.set(6, M.Codicon.symbolProperty),
          l.set(7, M.Codicon.symbolField),
          l.set(8, M.Codicon.symbolConstructor),
          l.set(9, M.Codicon.symbolEnum),
          l.set(10, M.Codicon.symbolInterface),
          l.set(11, M.Codicon.symbolFunction),
          l.set(12, M.Codicon.symbolVariable),
          l.set(13, M.Codicon.symbolConstant),
          l.set(14, M.Codicon.symbolString),
          l.set(15, M.Codicon.symbolNumber),
          l.set(16, M.Codicon.symbolBoolean),
          l.set(17, M.Codicon.symbolArray),
          l.set(18, M.Codicon.symbolObject),
          l.set(19, M.Codicon.symbolKey),
          l.set(20, M.Codicon.symbolNull),
          l.set(21, M.Codicon.symbolEnumMember),
          l.set(22, M.Codicon.symbolStruct),
          l.set(23, M.Codicon.symbolEvent),
          l.set(24, M.Codicon.symbolOperator),
          l.set(25, M.Codicon.symbolTypeParameter);
        function L(m) {
          let p = l.get(m);
          return (
            p ||
              (console.info("No codicon found for SymbolKind " + m),
              (p = M.Codicon.symbolProperty)),
            p
          );
        }
        a.toIcon = L;
      })(N || (n.SymbolKinds = N = {}));
      class C {}
      n.TextEdit = C;
      class A {
        static fromValue(l) {
          switch (l) {
            case "comment":
              return A.Comment;
            case "imports":
              return A.Imports;
            case "region":
              return A.Region;
          }
          return new A(l);
        }
        constructor(l) {
          this.value = l;
        }
      }
      (n.FoldingRangeKind = A),
        (A.Comment = new A("comment")),
        (A.Imports = new A("imports")),
        (A.Region = new A("region"));
      var S;
      (function (a) {
        function l(L) {
          return !L || typeof L != "object"
            ? !1
            : typeof L.id == "string" && typeof L.title == "string";
        }
        a.is = l;
      })(S || (n.Command = S = {}));
      var v;
      (function (a) {
        (a[(a.Type = 1)] = "Type"), (a[(a.Parameter = 2)] = "Parameter");
      })(v || (n.InlayHintKind = v = {}));
      class r {
        constructor(l) {
          (this.createSupport = l), (this._tokenizationSupport = null);
        }
        dispose() {
          this._tokenizationSupport &&
            this._tokenizationSupport.then((l) => {
              l && l.dispose();
            });
        }
        get tokenizationSupport() {
          return (
            this._tokenizationSupport ||
              (this._tokenizationSupport = this.createSupport()),
            this._tokenizationSupport
          );
        }
      }
      (n.LazyTokenizationSupport = r),
        (n.TokenizationRegistry = new u.TokenizationRegistry());
    }),
    X(
      J[60],
      Z([0, 1, 32, 7, 30, 14, 3, 2, 35, 59, 52]),
      function (O, n, M, D, i, u, h, w, o, s, d) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createMonacoBaseAPI = n.KeyMod = void 0);
        class e {
          static chord(g, b) {
            return (0, i.KeyChord)(g, b);
          }
        }
        (n.KeyMod = e),
          (e.CtrlCmd = 2048),
          (e.Shift = 1024),
          (e.Alt = 512),
          (e.WinCtrl = 256);
        function f() {
          return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: M.CancellationTokenSource,
            Emitter: D.Emitter,
            KeyCode: d.KeyCode,
            KeyMod: e,
            Position: h.Position,
            Range: w.Range,
            Selection: o.Selection,
            SelectionDirection: d.SelectionDirection,
            MarkerSeverity: d.MarkerSeverity,
            MarkerTag: d.MarkerTag,
            Uri: u.URI,
            Token: s.Token,
          };
        }
        n.createMonacoBaseAPI = f;
      },
    ),
    X(
      J[62],
      Z([0, 1, 20, 14, 3, 2, 49, 24, 45, 46, 60, 19, 51, 43, 11, 44]),
      function (O, n, M, D, i, u, h, w, o, s, d, e, f, c, g, b) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.create = n.EditorSimpleWorker = void 0);
        class _ extends h.MirrorTextModel {
          get uri() {
            return this._uri;
          }
          get eol() {
            return this._eol;
          }
          getValue() {
            return this.getText();
          }
          findMatches(S) {
            const v = [];
            for (let r = 0; r < this._lines.length; r++) {
              const a = this._lines[r],
                l = this.offsetAt(new i.Position(r + 1, 1)),
                L = a.matchAll(S);
              for (const m of L)
                (m.index || m.index === 0) && (m.index = m.index + l),
                  v.push(m);
            }
            return v;
          }
          getLinesContent() {
            return this._lines.slice(0);
          }
          getLineCount() {
            return this._lines.length;
          }
          getLineContent(S) {
            return this._lines[S - 1];
          }
          getWordAtPosition(S, v) {
            const r = (0, w.getWordAtText)(
              S.column,
              (0, w.ensureValidWordDefinition)(v),
              this._lines[S.lineNumber - 1],
              0,
            );
            return r
              ? new u.Range(
                  S.lineNumber,
                  r.startColumn,
                  S.lineNumber,
                  r.endColumn,
                )
              : null;
          }
          words(S) {
            const v = this._lines,
              r = this._wordenize.bind(this);
            let a = 0,
              l = "",
              L = 0,
              m = [];
            return {
              *[Symbol.iterator]() {
                for (;;)
                  if (L < m.length) {
                    const p = l.substring(m[L].start, m[L].end);
                    (L += 1), yield p;
                  } else if (a < v.length)
                    (l = v[a]), (m = r(l, S)), (L = 0), (a += 1);
                  else break;
              },
            };
          }
          getLineWords(S, v) {
            const r = this._lines[S - 1],
              a = this._wordenize(r, v),
              l = [];
            for (const L of a)
              l.push({
                word: r.substring(L.start, L.end),
                startColumn: L.start + 1,
                endColumn: L.end + 1,
              });
            return l;
          }
          _wordenize(S, v) {
            const r = [];
            let a;
            for (v.lastIndex = 0; (a = v.exec(S)) && a[0].length !== 0; )
              r.push({ start: a.index, end: a.index + a[0].length });
            return r;
          }
          getValueInRange(S) {
            if (
              ((S = this._validateRange(S)),
              S.startLineNumber === S.endLineNumber)
            )
              return this._lines[S.startLineNumber - 1].substring(
                S.startColumn - 1,
                S.endColumn - 1,
              );
            const v = this._eol,
              r = S.startLineNumber - 1,
              a = S.endLineNumber - 1,
              l = [];
            l.push(this._lines[r].substring(S.startColumn - 1));
            for (let L = r + 1; L < a; L++) l.push(this._lines[L]);
            return (
              l.push(this._lines[a].substring(0, S.endColumn - 1)), l.join(v)
            );
          }
          offsetAt(S) {
            return (
              (S = this._validatePosition(S)),
              this._ensureLineStarts(),
              this._lineStarts.getPrefixSum(S.lineNumber - 2) + (S.column - 1)
            );
          }
          positionAt(S) {
            (S = Math.floor(S)), (S = Math.max(0, S)), this._ensureLineStarts();
            const v = this._lineStarts.getIndexOf(S),
              r = this._lines[v.index].length;
            return {
              lineNumber: 1 + v.index,
              column: 1 + Math.min(v.remainder, r),
            };
          }
          _validateRange(S) {
            const v = this._validatePosition({
                lineNumber: S.startLineNumber,
                column: S.startColumn,
              }),
              r = this._validatePosition({
                lineNumber: S.endLineNumber,
                column: S.endColumn,
              });
            return v.lineNumber !== S.startLineNumber ||
              v.column !== S.startColumn ||
              r.lineNumber !== S.endLineNumber ||
              r.column !== S.endColumn
              ? {
                  startLineNumber: v.lineNumber,
                  startColumn: v.column,
                  endLineNumber: r.lineNumber,
                  endColumn: r.column,
                }
              : S;
          }
          _validatePosition(S) {
            if (!i.Position.isIPosition(S)) throw new Error("bad position");
            let { lineNumber: v, column: r } = S,
              a = !1;
            if (v < 1) (v = 1), (r = 1), (a = !0);
            else if (v > this._lines.length)
              (v = this._lines.length),
                (r = this._lines[v - 1].length + 1),
                (a = !0);
            else {
              const l = this._lines[v - 1].length + 1;
              r < 1 ? ((r = 1), (a = !0)) : r > l && ((r = l), (a = !0));
            }
            return a ? { lineNumber: v, column: r } : S;
          }
        }
        class N {
          constructor(S, v) {
            (this._host = S),
              (this._models = Object.create(null)),
              (this._foreignModuleFactory = v),
              (this._foreignModule = null);
          }
          dispose() {
            this._models = Object.create(null);
          }
          _getModel(S) {
            return this._models[S];
          }
          _getModels() {
            const S = [];
            return (
              Object.keys(this._models).forEach((v) => S.push(this._models[v])),
              S
            );
          }
          acceptNewModel(S) {
            this._models[S.url] = new _(
              D.URI.parse(S.url),
              S.lines,
              S.EOL,
              S.versionId,
            );
          }
          acceptModelChanged(S, v) {
            if (!this._models[S]) return;
            this._models[S].onEvents(v);
          }
          acceptRemovedModel(S) {
            this._models[S] && delete this._models[S];
          }
          computeUnicodeHighlights(S, v, r) {
            return ge(this, void 0, void 0, function* () {
              const a = this._getModel(S);
              return a
                ? f.UnicodeTextModelHighlighter.computeUnicodeHighlights(
                    a,
                    v,
                    r,
                  )
                : {
                    ranges: [],
                    hasMore: !1,
                    ambiguousCharacterCount: 0,
                    invisibleCharacterCount: 0,
                    nonBasicAsciiCharacterCount: 0,
                  };
            });
          }
          computeDiff(S, v, r, a) {
            return ge(this, void 0, void 0, function* () {
              const l = this._getModel(S),
                L = this._getModel(v);
              return !l || !L ? null : N.computeDiff(l, L, r, a);
            });
          }
          static computeDiff(S, v, r, a) {
            const l =
                a === "advanced"
                  ? c.linesDiffComputers.getAdvanced()
                  : c.linesDiffComputers.getLegacy(),
              L = S.getLinesContent(),
              m = v.getLinesContent(),
              p = l.computeDiff(L, m, r),
              R = p.changes.length > 0 ? !1 : this._modelsAreIdentical(S, v);
            function y(E) {
              return E.map((P) => {
                var T;
                return [
                  P.originalRange.startLineNumber,
                  P.originalRange.endLineNumberExclusive,
                  P.modifiedRange.startLineNumber,
                  P.modifiedRange.endLineNumberExclusive,
                  (T = P.innerChanges) === null || T === void 0
                    ? void 0
                    : T.map((F) => [
                        F.originalRange.startLineNumber,
                        F.originalRange.startColumn,
                        F.originalRange.endLineNumber,
                        F.originalRange.endColumn,
                        F.modifiedRange.startLineNumber,
                        F.modifiedRange.startColumn,
                        F.modifiedRange.endLineNumber,
                        F.modifiedRange.endColumn,
                      ]),
                ];
              });
            }
            return {
              identical: R,
              quitEarly: p.hitTimeout,
              changes: y(p.changes),
              moves: p.moves.map((E) => [
                E.lineRangeMapping.original.startLineNumber,
                E.lineRangeMapping.original.endLineNumberExclusive,
                E.lineRangeMapping.modified.startLineNumber,
                E.lineRangeMapping.modified.endLineNumberExclusive,
                y(E.changes),
              ]),
            };
          }
          static _modelsAreIdentical(S, v) {
            const r = S.getLineCount(),
              a = v.getLineCount();
            if (r !== a) return !1;
            for (let l = 1; l <= r; l++) {
              const L = S.getLineContent(l),
                m = v.getLineContent(l);
              if (L !== m) return !1;
            }
            return !0;
          }
          computeMoreMinimalEdits(S, v, r) {
            return ge(this, void 0, void 0, function* () {
              const a = this._getModel(S);
              if (!a) return v;
              const l = [];
              let L;
              v = v.slice(0).sort((m, p) => {
                if (m.range && p.range)
                  return u.Range.compareRangesUsingStarts(m.range, p.range);
                const R = m.range ? 0 : 1,
                  y = p.range ? 0 : 1;
                return R - y;
              });
              for (let { range: m, text: p, eol: R } of v) {
                if ((typeof R == "number" && (L = R), u.Range.isEmpty(m) && !p))
                  continue;
                const y = a.getValueInRange(m);
                if (((p = p.replace(/\r\n|\n|\r/g, a.eol)), y === p)) continue;
                if (Math.max(p.length, y.length) > N._diffLimit) {
                  l.push({ range: m, text: p });
                  continue;
                }
                const E = (0, M.stringDiff)(y, p, r),
                  P = a.offsetAt(u.Range.lift(m).getStartPosition());
                for (const T of E) {
                  const F = a.positionAt(P + T.originalStart),
                    U = a.positionAt(P + T.originalStart + T.originalLength),
                    W = {
                      text: p.substr(T.modifiedStart, T.modifiedLength),
                      range: {
                        startLineNumber: F.lineNumber,
                        startColumn: F.column,
                        endLineNumber: U.lineNumber,
                        endColumn: U.column,
                      },
                    };
                  a.getValueInRange(W.range) !== W.text && l.push(W);
                }
              }
              return (
                typeof L == "number" &&
                  l.push({
                    eol: L,
                    text: "",
                    range: {
                      startLineNumber: 0,
                      startColumn: 0,
                      endLineNumber: 0,
                      endColumn: 0,
                    },
                  }),
                l
              );
            });
          }
          computeLinks(S) {
            return ge(this, void 0, void 0, function* () {
              const v = this._getModel(S);
              return v ? (0, o.computeLinks)(v) : null;
            });
          }
          computeDefaultDocumentColors(S) {
            return ge(this, void 0, void 0, function* () {
              const v = this._getModel(S);
              return v ? (0, b.computeDefaultDocumentColors)(v) : null;
            });
          }
          textualSuggest(S, v, r, a) {
            return ge(this, void 0, void 0, function* () {
              const l = new e.StopWatch(),
                L = new RegExp(r, a),
                m = new Set();
              e: for (const p of S) {
                const R = this._getModel(p);
                if (R) {
                  for (const y of R.words(L))
                    if (
                      !(y === v || !isNaN(Number(y))) &&
                      (m.add(y), m.size > N._suggestionsLimit)
                    )
                      break e;
                }
              }
              return { words: Array.from(m), duration: l.elapsed() };
            });
          }
          computeWordRanges(S, v, r, a) {
            return ge(this, void 0, void 0, function* () {
              const l = this._getModel(S);
              if (!l) return Object.create(null);
              const L = new RegExp(r, a),
                m = Object.create(null);
              for (let p = v.startLineNumber; p < v.endLineNumber; p++) {
                const R = l.getLineWords(p, L);
                for (const y of R) {
                  if (!isNaN(Number(y.word))) continue;
                  let E = m[y.word];
                  E || ((E = []), (m[y.word] = E)),
                    E.push({
                      startLineNumber: p,
                      startColumn: y.startColumn,
                      endLineNumber: p,
                      endColumn: y.endColumn,
                    });
                }
              }
              return m;
            });
          }
          navigateValueSet(S, v, r, a, l) {
            return ge(this, void 0, void 0, function* () {
              const L = this._getModel(S);
              if (!L) return null;
              const m = new RegExp(a, l);
              v.startColumn === v.endColumn &&
                (v = {
                  startLineNumber: v.startLineNumber,
                  startColumn: v.startColumn,
                  endLineNumber: v.endLineNumber,
                  endColumn: v.endColumn + 1,
                });
              const p = L.getValueInRange(v),
                R = L.getWordAtPosition(
                  { lineNumber: v.startLineNumber, column: v.startColumn },
                  m,
                );
              if (!R) return null;
              const y = L.getValueInRange(R);
              return s.BasicInplaceReplace.INSTANCE.navigateValueSet(
                v,
                p,
                R,
                y,
                r,
              );
            });
          }
          loadForeignModule(S, v, r) {
            const a = (m, p) => this._host.fhr(m, p),
              L = {
                host: (0, g.createProxyObject)(r, a),
                getMirrorModels: () => this._getModels(),
              };
            return this._foreignModuleFactory
              ? ((this._foreignModule = this._foreignModuleFactory(L, v)),
                Promise.resolve((0, g.getAllMethodNames)(this._foreignModule)))
              : new Promise((m, p) => {
                  O(
                    [S],
                    (R) => {
                      (this._foreignModule = R.create(L, v)),
                        m((0, g.getAllMethodNames)(this._foreignModule));
                    },
                    p,
                  );
                });
          }
          fmr(S, v) {
            if (
              !this._foreignModule ||
              typeof this._foreignModule[S] != "function"
            )
              return Promise.reject(
                new Error("Missing requestHandler or method: " + S),
              );
            try {
              return Promise.resolve(
                this._foreignModule[S].apply(this._foreignModule, v),
              );
            } catch (r) {
              return Promise.reject(r);
            }
          }
        }
        (n.EditorSimpleWorker = N),
          (N._diffLimit = 1e5),
          (N._suggestionsLimit = 1e4);
        function C(A) {
          return new N(A, null);
        }
        (n.create = C),
          typeof importScripts == "function" &&
            (globalThis.monaco = (0, d.createMonacoBaseAPI)());
      },
    );
}).call(this);

//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
