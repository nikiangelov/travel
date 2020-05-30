import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
  },
});
const TravellogSchema = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: AuthorSchema,
    },
    short_description: {
      type: String,
    },
    html_content: {
      type: String,
    },
    plain_text_content: {
      type: String,
    },
    where: {
      type: String,
    },
    duration: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: String,
    },
    season: {
      type: String,
    },
    is_draft: {
      type: Boolean,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

const Travellog =
  mongoose.models.Travellog || mongoose.model('Travellog', TravellogSchema);
export default Travellog;
