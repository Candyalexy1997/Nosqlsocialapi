const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
                },
                message: props => `${props.value} is not a valid email!`
            }
        },

        thoughts: [
            {
                ref: 'Thought',
                type: Schema.Types.ObjectId,
            }
        ],
        friends: [
            {
                ref: 'User',
                type: Schema.Types.ObjectId,
            }
        ]

    }
)

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = mongoose.model('User', UserSchema)

module.exports= User;