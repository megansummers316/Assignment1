import mongoose, {Schema} from "mongoose";

interface IAssessment {
    category: string; //painting/statues/pottery/crafts
    title: string; 
    date: Date; //date created
    artist: string;
}

const assessmentSchema = new Schema({
    category: {
        type: String,
        trim: true,
        required: true,
        enum: ['Painting', 'Statue', 'Pottery', 'Craft']
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    artist: {
        type: String,
        trim: true,
        required: true
    }
});

const Assess = mongoose.model<IAssessment>('Assess', assessmentSchema);
export default Assess;