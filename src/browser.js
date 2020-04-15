const win = (typeof window !== `undefined` && window) || {};
const RegExp = win.RegExp;
const navigator = win.navigator || {userAgent: "node"};

export {
	RegExp,
	navigator,
};
