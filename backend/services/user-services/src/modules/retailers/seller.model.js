import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
{
    fullName: {
        type: String,
        required: true,
        trim: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    storeName: {
        type: String,
        required: true
    },

    storeAddress: {
        type: String,
        required: true
    },

    storeDescription: {
        type: String
    },

    // identity documents
    documents: {
        citizenshipFront: {
            type: String   
        },
        citizenshipBack: {
            type: String
        },
        panNumber: {
            type: String
        },
        vatNumber: {
            type: String
        }
    },

    // bank details
    bankDetails: {
        bankName: {
            type: String,
            required: true
        },
        accountHolderName: {
            type: String,
            required: true
        },
        accountNumber: {
            type: String,
            required: true
        },
        branch: {
            type: String
        }
    },

    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },

    isVerified: {
        type: Boolean,
        default: false
    }

},
{ timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;