const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data/data.db');

class Artwork {
  constructor(id, name, format, artist, year, width, length) {
    this.id = id;
    this.name = name;
    this.format = format;
    this.artist = artist;
    this.year = year;
    this.width = width;
    this.length = length;
  }

  // Completed
  static one(id, callback) {
    const sql = 'SELECT *  FROM artworks WHERE id = ?';
    db.get(sql, id, callback);
  }

  // Completed
  static all(callback) {
    db.all('SELECT * FROM artworks', callback);
  }

  // TODO: Change fields 
  static add(artwork) {
    const sql = 'INSERT INTO artworks(title, status) VALUES(?, ?)';
    db.run(sql, [todo.title, todo.status]);
  }

  // TODO: Change fields 
  static update(artwork, callback) {
    const sql = 'UPDATE artworks SET title = ?, status = ? WHERE id = ?';
    db.run(sql, [artwork.title, artwork.status, artwork.id], callback);
  }

  // Complete
  static delete(id, callback) {
    const sql = 'DELETE FROM artworks where id = ?';
    db.run(sql, id, callback);
  }
}

module.exports = Artwork;