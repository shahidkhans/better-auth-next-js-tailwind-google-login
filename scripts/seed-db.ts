import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const db = new Database('./sqlite.db');

try {
  // Read the SQL file
  const sqlContent = fs.readFileSync(
    path.join(__dirname, '../better-auth_migrations/2025-02-19T15-46-59.307Z.sql'),
    'utf-8'
  );

  // Split the content into individual statements
  const statements = sqlContent
    .split(';')
    .filter(statement => statement.trim());

  // Execute each statement
  statements.forEach(statement => {
    if (statement.trim()) {
      db.exec(statement);
    }
  });

  console.log('✅ Database tables created successfully');
} catch (error) {
  console.error('❌ Error seeding database:', error);
} finally {
  db.close();
}