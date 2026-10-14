import mongoose, {Schema} from "mongoose";

interface IArtPieces {
    category: string; //painting/sculptures/pottery/crafts
    title: string; 
    date: Date; 
    artist: string;
}

const artPiecesSchema = new Schema({
    category: {
        type: String,
        trim: true,
        required: true,
        enum: ['Painting', 'Sculpture', 'Pottery', 'Craft']
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
        trim: true
    }
});

const ArtPieces = mongoose.model<IArtPieces>('ArtPieces', artPiecesSchema);
export default ArtPieces;