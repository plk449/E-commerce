import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
            // unique: true,
            // lowercase: true,
            // trim: true,
            // minlength: 3
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            // trim: true,
            // match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            // Email validation (regex)
        },
      
        password: {
            type: String,
            required: [true, 'Password is required'],
            // minlength: 6
        },
        cartData: {
            type: Object,
            default:{}
      },
        // phoneNumber: {
        //     type: String,
        //     required: true,
        //     unique: true,
            // validate: {
            //     validator: function (v) {
            //         // Regular expression for common phone number formats
            //         return /\+?[0-9]{10,15}/.test(v);
            //     },
            //     message: (props) => `${props.value} is not a valid phone number!`,
            // },
        // },
        // BookReadhHistory: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Book"
        //     }
        // ],
    },{minimize:false},
    {
        timestamps: true
    }
);

export default mongoose.model('User', userSchema);