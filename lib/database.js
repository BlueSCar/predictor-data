module.exports = (promise, pgp) => {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const port = process.env.DB_PORT;
    const name = process.env.DB_NAME;
    const host = process.env.DB_HOST;

    const connectionString = `postgres://${user}:${password}@${host}:${port}/${name}`;
    const dbCreator = pgp({
        promiseLib: promise
    });

    return dbCreator(connectionString);
};
