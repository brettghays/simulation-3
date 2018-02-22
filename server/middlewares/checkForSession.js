let id = 0;

module.exports = function(req,res,next) {
    const {session, sessionID} = req;
    let id = sessionID;
    console.log(session);
    console.log(id);
    console.log(session.user);
    if (!session.user){
        session.user = {
            username: 'Brett',
            id: id
        };
    } else {
        console.log('session.user exists')
    }
    console.log(session)
    next();
}