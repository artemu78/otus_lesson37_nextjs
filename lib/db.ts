import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'users_db.txt');

export interface User {
  email: string;
}

export async function getUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    const lines = data.split('\n');
    const users: User[] = [];

    for (const line of lines) {
      if (line.trim()) {
        const [email] = line.split(':');
        if (email) {
          users.push({ email });
        }
      }
    }
    return users;
  } catch (error) {
    console.error('Error reading users DB:', error);
    return [];
  }
}

export async function verifyUser(email: string, password: string): Promise<boolean> {
   try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    const lines = data.split('\n');

    for (const line of lines) {
      const [dbEmail, dbPassword] = line.split(':');
      if (dbEmail === email && dbPassword === password) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Error verifying user:', error);
    return false;
  }
}
