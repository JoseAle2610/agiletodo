import {connect, connection} from 'mongoose'

const conn = {
  isConected: false
}

export async function dbConect () {
  if (conn.isConected) return

  const db = await connect(process.env.MONGODB_URL)
  conn.isConected = db.connections[0].readyState
  console.log(db.connection.db.databaseName)
}

connection.on('connected', () => {
  console.log('Mongodb is connected')
})

connection.on('error', (e) => {
  console.log('Error', e)
  conn.isConected = false
})
