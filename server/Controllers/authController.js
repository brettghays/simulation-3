/* create table users (
    user_id SERIAL PRIMARY KEY ,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    gender VARCHAR(40),
    hair_color VARCHAR(40),
    eye_color VARCHAR(40),
    hobby VARCHAR(40),
    birthday_day INTEGER,
    birthday_month VARCHAR(40),
    birthday_year INTEGER
); 
create table helo_user (
    helo_id Serial primary key,
    firstName varchar(40),
    lastName varchar(40)
);
*/

module.exports = {
    read: (req,res) => {
        console.log('this is req.user', req.user)
        console.log('this is req.session.passport.user', req.session.passport.user);
        res.status(200).send( JSON.stringify( req.user, null, 10 ) );
    }
}