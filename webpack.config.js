module.exports = {
    target: "node",
    mode: "development",
    entry: slsw.lib.entries,
    externals: [nodeExternals({
    modulesDir: path.join(__dirname, "…/…/node_modules"),
    })]
    };