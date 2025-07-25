import { generateUniqueIdentifier } from '../utils/utils.js'
import { Schema, model } from 'mongoose'

const taskSchema = Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    isArchived: { type: Boolean, required: false, default: false },
    uid: { type: String },
    completedTask: { type: String },
    completedTaskDate: { type: String },
    completedTaskStatus: { type: String },
    completedTaskComment: { type: String },
    newTask: { type: String },
    newTaskDeadline: { type: String },
    newTaskComment: { type: String },
}, { timestamps: true })

// Before saving a new document, generate a unique readable identifier
taskSchema.pre('save', async function (next) {
    if (!this.uid) {
        let isUnique = false;
        let generatedIdentifier;

        while (!isUnique) {
            // Generate a unique identifier (you can use a library for this)
            generatedIdentifier = generateUniqueIdentifier();

            // Check if it's unique in the collection
            const existingDocument = await this.constructor.findOne({ uid: generatedIdentifier });

            if (!existingDocument) {
                isUnique = true; // Identifier is unique, exit the loop
            }
        }

        // Assign the generated identifier to the document
        this.uid = generatedIdentifier;
    }
    next();
});

const taskModel = model('Task', taskSchema)
export default taskModel