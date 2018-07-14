module.exports = (msg, title) => {
    if (!title) title = "Log";
    console.log(`[${title}] ${msg}`);
};