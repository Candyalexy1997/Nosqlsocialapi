const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReactionSchema = new Schema(
    {
        reactionid: {
            type: Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId()

        },

        reactionbody: {
            type: String,
            required: true,
            max: 280,
        },


        username: {
            type: String,
            required: true,
        },

        createdate: {
            type: Date,
            default: new Date(),
            get: function (v) {
                return v.toLocalString()
            }
        }
    },



)


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },

        createdAt: {
            type: Date,
            default: new Date(),
            get: function (v) {
                return v.toLocalString()
            }

        },

        username: {
            type: String,
            required: true,
        },

        reactions: [ReactionSchema]


    },



)

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', ThoughtSchema)

module.exports = Thought;