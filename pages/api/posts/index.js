import { posts } from "../../../posts";

export default function handler(req, res, next) {
  res.status(200).json(posts);
}
