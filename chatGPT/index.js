import OpenAI from "openai";
import { OPEN_AI_KEY } from "../config.js";

export default new OpenAI({
    apiKey: OPEN_AI_KEY
 });