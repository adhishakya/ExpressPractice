const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'admin') {
        req.user = { name: "admin", id: 1 };
        console.log("Authorize");
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
    next();
}

module.exports = authorize;