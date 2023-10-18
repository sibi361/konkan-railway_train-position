const env = {
    DEBUG: true,
    UPSTREAM_REFRESH_INTERVAL: 300,
    UPSTREAM_URL: "https://konkanrailway.com/VisualTrain/",
    REPO_URL: "https://github.com/sibi361/konkan-railway_live-train-position",
    API_VERSION: 3,
    PLAYWRIGHT_OPTS: {
        headless: true,
        args: [
            "--disable-extensions",
            "--disable-background-networking",
            "--disable-default-apps",
            "--disable-gpu",
            "--disable-sync",
            "--disable-translate",
            "--no-first-run",
            "--incognito",
            "--safebrowsing-disable-auto-update",
        ],
    },
    PLAYWRIGHT_DEVICE: "Desktop Firefox",
    SERVER_ERROR_MESSAGE: "Server overloaded. Please wait.",
};

export default env;

export const handleDBError = (response, errorMsg) => {
    response.status(500);
    console.log(`# DB Error: ${errorMsg}`);
    if (env.DEBUG) return response.send({ error: errorMsg, success: false });
    else return response.send({ success: false });
};
