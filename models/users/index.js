const pool = require('../../db');

const nanoid = require('nanoid');
const getAll = async () => {
  const [users] = await pool.execute('SELECT * FROM users');
  return users;
}

const getUserById = async (id) => {
  const [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
return user || null 
}

const removeUser = async (id) => {
  const [result] = await pool.execute('DELETE FROM users WHERE id = ?', [id]);
  return result
}

const addUser = async (data) => {
  const {name, email, age } = data;
  const id = nanoid.nanoid();
  
  const [result] = await pool.execute('INSERT INTO users (id, name, email, age) VALUES (?,?, ?, ?)', [
    id,
    name,
    email,
    age,
  ]);
  const user = await getUserById(id);

  return user
}

const updateUser = async (id, body) => {
  const {name ,
    email,
    age,
    } = body;
    const userToUpdate =  await getUserById(id);
    if(!userToUpdate){ return null} 
    const [result] = await pool.execute('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [
      name,
      email,
      age,
    id
    ]);
    const user = await getUserById(id) 
    return user
}

module.exports = {
  getAll,
  getUserById,
  removeUser,
  addUser,
  updateUser,
}
