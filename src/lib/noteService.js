import PouchDB from 'pouchdb';

const db = new PouchDB('noted')
export default {
    addNote : async (note) => {
        const newPost = await db.put(note);
        return {...note, ...newPost};
    },    

    updateNote : async (note) => {
        const newPost = await db.put({...note, _rev:note.rev});
        return {...note, ...newPost};
    },

    allNotes : async () => {
        const allPosts = await db.allDocs({include_docs:true});

        return allPosts.rows.map(note => ({...note.doc, rev:note.doc._rev}));
    }

}
